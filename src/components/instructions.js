import React from 'react'

class Instructions extends React.Component {
    render () {
        return (
            <div id="noheader" style={{ paddingBottom: '15px' }}>
                <h3>Assignment Instructions</h3>
                <p>A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.</p>
                <p>A customer receives 2 points for every dollar spent over $100 in each transaction, 
                    plus 1 point for every dollar spent over $50 in each transaction.</p>
                <p>(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points)</p>
                <p>Given a record of every transaction during a three month period, calculate the reward points earned
                    for each customer per month and total.
                </p>
            </div>
        )
    }
}

export default Instructions