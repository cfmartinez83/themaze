import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'components/App';

test('play', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/play/i)).toBeInTheDocument();
});

test('leaderboard', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/leaderboard/i)).toBeInTheDocument();
});
