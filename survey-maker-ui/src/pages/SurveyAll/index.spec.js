import React from 'react';
import { shallow } from 'enzyme';
import { SurveyAll } from './';

describe('<SurveyAll />', () => {
  const props = {
    surveys: [[]],
    fetchSurveys: jest.fn()
  };

  const propsWithSurveys = {
    surveys: [[
      { id: 1, name: 'First Survey' },
      { id: 2, name: 'Second Survey' }
    ]],
    fetchSurveys: jest.fn()
  };

  it('should render', () => {
    const wrapper = shallow(<SurveyAll {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  describe('functions', () => {
    describe('componentDidMount', () => {
      it('should call fetchSurveys', () => {
        const fetchSurveysFunction = jest.fn();
        const newProps = {
          surveys: [[]],
          fetchSurveys: fetchSurveysFunction
        }
        shallow(<SurveyAll {...newProps} />);

        expect(fetchSurveysFunction).toHaveBeenCalledTimes(1);
      });
    });

    describe('renderSurveys', () => {
      describe('when there are no surveys', () => {
        it('should return an empty array', () => {
          const wrapper = shallow(<SurveyAll {...props} />);
          const result = wrapper.instance().renderSurveys();

          expect(result).toEqual([]);
        });
      });
    });

    describe('when there are surveys', () => {
      it('should render the name of each survey', () => {
        const wrapper = shallow(<SurveyAll {...propsWithSurveys} />);
        const result = wrapper.instance().renderSurveys();

        const firstSurvey = shallow(result[0]);
        const secondSurvey = shallow(result[1]);

        expect(firstSurvey.text()).toEqual('First Survey');
        expect(secondSurvey.text()).toEqual('Second Survey');
      });
    });
  });

  describe('render', () => {
    it('should render a <h2 /> with the text `All Surveys:`', () => {
      const wrapper = shallow(<SurveyAll {...props} />);
      const h2 = wrapper.find('h2');

      expect(h2.length).toEqual(1);
      expect(h2.text()).toEqual('All Surveys:');
    });

    it('should render a `Create a new survey` link', () => {
      const wrapper = shallow(<SurveyAll {...props} />);
      const link = wrapper.find('Link');

      expect(link.length).toEqual(1);
      expect(link.text()).toEqual('Create a new survey');
    });

    it('should call renderSurveys', () => {
      const wrapper = shallow(<SurveyAll {...props} />);
      const renderSurveys = jest.spyOn(wrapper.instance(), 'renderSurveys');

      wrapper.instance().render();

      expect(renderSurveys).toHaveBeenCalledTimes(1);
    });
  });
});
