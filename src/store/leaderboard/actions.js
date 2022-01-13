import * as t from 'store/leaderboard/types';

export const addUser = (nickName, moves, time) => {
  return (dispatch) => {
    dispatch({ type: t.LEADERBOARD_ADD, nickName, moves, time });
  }
}
