import React, {useState} from 'react';

const TestComparison = () => {
    const [letters, setLetters] = useState(['A', 'B', 'C', 'D']);
    const [numbers, setNumbers] = useState([1, 2, 3, 4]);


    return (
        <div>
            <div>
                <h2>Letters</h2>
                    {letters.map((letter, index) => (
                            <button key={index}> {letter} </button>
                    ))}
            </div>
            <div>
                <h2>Numbers</h2>
                    {numbers.map((number, index) => (
                        <button key={index}> {number} </button>
                    ))}
            </div>
        </div>
    );
}
export default TestComparison;