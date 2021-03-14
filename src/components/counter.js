import React from 'react'

class Counter extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            count1: 0,
            count2: 0
        }
    }

    incrementCount1 = () => {
        this.setState(prevState => ({ count1: prevState.count1 + 1 }))
    }

    incrementCount2 = () => {
        this.setState(prevState => ({ count2: prevState.count2 + 1 }))
    }

    reset = () => {
        this.setState({
            count1: 0,
            count2: 0
        })
    }

    beforeWin = () => {
        return (
            <div>
                <button onClick={this.incrementCount1} className="control">Player 1</button>
                <button onClick={this.incrementCount2} className="control">Player 2</button>
            </div>
        )
    }

    afterWin = () => {
        return (
            <div>
                {this.state.count1 === 5 ?
                    <div className="result">
                        <div> Hurray! PLAYER ONE won!!</div>
                        <button className="reset-btn" onClick={this.reset}>reset</button>
                    </div> :
                    <div className="result">
                        <div> Hurray! PLAYER TWO won!!</div>
                        <button onClick={this.reset}>reset</button>
                    </div>
                }
                <div>
                    <button clickable={false} className="control2">Player 1</button>
                    <button clickable={false} className="control2">Player 2</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="mainbody">
                <div className="head">Score card v1.0</div>
                <div className="box">
                    {
                        this.state.count1 !== 5 ? <div className="display">{this.state.count1}</div> :
                            <div className="display-win">{this.state.count1}</div>
                    }
                    {
                        this.state.count2 !== 5 ? <div className="display">{this.state.count2}</div> :
                            <div className="display-win">{this.state.count2}</div>
                    }
                </div>
                { this.state.count1 !== 5 && this.state.count2 !== 5 ? this.beforeWin() : this.afterWin()}
            </div>
        )
    }
}

export default Counter