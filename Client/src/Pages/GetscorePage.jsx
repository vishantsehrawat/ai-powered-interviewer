import React from 'react'
import { Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { getMyscore } from '../Redux/interviewReducer/action'


export const GetscorePage = () => {
    const dispatch = useDispatch()


    const handleClick = () => {
        dispatch(getMyscore())
    }

    return (
        <div>GetscorePage


            <Button onClick={handleClick}>Generate Score</Button>
        </div>
    )
}
