import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './';

describe('<App />', () => {
  it('should render', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.length).toEqual(1);
  });

  it('should render a link to the home page called `Survey Maker`', () => {
    const wrapper = shallow(<Header />);
    const surveyMakerLink = wrapper.find('Link[id="survey-maker-link"]');

    expect(surveyMakerLink.length).toEqual(1);
    expect(surveyMakerLink.text()).toEqual('Survey Maker');
  });

  it('should render a link to the home page called `All Surveys`', () => {
    const wrapper = shallow(<Header />);
    const allSurveysLink = wrapper.find('Link[id="all-surveys-link"]');

    expect(allSurveysLink.length).toEqual(1);
    expect(allSurveysLink.text()).toEqual('All Surveys');
  });

  it('should render SignInOut', () => {
    const wrapper = shallow(<Header />);
    const signInOut = wrapper.find('Connect(SignInOut)');

    expect(signInOut.length).toEqual(1);
  });
});
