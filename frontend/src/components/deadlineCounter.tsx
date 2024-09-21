import React from "react";
import { useState } from "react"

function DeadlineCounter() {
    const [timeleft, setTimeleft] = useState("10 hours");
    // After choosing a league, calculate how much time left until the round starts.
    // picking eleven closes 1 hour before.
    return(
        <div>
            <p>Hours until deadline: {timeleft}</p>
        </div>
    )
}

export default DeadlineCounter