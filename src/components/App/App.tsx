import { Image, Menu, MenuItem } from 'semantic-ui-react';
import { NavLink, Route, Routes } from 'react-router-dom';

import githubLogo from '../../assets/images/logo-github.png';

import './App.scss';
import HomePage from '../HomePage/HomePage';
import FaqPage from '../FaqPage/FaqPage';
import Error404 from '../Error404/Error404';

function App() {
  return (
    <div className="App">
      <Image src={githubLogo} size="small" centered />
      <Menu>
        <MenuItem as={NavLink} to="/Github-Searcher">
          Recherche
        </MenuItem>
        <MenuItem as={NavLink} to="/faq">
          FAQ
        </MenuItem>
      </Menu>
      <Routes>
        <Route path="/Github-Searcher" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
