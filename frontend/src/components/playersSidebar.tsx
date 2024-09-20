import React from "react";

function PlayersSideBar() {
    // Gör API-calls här, klickar man på defender compontent, gör ett anrop till api/defenders och visa info
    return(
        <div>
            <h1>Här visas de olika spelarna man kan välja mellan</h1>   
            <ul>
                <li>Första spelaren</li>
                <li>Andra spelaren</li>
                <li>Tredje spelaren</li>
            </ul>
        </div>
    )
}

export default PlayersSideBar;