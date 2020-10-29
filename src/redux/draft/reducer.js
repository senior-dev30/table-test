import { draftActions } from "./actions";

const initialState = {};

export default function draftReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case draftActions.DRAFT_REFRESH: {
      return {
        ...state,
        [payload.id]: { text: payload.text, isEditing: payload.isEditing },
      };
    }
    default:
      return state;
  }
}
