import React from 'react';
import { shallow } from 'enzyme';
import { SurveyEdit } from './';

describe('<SurveyEdit />', () => {
  const editSurvey = jest.fn();
  const fetchSurvey = jest.fn();
  const survey = { name: 'Survey name' };

  const props = {
    fetchSurvey,
    editSurvey,
    match: { params: { id: 1 } },
    survey
  }

  it('should render', () => {
    const wrapper = shallow(<SurveyEdit {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  describe('functions', () => {
    describe('componentDidMount', () => {
      it('should call fetchSurvey with the correct id', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
        wrapper.instance().componentDidMount();

        expect(fetchSurvey).toHaveBeenCalledWith(1);
      });
    });

    describe('onSubmit', () => {
      it('should call editSurvey with the id and formValues', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
        const { onSubmit } = wrapper.instance();
        const formValues = { foo: 'bar' };

        onSubmit(formValues);

        expect(editSurvey).toHaveBeenCalledWith(1, formValues);
      });
    });
  });

  describe('render', () => {
    it('should render a <h2 /> with the text `Edit Survey`', () => {
      const wrapper = shallow(<SurveyEdit {...props} />);
      const h2 = wrapper.find('h2');

      expect(h2.length).toEqual(1);
      expect(h2.text()).toEqual('Edit Survey');
    });

    describe('ReduxForm', () => {
      it('should render a ReduxForm', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
        const reduxForm = wrapper.find('ReduxForm');

        expect(reduxForm.length).toEqual(1);
      });

      it('should have an onSubmit prop', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
        const { onSubmit } = wrapper.instance();
        const reduxForm = wrapper.find('ReduxForm');

        expect(reduxForm.props().onSubmit).toEqual(onSubmit);
      });

      it('should have an initialValues prop', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
        const reduxForm = wrapper.find('ReduxForm');

        expect(reduxForm.props().initialValues).toEqual(survey);
      });
    });
  });
});
