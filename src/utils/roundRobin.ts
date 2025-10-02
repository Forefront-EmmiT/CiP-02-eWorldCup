import type { Player } from "../types/types";

export function roundRobin(n: number, d: number, playerData: Player[]) {
  const players: Player[] = playerData;

  const pairs: string[][] = [];

  for (let r = 0; r < n - 1; r++) {
    const pair: string[] = [];

    pair.push(players[0].name + ' vs. ' + players[(r % (n - 1)) + 1].name);

    for (let i = 1; i < n / 2; i++) {
      const firstPlayer: Player = players[((r + i) % (n - 1)) + 1];
      const secondPlayer: Player = players[((r + n - i - 1) % (n - 1)) + 1];

      pair.push(firstPlayer.name + ' vs. ' + secondPlayer.name);
    }

    pairs.push(pair);
  }

  pairs[d - 1].forEach(match => {
    console.log(match);
  });
}
