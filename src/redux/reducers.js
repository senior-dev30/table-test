import draftReducer from "./draft/reducer";
import tableReducer from "./table/reducer";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Table: tableReducer,
  Draft: draftReducer,
};