import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import FeedbackItem from '../FeedbackItem/FeedbackItem';

function Admin() {
    const dispatch = useDispatch()

    const feedback = useSelector((store) => store.feedback)

    useEffect(() => {
      console.log('in useEffect');
      getFeedback();
    }, []);
  
    const getFeedback = () => {
      axios({
        method: 'GET',
        url: '/feedback'
      })
        .then((response) => {
            const feedbackArray = response.data
        dispatch({
          type: 'SET_FEEDBACK',
          payload: feedbackArray
        })
        })
        .catch((error) => {
          console.log('error on GET', error);
        });
    }


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                        <th>Flag for review</th>
                    </tr>
                </thead>
                <tbody>
                {feedback.map((review) => {
                        return (
                            <FeedbackItem review={review} key={review.id} getFeedback={getFeedback} />
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Admin;