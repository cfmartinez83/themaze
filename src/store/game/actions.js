import api from 'api';
import { selectNickName, selectStartedAt } from 'store/game/selectors';
import * as t from 'store/game/types';
import { addUser } from 'store/leaderboard/actions';

export const newGame = (nickName) => {
  return (dispatch) => {
    dispatch({ type: t.GAME_NEW, nickName });
  }
}

export const gameEnded = (moves) => {
  return async(dispatch, getState) => {
    try {
      api('http://www.mocky.io/v2/5df38f523100006d00b58560', null, 'GET');

      const nickName = selectNickName(getState());
      const startedAt = selectStartedAt(getState());
      const endedAt = new Date();
      const time = +endedAt - new Date(startedAt);
      dispatch({ type: t.GAME_ENDED, moves, endedAt });
      dispatch(addUser(nickName, moves, time));
    }
    catch(err) {
      dispatch({ type: t.GAME_ERROR, err });
    }
  }
}
