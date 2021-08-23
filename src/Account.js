import { Component } from 'react'

class Account extends Component {
    state = {
        amount: 0,
        balance: 0,
        transaction: null
    }

    handleWithdrawlClick = e => {
        console.log(this.state.transaction)
        if (this.state.amount < 0) {
            this.setState({transaction: null}) 
            return
        } else {
        if (this.state.balance - Number(this.state.amount) < 0){
            this.setState({transaction: null}) 
            return
        } else
        this.setState({ transaction: false})
    }
    }

    handleDepositClick = e => {
        if (this.state.amount < 0) {   
            this.setState({transaction: null}) 
            return} else {
        this.setState({ transaction: true})
    }
    }
    
    handleSubmit = e => {
        e.preventDefault()
        if (isNaN(this.state.amount)) {
            console.log("Not a number")
        }
        else { 

            if (this.state.transaction === true){
                this.setState({
                    balance: this.state.balance + Number(this.state.amount)
                })
            } else if (this.state.transaction === false){
                this.setState({
                    balance: this.state.balance - Number(this.state.amount)
                })
            }
        this.setAmount(0)
    }
    }

    setAmount = amount => {
        this.setState({
                amount: amount
                }
            )
        } 
    

    render () {
        let balanceClass = 'balance'
        if (this.state.balance <= 0) {
            balanceClass += ' zero'
        }

        return (
            <div className="account">
                <h2>{this.props.name}</h2>
                <div className={balanceClass}>${this.state.balance}</div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="enter an amount" 
                        value={this.state.amount} 
                        onChange={ e => this.setAmount(e.target.value) }
                    />
                    <input onClick={this.handleDepositClick}type="submit" value="Deposit"/>
                    <input onClick={this.handleWithdrawlClick} type="submit" value="Withdrawal" />
                </form>
            </div>
        )
    }
}

export default Account