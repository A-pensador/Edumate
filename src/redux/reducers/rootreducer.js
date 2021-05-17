import { combineReducers } from "redux"
import classes from "./classes"
import topics from "./topics"
import subjects from "./subjects"
import queryform from "./queryform"
import feedback from "./feedback"
import addFeedback from "./addFeedback"

const rootReducer = combineReducers({
  classes: classes,
  topics: topics,
  subjects: subjects,
  queryform: queryform,
  feedback: feedback,
  addFeedback: addFeedback,
})

export default rootReducer