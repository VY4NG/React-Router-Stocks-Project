import React from 'react';
import { useState, useEffect } from 'react';
import TrackStockForm from './StockForm';
import TrackedStockList from './StockList';
import UpdateStockModal from '../../modal/UpdateStockModal';
import { Container } from 'react-bootstrap';

export default function TrackedPositions() {

    // Created const variable for mockAPI URL.
    const STOCKS_API_URL = "https://66858386b3f57b06dd4d0089.mockapi.io/crud/app/tests/api/stocks"

    // Created state to save stocks from the API.
    const [stocks, setStocks] = useState([{
        company: '',
        ticker: '',
        priceBuy: '',
        sharesBuy: '',
        costBasis: '',
        dateAdded: '',
        priceSell: '',
        sharesSell: '',
        priceCurrent: '',
        unrealizedProfitLoss: '',
        realizedProfitLoss: ''
    }]);

    /* Created state for the newPosition variable. Setting a new position as an 
    object as defined within useState. */
    const [newPosition, setNewPosition] = useState({
        company: '',
        ticker: '',
        priceBuy: '',
        sharesBuy: '',
        costBasis: '',
        dateAdded: '',
        priceSell: '',
        sharesSell: '',
        priceCurrent: '',
        unrealizedProfitLoss: '',
        realizedProfitLoss: ''
    })

    // Function to update the state for newPosition, updating company.
    function handleCompany(companyValue) {
        setNewPosition({
            ...newPosition, // Takes the spread value of the new position.
            company: companyValue // Sets the company value equal to companyValue.
        })
    }

    // Function to update the state for newPosition, updating ticker.
    function handleTicker(tickerValue) {
        setNewPosition({
            ...newPosition, // Takes the spread value of the new position.
            ticker: tickerValue // Sets the ticker value equal to tickeryValue.
        })
    }

    // Function to update the state for newPosition, updating priceBuy.
    function handlePriceBuy(priceBuyValue) {
        setNewPosition({
            ...newPosition, // Takes the spread value of the new position.
            priceBuy: priceBuyValue // Sets the priceBuy value equal to priceBuyValue.
        })
    }

    // Function to update the state for newPosition, updating sharesBuy.
    function handleSharesBuy(sharesBuyValue) {
        setNewPosition({
            ...newPosition, // Takes the spread value of the new position.
            sharesBuy: sharesBuyValue // Sets the sharesBuy value equal to sharesBuyValue.
        })
    }

    // Function to update the state for newPosition, updating costBasis.
    function handleCostBasis(costBasisValue) {
        setNewPosition({
            ...newPosition, // Takes the spread value of the new position.
            costBasis: costBasisValue // Sets the costBasis value equal to costBasisValue.
        })
    }

    // Function to update the state for newPosition, updating dateAdded.
    function handleDateAdded(dateAddedValue) {
        setNewPosition({
            ...newPosition, // Takes the spread value of the new position.
            dateAdded: dateAddedValue // Sets the dateAdded value equal to dateAddedValue.
        })
    }

    // Function to update the state for newPosition, updating priceSell.
    function handlePriceSell(priceSellValue) {
        setNewPosition({
            ...newPosition, // Takes the spread value of the new position.
            priceSell: priceSellValue // Sets the priceSell value equal to priceSellValue.
        })
    }

    // Function to update the state for newPosition, updating sharesSell.
    function handleSharesSell(sharesSellValue) {
        setNewPosition({
            ...newPosition, // Takes the spread value of the new position.
            sharesSell: sharesSellValue // Sets the sharesSell value equal to sharesSellValue.
        })
    }

    // Function to update the state for newPosition, updating priceCurrent.
    function handlePriceCurrent(priceCurrentValue) {
        setNewPosition({
            ...newPosition, // Takes the spread value of the new position.
            priceCurrent: priceCurrentValue // Sets the priceCurrent value equal to priceCurrentValue.
        })
    }

    // Function to update the state for newPosition, updating unrealizedProfitLoss.
    function handleUnrealizedProfitLoss(unrealizedProfitLossValue) {
        setNewPosition({
            ...newPosition, // Takes the spread value of the new position.
            unrealizedProfitLoss: unrealizedProfitLossValue // Sets the unrealizedProfitLoss value equal to unrealizedProfitLossValue.
        })
    }

    // Function to update the state for newPosition, updating realizedProfitLoss.
    function handleRealizedProfitLoss(realizedProfitLossValue) {
        setNewPosition({
            ...newPosition, // Takes the spread value of the new position.
            realizedProfitLoss: realizedProfitLossValue // Sets the realizedProfitLoss value equal to realizedProfitLossValue.
        })
    }

    /* Const state variable indicating whether the update stock modal will be 
    diplayed or not. Initial value set to false, so modal not shown at start. */
    const [showModal, setShowModal] = useState(false);

    /* Const state variable indicating that the initial state has no stock
    object selected; so no current stock to update. */
    const [currentStock, setCurrentStock] = useState(null);

    /* useEffect takes an anonymous function that gets the stocks one time through. 
    This will allow re-rendering by updating state with getStocks(). */
    useEffect(() => {
        getStocks();
    }, []);

    // Function for getStocks. --> GET or Read
    const getStocks = () => {
        console.log('getStocks function - Read')
        fetch(STOCKS_API_URL) // Get stocks from the API.
            .then((data) => data.json()) // Converts the data to JSON.
            .then((data) => setStocks(data)) // setStocks to result of that data.
    }

    // Function for postNewPosition. --> POST or Create
    const postNewPosition = (e) => {
        e.preventDefault() // Prevents automatic refresh, no longer resubmitting the form.
        console.log('postNewPosition function - Create')
        fetch(STOCKS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPosition), // Created a new variable called newPosition.
        }).then(() => getStocks()) // Re-renders our component with the updated information.

        // setNewPosition so that the form clears after clicking on submit.
        setNewPosition({
            company: '',
            ticker: '',
            priceBuy: '',
            sharesBuy: '',
            costBasis: '',
            dateAdded: '',
            priceSell: '',
            sharesSell: '',
            priceCurrent: '',
            unrealizedProfitLoss: '',
            realizedProfitLoss: ''
        })
    }

    // Function for deletePosition. Targeting by ID. --> DELETE or Delete
    const deletePosition = (id) => {
        console.log('deletePosition function - Delete')
        fetch(`${STOCKS_API_URL}/${id}`, {
            method: 'DELETE',
        }).then(() => getStocks()) // Re-renders our component with the updated information.
    }

    // Function to open the update stock modal for the selected stock.
    const openUpdateModal = (stock) => {
        setCurrentStock(stock)
        setShowModal(true)
    }

    // Function to close the update stock modal and change back to no stock selected.
    const closeUpdateModal = () => {
        setShowModal(false)
        setCurrentStock(null)
    }

    // Function to handle updates on the current stock selected within the modal. 
    const handleUpdateChange = (field, value) => {
        if (currentStock) {
            setCurrentStock({
                ...currentStock, // Takes the spread value of the current stock.
                [field]: value // Sets the field to the input value. 
            })
        }
    }

    /* Function to save the updated information on the update stock modal. 
    --> PUT or Update. */
    const saveUpdatedStock = (e) => {
        e.preventDefault() // Prevents automatic refresh, no longer resubmitting the form.
        console.log('saveUpdatedStock function - Update')
        fetch(`${STOCKS_API_URL}/${currentStock.id}`, { // Takes the ID of the current stock.
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentStock),
        }).then(() => {
            getStocks() // Re-renders our component with the updated information.
            closeUpdateModal() // Close the update stock modal.
        })
    }

    /* In TrackStockForm, the postNewPosition function is passed in in order to add new
    positions to the list. All handle functions are passed in so that the form will be
    able to work as intended. newPosition is passed in to allow the form to clear on submit.

    In TrackedStockList, the variable stocks is passed in so the stocks can be rendered
    on the page. The functions deletePosition and openUpdateModal are passed in so stocks
    can be deleted and updated respectively. 
    
    showModal && currentStock && (<UpdateStockModal.../>) are passed in so the modal
    will pop up on screen to update and save an existing position along with closing the
    modal.
    */
    return (
        <Container>
            <div>
                <br></br>
                <TrackStockForm
                    postNewPosition={postNewPosition}
                    handleCompany={handleCompany}
                    handleTicker={handleTicker}
                    handlePriceBuy={handlePriceBuy}
                    handleSharesBuy={handleSharesBuy}
                    handleCostBasis={handleCostBasis}
                    handleDateAdded={handleDateAdded}
                    handlePriceSell={handlePriceSell}
                    handleSharesSell={handleSharesSell}
                    handlePriceCurrent={handlePriceCurrent}
                    handleUnrealizedProfitLoss={handleUnrealizedProfitLoss}
                    handleRealizedProfitLoss={handleRealizedProfitLoss}
                    newPosition={newPosition}
                />
                <br></br>
                <h3>Tracked Positions</h3>
                <TrackedStockList
                    stocks={stocks}
                    openUpdateModal={openUpdateModal}
                    deletePosition={deletePosition}
                />
                {showModal && currentStock && (
                    <UpdateStockModal
                        showModal={showModal}
                        closeUpdateModal={closeUpdateModal}
                        saveUpdatedStock={saveUpdatedStock}
                        currentStock={currentStock}
                        handleUpdateChange={handleUpdateChange}
                    />
                )}
            </div>
        </Container>
    )
}