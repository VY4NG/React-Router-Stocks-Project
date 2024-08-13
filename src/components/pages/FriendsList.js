import React, { useState, useEffect } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    Table,
    Button,
    Container
} from 'react-bootstrap';
import LoadSpinner from '../LoadSpinner';

/* The FriendsList is structured so that you can Read and Delete only. Sending a
friend request is not possible in this project and there is no need to update a friend.
This eliminates the need for the Create and Update in our CRUD operations. 

CRUD operations are complete in the tracked-stock positions folder in addition to the
modal folder. */

export default function FriendsList() {

    // API to get names, using mockAPI.
    const NAMES_API_URL = 'https://66858386b3f57b06dd4d0089.mockapi.io/crud/app/tests/api/company_users'

    // Create state to save names from the API. Set default if names does not exist.
    const [names, setNames] = useState([{
        name: ''
    }])

    // Manage loading state.
    const [loading, setLoading] = useState(true);

    // useEffect takes an anonymous function that gets the names one time through. 
    useEffect(() => {
        console.log('useEffect to fetch friends - Read')
        fetch(NAMES_API_URL) // Get names from the API.
            .then((data) => data.json()) // Converts the data to JSON.
            .then((data) => {
                setNames(data); // setNames to result of that data.
                setLoading(false); // Set loading to false once data is fetched.
            })
            .catch((error) => console.error('Error fetching friends:', error))
        setLoading(false); // Set loading to false even if there's an error.
    }, []);

    // Handle the Delete action.
    const handleDelete = (id) => {
        console.log('handleDelete function - Delete')
        fetch(`${NAMES_API_URL}/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                // Update state to remove deleted friend.
                setNames(names.filter((name) => name.id !== id));
            })
            .catch((error) => console.error('Error deleting friend:', error));
    }

    // Use React Bootstrap for styling.
    return (
        <Container>
            <div>
                <h2 className='text-center'>Friends List</h2>
            </div>

            {/* Render spinner while loading. */}
            {loading ? (
                <div className='d-flex justify-content-center align-items-center' style={{ height: '60vh' }}>
                    <LoadSpinner />
                </div>
            ) : (
                <Table striped bordered hover variant='light' className='mt-4'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unfriend</th>
                        </tr>
                    </thead>
                    <tbody>
                        {names.map((name, index) => (
                            <tr key={index}>
                                <td>{name.name}</td>
                                <td>
                                    <Button variant='danger' onClick={() => handleDelete(name.id)}>Unfriend</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    )
}