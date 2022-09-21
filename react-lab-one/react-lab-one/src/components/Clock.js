import "../styles.css";
import React from "react";
export default class Clock extends React.Component {
    state = { date: new Date() };

    render() {
        return (
            <div classname="clock">
                <h2>
                    It is {this.state.date.toLocaleDateString()} and the time is{" "}
                    {this.state.date.toLocaleTimeString()}
                </h2>
            </div>
        );
    }
}
