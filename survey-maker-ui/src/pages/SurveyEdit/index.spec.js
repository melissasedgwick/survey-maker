import React from 'react';
import { shallow } from 'enzyme';
import { SurveyEdit } from './';

describe('<SurveyEdit />', () => {
  const editSurvey = jest.fn();

  const props = {
    fetchSurvey: jest.fn(),
    handleSubmit: jest.fn(),
    editSurvey,
    match: { params: { id: 1 } }
  }

  it('should render', () => {
    const wrapper = shallow(<SurveyEdit {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  describe('functions', () => {
    describe('renderError', () => {
      it('should return the error when touched && error', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
        const { renderError } = wrapper.instance();
        const result = renderError({ error: 'test error', touched: true });
        const renderedError = shallow(result).find('div');

        expect(renderedError.text()).toEqual('test error');
      });

      it('should return null when touched is false', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
        const { renderError } = wrapper.instance();
        const result = renderError({ error: 'test error', touched: false });

        expect(result).toEqual(null);
      });

      it('should return null when there is no error', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
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
        const wrapper = shallow(<SurveyEdit {...props} />);
        const { renderInput } = wrapper.instance();
        const result = renderInput({input, label, meta});
        const renderedLabel = shallow(result).find('label');

        expect(renderedLabel.length).toEqual(1);
        expect(renderedLabel.text()).toEqual('Name:');
      });

      it('should return an input with the correct name and value', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
        const { renderInput } = wrapper.instance();
        const result = renderInput({input, label, meta});
        const renderedInput = shallow(result).find('input');

        expect(renderedInput.length).toEqual(1);
        expect(renderedInput.props().name).toEqual('name');
        expect(renderedInput.props().value).toEqual('text');
      });

      it('should call renderError', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
        const { renderInput } = wrapper.instance();
        const renderError = jest.spyOn(wrapper.instance(), 'renderError');

        renderInput({input, label, meta});

        expect(renderError).toHaveBeenCalledWith(meta);
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

    describe('form', () => {
      it('should render a form', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
        const form = wrapper.find('form');

        expect(form.length).toEqual(1);
      });

      it('should render a field with the label `Name:`', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
        const form = wrapper.find('form');
        const field = form.find('Field');

        expect(field.length).toEqual(1);
        expect(field.props().label).toEqual('Name:');
      });

      it('should render a `Submit Changes` button', () => {
        const wrapper = shallow(<SurveyEdit {...props} />);
        const form = wrapper.find('form');
        const button = form.find('button');

        expect(button.length).toEqual(1);
        expect(button.text()).toEqual('Submit Changes');
      });
    });
  });
});
