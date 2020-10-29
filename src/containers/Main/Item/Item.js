import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { draftActions } from '../../../redux/draft/actions';
import { selectDraftByID } from '../../../redux/draft/selectors';
import { tableActions } from '../../../redux/table/actions';

import { selectBottomIndex, selectSentenceByID, selectTopIndex } from "../../../redux/table/selectors";

import { Cell, Input } from './Item.style';

const STEP = 100;

const Item = ({ id }) => {
  const dispatch = useDispatch();
  const sentence = useSelector(selectSentenceByID(id));
  const topIndex = useSelector(selectTopIndex);
  const bottomIndex = useSelector(selectBottomIndex);
  const draft = useSelector(selectDraftByID(id));
  const ref = useRef();

  const startEdit = useCallback(() => {
    dispatch(draftActions.draftRefresh(id, sentence, true));
  }, [dispatch, id, sentence]);

  const draftChange = useCallback(({ target: { value } }) => {
    dispatch(draftActions.draftRefresh(id, value, true));
  }, [dispatch, id]);

  const finishEdit = useCallback(() => {
    dispatch(draftActions.draftRefresh(id, draft.text, false));
  }, [dispatch, draft, id]);

  const isInViewport = useCallback(() => {
    if (ref.current && id === topIndex + STEP * 2) {
      const bounding = ref.current.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    return false;
  }, [id, topIndex]);

  const listener = useCallback(() => {
    if (isInViewport()) {
      dispatch(tableActions.topIndexRefresh(topIndex + STEP));
      dispatch(tableActions.bottomIndexRefresh(bottomIndex + STEP));
    }
  }, [bottomIndex, dispatch, isInViewport, topIndex]);

  useEffect(() => {
    if (id === topIndex + STEP * 2) {
      const list = window.addEventListener('scroll', listener);
      return window.removeEventListener('scroll', list);
    }
  }, [id, listener, topIndex]);

  if (draft) {
    const { text, isEditing } = draft;

    return <tr ref={ref}>
      <Cell>
        {
          isEditing
            ? <Input type="text" value={text} onChange={draftChange} onBlur={finishEdit} />
            : text
        }
      </Cell>
    </tr>;
  }

  return (
    <tr ref={ref}>
      <Cell onClick={startEdit}>{sentence}</Cell>
    </tr>
  );
}

export default Item;
export { Item };