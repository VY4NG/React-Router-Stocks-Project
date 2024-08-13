import React from 'react';
import { Button } from 'react-bootstrap';

// Define the RemovePost component, which accepts 'postId' and 'onRemove' as props.
const RemovePost = ({ postId, onRemove }) => {
    return (
        <Button
            variant='danger'
            onClick={() => onRemove(postId)}
            className='mt-2'
        >
            Remove Post
        </Button>
    );
};

export default RemovePost;