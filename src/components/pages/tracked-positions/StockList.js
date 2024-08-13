import React from 'react';

/* The TrackedStockList component will render the stocks from the API into a table. This 
will complete the GET method or Read. 

The openUpdateModal is destructured so the ✎ button can work successfully. This will
complete the PUT method or Update.

The deleteClient is destructured so the 🗑 button can work successfully. This will
complete the DELETE method or Delete. */
export default function TrackedStockList({ stocks, openUpdateModal, deletePosition }) {
    return (
        <table id="list" className="table table-success table-striped">
            <thead>
                <tr>
                    <th>Stock ID</th>
                    <th>Company Name</th>
                    <th>Ticker Symbol</th>
                    <th>Price USD @ Buy</th>
                    <th>Shares @ Buy</th>
                    <th>Cost Basis USD</th>
                    <th>Dated Added</th>
                    <th>Price USD @ Sell</th>
                    <th>Shares @ Sell</th>
                    <th>Current Price USD</th>
                    <th>Unrealized Profit/Loss</th>
                    <th>Realized Profit/Loss</th>
                    <th>Update Position</th>
                    <th>Remove From List</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map((stock, index) => (
                    <tr key={index}>
                        <td>{stocks.id}</td>
                        <td>{stocks.company}</td>
                        <td>{stocks.ticker}</td>
                        <td>{stocks.priceBuy}</td>
                        <td>{stocks.sharesBuy}</td>
                        <td>{stocks.costBasis}</td>
                        <td>{stocks.dateAdded}</td>
                        <td>{stocks.priceSell}</td>
                        <td>{stocks.sharesSell}</td>
                        <td>{stocks.priceCurrent}</td>
                        <td>{stocks.unrealizedProfitLoss}</td>
                        <td>{stocks.realizedProfitLoss}</td>
                        <td>
                            <button className='updateButton'
                                onClick={() => openUpdateModal(stock)}>✎</button>
                        </td>
                        <td>
                            <button className='deleteButton'
                                onClick={() => deletePosition(stock.id)}>🗑</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}