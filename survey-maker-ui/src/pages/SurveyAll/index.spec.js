import React from 'react';
import { mount } from 'enzyme';
import SurveyAll from './';

describe('<App />', () => {
  it('should render', () => {
    const wrapper = mount(<SurveyAll />);

    expect(wrapper.length).toEqual(1);
  });

  it('should render a <h2 /> with the text `SurveyAll`', () => {
    const wrapper = mount(<SurveyAll />);
    const h2 = wrapper.find('h2');

    expect(h2.length).toEqual(1);
    expect(h2.text()).toEqual('SurveyAll');
  });
});
