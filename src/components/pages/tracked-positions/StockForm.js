import React from 'react';

/* The TrackStockForm will allow the addition of a new stock position. Each handle 
function is destructured within the TrackStockForm parameters so it knows what it is. 

On the form, when the Submit button is clicked, it will execute onSubmit and run
the postNewPosition function. This will complete the POST method or Create. 

The newPosition is destructured to allow the form inputs to clear in its 
relative spots: .company, .ticker, .priceBuy, .sharesBuy, .costBasis,
.dateAdded, .priceSell, .sharesSell, .priceCurrent, .unrealizedProfitLoss,
and .realizedProfitLoss. */
export default function TrackStockForm({ postNewPosition, handleCompany, handleTicker, handlePriceBuy,
    handleSharesBuy, handleCostBasis, handleDateAdded, handlePriceSell, handleSharesSell, handlePriceCurrent,
    handleUnrealizedProfitLoss, handleRealizedProfitLoss, newPosition}) {
    return (
        <form onSubmit={(e) => postNewPosition(e)} className='positionForm'>
            <h3>Add New Stock Position Information</h3>
            <label>Company Name</label>
            <input onChange={(e) => handleCompany(e.target.value)}
                type='text'
                placeholder='Company Name'
                value={newPosition.company}
            />
            <label>Ticker Symbol</label>
            <input onChange={(e) => handleTicker(e.target.value)}
                type='text'
                placeholder='Ticker Symbol'
                value={newPosition.ticker}
            />
            <label>Price USD at Buy</label>
            <input onChange={(e) => handlePriceBuy(e.target.value)}
                type='number'
                step={0.01}
                min={0}
                placeholder='0.00'
                value={newPosition.priceBuy}
            />
            <label>Shares at Buy</label>
            <input onChange={(e) => handleSharesBuy(e.target.value)}
                type='number'
                placeholder='0'
                value={newPosition.sharesBuy}
            />
            <label>Cost Basis USD</label>
            <input onChange={(e) => handleCostBasis(e.target.value)}
                type='number'
                step={0.01}
                min={0}
                placeholder='Price USD @ Buy × Shares'
                value={newPosition.costBasis}
            />
            <label>Date Added</label>
            <input onChange={(e) => handleDateAdded(e.target.value)}
                type='date'
                value={newPosition.dateAdded}
            />
            <label>Price USD at Sell</label>
            <input onChange={(e) => handlePriceSell(e.target.value)}
                type='number'
                step={0.01}
                min={0}
                placeholder='0.00'
                value={newPosition.priceSell}
            />
            <label>Shares at Sell</label>
            <input onChange={(e) => handleSharesSell(e.target.value)}
                type='number'
                placeholder='0'
                value={newPosition.sharesSell}
            />
            <label>Current Price USD</label>
            <input onChange={(e) => handlePriceCurrent(e.target.value)}
                type='number'
                step={0.01}
                min={0}
                placeholder='0.00'
                value={newPosition.priceCurrent}
            />
            <label>Unrealized Profit/Loss</label>
            <input onChange={(e) => handleUnrealizedProfitLoss(e.target.value)}
                type='number'
                step={0.01}
                min={0}
                placeholder='Current Price USD × Shares'
                value={newPosition.unrealizedProfitLoss}
            />
            <label>Realized Profit/Loss</label>
            <input onChange={(e) => handleRealizedProfitLoss(e.target.value)}
                type='number'
                step={0.01}
                min={0}
                placeholder='Price USD @ Sell × Shares'
                value={newPosition.realizedProfitLoss}
            />
            <button type='submit' className='btn btn-primary w-100'>Submit</button>
        </form>
    )
}