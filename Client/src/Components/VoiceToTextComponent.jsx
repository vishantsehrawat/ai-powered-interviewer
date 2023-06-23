import React, { useState } from 'react';
import { FaMicrophone } from "react-icons/fa";
const VoiceToTextComponent = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);

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
      setTranscript((prevTranscript) => prevTranscript + ' ' + currentTranscript);
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
    console.log(transcript)
  };

  return (
    <div style={
        {
            backgroundColor:"#5a587d61",
            padding:"10px",
            width:"50%",
            margin:"auto",
            borderRadius:"25px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:"10px"
        }
        }>
      <input type="text" value={transcript} onChange={(e)=>setTranscript(e.target.value)} style={{
        border:"1px solid black",
        width:"90%",
        borderRadius:"20px",
        padding:"3px"
        }} />
      <button onClick={toggleListening}>{isListening ? 'Stop' : <FaMicrophone size={"20px"}/>}</button>
    </div>
  );
};

export default VoiceToTextComponent;

