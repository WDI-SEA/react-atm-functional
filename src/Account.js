import React, { useState } from 'react'

const Account = props => {
    let [amount, setAmount] = useState(0)
    let [balance, setBalance] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()
        if (isNaN(amount)) {
            console.log("Not a number")
        }
        else {
            setBalance(balance + Number(amount))
        }
        setAmount(0)
    }
    const handleWithdraw = e => {
        e.preventDefault()
        if (isNaN(amount) || amount < 0) {
            console.log("Not a number")
        }
        else if (balance - Number(amount) < 0){
            console.log("You baka, you broke")
        }
        else {
            setBalance(balance - Number(amount))
        }
        // setAmount(0)
    }

    let balanceClass = 'balance'
    if (balance <= 0) {
        balanceClass += ' zero'
    }

    return (
        <div className="account">
            <h2>{props.name}</h2>
            <div className={balanceClass}>${balance}</div>
            <form>
                <input 
                    type="text" 
                    placeholder="enter an amount" 
                    value={amount} 
                    onChange={ e => setAmount(e.target.value) }
                />
                <input type="submit" onClick={handleSubmit} value="Deposit" />
                <input type="submit" onClick={handleWithdraw} value="Withdraw" />
            </form>
           
        </div>
    )
}

export default Account