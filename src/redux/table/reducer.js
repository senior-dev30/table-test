import { tableActions } from "./actions";

const initialState = {
  topIndex: 0,
  bottomIndex: 300,
  sentences: [],
};

export default function tableReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case tableActions.SENTENCES_REFRESH: {
      return {
        ...state,
        sentences: payload.sentences,
      };
    }

    case tableActions.TOP_INDEX_REFRESH: {
      return {
        ...state,
        topIndex: payload.topIndex,
      };
    }

    case tableActions.BOTTOM_INDEX_REFRESH: {
      return {
        ...state,
        bottomIndex: payload.bottomIndex,
      };
    }
    default:
      return state;
  }
}
