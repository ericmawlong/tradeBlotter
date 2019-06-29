//Component for table

import React, { Component } from 'react'
// import axios from 'axios'

class Table extends Component {

    constructor(props) {
         super(props)
    
         this.state = {
              fundName: [],
              fundNumber: [],
              rating: [],
              invCurr: []
         }
    }

    // componentDidMount () {
    //     axios.get('http://localhost:8762/')
    //     .then (response => {
    //         console.log(response)
    //         this.setState({})
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }
    
    render() {
        return (
            <div>
                <h3>Trade Blotter</h3>
                <table class='contentTable'>
                    <thead>
                        <tr>
                            <th>Fund Name</th>
                            <th>Fund Number</th>
                            <th>Rating</th>
                            <th>Investment currency</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>EY Funds</td>
                            <td>1</td>
                            <td>9</td>
                            <td>INR</td>
                        </tr>
                        <tr>
                            <td>KPMG Funds</td>
                            <td>2</td>
                            <td>6</td>
                            <td>INR</td>
                        </tr>
                        <tr>
                            <td>PWC Funds</td>
                            <td>3</td>
                            <td>7</td>
                            <td>INR</td>
                        </tr>
                    </tbody>
                </table>
                <button class='addFund' type='submit'>+ ADD FUND</button>
                <button class = 'verifyTrade' type='submit'>VERIFY TRADE</button>
            </div>
        )
    }
}

export default Table