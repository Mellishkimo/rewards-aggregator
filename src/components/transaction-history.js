import React from 'react'
import { calculateRewards } from '../utils/index'
import { transactions } from '../helpers/transaction-data'

class TransactionHistory extends React.Component {

    render () {
        return (
            <div id="headspace">
                <h2>Transaction History</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Customer Name</th>
                            <th>Purchase Total</th>
                            <th>Rewards Earned</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, i) => (
                            <tr key={i}>
                                <td>{transaction.date}</td>
                                <td>{transaction.customer}</td>
                                <td>${transaction.purchaseTotal}</td>
                                <td>{`${calculateRewards(transaction.purchaseTotal)} points`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TransactionHistory