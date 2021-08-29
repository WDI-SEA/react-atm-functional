import { Component } from 'react'

class Account extends Component {
    state = {
        amount: 0,
        balance: 0
    }
    
    handleSubmit = e => {
        e.preventDefault()
        console.log(e)
        if (isNaN(this.state.amount) || (this.state.amount) < 0) {
            console.log("Not a number")
        }
        else {
            if (e.target.value ==="Deposit") {
                this.setState({
                    balance: this.state.balance + Number(this.state.amount)
                })
                
            } else {

                this.setState({
                    balance: this.state.balance - Number(this.state.amount)
                })
            }
        }
        this.setAmount(0)
    }

    setAmount = amount => {
        this.setState({
            amount: amount
        })
    }

    render () {
        let balanceClass = 'balance'
        if (this.state.balance <= 0) {
            balanceClass += ' zero'
        }

        return (
            <div className="account">
                <h2>{this.props.name}</h2>
                {/* <p>{this.props.foo}</p> */}
                <div className={balanceClass}>${this.state.balance}</div>
                {/* <form onSubmit={this.handleSubmit}> */}
                    <input 
                        type="text" 
                        placeholder="enter an amount" 
                        value={this.state.amount} 
                        onChange={ e => this.setAmount(e.target.value) }
                    />
                    <button onClick={this.handleSubmit} value="Deposit">Deposit</button>
                    
                    <button onClick={this.handleSubmit} value="Withdrawl">Withdrawl</button>
                {/* </form> */}
            </div>
        )
    }
}

export default Account