export const selectUsers = (state) => state.leaderboard.users.sort((a, b) => a.moves - b.moves || a.time - b.time).slice(0, 50);
