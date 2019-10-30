import React from 'react';
import { shallow } from 'enzyme';
import { SurveyCreate } from './';

describe('<SurveyCreate />', () => {
  it('should render', () => {
    const wrapper = shallow(<SurveyCreate />);

    expect(wrapper.length).toEqual(1);
  });

  describe('functions', () => {
    describe('onSubmit', () => {
      it('should call createSurvey with the formValues', () => {
        const createSurvey = jest.fn();
        const wrapper = shallow(<SurveyCreate createSurvey={createSurvey} />);
        const { onSubmit } = wrapper.instance();
        const formValues = { foo: 'bar' };

        onSubmit(formValues);

        expect(createSurvey).toHaveBeenCalledWith(formValues);
      });
    });
  });

  describe('render', () => {
    it('should render a <h2 /> with the text `Create a new survey!`', () => {
      const wrapper = shallow(<SurveyCreate />);
      const h2 = wrapper.find('h2');

      expect(h2.length).toEqual(1);
      expect(h2.text()).toEqual('Create a new survey!');
    });

    it('should render a ReduxForm with an onSubmit prop', () => {
      const wrapper = shallow(<SurveyCreate />);
      const { onSubmit } = wrapper.instance();
      const reduxForm = wrapper.find('ReduxForm');

      expect(reduxForm.length).toEqual(1);
      expect(reduxForm.props().onSubmit).toEqual(onSubmit);
    });
  });
});
