import { Box, Button, Flex, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from "react"
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react"
import Counter from "../Components/Counter"
import LetterPrinting from '../Components/TextPrintEffect'
import { FaMicrophone } from "react-icons/fa";
import Loader from '../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { generateInterviewScore } from '../Redux/interviewReducer/action';
import { Link, Link as LinkNav, NavLink, useNavigate } from 'react-router-dom';


export const InterviewPage = () => {
  const [answer, setAnswer] = useState(" ")
  const [current, SetCurrent] = useState("")
  const [next, SetNext] = useState(0)
  const [allanswer, setAllanswer] = useState([])
  const [question, setQuestion] = useState([]);
  const dispatch = useDispatch();

  //Voice to text code 
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const { isLoading, questionSet, filter } = useSelector(
    (store) => store.interviewReducer
  );

  const { isAuth, userDetails, isError } = useSelector((store) => store.authReducer);



  useEffect(() => {
    if (!isLoading && questionSet.length) {
      setQuestion(questionSet?.map(m => m.question));
    }
  }, [isLoading])

  const toggleListening = () => {
    if (!isListening) {
      startListening();
    } else {
      stopListening();
    }
  };

  const startListening = () => {
    setIsListening(true);

    const recognitionInstance = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognitionInstance.continuous = true;

    recognitionInstance.onresult = (event) => {
      const currentTranscript = event.results[event.results.length - 1][0].transcript;
      setAnswer((prevTranscript) => prevTranscript + ' ' + currentTranscript);
    };

    recognitionInstance.onend = () => {
      setIsListening(false);
    };

    recognitionInstance.start();
    setRecognition(recognitionInstance);
  };

  const stopListening = () => {
    setIsListening(false);
    if (recognition) {
      recognition.stop();
    }
    console.log(answer)
  };

  //Voice to text code

  const handleNext = () => {
    setAllanswer([...allanswer, answer])
    setAnswer(" ")
    stopListening()
    SetNext((pre) => pre + 1)
  }
  const handleSubmit = () => {
    setAllanswer([...allanswer, answer])
    console.log("Filter", filter);
    const answersList = JSON.parse(JSON.stringify(allanswer));
    answersList.push(answer);
    const payload = generateScoreRequest(answersList);
    dispatch(generateInterviewScore(payload));
  }


  const generateScoreRequest = (answersList) => {
    const data = [];
    const payload = {
      user: {
        level: filter.level,
        course: filter.course,
        uniqueUserId: userDetails.wholeUser.uniqueUserId,
      },
      data: data
    };

    for (let i = 0; i < question.length; i++) {
      data.push({
        question: question[i],
        answer: answersList[i]
      })
    }
    console.log(JSON.stringify(payload));
    return payload;
  }

  useEffect(() => {
    console.log(allanswer)
  }, [allanswer])

  return (
    <Box w={"80%"} alignItems={"center"}
      bgColor={"rgb(59, 58, 79)"}
      margin={"auto"}
      display={"flex"}
      gap={"5px"}
      flexDirection={"column"}
      padding={"25px"}
      mt={"10px"}
      boxShadow={
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
      }>
      <Flex flexDirection={"column"} w={"90%"} justifyContent={"space-between"} gap={"50px"}>
        <Loader isLoading={isLoading} />
        <Counter />
        <Text color={"white"} as={"b"}>Question {next + 1} : {question[next]}</Text>

        {/* Voice to text mic */}
        <div style={{ textAlign: "center", marginBottom: "-30px" }}>
          <button onClick={toggleListening}>{isListening ? <Button>Stop</Button> : <FaMicrophone size={"20px"} color='white' />}</button>
        </div>
        {/* Voice to text end */}
        <Textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          minHeight="300px"
          placeholder="Enter your answer......"
          size="lg"
          color={"white"}
          resize="vertical"
        />

        <Flex alignItems={"center"} justifyContent={"space-evenly"}>
          <Button disabled>Help?</Button>
          <Button display={`${next == question.length - 1 ? "none" : "flex"}`} onClick={handleNext}>next</Button>
          < LinkNav to="/getscore"> <Button display={`${next == question.length - 1 ? "flex" : "none"}`} onClick={handleSubmit} >

            Submit</Button></LinkNav>
        </Flex>
      </Flex>



    </Box >
  )
}

