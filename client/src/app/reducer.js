import { combineReducers } from 'redux';

import dashboardReducer from '../features/Dashboard/reducer';
import boardReducer from '../features/Board/reducer';
import taskReducer from '../features/Task/reducer';

export default combineReducers({
  dashboard: dashboardReducer,
  board: boardReducer,
  task: taskReducer,
});
