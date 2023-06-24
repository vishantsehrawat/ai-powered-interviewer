import React, { useEffect, useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyscore } from '../Redux/interviewReducer/action'
import Loader from '../Components/Loader'
import "./score.css"


export const GetscorePage = () => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState("");
    const [animationClass, setAnimationClass] = useState("");
    const { isLoading, questionSet, filter, score } = useSelector(
        (store) => store.interviewReducer
    );

    useEffect(() => {
        if (score < 30) {
            setStatus('Fail');
            setAnimationClass('failAnimation'); // CSS class for fail animation
        } else if (score >= 30 && score < 60) {
            setStatus('Pass (Average)');
            setAnimationClass('averageAnimation'); // CSS class for average animation
        } else if (score >= 60 && score < 90) {
            setStatus('Good');
            setAnimationClass('goodAnimation'); // CSS class for good animation
        } else {
            setStatus('Excellent');
            setAnimationClass('excellentAnimation'); // CSS class for excellent animation
        }
    }, [score])


    return (
        <>
            <Loader isLoading={isLoading} />
            <Box margin="2% auto">
                {score ? <div style={{ margin: "auto" }} className={`interview-mark ${animationClass}`}>
                    <div className="score">{score}</div>
                    <div className="status">{status}</div>
                </div> :
                    "No Score Available"
                }

            </Box>
        </>
    )
}
