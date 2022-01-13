import * as t from 'store/game/types';
import initialState from './initialState';

const game = (state = initialState, action) => {
  switch (action.type) {
    case t.GAME_NEW: {
      return {
        ...state,
        nickName: action.nickName,
        moves: 0,
        startedAt: new Date(),
      };
    }
    case t.GAME_ENDED: {
      return {
        ...state,
        moves: action.moves,
        endedAt: action.endedAt,
      };
    }
    case t.GAME_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
}

export default game;
