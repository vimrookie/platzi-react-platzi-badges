import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Badges from './pages/Badges';
import BadgeNew from './pages/BadgeNew';
import BadgeDetailsContainer from './pages/BadgeDetailsContainer';
import BadgeEdit from './pages/BadgeEdit';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:id/edit" component={BadgeEdit} />
          <Route exact path="/badges/:id/" component={BadgeDetailsContainer} />
          <Route exact path="/" component={Home} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
