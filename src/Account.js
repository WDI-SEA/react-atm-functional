import React, { useState } from 'react'

const Account = props => {
    let [amount, setAmount] = useState(0)
    let [balance, setBalance] = useState(0)

    const Deposit = e => {
        e.preventDefault()
        if (isNaN(amount)) {
            console.log("Not a number")
        }
        else if (amount < 0) {
            alert('please enter a positive number')
        }
        else{
            setBalance(balance + Number(amount))
        }
        setAmount(0)
    }

    let balanceClass = 'balance'
    if (balance <= 0) {
        balanceClass += ' zero'
    }
    
    const withDraw = e => {
        e.preventDefault()
        if (isNaN(amount)) {
            console.log("Not a number")
        }
        else {
            if (amount > balance) {
                alert('Insufficient Funds')
            }
            else {
                setBalance(balance - Number(amount))
            }
        }
        setAmount(0)
    }

    return (
        <div className="account">
            <h2>{props.name}</h2>
            <div className={balanceClass}>${balance}</div>
                <input 
                    type="text" 
                    placeholder="enter an amount" 
                    value={amount} 
                    onChange={ e => setAmount(e.target.value) }/>
                
                <input type="button" onClick={Deposit} value="Deposit"  />
                <input type="button" onClick={withDraw}  value="Withdraw"/>
            
        </div>
    )
}

export default Account