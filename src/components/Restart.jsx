import React from "react";

function Restart(props) {
    return (
        <button className="restart" onClick={props.onClick}>
          Play again
        </button>
    )
}

export default Restart;