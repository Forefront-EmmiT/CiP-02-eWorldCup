import { useState } from 'react';
import './FormComponent.scss'


const FormComponent = () => {
    const [participants, setParticipants] = useState<string>('');
    const [rounds, setRounds] = useState<string>('');

    function handleForm(e: React.FormEvent) {
        e.preventDefault();
    
        const n = Number(participants);
        const d = Number(rounds);
        
        if (n % 2 === 0) {
            console.log("Form submitted", {n, d})
        } else {
            console.log("Praticipants must be even number")
        }
    }

    return (
        <>
            <form id="input-form" className="input-form" onSubmit={handleForm}>
                <label htmlFor="participant">Participants (must be even number)</label>
                <input 
                    type="number" 
                    id="participant" 
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                    required
                />
                <label htmlFor="rounds">Tournament Rounds</label>
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