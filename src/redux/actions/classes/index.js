import axios from 'axios';
export const classes = () => {
  return async (dispatch, getState) => {
    var url = 'https://edumate.org.in/api/classes'
    // console.log(url)
    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: 'CLASSES',
          payload: response.data.data,
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};