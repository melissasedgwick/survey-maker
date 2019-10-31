import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import SurveyCreate from './pages/SurveyCreate';
import SurveyDelete from './pages/SurveyDelete';
import SurveyEdit from './pages/SurveyEdit';
import SurveyAll from './pages/SurveyAll';
import SurveyIndividual from './pages/SurveyIndividual';
import UserCreate from './pages/UserCreate';
import Header from './components/Header';
import history from './history';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={SurveyAll} />
              <Route path="/survey/new" component={SurveyCreate} />
              <Route path="/survey/edit/:id" component={SurveyEdit} />
              <Route path="/survey/delete/:id" component={SurveyDelete} />
              <Route path="/survey/:id" component={SurveyIndividual} />
              <Route path="/users/new" component={UserCreate} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
