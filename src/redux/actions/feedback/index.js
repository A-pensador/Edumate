import axios from 'axios';
export const feedback = () => {
  return async (dispatch, getState) => {
    await axios
      .get("https://edumate.org.in/api/feedbacks")
      .then((response) => {
        console.log('response')
        console.log(response)
        dispatch({
          type: 'FEEDBACK',
          payload: response.data.data,
          
        });
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};