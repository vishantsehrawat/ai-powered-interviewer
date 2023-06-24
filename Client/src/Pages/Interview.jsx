import React, { useEffect, useState } from 'react';
import Loader from '../Components/Loader';

const Interview = () => {
    const [seconds, setSeconds] = useState(10 * 60);

    useEffect(() => {
        let intervalId;

        if (seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [seconds]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <div>
                <div>
                    <p style={{}}>Time remaining: {formatTime(seconds)}</p>
                </div>
            </div>
        </>
    );
};

export default Interview;
