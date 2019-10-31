import React from 'react';
import { shallow } from 'enzyme';
import { renderError, renderInput, renderPasswordInput } from './';

describe('form helpers', () => {
  describe('renderError', () => {
    it('should return the error when touched && error', () => {
      const result = renderError({ error: 'test error', touched: true });
      const renderedResult = shallow(result);

      expect(renderedResult.text()).toEqual('test error');
    });

    it('should return null when touched is false', () => {
      const result = renderError({ error: 'test error', touched: false });

      expect(result).toEqual(null);
    });

    it('should return null when there is no error', () => {
      const result = renderError({ touched: true });

      expect(result).toEqual(null);
    });
  });

  describe('renderInput', () => {
    const input = { name: 'name', value: 'text' };
    const label = 'Name:';
    const meta = { touched: true };

    it('should return a label with the correct text', () => {
      const result = renderInput({input, label, meta});
      const renderedLabel = shallow(result).find('label');

      expect(renderedLabel.length).toEqual(1);
      expect(renderedLabel.text()).toEqual('Name:');
    });

    it('should return an input with the correct name and value', () => {
      const result = renderInput({input, label, meta});
      const renderedInput = shallow(result).find('input');

      expect(renderedInput.length).toEqual(1);
      expect(renderedInput.props().name).toEqual('name');
      expect(renderedInput.props().value).toEqual('text');
    });
  });

  describe('renderPasswordInput', () => {
    const input = { name: 'name', value: 'text' };
    const label = 'Name:';
    const meta = { touched: true };

    it('should return a label with the correct text', () => {
      const result = renderPasswordInput({input, label, meta});
      const renderedLabel = shallow(result).find('label');

      expect(renderedLabel.length).toEqual(1);
      expect(renderedLabel.text()).toEqual('Name:');
    });

    it('should return a `password` input with the correct name', () => {
      const result = renderPasswordInput({input, label, meta});
      const renderedInput = shallow(result).find('input');

      expect(renderedInput.length).toEqual(1);
      expect(renderedInput.props().name).toEqual('name');
      expect(renderedInput.props().value).toEqual('text');
      expect(renderedInput.props().type).toEqual('password');
    });
  });
});
