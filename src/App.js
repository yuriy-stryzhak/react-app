import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {

    return (

        <div className="wrapper">
            <BrowserRouter>
                <Header />
                <Navbar />
                <div className='wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
                        <Route path='/profile' element={<Profile posts={props.posts} />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
