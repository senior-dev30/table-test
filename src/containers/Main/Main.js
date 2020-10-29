import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tableActions } from '../../redux/table/actions';
import { selectSentences, selectTopIndex } from '../../redux/table/selectors';

import { SentencesUtils } from '../../utils/SentencesUtils';
import Item from './Item';

import { Table } from './Main.style';

const Main = () => {
  const dispatch = useDispatch();
  const sentences = useSelector(selectSentences);
  const topIndex = useSelector(selectTopIndex);

  useEffect(() => {
    const newSentences = SentencesUtils.generateSentences();
    dispatch(tableActions.sentencesRefresh(newSentences));
  }, [dispatch]);

  return (
    <Table>
      {sentences.map(((sentence, index) => <Item key={sentence} id={topIndex + index} />))}
    </Table>
  );
}

export default Main;
export { Main };