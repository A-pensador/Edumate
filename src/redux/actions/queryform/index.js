import axios from 'axios';
export const queryform = (post_data) => {
  return async (dispatch, getState) => {
    var allsubjects = "";
    post_data.selectedSubjects.forEach((item) => {
          allsubjects += ','+item.value
        })
    var newdate = `${post_data.date.getFullYear()}-${post_data.date.getMonth()+1}-${post_data.date.getDate()}`;
    var url = 'https://edumate.org.in/api/submit_query?name='+post_data.name+'&email='+post_data.email+'&phoneNo='+post_data.phoneNo+'&adress='+post_data.adress+'&school='+post_data.school+'&class='+post_data.class+'&date='+newdate+'&board='+post_data.board+'&selectedSubjects='+allsubjects+'&chapter='+post_data.chapter+'&preferredTime='+post_data.preferredTime
    console.log(url)
    await axios
      .post(url,{})
      .then((response) => {
        dispatch({
          type: 'QUERY',
          payload: response.data.data,
          
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};