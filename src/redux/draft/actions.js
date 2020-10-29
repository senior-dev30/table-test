import { ReduxUtils } from "../../utils/ReduxUtils";

const prefix = '[Draft]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
  DRAFT_REFRESH: `${prefix} draft-refresh`,
};

export const draftActions = {
  ...TYPES,
  draftRefresh: makeActionCreator(TYPES.DRAFT_REFRESH, 'id', 'text', 'isEditing'),
};
