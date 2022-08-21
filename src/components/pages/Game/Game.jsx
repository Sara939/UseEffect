import "./Game.css";
import {useState, useEffect} from "react";


function Game() {
  const [Level,setLevel] = useState(0);
  let [playTime,setplayTime]= useState({});

  useEffect(()=>{
    alert("massage")
  }, [])
  useEffect(()=>{
    console.log("change has made");
  }, [Level])
  useEffect(()=>{
    playTime=new Date();
    console.log(playTime);
  },[])
  useEffect (()=>{
    alert("houer changed")
  }, [playTime])
  

  return (
    <div className="game">
      <h1>{Level}</h1>
      {/* <h1>{playTime}</h1> */}
      <button onClick={()=>{setLevel(Level+1)}}>+</button>
      <button onClick={()=>{setplayTime(console.log(playTime=new Date()))}}>Time</button>

    </div>
    
  );
};

export default Game;
