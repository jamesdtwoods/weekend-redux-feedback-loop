import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory, Link  } from 'react-router-dom';
import {Button, TextField} from '@mui/material';

function Comment() {
    const dispatch = useDispatch()

    const history = useHistory()

    const [commentInput, setCommentInput] = useState('');

    const setComment = () => {

        dispatch({
            type: 'SET_COMMENT',
            payload: commentInput
        })
        history.push("/review")

    }


    return(
        <>
            <h2>Any comments you want to leave?</h2>
            {/* <input
                data-testid="input"
                onChange={(e) => setCommentInput(e.target.value)}
                value={commentInput}
                type='text'
                placeholder='Comment?'
            />
            <br />
            <br /> */}
            <TextField
                id="comment-input"
                label="Comment?"
                type="text"
                onChange={(e) => setCommentInput(e.target.value)}
                value={commentInput}
                error={commentInput === ''}
            />
            <br />
            <br />
            <Link to="/support"><Button variant="outlined">Back</Button></Link>
            <Button variant="contained" data-testid="next" onClick={setComment}>Next</Button>
        </>

    )
}

export default Comment