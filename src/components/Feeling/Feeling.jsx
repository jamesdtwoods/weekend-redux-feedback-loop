import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import {Button, Rating, Typography, TextField} from '@mui/material';


function Feeling() {
    const dispatch = useDispatch()

    const history = useHistory()

    const [feelingInput, setFeelingInput] = useState('');

    const setFeeling = () => {
        if (feelingInput === '' || feelingInput > 5 || feelingInput < 0) {
            alert("Please enter a rating between 0 and 5")
        } else {
            dispatch({
                type: 'SET_FEELING',
                payload: feelingInput
            })
            history.push("/understanding")
        }
    }


    return(
        <>
            {/* <h2>How are you feeling today?</h2>
            <input
                data-testid="input"
                onChange={(e) => setFeelingInput(e.target.value)}
                value={feelingInput}
                type='number'
                placeholder='Feeling?'
            />
            <br />
            <br /> */}
            {/* <Typography component="legend"><h2>How are you feeling today?</h2></Typography>
            <Rating
                name="feeling"
                value={feelingInput}
                onChange={(e) => setFeelingInput(e.target.value)}
            />
            <br />
            <br /> */}
            <TextField
                id="outlined-number"
                label="Feeling?"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setFeelingInput(e.target.value)}
                value={feelingInput}
                error={feelingInput > 5 || feelingInput < 0}
                helperText="Must enter a value between 0 and 5"
            />
            <br />
            <br />
            <Button data-testid="next" onClick={setFeeling} variant="contained">Next</Button>
        </>

    )
}

export default Feeling