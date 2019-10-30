import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SurveyCreate from './pages/SurveyCreate'
import SurveyDelete from './pages/SurveyDelete'
import SurveyEdit from './pages/SurveyEdit'
import SurveyAll from './pages/SurveyAll'
import SurveyIndividual from './pages/SurveyIndividual'
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={SurveyAll} />
              <Route path="/survey/new" component={SurveyCreate} />
              <Route path="/survey/edit" component={SurveyEdit} />
              <Route path="/survey/delete" component={SurveyDelete} />
              <Route path="/survey/:id" component={SurveyIndividual} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
