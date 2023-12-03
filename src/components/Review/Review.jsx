import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

function Review() {
    const feeling = useSelector((store) => store.feeling)
    const understanding = useSelector((store) => store.understanding)
    const support = useSelector((store) => store.support)
    const comments = useSelector((store) => store.comment)

    const history = useHistory()

    const submitFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {feeling, understanding, support, comments}
        }).then((response) => {
        }).catch((err) => {
            console.log(err);
        });
        history.push("/submissionSuccess")
    }
    return (
        <div>
            <h3>Review your feedback</h3>
            <h3>Feelings: {feeling}</h3>
            <h3>Understanding: {understanding}</h3>
            <h3>Support: {support}</h3>
            <h3>Comments: {comments}</h3>
            <br />
            <br />
            <Link to="/comment"><Button variant="outlined">Back</Button></Link>
            <Button variant="contained" data-testid="next" onClick={submitFeedback}>Submit</Button>
        </div>
    )
}

export default Review;