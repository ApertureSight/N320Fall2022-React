import "../styles.css";
import React from "react";

export default class App extends React.Component {
    state = { tired: 15 };

    render() {
        return (
            <div classname="tired">
                <p>
                    I am level {this.state.tired} tired. Importance:{" "}
                    {this.props.importance}{" "}
                </p>
            </div>
        );
    }
}
