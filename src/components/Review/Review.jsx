import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
        // history.push("/")
    }
    return (
        <div>
            <h4>Feelings: {feeling}</h4>
            <h4>Understanding: {understanding}</h4>
            <h4>Support: {support}</h4>
            <h4>Comments: {comments}</h4>
            <button onClick={submitFeedback}>Submit</button>
        </div>
    )
}

export default Review;