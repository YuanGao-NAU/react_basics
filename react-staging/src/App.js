import React from "react";
import ReactDOM, { render } from "react-dom";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

export default class App extends React.Component{
    render() {
        return (
            <div> 
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

