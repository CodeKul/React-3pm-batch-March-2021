import {useState} from "react";

import * as actions from "../actions/postsActions"

// export const [intialState, setInitialState] = useState(
//     {

//         posts: [],
//         loading: false,
//         hasErrors: false
//     }    
// )


export const initialState =
    {

        posts: [],
        loading: false,
        hasErrors: false,
    }    



export default function postReducer(state = initialState, action) {
    
    switch (action.type) {

        case actions.GET_POSTS:
            return {...state, loading:true}
        case actions.GET_POSTS_SUCCESS:
            return {posts: action.payload, loading:false, hasErrors:false}

            case actions.GET_POSTS_FAILURE:
                return {...state, loading: false, hasErrors:Error}
        default:
            return state;
    }
};
