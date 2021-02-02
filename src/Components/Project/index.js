import React from "react";
import Card from "../Card/index";
// import Fade from '@material-ui/core/Fade';

const Project = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          {/* <Fade bottom> */}
            <h1>My Projects</h1>
            <Card />
          {/* </Fade> */}
        </div>
      </div>
    </div>
  )
}

export default Project