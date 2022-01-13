import React from "react";
import { useEffect, useState } from "react";
import { Wrapper } from "common/Timer/styled";

const Timer = () => {
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const now = new Date();
  const calculateTime = () => {
    const diff = +new Date() - +now;
    const min = Math.floor((diff / 1000 / 60) % 60);
    const sec = Math.floor((diff / 1000) % 60);

    setMinutes(`${(min < 10 && '0') || ''}${min}`)
    setSeconds(`${(sec < 10 && '0') || ''}${sec}`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      calculateTime();
    }, 1000);
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Wrapper>{ `${minutes || '00'}:${seconds || '00'}` }</Wrapper>;
};

export default Timer;
