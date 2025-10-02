import { useState } from 'react';
import './FormComponent.scss'

const FormComponent = () => {
    const [players, setplayers] = useState<string>('');
    const [rounds, setRounds] = useState<string>('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
    
        const n = Number(players);
        const d = Number(rounds);
        
        if (n % 2 === 0 && d >= 1 && d <= n - 1) {
            roundRobin(n, d)
        } else {
            console.log("Praticipants must be even number and rounds lesser than players")
        }
    }

    function roundRobin(n, d) {
        const players = [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 3, name: "Charlie" },
            { id: 4, name: "Diana" },
            { id: 5, name: "Ethan" },
            { id: 6, name: "Fiona" },
            { id: 7, name: "George" },
            { id: 8, name: "Hannah" },
            { id: 9, name: "Isaac" },
            { id: 10, name: "Julia" },
            { id: 11, name: "Kevin" },
            { id: 12, name: "Laura" },
            { id: 13, name: "Michael" },
            { id: 14, name: "Nina" },
            { id: 15, name: "Oscar" },
            { id: 16, name: "Paula" },
            { id: 17, name: "Quentin" },
            { id: 18, name: "Rachel" },
            { id: 19, name: "Samuel" },
            { id: 20, name: "Tina" }
        ];

        // fixera spelare [0] och rotera övriga 
        const pairs = []

        for(let r = 0; r < n - 1; r++) {

            const pair = []

            pair.push(players[0].name + ' vs. ' + players[(r % (n - 1) + 1)].name)

            for(let i = 1; i < n / 2; i++) {
                const firstPlayer = players[(r + i) % (n - 1) + 1];
                const secondPlayer = players[(r + n - i - 1) % (n - 1) + 1];

                pair.push(firstPlayer.name + ' vs. ' + secondPlayer.name)
            }

            pairs.push(pair)
        }

        pairs[d - 1].forEach(match => {
            console.log(match)
        })

    }


    return (
        <>
            <form id="input-form" className="input-form" onSubmit={handleSubmit}>
                <label htmlFor="player">Players (must be even number)*</label>
                <input 
                    type="number" 
                    id="player" 
                    value={players}
                    onChange={(e) => setplayers(e.target.value)}
                    required
                />
                <label htmlFor="rounds">Tournament Rounds (must be at least 1 and lesser than players)*</label>
                <input 
                    type="number" 
                    id="rounds"
                    value={rounds}
                    onChange={(e) => setRounds(e.target.value)} 
                    required 
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormComponent;