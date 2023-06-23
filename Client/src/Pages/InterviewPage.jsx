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


export const InterviewPage = () => {
    const [answer, setAnswer] = useState("")
    const [current, SetCurrent] = useState("")
    const [next, SetNext] = useState(0)
    const [allanswer,setAllanswer]=useState([])
    
  //Voice to text code 
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  
  //hardcoded questions
  const question=[
    "what is html?",
    "what is css?",
    "what is js?",
    "what is nodejs?",
    "what is express?",
    "what is mongodb?"
]
//


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

  const handleNext=()=>{
    setAllanswer([...allanswer,answer])
    setAnswer("")
    stopListening()
    SetNext((pre)=>pre+1)
  }
  const handleSubmit=()=>{
    setAllanswer([...allanswer,answer])
    console.log("all questions:",question)
    console.log("all answers:",allanswer)
  }
  useEffect(()=>{
    console.log(allanswer)
  },[allanswer])

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

            {/* <LetterPrinting /> */}

            <Flex flexDirection={"column"} w={"90%"} justifyContent={"space-between"} gap={"50px"}>
                <Counter />


                <Text color={"white"} as={"b"}>Question {next+1} : {question[next]}</Text>



                {/* <Editable
    // placeholder="New Blog Title Here..."
    placeholder="add your answer....."
    fontSize="4xl"
    textAlign={"left"}
>
    <EditablePreview />
    <EditableInput
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
    />
</Editable> */}
             {/* Voice to text mic */}
               <div style={{textAlign:"center",marginBottom:"-30px"}}>
               <button onClick={toggleListening}>{isListening ? <Button>Stop</Button> : <FaMicrophone size={"20px"} color='white'/>}</button>
               </div>
             {/* Voice to text end */}
                <Textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter your answer......"
                    size="lg"
                    color={"white"}
                    resize="vertical"
                />

                <Flex alignItems={"center"} justifyContent={"space-evenly"}>

                    <Button disabled>Help?</Button>
                    <Button display={`${next==question.length-1?"none":"flex"}`} onClick={handleNext}>next</Button>
                    <Button display={`${next==question.length-1?"flex":"none"}`} onClick={handleSubmit} >Submit</Button>
                </Flex>
            </Flex>



        </Box >
    )
}