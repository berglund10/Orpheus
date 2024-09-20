import React, { FormEvent, useState } from "react"

function CreateBet() {
    const [amount, setAmount] = useState("0");
    const createBet = (e: FormEvent ) => {
        e.preventDefault();
        // http request to backend to make the bet
        console.log(`Created a bet with the amount ${amount}` )
    }


    return(
        <div>
            <h1>Create bet here</h1>
            <form onSubmit={createBet}>
        <div>
          <label htmlFor="bet">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
        </div>
    )
}

export default CreateBet