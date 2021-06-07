import React, { useContext } from "react";
import { UserContext } from "../src/UserProvider";
import '../src/ToDo.css';
import plus from "./plus.png";
import dreams from "./cardsImg/dreams.jpg";
import finance from "./cardsImg/finance.jpg";
import social from "./cardsImg/social.jpg";
import sport from "./cardsImg/sport.jpg";
import study from "./cardsImg/study.jpg";
import Button from 'react-bootstrap/Button';
import MyForm from './Form';






const ToDo = () => {
    const user = useContext(UserContext);

    return(
        <div id="full">
            <div className="cards-container">
            
            <MyForm>
                <div className="card" id="card-plus">
                    <img id="plus" src={plus}></img>
                </div>
            </MyForm>
            


                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div id="cover">
                                <img src={sport} id="cardImg">
                                </img>
                                <h3 className="card-title">Running 5 times</h3>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h1>Running 5 days</h1> 
                            <h6><strong>Category: </strong>Sport</h6>
                            <h6><strong>Deadline: </strong>5 days</h6>
                            <h6><strong>Importance: </strong>Very important</h6>
                            <h6><strong>Prize: </strong>10 points</h6>
                            <Button id="delete" variant="danger">Delete</Button> 
                            <input type="checkbox"></input>

                        </div>
                    </div>
                </div> 

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div id="cover">
                                <img src={finance} id="cardImg">
                                </img>
                                <h3 className="card-title">Save 100$</h3>
                                
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h1>Save 100$</h1> 
                            <h6><strong>Category: </strong>Finance</h6>
                            <h6><strong>Deadline: </strong>15 days</h6>
                            <h6><strong>Importance: </strong>Very important</h6>
                            <h6><strong>Prize: </strong>20 points</h6>
                            <Button id="delete" variant="danger">Delete</Button> 
                            <input type="checkbox"></input>

                        </div>
                    </div>
                </div> 

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div id="cover">
                                <img src={study} id="cardImg">
                                </img>
                                <h3 className="card-title">Read "Makbet"</h3>
                                
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h1>Read "Makbet"</h1> 
                            <h6><strong>Category: </strong>Study</h6>
                            <h6><strong>Deadline: </strong>3 days</h6>
                            <h6><strong>Importance: </strong>Not important</h6>
                            <h6><strong>Prize: </strong>5 points</h6>
                            <Button id="delete" variant="danger">Delete</Button> 
                            <input type="checkbox"></input>

                        </div>
                    </div>
                </div> 

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div id="cover">
                                <img src={social} id="cardImg">
                                </img>
                                <h3 className="card-title">Throw a party</h3>
                                
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h1>Throw a party</h1> 
                            <h6><strong>Category: </strong>Social</h6>
                            <h6><strong>Deadline: </strong>No</h6>
                            <h6><strong>Importance: </strong>Not important</h6>
                            <h6><strong>Prize: </strong>5 points</h6>
                            <Button id="delete" variant="danger">Delete</Button> 
                            <input type="checkbox"></input>

                            

                        </div>
                    </div>
                </div> 

                
            </div>
                
        </div>
    )
}
export default ToDo;