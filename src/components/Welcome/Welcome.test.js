import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from 'components/Welcome';

test('leaderboard', async () => {
  const { 
    container, 
    getByText, 
  } = render(
    <BrowserRouter>
      <Route path="/"><Welcome /></Route>
    </BrowserRouter>
  );

  const link1 = getByText(/Play/);
  fireEvent.click(link1);

  expect(container).toHaveTextContent(/Play/);

  const link2 = getByText(/LeaderBoard/);
  fireEvent.click(link2);

  expect(container).toHaveTextContent(/LeaderBoard/);

});
