import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SurveyCreate from './pages/SurveyCreate'
import SurveyDelete from './pages/SurveyDelete'
import SurveyEdit from './pages/SurveyEdit'
import SurveyAll from './pages/SurveyAll'
import SurveyIndividual from './pages/SurveyIndividual'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: '10px' }}>
          <h1>Survey Maker</h1>
        </div>
        <div>
          <BrowserRouter>
            <div>
              <Route path="/" exact component={SurveyAll} />
              <Route path="/survey/new" component={SurveyCreate} />
              <Route path="/survey/edit" component={SurveyEdit} />
              <Route path="/survey/delete" component={SurveyDelete} />
              <Route path="/survey/show" component={SurveyIndividual} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
