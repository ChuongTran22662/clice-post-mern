import { INIT_STATE } from "../../constant";
import { createPost, deletePost, getPosts, getType, updatePost } from "../actions";

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(getPosts.getPostsRequest):
            return {
                ...state,
                isLoading: true
            }
        case getType(getPosts.getPostsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPostsFailure):
            return {
                ...state,
                isLoading: false,
            }
        case getType(createPost.createPostSuccess):
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case getType(updatePost.updatePostSuccess):
            return {
                ...state,
                data: state.data.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                ),
            }
        case getType(deletePost.deletePostSuccess):
            return {
                ...state,
                data: state.data.filter(e => {
                    return e._id !== action.payload._id;
                })
            }
        default:
            return state;
    }
}