import Maze from 'common/Maze';
import { findTheWay, randomMaze } from 'helpers/maze';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Wrapper } from './styled';

const Logo = () => {
  const [maze, setMaze] = useState();
  const [stack, setStack] = useState();
  const [currentPosition, setCurrentPosition] = useState(0);

  const x = 12;
  const y = 12;

  useEffect(() => {
    setMaze(randomMaze(x, y)); // creo laberinto
  }, []);

  useEffect(() => {
    if (maze) {
      setStack(findTheWay(maze)); // busco el camino
    }
  }, [maze]);

  useEffect(() => {
    if (stack) {
      if (currentPosition < stack.length - 1) {
        setTimeout(() => {
          setCurrentPosition(currentPosition + 1); // me muevo a la siguiente position
        }, 150);
      } else {
        setTimeout(() => {
          setCurrentPosition(1); // reinicio juego
        }, 1500);
      }
    }
  }, [currentPosition, stack]);

  return <Wrapper>
    { maze && stack && currentPosition ? <Maze maze={ maze } currentX={ stack[currentPosition].x } currentY={ stack[currentPosition].y } /> : null }
  </Wrapper>;
};

export default Logo;
