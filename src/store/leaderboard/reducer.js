import * as t from 'store/leaderboard/types';
import initialState from './initialState';

const leaderboard = (state = initialState, action) => {
  switch (action.type) {
    case t.LEADERBOARD_ADD: {
      return {
        ...state,
        users: [
          ...state.users,
          {
            nickName: action.nickName,
            moves: action.moves,
            time: action.time
          }],
      };
    }
    default:
      return state;
  }
}

export default leaderboard;
