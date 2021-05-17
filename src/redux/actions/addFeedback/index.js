import axios from 'axios';
export const addFeedback = (state) => {
  return async (dispatch, getState) => {
    var url = "http://edumate.org.in/api/save_feedback?name="+state.name+"&feedback="+state.feedback+"&rating="+state.rating+"&email="+state.email
    console.log(url)
    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: 'CLASSES',
          payload: response.data.data,
          
        });
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};