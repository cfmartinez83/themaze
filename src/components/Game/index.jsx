import React from 'react';
import { useDispatch } from 'react-redux';
import { CloseButton } from 'common/CloseButton/styled';
import { withRouter } from 'react-router-dom';
import { Wrapper, Title, NickName, Summary, Moves, Label, WrapperField, WrapperTitle } from './styled';
import { useSelector } from 'react-redux';
import { selectEndedAt, selectNickName, selectStartedAt } from 'store/game/selectors';
import Maze from 'common/Maze';
import { between, randomMaze } from 'helpers/maze';
import { useState } from 'react';
import Timer from 'common/Timer';
import { useEffect } from 'react';
import { BOTTOM_WALL, LEFT_WALL, RIGHT_WALL, TOP_WALL } from 'helpers/maze/constants';
import Win from 'common/Win';
import { gameEnded } from 'store/game/actions';

const Game = ({ history }) => {
  const dispatch = useDispatch();
  const nickName = useSelector(selectNickName);
  const startedAt = useSelector(selectStartedAt);
  const endedAt = useSelector(selectEndedAt);
  const [currentX, setCurrentX] = useState();
  const [currentY, setCurrentY] = useState();
  const [finish, setFinish] = useState(false);
  const [moves, setMoves] = useState(0);
  const [maze, setMaze] = useState();
  const x = 20;
  const y = 20;
  const handleClose = () => history.push('/');
  const handleMove = (keyCode) => {
    if (!finish) { 
      // valido movimientos.
      let isValid = false;
      let current = maze.cells[currentX][currentY];
      if (keyCode === 37) {
        const nextY = currentY - 1;
        if (between(nextY, 0, 20)) {
          if (current[LEFT_WALL] && maze.cells[currentX][nextY][RIGHT_WALL]) {
            setCurrentY(nextY);
            isValid = true;
          }
        }
      } else if (keyCode === 38) {
        const nextX = currentX - 1;
        if (between(nextX, 0, 20)) {
          if (current[TOP_WALL] && maze.cells[nextX][currentY][BOTTOM_WALL]) {
            setCurrentX(nextX);
            isValid = true;
          }
        }
      } else if (keyCode === 39) {
        const nextY = currentY + 1;
        if (between(nextY, 0, 20)) {
          if (current[RIGHT_WALL] && maze.cells[currentX][nextY][LEFT_WALL]) {
            setCurrentY(nextY);
            isValid = true;
          }
        }
      } else if (keyCode === 40) {
        const nextX = currentX + 1;
        if (between(nextX, 0, 20)) {
          if (current[BOTTOM_WALL] && maze.cells[nextX][currentY][TOP_WALL]) {
            setCurrentX(nextX);
            isValid = true;
          }
        }
      }
      if (isValid) setMoves(moves + 1);
    }
  };
  useEffect(() => {
    setMaze(randomMaze(x, y)); // creo maze
  }, []);


  useEffect(() => {
    if (maze) {
      setCurrentX(maze.start.x); // inicializo position
      setCurrentY(maze.start.y);
    }
  }, [maze]);

  useEffect(() => {
    if (maze && currentX === maze.goal.x && currentY === maze.goal.y) {
      // finalizo game
      dispatch(gameEnded(moves));
      setFinish(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentX, currentY, maze]);

  const playAgainCallback = () => {
    // juego de nuevo
    setFinish(false);
    setMaze(randomMaze(x, y));
  }

  if (finish) {
    // detalle del juego
    return <Win playAgainCallback={ playAgainCallback } nickName={ nickName} moves={ moves } time={ +endedAt - +startedAt }/>;
  }

  return maze ? <Wrapper>
    <CloseButton onClick={ handleClose } title="Close"/>
    <Maze maze={ maze } onKeyDownCallback={ handleMove } currentX={ currentX } currentY={ currentY }/>
    <WrapperTitle>
      <Title>The Maze</Title>
      <Summary>
        <WrapperField>
          <Label>NickName:</Label>
          <NickName>{ nickName || 'Unknown' }</NickName>
        </WrapperField>
        <WrapperField>
          <Label>Moves:</Label>
          <Moves>{ moves }</Moves>
        </WrapperField>
        <WrapperField>
          <Label>Timer:</Label>
          <Timer />
        </WrapperField>
      </Summary>
    </WrapperTitle>
  </Wrapper> : null
};

export default withRouter(Game);
