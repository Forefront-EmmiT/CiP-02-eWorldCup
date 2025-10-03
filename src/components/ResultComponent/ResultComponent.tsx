import { formatRound } from '../../utils/formatRound';
import type { Match } from '../../types/types';

interface ResultComponentProps {
  matches: Match[];
}

export const ResultComponent = ({ matches }: ResultComponentProps) => {
  return (
    <>
      <h2>Result:</h2>
      {matches.map((match, index) => (
        <p key={index}>{formatRound(match)}</p>
      ))}
    </>
  );
};
