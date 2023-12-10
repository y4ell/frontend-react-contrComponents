import { useState } from 'react'
function App() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');
    const [remark, setRemark] = useState('');
    const [agreeNewsletter, toggleAgreeNewsletter] = useState(false);

    return (
        <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
        />
    )
}