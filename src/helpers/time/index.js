export const getTime = (time) => {
  const min = Math.floor((time / 1000 / 60) % 60);
  const sec = Math.floor((time / 1000) % 60);

  return `${(min < 10 && '0') || ''}${min}:${(sec < 10 && '0') || ''}${sec}`;
}
