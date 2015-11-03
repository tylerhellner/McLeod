import { combineReducers } from 'redux';
import { nodes, setEditingIndex } from './nodes';
import columns from './columns';

const rootReducer = combineReducers({
  nodes,
  setEditingIndex,
  columns
});

export default rootReducer;
