import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import { DataGrid } from '@mui/x-data-grid';

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

    // const columns = [
    //   { field: 'id', headerName: 'ID', width: 70 },
    //   { field: 'feeling', headerName: 'Feeling', type: 'number', width: 130 },
    //   { field: 'understanding', headerName: 'Understanding', type: 'number', width: 130 },
    //   { field: 'support', headerName: 'Support', type: 'number', width: 130 },
    //   { field: 'comments', headerName: 'Comments', width: 160 },
    //   { field: 'delete', headerName: 'Delete', width: 100 },
    //   { field: 'flag', headerName: 'Flag for review', width: 100 }
    // ];


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
      //   <div style={{ height: 400, width: '100%' }}>
      //   <DataGrid
      //     rows={feedback.map((review) => {
      //       return (
      //           <FeedbackItem review={review} key={review.id} getFeedback={getFeedback} />
      //       )
      //     })}
      //     columns={columns}
      //     initialState={{
      //       pagination: {
      //         paginationModel: { page: 0, pageSize: 5 },
      //       },
      //     }}
      //     pageSizeOptions={[5, 10]}
      //     checkboxSelection
      //   />
      // </div>
    )
}

export default Admin;