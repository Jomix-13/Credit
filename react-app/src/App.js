import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import NavBar from './components/navbar';
import NavBar from './components/navbar/index.js';
import HomePage from './components/homePage';
import FooterNav from './components/FooterNav';
import { authenticate } from './store/session';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <HomePage/>
        </Route>
      </Switch>
      <FooterNav />
    </BrowserRouter>
  );
}

export default App;
