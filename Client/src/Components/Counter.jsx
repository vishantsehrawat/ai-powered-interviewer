// import React, { useState, useEffect } from 'react';

// const Counter = () => {
//     const [minutes, setMinutes] = useState(0);
//     const [seconds, setSeconds] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             if (seconds === 59) {
//                 setMinutes(prevMinutes => prevMinutes + 1);
//                 setSeconds(0);
//             } else {
//                 setSeconds(prevSeconds => prevSeconds + 1);
//             }
//         }, 1000);

//         return () => clearInterval(timer);
//     }, [minutes, seconds]);

//     return (
//         <div>
//             <h1>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h1>
//         </div>
//     );
// };

// export default Counter;
import React, { useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Counter = ({handleSubmit}) => {
    const {questionSet}=useSelector((store)=>{
        return {
            questionSet:store.interviewReducer.questionSet
        }
    })
    const [minutes, setMinutes] = useState(20);
    const [seconds, setSeconds] = useState(0);
    const navigate=useNavigate()

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds === 0 && minutes != 0) {
                setMinutes(prevMinutes => prevMinutes - 1);
                setSeconds(59);
            }
            else if (minutes == 0 && seconds == 0) {
                clearInterval(timer);
                // alert("Time Out")
                handleSubmit()
                navigate("/getscore")
            }
            else {
                setSeconds(prevSeconds => prevSeconds - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [minutes, seconds]);

    return (
        <Flex>
            <Text fontSize="20px" fontWeight="bold" color={"white"} >
                Timer:    {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </Text>
        </Flex>
    );
};

export default Counter;