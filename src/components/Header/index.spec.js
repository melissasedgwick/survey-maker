import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Header from './';

describe('<App />', () => {
  it('should render', () => {
    const wrapper = mount(<BrowserRouter><Header /></BrowserRouter>);

    expect(wrapper.length).toEqual(1);
  });

  it('should render a link to the home page called `Survey Maker`', () => {
    const wrapper = mount(<BrowserRouter><Header /></BrowserRouter>);
    const surveyMakerLink = wrapper.find('Link[id="survey-maker-link"]');

    expect(surveyMakerLink.length).toEqual(1);
    expect(surveyMakerLink.text()).toEqual('Survey Maker');
  });

  it('should render a link to the home page called `All Surveys`', () => {
    const wrapper = mount(<BrowserRouter><Header /></BrowserRouter>);
    const allSurveysLink = wrapper.find('Link[id="all-surveys-link"]');

    expect(allSurveysLink.length).toEqual(1);
    expect(allSurveysLink.text()).toEqual('All Surveys');
  });
});
