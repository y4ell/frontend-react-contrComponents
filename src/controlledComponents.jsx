import { useState } from 'react'
import './App.css'

function App() {
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        gender: 'neutral',
        moment: 'night',
        conditions: false
    });

    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }



    return (
        <>
            <input
                type="text"
                name="firstname"
                value={formState.firstname}
                onChange={handleChange} // <-- deze schrijfwijze is hetzelfde als (e) => handleChange(e).
                // Maar omdat het event-object automatisch wordt doorgegeven, is enkel de functienaam voldoende
            />
            <input
                type="text"
                name="lastname"
                value={formState.lastname}
                onChange={handleChange}
            />

            <select
                name="gender"
                value={formState.gender}
                onChange={handleChange}>
                <option value="neutral">Neutral</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label>
                Nacht
                <input
                    type="radio"
                    name="moment"
                    value="night"
                    checked={formState.moment === "night"}
                    onChange={handleChange}
                />
            </label>
            <label>
                Dag
                <input
                    type="radio"
                    name="moment"
                    value="day"
                    checked={formState.moment === "day"}
                    onChange={handleChange}
                />
            </label>

            <label>
                <input
                    type="checkbox"
                    name="conditions"
                    checked={formState.conditions}
                    onChange={handleChange}
                />
                Akkoord met de algemene voorwaarden
            </label>

        </>
    );
}
export default App
