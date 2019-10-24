import React from 'react';
import { shallow } from 'enzyme';
import { SurveyCreate } from './';

describe('<SurveyCreate />', () => {
  const createSurvey = jest.fn();

  const props = {
    handleSubmit: jest.fn(),
    createSurvey
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

    describe('renderInput', () => {
      const input = { name: 'name', value: 'text' };
      const label = 'Name:';
      const meta = { touched: true };

      it('should return a label with the correct text', () => {
        const wrapper = shallow(<SurveyCreate {...props} />);
        const { renderInput } = wrapper.instance();
        const result = renderInput({input, label, meta});
        const renderedResult = shallow(result);
        const renderedLabel = renderedResult.find('label');

        expect(renderedLabel.length).toEqual(1);
        expect(renderedLabel.text()).toEqual('Name:');
      });

      it('should return an input with the correct name and value', () => {
        const wrapper = shallow(<SurveyCreate {...props} />);
        const { renderInput } = wrapper.instance();
        const result = renderInput({input, label, meta});
        const renderedResult = shallow(result);
        const renderedInput = renderedResult.find('input');

        expect(renderedInput.length).toEqual(1);
        expect(renderedInput.props().name).toEqual('name');
        expect(renderedInput.props().value).toEqual('text');
      });

      it('should call renderError', () => {
        const wrapper = shallow(<SurveyCreate {...props} />);
        const { renderInput } = wrapper.instance();
        const renderError = jest.spyOn(wrapper.instance(), 'renderError');

        renderInput({input, label, meta});

        expect(renderError).toHaveBeenCalledWith(meta);
      });
    });

    describe('onSubmit', () => {
      it('should call createSurvey with the formValues', () => {
        const wrapper = shallow(<SurveyCreate {...props} />);
        const { onSubmit } = wrapper.instance();

        const formValues = { foo: 'bar' };

        onSubmit(formValues);

        expect(createSurvey).toHaveBeenCalledWith(formValues);
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
