import React from 'react';
import { shallow } from 'enzyme';
import { SurveyAll } from './';

describe('<SurveyAll />', () => {
  const survey1 = { id: 1, name: 'First Survey' };
  const survey2 = { id: 2, name: 'Second Survey' };

  const props = {
    surveys: [],
    fetchSurveys: jest.fn()
  };

  const propsWithSurveys = {
    surveys: [
      survey1,
      survey2
    ],
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
          surveys: [],
          fetchSurveys: fetchSurveysFunction
        }
        shallow(<SurveyAll {...newProps} />);

        expect(fetchSurveysFunction).toHaveBeenCalledTimes(1);
      });
    });

    describe('renderEditDelete', () => {
      it('should render an `Edit` link to edit the survey', () => {
        const wrapper = shallow(<SurveyAll {...props} />);
        const { renderEditDelete } = wrapper.instance();
        const result = renderEditDelete(survey1);
        const renderedEditLink = shallow(result).find('Link').at(0);

        expect(renderedEditLink.text()).toEqual('Edit');
        expect(renderedEditLink.props().to).toEqual(`/survey/edit/${survey1.id}`);
      });

      it('should render a `Delete` link to delete the survey', () => {
        const wrapper = shallow(<SurveyAll {...props} />);
        const { renderEditDelete } = wrapper.instance();
        const result = renderEditDelete(survey1);
        const renderedDeleteLink = shallow(result).find('Link').at(1);

        expect(renderedDeleteLink.text()).toEqual('Delete');
        expect(renderedDeleteLink.props().to).toEqual(`/survey/delete/${survey1.id}`);
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
      it('should call renderEditDelete for each survey', () => {
        const wrapper = shallow(<SurveyAll {...propsWithSurveys} />);
        const renderEditDelete = jest.spyOn(wrapper.instance(), 'renderEditDelete');
        wrapper.instance().renderSurveys();

        expect(renderEditDelete).toHaveBeenCalledTimes(2);
        expect(renderEditDelete).toHaveBeenCalledWith(survey1);
        expect(renderEditDelete).toHaveBeenCalledWith(survey2);
      });

      it('should render the name of each survey', () => {
        const wrapper = shallow(<SurveyAll {...propsWithSurveys} />);
        const result = wrapper.instance().renderSurveys();

        const firstSurvey = shallow(result[0]).find('Link[className="header"]');
        const secondSurvey = shallow(result[1]).find('Link[className="header"]');

        expect(firstSurvey.text()).toEqual(survey1.name);
        expect(secondSurvey.text()).toEqual(survey2.name);
      });

      it('should render each name as a Link to the survey', () => {
        const wrapper = shallow(<SurveyAll {...propsWithSurveys} />);
        const result = wrapper.instance().renderSurveys();

        const firstSurveyLink = shallow(result[0]).find('Link[className="header"]');
        const secondSurveyLink = shallow(result[1]).find('Link[className="header"]');

        expect(firstSurveyLink.props().to).toEqual(`survey/${survey1.id}`);
        expect(secondSurveyLink.props().to).toEqual(`survey/${survey2.id}`);
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
