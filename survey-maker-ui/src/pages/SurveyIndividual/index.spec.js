import React from 'react';
import { shallow } from 'enzyme';
import { SurveyIndividual } from './';

describe('<SurveyIndividual />', () => {
  const fetchSurvey = jest.fn();

  const props = {
    fetchSurvey,
    match: { params: { id: 1 } }
  };

  const propsWithSurvey = {
    ...props,
    survey: { name: 'This is a survey' }
  }

  it('should render', () => {
    const wrapper = shallow(<SurveyIndividual {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  describe('functions', () => {
    describe('componentDidMount', () => {
      it('should call fetchSurvey with the correct id', () => {
        const wrapper = shallow(<SurveyIndividual {...props} />);
        wrapper.instance().componentDidMount();

        expect(fetchSurvey).toHaveBeenCalledWith(1);
      });
    });
  });

  describe('render', () => {
    describe('when there is no survey', () => {
      it('should render the text `Loading...`', () => {
        const wrapper = shallow(<SurveyIndividual {...props} />);
        const div = wrapper.find('div');

        expect(div.text()).toEqual('Loading...');
      });
    });

    describe('when there is a survey', () => {
      it('should render a <h2 /> with the name of the survey', () => {
        const wrapper = shallow(<SurveyIndividual {...propsWithSurvey} />);
        const h2 = wrapper.find('h2');

        expect(h2.length).toEqual(1);
        expect(h2.text()).toEqual('This is a survey');
      });
    });
  });
});
