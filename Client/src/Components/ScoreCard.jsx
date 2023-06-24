import React from "react";

export default function ScoreCard({ userId, score, course, level, date }) {
    const myScore = parseFloat(score)
    const formatDateAndTime = (dateString) => {
        const dateObj = new Date(dateString);
        
        // Format date
        const year = dateObj.getFullYear();
        const month = dateObj.toLocaleString('default', { month: 'short' });
        const day = dateObj.getDate();
        const formattedDate = `${year}/${month}/${day}`;
        
        // Format time
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = (hours % 12) || 12;
        const formattedTime = `${formattedHours}:${minutes} ${period}`;
        
        // return { Date: formattedDate, Time: formattedTime };
        // return <div><p>Date : {formattedDate}</p> <p>Time : {formattedTime}</p></div>
        return (<>
        <tr>
        <td>Data</td>
        <td className="score-values">{formattedDate}</td>
    </tr>
    <tr>
        <td>Time</td>
        <td className="score-values">{formattedTime}</td>
    </tr>
    </>)
       
      };
  return (
    <div className={`score-card ${myScore <= 30 ? "poor-card" : myScore <= 60 ? "good-card" : "great-card"}`}>
      <table>
      {formatDateAndTime(date)}
        <tr>
            <td>Course</td>
            <td className="score-values">{course}</td>
        </tr>
        <tr>
            <td>Level</td>
            <td className="score-values">{level}</td>
        </tr>
        <tr>
                <td>Score</td>
                <td className="score-values">{score}</td>
        </tr>
      </table>
    </div>
  );
};