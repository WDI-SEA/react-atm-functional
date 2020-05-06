import React, { useState } from 'react'

const Account = props => {
    let [amount, setAmount] = useState(0)
    let [balance, setBalance] = useState(0)
    let [transaction, setTransaction] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(transaction)
        if ((isNaN(amount)) || (amount < 0)) {
            alert("Not a valid deposit or withdrawal amount")
        } else if (transaction == "Withdraw") {
            if (amount > balance) {
                alert("Insufficient funds!")
            } else {
                setBalance(balance - Number(amount))
            }
        }  
        else {
            setBalance(balance + Number(amount))
        }
        setAmount(0)
    }

    let balanceClass = 'balance'
    if (balance <= 0) {
        balanceClass += ' zero'
    }

    return (
        <div className="account">
            <h2>{props.name}</h2>
            <div className={balanceClass}>${balance}</div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="enter an amount" 
                    value={amount} 
                    onChange={ e => setAmount(e.target.value) }
                />
                <input type="submit" value="Deposit" onClick={ e => setTransaction(e.target.value)} />
                <input type="submit" value="Withdraw" onClick={ e => setTransaction(e.target.value)} />
            </form>
        </div>
    )
}

export default Account