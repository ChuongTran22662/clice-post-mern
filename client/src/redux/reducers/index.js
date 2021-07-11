import { combineReducers } from "redux";
import modalReducers from "./modal";
import postsReducers from "./posts";

export default combineReducers({
    posts: postsReducers,
    modal: modalReducers
})