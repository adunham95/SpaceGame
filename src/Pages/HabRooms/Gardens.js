import React, {useState, useEffect} from 'react';
import "../PageStyles/garden.scss";
import {AspectRatio} from "../../Components/index";

let devGarden = [
    {
        type: "empty",
        seeds: "",
        // timeLeft: ["00","00","00","00"],
        whenDone: "",
    },
    {
        type: "planted",
        seeds: "Iron",
        // timeLeft: ["00","00","00","00"],
        whenDone: "March 20, 2020 17:00:00",
    },
    {
        type: "growing",
        seeds: "Iron",
        // timeLeft: ["00","00","00","00"],
        whenDone: "March 20, 2020 17:00:00",
    },
    {
        type: "harvest",
        seeds: "Iron",
        // timeLeft: ["00","00","00","00"],
        whenDone: "March 20, 2020 10:00:00",
    },
]

function Garden() {

    const [time, setTime] = useState(Date.now());
    const [plots, setPlots] = useState([])

    useEffect(() => {
        let myPlots = devGarden.map(p => {
            p.timeLeft = ["00","00","00","00"];
            return p
        })
        console.log(myPlots);
        setPlots(myPlots);
        myPlots.forEach(p => {
                const interval = setInterval(() => 
        {    // Get today's date and time
            let now = new Date().getTime();
            //Get the done time
            let countDownDate = new Date(p.whenDone).getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            //Countdown Object
            var countdownObject = [days, hours, minutes, seconds];
            for (var i = 0; i < countdownObject.length ; i++) {
                if(countdownObject[i] < 10){
                    // console.log("less 10", countdownObject[i]);
                    countdownObject[i] = "0" + countdownObject[i]
                }
            }

            console.log(countdownObject);

            //Set current object
            p.timeLeft = countdownObject;
            setTime(Date.now())

            if (distance < 0) {
                clearInterval(interval);
                p.timeLeft = ["00","00","00","00"];
            }
            else {
                p.timeLeft = countdownObject;
            }
            }, 1000);
            return () => {
                clearInterval(interval);
            };

            })
    }, []);


  return (
    <div className="page garden">
        <h1>Garden</h1>
        {/* <p>{new Date(time).toLocaleTimeString()}</p> */}
        <div className={`gardenContainer`}>
            {
                plots.map(p =>{
                    return <div className={`plot ${p.type}`}>
                        <AspectRatio
                            ratio={`1x1`}
                        ></AspectRatio>
                        <h3>{p.seeds === "" ? "Empty Plot" : `${p.seeds}`}</h3>
                        <p>{p.seeds !== "" ? `Growing Time: ${p.timeLeft[0]}:${p.timeLeft[1]}:${p.timeLeft[2]}:${p.timeLeft[3]}` : ""}</p>
                    </div>
                })
            }
        </div>
    </div>
  );
}

function Plot() {
    return (
      <div className="page garden">
          <h1>Garden</h1>
      </div>
    );
  }


export default Garden;
