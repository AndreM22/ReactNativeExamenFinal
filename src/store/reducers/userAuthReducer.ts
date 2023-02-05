import { auth } from "../../services/firebase";


const initialState = {
    user: {},
  };
  
  export default (state = initialState, action: any) => {
    switch (action.type) {
      case 'IS_LOGIN':
        return {
          ...state,
          user: auth.currentUser,
        };
      default:
        return state;
    }
  };