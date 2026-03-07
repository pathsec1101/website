import React from "react"
import PathBackground from "../components/PathBackground"
import LogoPath from "../assets/logo-white.svg";
import HomeContainer from "../components/Home"
import CardsFeatures from "../components/CardsFeatures/CardsFeatures"
import Solutions from "../components/Solutions"
import "./index.scss"

export default function Home() {
  return (
    <main>
      <div className="container-fluid HomePathSec">
        <PathBackground
          effectOptions={{ "distortion": "turbulentDistortion", "length": 400, "roadWidth": 10, "islandWidth": 2, "lanesPerRoad": 3, "fov": 90, "fovSpeedUp": 150, "speedUp": 2, "carLightsFade": 0.4, "totalSideLightSticks": 20, "lightPairsPerRoadWay": 40, "shoulderLinesWidthPercentage": 0.05, "brokenLinesWidthPercentage": 0.1, "brokenLinesLengthPercentage": 0.5, "lightStickWidth": [0.12, 0.5], "lightStickHeight": [1.3, 1.7], "movingAwaySpeed": [60, 80], "movingCloserSpeed": [-120, -160], "carLightsLength": [12, 80], "carLightsRadius": [0.05, 0.14], "carWidthPercentage": [0.3, 0.5], "carShiftX": [-0.8, 0.8], "carFloorSeparation": [0, 5], "colors": { "roadColor": 526344, "islandColor": 657930, "background": 0, "shoulderLines": 1250072, "brokenLines": 1250072, "leftCars": [14177983, 6770850, 12732332], "rightCars": [242627, 941733, 3294549], "sticks": 242627 } }}
        />
        <div className="row">
       
         <img src={LogoPath} style={{ width: '300px', marginTop: '5vh' }} alt="Logo" className="logo-img" />
       
          <p>Em Breve!</p>
        </div>

      </div>
      {/*    <HomeContainer />
      <div className="container-fluid FeaturesPath">


        <div className="row RowItensCards">
          <CardsFeatures />

        </div>



      </div>
      <Solutions />*/}
   

    </main>
  )
}
