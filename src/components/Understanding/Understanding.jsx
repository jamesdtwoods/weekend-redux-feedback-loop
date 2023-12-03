import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
import {Button, Rating, Typography} from '@mui/material';

function Understanding() {
    const dispatch = useDispatch()

    const history = useHistory()

    const [understandingInput, setUnderstandingInput] = useState('');

    const setUnderstanding = () => {
        if (understandingInput === '' || understandingInput > 5 || understandingInput < 0) {
            alert("Please enter a rating between 0 and 5")
        } else {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understandingInput
            })
            history.push("/support")
        }
    }


    return(
        <>
            {/* <h2>How are you understanding the content?</h2>
            <input
                data-testid="input"
                onChange={(e) => setUnderstandingInput(e.target.value)}
                value={understandingInput}
                type='number'
                placeholder='Understanding?'
            />
            <br />
            <br /> */}
            <Typography component="legend"><h2>How are you understanding the content?</h2></Typography>
            <Rating
                name="understanding"
                value={understandingInput}
                onChange={(e) => setUnderstandingInput(e.target.value)}
            />
            <br />
            <br />
            <Link to="/"><Button variant="outlined">Back</Button></Link>
            <Button variant="contained" data-testid="next" onClick={setUnderstanding}>Next</Button>
        </>

    )
}

export default Understanding