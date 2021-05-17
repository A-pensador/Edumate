import axios from 'axios';
export const subjects = (class_id) => {
  return async (dispatch, getState) => {
    await axios
      .get("https://edumate.org.in/api/subjects?class_id"+class_id)
      .then((response) => {
        dispatch({
          type: 'SUBJECTS',
          payload: response.data.data,
          
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};