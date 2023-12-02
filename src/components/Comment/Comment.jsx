import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Comment() {
    const dispatch = useDispatch()

    const history = useHistory()

    const [commentInput, setCommentInput] = useState('');

    const setComment = () => {

        dispatch({
            type: 'SET_COMMENT',
            payload: commentInput
        })
        setCommentInput('')
        history.push("/review")

    }


    return(
        <>
            <h2>Any comments you want to leave?</h2>
            <input
                data-testid="input"
                onChange={(e) => setCommentInput(e.target.value)}
                value={commentInput}
                type='text'
                placeholder='Comment?'
            />
            <button data-testid="next" onClick={setComment}>Next</button>
        </>

    )
}

export default Comment