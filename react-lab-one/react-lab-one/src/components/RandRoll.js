
    import "../styles.css";
    import React from "react";

    export default class RandRoll extends React.Component {
        state = { roll: 0 };

        render() {
            return (
                <div className="roll">
                    <h2> Role: {this.state.roll}</h2>
                    <button
                        onClick={() => {
                            this.roll();
                        }}
                    >
                        Roll the Dice
                    </button>
                </div>
            );
        }

        roll() {
            this.setState({
                roll: Math.floor(Math.random() * 20) + 1
            });
        }
    }
