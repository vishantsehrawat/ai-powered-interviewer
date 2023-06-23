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


export const InterviewPage = () => {
    const [answer, setAnswer] = useState("")
    const [current, SetCurrent] = useState("")
    const [prev, SetPrev] = useState("")
    const [next, SetNext] = useState("")
    console.log(answer)
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

            <LetterPrinting />

            <Flex flexDirection={"column"} w={"90%"} justifyContent={"space-between"} gap={"50px"}>
                <Counter />


                <Text color={"white"}>Question:?</Text>



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

                <Textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter your answer......"
                    size="lg"
                    color={"white"}
                    resize="vertical"
                />

                <Flex alignItems={"center"} justifyContent={"space-evenly"}>

                    <Button disabled>{current} current</Button>
                    <Button>{next} next</Button>
                </Flex>
            </Flex>



        </Box >
    )
}
