import { GET_MESSAGES, CREATE_MESSAGE } from "../actions/type";
const initialState = {};

const messages =  (state = initialState, action) =>{
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload;
    case CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}
export default messages