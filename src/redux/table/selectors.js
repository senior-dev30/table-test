export const selectSentences = ({ Table }) => Table.sentences.slice(Table.topIndex, Table.bottomIndex + 1);

export const selectSentenceByID = (id) => ({ Table }) => Table.sentences[id];

export const selectTopIndex = ({ Table }) => Table.topIndex;
export const selectBottomIndex = ({ Table }) => Table.bottomIndex;