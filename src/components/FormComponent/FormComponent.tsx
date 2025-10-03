import { useState } from 'react';
import './FormComponent.scss';
import data from '../../data/participantsList.json';
import { validateFormInput } from '../../validation/formValidation';
import { roundRobin } from '../../utils/roundRobin';
import { ResultComponent } from '../ResultComponent/ResultComponent';
import type { Match } from '../../types/types'

const FormComponent = () => {
  const [players, setplayers] = useState<string>('');
  const [rounds, setRounds] = useState<string>('');
  const [currentRound, setCurrentRound] = useState<Match[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const n = Number(players);
    const d = Number(rounds);

    const validation = validateFormInput(n, d, data.length);

    if (validation.isValid) {
      const round = roundRobin(n, d, data);
      setCurrentRound(round.matches)
    } else {
      console.log(validation.errorMsg);
    }
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

      {currentRound.length > 0 && (
        <ResultComponent matches={currentRound} />
      )}
    </>
  );
};

export default FormComponent;
