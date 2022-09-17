import './App.css';
import {Routes, Route} from 'react-router-dom';
import ListItem from './components/list-item/list-item';
import {FC} from 'react';

const App: FC = () => {
    return (
        <div className="todo-app">
            <Routes>
                <Route path="/" element={<ListItem />} />
            </Routes>
        </div>
    );
}

export default App;