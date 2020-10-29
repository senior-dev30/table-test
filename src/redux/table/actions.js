import { ReduxUtils } from "../../utils/ReduxUtils";

const prefix = '[Table]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
  SENTENCES_REFRESH: `${prefix} sentences-refresh`,

  TOP_INDEX_REFRESH: `${prefix} top-index-refresh`,
  BOTTOM_INDEX_REFRESH: `${prefix} bottom-index-refresh`,
};

export const tableActions = {
  ...TYPES,
  sentencesRefresh: makeActionCreator(TYPES.SENTENCES_REFRESH, 'sentences'),

  topIndexRefresh: makeActionCreator(TYPES.TOP_INDEX_REFRESH, 'topIndex'),
  bottomIndexRefresh: makeActionCreator(TYPES.BOTTOM_INDEX_REFRESH, 'bottomIndex'),
};
