import { combineReducers } from 'redux';
import game from 'store/game/reducer';
import leaderboard from 'store/leaderboard/reducer';

const rootReducer = combineReducers({
  game,
  leaderboard,
});

export default rootReducer;
