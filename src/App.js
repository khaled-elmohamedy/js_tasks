import { useState } from 'react';
import TodoApp from './TodoApp';
import CharCounter from './CharCounter';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('todo');

    return (
        <div className="app-wrapper">
            <div className="tab-header">
                <button
                    className={`tab-button ${activeTab === 'todo' ? 'active' : ''}`}
                    onClick={() => setActiveTab('todo')}
                >
                    Todo List
                </button>
                <button
                    className={`tab-button ${activeTab === 'char' ? 'active' : ''}`}
                    onClick={() => setActiveTab('char')}
                >
                    Char Counter
                </button>
            </div>
            <div className="app-content">
                {activeTab === 'todo' ? <TodoApp /> : <CharCounter />}
            </div>
        </div>
    );
}

export default App;
