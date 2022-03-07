import React, { useContext } from 'react';
import { UserContext } from "../App";
import Admin from "./Admin";
import Content from "./Content"

function  Main() {

    const user = localStorage.getItem('User');
    const status = localStorage.getItem('status');
    const { state, dispatch } = useContext(UserContext);

    if(user){
        if(status==="1"){
            return(
                <Admin/>
            )

        }
        return (
            <>
            <div className="container">
            <h2 className="greeting">Welcome {user}</h2>
            <hr />
            </div>
            <Content />
            </>
        )

    }else{
        
        return (
            <>
            <div className="bg">
                <h1>FOODIE</h1>
            </div>
            <div className="jumbotron">
            <h1>FIND YOUR FAVOURITE DISHES</h1>
            <p>Here you ca find your favourite dishes to make at home</p>
        </div>
        <Content />
            </>
        )
    }



}

export default Main
