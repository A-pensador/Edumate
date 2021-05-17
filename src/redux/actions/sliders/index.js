import axios from 'axios';
export const sliders = () => {
  return async (dispatch, getState) => {
    await axios
      .get("https://edumate.org.in/api/sliders")
      .then((response) => {
        dispatch({
          type: 'SLIDERS',
          payload: response.data.data,
          
        });
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};