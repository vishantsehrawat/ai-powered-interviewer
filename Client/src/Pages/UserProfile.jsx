import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link as LinkNav } from 'react-router-dom';
import ScoreCard from "../Components/ScoreCard";
import { useSelector } from "react-redux";

export default function UserProfile(){
    const [scoresData, setScoresData] = useState([]);
    const { isAuth, userDetails, isError } = useSelector((store) => store.authReducer);

  useEffect(() => {
    const fetchScoresData = async () => {
        if(!isAuth){
            alert("Please login first");
            return
        }
        const userId = userDetails.wholeUser.uniqueUserId
      try {
        const response = await axios
        .get(`http://aiinterviewer.onrender.com/score/myScore/${userId}`); // Replace "/api/scores" with your actual API endpoint
        setScoresData(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };

    fetchScoresData();
  }, []);

    return (
        <>
        <div className="indigater">
            <span className="poor-card">Poor</span>
            <span className="good-card">Good</span>
            <span className="great-card">Excellent</span>
        </div>
                <div className="score-card-list">
      {
        scoresData.length==0 ? <div>
            <h1>No Interviews Yet :(</h1>
            <button className="start_interview_btn"> <LinkNav to={'/'}>Start a interview</LinkNav></button>
        </div> : scoresData.map((score) => (
            <ScoreCard
              key={score._id}
              userId={score.userId}
              score={score.score}
              course={score.course}
              level={score.level}
              date={score.date}
            />
          ))
      }
    </div>
    </>
    )
}