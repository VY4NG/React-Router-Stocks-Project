import React, { useState } from 'react';
import { PostsList as initialPostsList } from '../../../PostsList';
import { Card } from 'react-bootstrap';
import RemovePost from './RemovePost';

// Function to convert date string to Date object.
const parseDate = (dateStr) => {
    const [month, day, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); // JavaScript months are 0-based.
}

// Sort the posts in reverse chronological order.
const sortPosts = (posts) => {
    return posts.slice().sort((a, b) => parseDate(b.date) - parseDate(a.date));
};

export default function Posts() {

    /* State to hold the values of inputs for posts. This is needed in order
    to add new posts. */
    const [posts, setPosts] = useState(sortPosts(initialPostsList));
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');

    // Handling a new post.
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new post.
        const newPost = {
            id: posts.length + 1, // ID assignment.
            title,
            date,
            content
        };

        // Update the posts state with the new post.
        setPosts(prevPosts => sortPosts([...prevPosts, newPost]));

        // Clear the input fields after submitting a new post.
        setTitle('');
        setDate('');
        setContent('');
    }

    // Handle the removal of a post.
    const handleRemove = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    // Use React Bootstrap for styling.
    return (
        <div>
            <h2>Create a post</h2>

            {/* Form to add a new post. */}
            <form onSubmit={handleSubmit} className='mb-4'>
                <div className='mb-3'>
                    <label htmlFor='post-title' className='form-label'>Post Title</label>
                    <input
                        type='text'
                        id='post-title'
                        className='form-control'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='post-date' className='form-label'>Date (MM-DD-YYYY)</label>
                    <input
                        type='text'
                        id='post-date'
                        className='form-control'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='post-content' className='form-label'>Content</label>
                    <textarea
                        id='post-content'
                        className='form-control'
                        rows='3'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Add Post</button>
            </form>
            <br></br>
            <h3>Posts</h3>
            <br></br>

            {/* Render sorted posts. */}
            <div>
                {posts.map(post => (
                    <Card key={post.id} className='mb-4 bg-light'>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>{post.date}</Card.Subtitle>
                            <Card.Text>{post.content}</Card.Text>

                            {/* Use the RemovePost component. */}
                            <RemovePost postId={post.id} onRemove={handleRemove} />
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}