import React from 'react';
import { shallow } from 'enzyme';
import { SurveyForm } from './';

describe('<SurveyForm />', () => {
  const onSubmit = jest.fn();
  const handleSubmit = jest.fn();

  const props = {
    onSubmit,
    handleSubmit
  }

  it('should render', () => {
    const wrapper = shallow(<SurveyForm {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  describe('onSubmit', () => {
    it('should be a function', () => {
      const wrapper = shallow(<SurveyForm {...props} />);
      const { onSubmit } = wrapper.instance();

      expect(onSubmit).toBeInstanceOf(Function);
    });

    it('should call onSubmit from props with the formValues', () => {
      const formValues = { name: 'A survey' };

      const wrapper = shallow(<SurveyForm {...props} />);
      wrapper.instance().onSubmit(formValues);

      expect(onSubmit).toHaveBeenCalledWith(formValues);
    });
  });

  describe('render', () => {
    it('should render a form', () => {
      const wrapper = shallow(<SurveyForm {...props} />);
      const form = wrapper.find('form');

      expect(form.length).toEqual(1);
    });

    it('should render one Field with the correct label', () => {
      const wrapper = shallow(<SurveyForm {...props} />);
      const form = wrapper.find('form');
      const field = form.find('Field');

      expect(field.length).toEqual(1);
      expect(field.props().label).toEqual('Name:');
    });

    it('should render one button with the correct text', () => {
      const wrapper = shallow(<SurveyForm {...props} />);
      const form = wrapper.find('form');
      const button = form.find('button');

      expect(button.length).toEqual(1);
      expect(button.text()).toEqual('Submit');
    });
  });
});
