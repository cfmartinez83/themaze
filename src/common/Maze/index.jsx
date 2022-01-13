import React, { useRef } from 'react';
import { useEffect } from 'react';
import Cell from './components/Cell';
import Row from './components/Row';
import Avatar from './components/Avatar';
import { Wrapper } from './styled';

const Maze = ({ maze, currentX, currentY, onKeyDownCallback }) => {
  const element = useRef();

  const getAvatar = (x, y) => x === currentX && currentY === y && <Avatar />;

  useEffect(() => {
    element.current.focus();
  }, []);

  const onKeyDown = (e) => {
    if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
      onKeyDownCallback(e.keyCode);
    }
  };

  const isStart = (x, y) => maze.start.x === x && maze.start.y === y;
  const isGoal = (x, y) => maze.goal.x === x && maze.goal.y === y;

  return <Wrapper onBlur={ () => element && element.current.focus() } ref={element} onKeyDown={ onKeyDown }  tabIndex={-1}>
    { maze.cells.map((r, x) => {
      return <Row key={ `row-${x}` }>
        { r.map((c, y) => {
          return <Cell key={ `cell-${x}-${y}` } top={ c[0] } right={ c[1] } bottom={ c[2] } left={ c[3] } color={ c[4] } isStart={ isStart(x, y) } isGoal={ isGoal(x, y) }>
            { getAvatar(x, y) }
          </Cell>
        })}
      </Row>
    })}
  </Wrapper>;
};

export default Maze;
