import React from "react"

function AvailableBets() {
    const acceptBet = () => {
        console.log("Set betAccepted to true");
    }
    const antonsbet = {
        players: "Mina spelare", // Syns inte för andra användare.
        myBet: "100kr", // Andra ser detta och kan acceptera.
        betAccepted: false, // Om någon accepterar sätt till true och försvinner ur listan.
    }
    return(
        <div>
            <ul>
                <li><button onClick={acceptBet}>{antonsbet.myBet}</button></li>
                <li><button>{antonsbet.myBet}</button></li>
                <li><button>{antonsbet.myBet}</button></li>
            </ul>
        </div>
    )
}

export default AvailableBets