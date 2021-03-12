import { USER_LOGGED_IN } from "./userTypes";
import { USER_LOGGED_OUT } from "./userTypes";
import { SET_USER } from "./userTypes";
import { SET_USER_REQUEST } from "./userTypes";

const initialState = {
  isLoggedInState: false,
  userAccount: {},
  pendingCount: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        isLoggedInState: true,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedInState: false,
      };
    case SET_USER:
      return {
        ...state,
        userAccount: action.payload,
      };
    case SET_USER_REQUEST:
      return {
        ...state,
        pendingCount: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
