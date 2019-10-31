import React from 'react';
import { shallow } from 'enzyme';
import { UserCreate } from './';

describe('<UserCreate />', () => {
  const handleSubmit = jest.fn();

  const props = {
    handleSubmit
  }

  it('should render', () => {
    const wrapper = shallow(<UserCreate {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  describe('renderError', () => {
    it('should return the error when touched && error', () => {
      const wrapper = shallow(<UserCreate {...props} />);
      const { renderError } = wrapper.instance();
      const result = renderError({ error: 'test error', touched: true });
      const renderedResult = shallow(result);

      expect(renderedResult.text()).toEqual('test error');
    });

    it('should return null when touched is false', () => {
      const wrapper = shallow(<UserCreate {...props} />);
      const { renderError } = wrapper.instance();
      const result = renderError({ error: 'test error', touched: false });

      expect(result).toEqual(null);
    });

    it('should return null when there is no error', () => {
      const wrapper = shallow(<UserCreate {...props} />);
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
      const wrapper = shallow(<UserCreate {...props} />);
      const { renderInput } = wrapper.instance();
      const result = renderInput({input, label, meta});
      const renderedLabel = shallow(result).find('label');

      expect(renderedLabel.length).toEqual(1);
      expect(renderedLabel.text()).toEqual('Name:');
    });

    it('should return an input with the correct name and value', () => {
      const wrapper = shallow(<UserCreate {...props} />);
      const { renderInput } = wrapper.instance();
      const result = renderInput({input, label, meta});
      const renderedInput = shallow(result).find('input');

      expect(renderedInput.length).toEqual(1);
      expect(renderedInput.props().name).toEqual('name');
      expect(renderedInput.props().value).toEqual('text');
    });

    it('should call renderError', () => {
      const wrapper = shallow(<UserCreate {...props} />);
      const { renderInput } = wrapper.instance();
      const renderError = jest.spyOn(wrapper.instance(), 'renderError');

      renderInput({input, label, meta});

      expect(renderError).toHaveBeenCalledWith(meta);
    });
  });

  describe('onSubmit', () => {
    it('should call createUser with the formValues', () => {
      const createUser = jest.fn();
      const wrapper = shallow(<UserCreate {...props} createUser={createUser} />);
      const { onSubmit } = wrapper.instance();

      const formValues = { foo: 'bar' };

      onSubmit(formValues);

      expect(createUser).toHaveBeenCalledWith(formValues);
    });
  });

  describe('render', () => {
    it('should render a form', () => {
      const wrapper = shallow(<UserCreate {...props} />);
      const form = wrapper.find('form');

      expect(form.length).toEqual(1);
    });

    it('should render a `Username` field', () => {
      const wrapper = shallow(<UserCreate {...props} />);
      const form = wrapper.find('form');
      const field = form.find('Field').at(0);

      expect(field.length).toEqual(1);
      expect(field.props().label).toEqual('Username:');
    });

    it('should render a `Password` field', () => {
      const wrapper = shallow(<UserCreate {...props} />);
      const form = wrapper.find('form');
      const field = form.find('Field').at(1);

      expect(field.length).toEqual(1);
      expect(field.props().label).toEqual('Password:');
    });

    it('should render a `Submit` button', () => {
      const wrapper = shallow(<UserCreate {...props} />);
      const form = wrapper.find('form');
      const button = form.find('button');

      expect(button.length).toEqual(1);
      expect(button.text()).toEqual('Submit');
    });
  });
});
