import React from 'react';
import { mount } from 'enzyme';
import SurveyCreate from './';

describe('<App />', () => {
  it('should render', () => {
    const wrapper = mount(<SurveyCreate />);

    expect(wrapper.length).toEqual(1);
  });

  it('should render a <h2 /> with the text `SurveyCreate`', () => {
    const wrapper = mount(<SurveyCreate />);
    const h2 = wrapper.find('h2');

    expect(h2.length).toEqual(1);
    expect(h2.text()).toEqual('SurveyCreate');
  });
});
