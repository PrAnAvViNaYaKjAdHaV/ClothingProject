import { USER_ACTION_TYPES } from "./user.types";
import { UserData } from "../../utils/firebase/firebase.utils";
import { AnyAction } from "redux";
import { signInSuccess ,signOutFailed,signUpFailed,signInFailed} from "./user.action";
export type UserInitial = {
  currentUser: UserData | null;
  isLoading: boolean;
  error: Error | null;
};
export const USER_INITIAL_STATE: UserInitial = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action: AnyAction
): UserInitial => {
  if(signInSuccess.match(action)){
     return {...state,currentUser:action.payload}
  }
  if(signOutFailed.match(action)||signUpFailed.match(action)||signInFailed.match(action)){
    return {...state,error:action.payload}
  }
  return state;
  // switch (type)
  //   case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
  //     return { ...state, currentUser: payload };
  //   case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
  //     return {...state,currentUser:null}
  //   case USER_ACTION_TYPES.SIGN_OUT_FAILED:
  //   case USER_ACTION_TYPES.SIGN_UP_FAILED:
  //   case USER_ACTION_TYPES.SIGN_IN_FAILED:
  //     return { ...state, error: payload };
  //   default:
  //     return state;
  // }
};
