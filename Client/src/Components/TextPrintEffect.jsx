import React, { useState, useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';

const LetterPrinting = () => {
    const [text, setText] = useState('');
    const fullText = 'All the best for your interview.....';
    const printDelay = 1000; // Delay between each letter print (in milliseconds)

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex >= 0 && currentIndex != fullText.length - 1) {
                setText(prevText => prevText + fullText[currentIndex]);
                currentIndex++;;

            }

            else if (currentIndex == fullText.length - 1) {
                clearInterval(interval);
            }

            else {
                clearInterval(interval); // Stop printing after all letters are printed
            }
        }, printDelay);

        return () => clearInterval(interval);
    }, [fullText, printDelay]);

    return (
        <Box>
            <Heading color='white' size={"lg"}>{text}</Heading>
        </Box>
    );
};

export default LetterPrinting;