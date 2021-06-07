import React, { useContext } from "react";
import '../src/Home.css';
import hierarchy from "./hierarchy-structure.png";
import add from "./homeImg/add.png";
import chart from "./homeImg/line-chart.png";
import target from "./homeImg/target.png";
import Button from 'react-bootstrap/Button';



const Home = () => {
  return (
      <div>
        <div class="bg-primary" id="headline">
          <div class="text-container">
          <img id="hierarchy" src={hierarchy}></img>
            <h1 id="h1">ToDoApp</h1>
            <h5>ToDoApp is web application which helps people organise their time, motivate them to do tasks and shows their progress. We hope that this product will save your time and energy on things that matters for you. We would be greateful being responsible for organsising your time.</h5>
            <Button href="/signUp" variant="success">SignUp</Button>{' '}
          </div>
        </div>

        <div class="flex-container">
            <div class="info-box">
              <img src={add} id="mini"></img>
              <p id="info-p">
                <h4>Tasks</h4>
                Main function of this app is adding tasks and targets to do. After accomplishment you uncheck it.
                
              </p>
            </div>
            <div class="info-box">
              <img src={chart} id="mini"></img>
              <h4>Authentication</h4>
              <p id="info-p">
                Our services is available only for registered users. You can register using your email or Google.
              </p>
            </div>
            <div class="info-box">
              <img src={target} id="mini"></img>
              <h4>Statistics</h4>
              <p id="info-p">
                You will be able to check your statistic and find out how hard have you worked.
              </p>
            </div>
        </div>

      </div>
    )
}
export default Home;