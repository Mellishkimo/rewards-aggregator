import React from 'react'
import { transactions } from '../helpers/transaction-data'
import { calculateRewards } from '../utils/index'

class TotalRewards extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            aggregateTransactions: [],
            januaryTransactions: [],
            februaryTransactions: [],
            marchTransactions: []
        }
    }

    compileRewardTotals = (transactions) => {
        const aggregateSales = {}
        const januarySales = {}
        const februarySales = {}
        const marchSales = {}

        const aggregateTotal = []
        const januaryTotal = []
        const februaryTotal = []
        const marchTotal = []

        transactions.map(transaction => {
            const customer = transaction.customer
            const rewardsPoints = calculateRewards(transaction.purchaseTotal)

            if (!aggregateSales[customer]) {
                aggregateSales[customer] = { rewards: 0, qty: 0, purchaseTotal: 0 }
            }
            aggregateSales[customer] = {
                customer: `${customer}`,
                rewards: aggregateSales[customer].rewards + rewardsPoints,
                qty: aggregateSales[customer].qty + 1,
                purchaseTotal: aggregateSales[customer].purchaseTotal + transaction.purchaseTotal
            }

            if (transaction.date[0].includes('1')) {
                if (!januarySales[customer]) {
                    januarySales[customer] = { rewards: 0, qty: 0, purchaseTotal: 0 }
                }
                januarySales[customer] = {
                    customer: `${customer}`,
                    rewards: januarySales[customer].rewards + rewardsPoints,
                    qty: januarySales[customer].qty + 1,
                    purchaseTotal: januarySales[customer].purchaseTotal + transaction.purchaseTotal
                }
            }
            if (transaction.date[0].includes('2')) {
                if (!februarySales[customer]) {
                    februarySales[customer] = { rewards: 0, qty: 0, purchaseTotal: 0 }
                }
                februarySales[customer] = {
                    customer: `${customer}`,
                    rewards: februarySales[customer].rewards + rewardsPoints,
                    qty: februarySales[customer].qty + 1,
                    purchaseTotal: februarySales[customer].purchaseTotal + transaction.purchaseTotal
                }
            }
            if (transaction.date[0].includes('3')) {
                if (!marchSales[customer]) {
                    marchSales[customer] = { rewards: 0, qty: 0, purchaseTotal: 0 }
                }
                marchSales[customer] = {
                    customer: `${customer}`,
                    rewards: marchSales[customer].rewards + rewardsPoints,
                    qty: marchSales[customer].qty + 1,
                    purchaseTotal: marchSales[customer].purchaseTotal + transaction.purchaseTotal
                }
            }
        })
        Object.keys(aggregateSales).forEach(customer => {
            aggregateTotal.push(aggregateSales[customer])
        })
        Object.keys(januarySales).forEach(customer => {
            januaryTotal.push(januarySales[customer])
        })
        Object.keys(februarySales).forEach(customer => {
            februaryTotal.push(februarySales[customer])
        })
        Object.keys(marchSales).forEach(customer => {
            marchTotal.push(marchSales[customer])
        })
        return {
            aggregateTotal,
            januaryTotal,
            februaryTotal,
            marchTotal
        }
    }
    componentDidMount () {
        const monthData = this.compileRewardTotals(transactions)
        this.setState({
            aggregateTransactions: monthData.aggregateTotal,
            januaryTransactions: monthData.januaryTotal,
            februaryTransactions: monthData.februaryTotal,
            marchTransactions: monthData.marchTotal
        })
        
    }

    render () {
        const { aggregateTransactions, januaryTransactions, februaryTransactions, marchTransactions } = this.state
        

        return (
            <div>
                <div id="headspace">
                    <h2>January Rewards Totals</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Number of Purchases</th>
                                <th>Total Expenditure for Month</th>
                                <th>Total Rewards for Month</th>
                            </tr>
                        </thead>
                        <tbody>
                            {januaryTransactions.map((transaction, i) => (
                                <tr key={i} >
                                    <td>{transaction.customer}</td>
                                    <td>{transaction.qty}</td>
                                    <td>${transaction.purchaseTotal}</td>
                                    <td>{`${transaction.rewards} points`}</td>                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div id="headspace">
                    <h2>February Rewards Totals</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Number of Purchases</th>
                                <th>Total Expenditure for Month</th>
                                <th>Total Rewards for Month</th>
                            </tr>
                        </thead>
                        <tbody>
                            {februaryTransactions.map((transaction, i) => (
                                <tr key={i}>
                                    <td>{transaction.customer}</td>
                                    <td>{transaction.qty}</td>
                                    <td>${transaction.purchaseTotal}</td>
                                    <td>{`${transaction.rewards} points`}</td>                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div id="headspace">
                    <h2>March Rewards Totals</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Number of Purchases</th>
                                <th>Total Expenditure for Month</th>
                                <th>Total Rewards for Month</th>
                            </tr>
                        </thead>
                        <tbody>
                            {marchTransactions.map((transaction, i) => (
                                <tr key={i}>
                                    <td>{transaction.customer}</td>
                                    <td>{transaction.qty}</td>
                                    <td>${transaction.purchaseTotal}</td>
                                    <td>{`${transaction.rewards} points`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div id="headspace">
                    <h2>Total Rewards Earned Per Customer</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Number of Purchases</th>
                                <th>Total Expenditure</th>
                                <th>Total Rewards Earned</th>
                            </tr>
                        </thead>
                        <tbody>
                            {aggregateTransactions.map((transaction, i) => (
                                <tr key={i}>
                                    <td>{transaction.customer}</td>
                                    <td>{transaction.qty}</td>
                                    <td>${transaction.purchaseTotal}</td>
                                    <td>{`${transaction.rewards} points`}</td>                            
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TotalRewards