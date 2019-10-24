import React from 'react';
import { shallow } from 'enzyme';
import { SurveyCreate } from './';

describe('<SurveyCreate />', () => {
  const props = {
    handleSubmit: jest.fn()
  }

  it('should render', () => {
    const wrapper = shallow(<SurveyCreate {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  describe('functions', () => {
    describe('renderError', () => {
      it('should return the error when touched && error', () => {
        const wrapper = shallow(<SurveyCreate {...props} />);
        const { renderError } = wrapper.instance();
        const result = renderError({ error: 'test error', touched: true });
        const renderedResult = shallow(result);
        const error = renderedResult.find('div');

        expect(error.text()).toEqual('test error');
      });

      it('should return null when touched is false', () => {
        const wrapper = shallow(<SurveyCreate {...props} />);
        const { renderError } = wrapper.instance();
        const result = renderError({ error: 'test error', touched: false });

        expect(result).toEqual(null);
      });

      it('should return null when there is no error', () => {
        const wrapper = shallow(<SurveyCreate {...props} />);
        const { renderError } = wrapper.instance();
        const result = renderError({ touched: true });

        expect(result).toEqual(null);
      });
    });
  });

  describe('render', () => {
    it('should render a <h2 /> with the text `Create a new survey!`', () => {
      const wrapper = shallow(<SurveyCreate {...props} />);
      const h2 = wrapper.find('h2');

      expect(h2.length).toEqual(1);
      expect(h2.text()).toEqual('Create a new survey!');
    });

    describe('form', () => {
      it('should render a form', () => {
        const wrapper = shallow(<SurveyCreate {...props} />);
        const form = wrapper.find('form');

        expect(form.length).toEqual(1);
      });

      it('should render a field with the label `Name"`', () => {
        const wrapper = shallow(<SurveyCreate {...props} />);
        const form = wrapper.find('form');
        const field = form.find('Field');

        expect(field.length).toEqual(1);
        expect(field.props().label).toEqual('Name:');
      });

      it('should render a `Submit` button', () => {
        const wrapper = shallow(<SurveyCreate {...props} />);
        const form = wrapper.find('form');
        const button = form.find('button');

        expect(button.length).toEqual(1);
        expect(button.text()).toEqual('Submit');
      });
    });
  });
});
