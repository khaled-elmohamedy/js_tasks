import { useState, useEffect } from 'react';
import './App.css';

function CharCounter() {
    const [charInput, setCharInput] = useState('');
    const [statusMessage, setStatusMessage] = useState('Too short');

    useEffect(() => {
        const length = charInput.length;
        if (length < 10) {
            setStatusMessage('Too short');
        } else if (length <= 20) {
            setStatusMessage('Good');
        } else {
            setStatusMessage('Too long');
        }
    }, [charInput]);

    const handleCharInput = (e) => {
        const value = e.target.value;
        if (value.length <= 30) {
            setCharInput(value);
        }
    };

    return (
        <div className="todo-container">
            <h1>Live Character Counter</h1>
            <div className="char-counter-section">
                <input
                    type="text"
                    placeholder="Type something... (max 30 chars)"
                    value={charInput}
                    onChange={handleCharInput}
                    className="char-input"
                />
                <div className="char-counter-info">
                    <div className="char-count">Characters: {charInput.length}/30</div>
                    <div className={`char-message ${statusMessage.toLowerCase().replace(' ', '-')}`}>
                        {statusMessage}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharCounter;
