import { useState } from 'react';

const Home = () => {
    //let name = 'Armağan';
    const [name, setName] = useState('Armağan');
    const [age, setAge] = useState('25');

    const handleClick = () => {
        setName('Armağanim');
        setAge('19');
    }

    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;