import React from 'react';
import { shallow } from 'enzyme';
import { SurveyAll } from './';

describe('<SurveyAll />', () => {
  const props = {
    surveys: [[]],
    fetchSurveys: jest.fn()
  };

  it('should render', () => {
    const wrapper = shallow(<SurveyAll {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  it('should render a <h2 /> with the text `SurveyAll`', () => {
    const wrapper = shallow(<SurveyAll {...props} />);
    const h2 = wrapper.find('h2');

    expect(h2.length).toEqual(1);
    expect(h2.text()).toEqual('SurveyAll');
  });
});
