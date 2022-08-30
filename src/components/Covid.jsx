import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './Covid.css'
const Covid = () => {
 const [data,setData] = useState([])
  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://data.covid19india.org/v4/min/data.min.json"
      );
      const actualData = await res.json();
      console.log(actualData.MP.total);
      setData(actualData.MP.total)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // getCovidData();
  }, []);
   let currentDate = new Date().toLocaleDateString()
   let currentTime = new Date().toLocaleTimeString()

   let imgarr = [
    "https://picsum.photos/400/210", 
    "https://picsum.photos/400/211",
     "https://picsum.photos/400/220",
     "https://picsum.photos/400/222",
     "https://picsum.photos/400/224",
  
  ]
  const heading = {
   color:'green',
   fontSize:'200px'
  }
  return (
    <>
      <h1>{currentDate} LIVE {currentTime}  </h1>
      <a href="https://www.studytonight.com/code/" accessKey="h">HTML Interactive Course</a>
<a href="https://www.studytonight.com/cascading-style-sheet/" accessKey="c">CSS Tutorial</a>

      <h2 style={{
   color:'green',
   fontSize:'200px'
  }} > COVID-19 CORONAIRUS TRCKER</h2>

      <ul>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR</span>STATE
              </p>
              <img src={imgarr[0]} alt="random" />
              <p className="card_total card_small" > MP</p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR</span>STATE
              </p>
              <img src={imgarr[1]} alt="random" />
              <p className="card_total card_small" > MP</p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR</span>STATE
              </p>
              <img src={imgarr[2]} alt="random" />
              <p className="card_total card_small" > MP</p>
            </div>
          </div>
        </li>


        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR</span>STATE
              </p>
              <img src="https://picsum.photos/400/210" alt="random" />
              <p className="card_total card_small" > MP</p>
            </div>
          </div>
        </li>


        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR</span>STATE
              </p>
              <p className="card_total card_small" > MP</p>
            </div>
          </div>
        </li>


        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR</span>STATE
              </p>
              <p className="card_total card_small" > MP</p>
            </div>
          </div>
        </li>


        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR</span>STATE
              </p>
              <p className="card_total card_small" > MP</p>
            </div>
          </div>
        </li>


        <div className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR</span>STATE
              </p>
              <p className="card_total card_small" > MP</p>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Covid;
