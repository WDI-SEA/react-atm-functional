import React, { useState } from 'react'

const Account = props => {
    let [amount, setAmount] = useState(0)
    let [balance, setBalance] = useState(0)
    let [message, setMessage] = useState('')
    let [trans, setTypeOfTrans] = useState('')
    const MSG_NEGATIVE_NUMBER = "Number should be greater than zero"
    const MSG_NAN = "Please enter a number"
    const MSG_WITHDRAW = "Amount for withdrawal exceeds the balance"
 


    const handleSubmit = e => {
        e.preventDefault()
        setMessage('')
        if (isNaN(amount) ) {
            setMessage(MSG_NAN)
        }
        else if(Number(amount)<0) {
            setMessage(MSG_NEGATIVE_NUMBER)
            
        }
        else if(Number(amount)>0){
            if(trans === "Deposit"){
                setBalance(balance + Number(amount))
            }
            else if(trans === "Withdraw"){
                withdraw()
            }
        }
        setAmount(0)
        
    } 


    const withdraw = ()=>{
            if(balance >= Number(amount)){
                setBalance(balance - Number(amount))
            }
            else{
                setMessage(MSG_WITHDRAW)
            }
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
                 <input type="submit" value="Deposit" onClick={(e)=>setTypeOfTrans(e.target.value)}/>
                 <input type="submit" value="Withdraw" onClick={(e)=>setTypeOfTrans(e.target.value)}/> 
             
            </form>
            <div> {message}   </div>
        </div>
     
    )
}

export default Account