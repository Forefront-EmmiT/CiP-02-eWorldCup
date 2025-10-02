import { useState } from 'react';
import './FormComponent.scss';
import data from '../../data/participantsList.json';
import { validateFormInput } from '../../validation/formValidation';

interface Player {
  id: number;
  name: string;
}

const FormComponent = () => {
  const [players, setplayers] = useState<string>('');
  const [rounds, setRounds] = useState<string>('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const n = Number(players);
    const d = Number(rounds);

    const validation = validateFormInput(n, d, data.length);

    if (validation.isValid) {
      roundRobin(n, d, data);
    } else {
      console.log(validation.errorMsg);
    }
  }

  function roundRobin(n: number, d: number, playerData: Player[]) {
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

  return (
    <>
      <form id="input-form" className="input-form" onSubmit={handleSubmit}>
        <label htmlFor="player">Players (must be even number)*</label>
        <input
          type="number"
          id="player"
          value={players}
          onChange={e => setplayers(e.target.value)}
          required
        />
        <label htmlFor="rounds">
          Tournament Rounds (must be at least 1 and lesser than players)*
        </label>
        <input
          type="number"
          id="rounds"
          value={rounds}
          onChange={e => setRounds(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormComponent;
