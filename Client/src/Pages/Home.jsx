import React, { useEffect, useState } from 'react'
import { FaNodeJs, FaJava, FaReact } from "react-icons/fa";
import { Link as LinkNav, NavLink, useNavigate } from 'react-router-dom';


const Home = () => {
    const [course, setCourse] = useState("")
    const [level, setLevel] = useState("")

    const handleStart = () => {
        let startData = {
            course,
            level
        }
        console.log(startData)
    }

    return (
        <div style={{ backgroundColor: "#3b3a4f", color: "white" }}>
            <br />
            <div style={{ width: "80%", margin: "auto" }}>
                <h1 className='text-center text-3xl font-bold'>Welcome to CogniTech</h1>
                <br />
                <br />
                <h1 className='text-center text-3xl font-bold'>Course</h1>
                <div style={{ width: "10%", margin: "auto" }}>
                    <hr style={{ border: "2px solid white" }} />
                </div>
                <br />
                <div style={{ display: 'flex', width: "50%", justifyContent: "center", margin: "auto", justifyContent: "space-between" }}>
                    <div value={course} onClick={() => setCourse("node")} style={{ border: "1px solid white", padding: "20px", borderRadius: "10px", width: "25%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", cursor: "pointer", backgroundColor: `${course == "node" ? "#653fff" : "#3b3a4f"}` }}>
                        <div style={{ display: "flex", justifyContent: "center" }}><FaNodeJs size={"25px"} color='#22ff00' /></div>
                        <h1 className='text-center text-xl font-bold'>NODE</h1>
                    </div>
                    <div value={course} onClick={() => setCourse("java")} style={{
                        border: "1px solid white", padding: "20px", borderRadius: "10px", width: "25%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", cursor: "pointer",
                        backgroundColor: `${course == "java" ? "#653fff" : "#3b3a4f"}`
                    }}>
                        <div style={{ display: "flex", justifyContent: "center" }}><FaJava size={"25px"} color='#ff2a00' /></div>
                        <h1 className='text-center text-xl font-bold'>JAVA</h1>
                    </div>
                    <div value={course} onClick={() => setCourse("mern")} style={{
                        border: "1px solid white", padding: "20px", borderRadius: "10px", width: "25%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", cursor: "pointer",
                        backgroundColor: `${course == "mern" ? "#653fff" : "#3b3a4f"}`
                    }}>
                        <div style={{ display: "flex", justifyContent: "center" }}><FaReact size={"25px"} color='#006aff' /></div>
                        <h1 className='text-center text-xl font-bold'>MERN</h1>
                    </div>
                </div>
                <br />
                <br />
                <h1 className='text-center text-3xl font-bold'>Difficulty</h1>
                <div style={{ width: "150px", margin: "auto", marginTop: "5px" }}>
                    <hr style={{ border: "2px solid white" }} />
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: "center", width: "50%", margin: "auto", justifyContent: "space-between" }}>
                    <div value={level} onClick={() => setLevel("beginner")} style={{
                        border: "1px solid white", padding: "20px", borderRadius: "10px", width: "25%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", cursor: "pointer",
                        backgroundColor: `${level == "beginner" ? "#653fff" : "#3b3a4f"}`
                    }}>
                        <div style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}>😊</div>
                        <h1 className='text-center text-xl font-bold'>EASY</h1>
                    </div>
                    <div value={level} onClick={() => setLevel("intermediate")} style={{
                        border: "1px solid white", padding: "20px", borderRadius: "10px", width: "25%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", cursor: "pointer",
                        backgroundColor: `${level == "intermediate" ? "#653fff" : "#3b3a4f"}`
                    }}>
                        <div style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}>🙂</div>
                        <h1 className='text-center text-xl font-bold'>MEDIUM</h1>
                    </div>
                    <div value={level} onClick={() => setLevel("expert")} style={{
                        border: "1px solid white", padding: "20px", borderRadius: "10px", width: "25%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", cursor: "pointer",
                        backgroundColor: `${level == "expert" ? "#653fff" : "#3b3a4f"}`
                    }}>
                        <div style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}>🤯</div>
                        <h1 className='text-center text-xl font-bold'>HARD</h1>
                    </div>
                </div>
                <br />
                <br />
                <div style={{ width: "50%", margin: "auto", marginTop: "5px" }}>
                    <hr style={{ border: "1px solid white" }} />
                </div>
                <br />
                <div style={{ textAlign: "center" }} onClick={handleStart}>
                    <LinkNav to="/interviewPage">

                        <button style={{ border: "1px solid white", padding: "10px 20px 10px 20px", borderRadius: "10px" }} className='text-center text-xl font-bold' >

                            START</button>
                    </LinkNav>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Home
