import { Image, Container, Segment, Menu, MenuItem } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import githubLogo from '../../assets/images/logo-github.png';

import './App.scss';
import SearchBar from '../SearchBar/SearchBar';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import IListRepos from '../../@types/IListRepos.d';
import MoreResultButton from '../MoreResultButton/MoreResultButton';
import Loader from '../Loader/Loader';
import HomePage from '../HomePage/HomePage';
import FaqPage from '../FaqPage/FaqPage';
import Error404 from '../Error404/Error404';

interface DataListRepos {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

function App() {
  return (
    <div className="App">
      <Image src={githubLogo} size="small" centered />
      <Menu>
        <MenuItem as={NavLink} to="/">
          Recherche
        </MenuItem>
        <MenuItem as={NavLink} to="/faq">
          FAQ
        </MenuItem>
      </Menu>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
