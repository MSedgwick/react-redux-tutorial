import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BasicButton from './pages/BasicButton';
import PropsButton from './pages/PropsButton';
import Counter from './pages/Counter';
import ReduxButton from './pages/ReduxButton';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path={'/button/basic'} element={<BasicButton />} />
        <Route exact path={'/button/props'} element={<PropsButton />} />
        <Route exact path={'/button/counter'} element={<Counter />} />
        <Route exact path={'/button/redux'} element={<ReduxButton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
