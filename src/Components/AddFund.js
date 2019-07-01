//component for adding fund

import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import './tradeBlotter.css' 

class AddFund extends Component {

    render() {
        return (
            <Popup className = 'fundForm' trigger = {<button className= 'addFund'>+ ADD FUND</button>} >
            
                <div>
                    <form  onSubmit={this.props.submitHandler}>
                        <div>
                            <label>Fund Number</label>
                            <input 
                            type='text' 
                            name='fundNumber'
                            value={this.props.fundNumber} 
                            onChange={this.props.handleAdd}
                            />
                        </div>
                        <div>
                            <label>Fund Name</label>
                            <input 
                            type='text' 
                            name='fundName'
                            value={this.props.fundName}
                            onChange={this.props.handleAdd}
                            />
                        </div>
                        <div>
                            <label>Rating</label>
                            <input 
                            type='text' 
                            name='rating' 
                            value={this.props.rating}
                            onChange={this.props.handleAdd}
                            />
                        </div>
                        <div>
                            <label>Investment Currency</label>
                            <input 
                            type='text' 
                            name='invCurr' 
                            value={this.props.invCurr}
                            onChange={this.props.handleAdd}
                            />
                        </div>
                    </form>
                 </div>
            </Popup>
        )
    }
}

export default AddFund