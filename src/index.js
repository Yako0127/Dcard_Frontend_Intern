import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './component/Header'
import ReposInfo from './page/ReposInfo'
import ReposList from './page/ReposList'
import ErrorPage from './page/ErrorPage'
import { Route, Routes } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users/:username/repos" element={<ReposList />} />
        <Route path="/users/:username/repos/:repos" element={<ReposInfo />} />

        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
