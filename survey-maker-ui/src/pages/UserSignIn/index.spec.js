import React from 'react';
import { shallow } from 'enzyme';
import { UserSignIn } from './';

describe('<UserSignIn />', () => {
  const handleSubmit = jest.fn();

  const props = {
    handleSubmit
  }

  it('should render', () => {
    const wrapper = shallow(<UserSignIn {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  describe('onSubmit', () => {
    it('should call signinUser with the formValues', () => {
      const signinUser = jest.fn();
      const wrapper = shallow(<UserSignIn {...props} signinUser={signinUser} />);
      const { onSubmit } = wrapper.instance();

      const formValues = { foo: 'bar' };

      onSubmit(formValues);

      expect(signinUser).toHaveBeenCalledWith(formValues);
    });
  });

  describe('render', () => {
    it('should render a form', () => {
      const wrapper = shallow(<UserSignIn {...props} />);
      const form = wrapper.find('form');

      expect(form.length).toEqual(1);
    });

    it('should render a `Username` field', () => {
      const wrapper = shallow(<UserSignIn {...props} />);
      const form = wrapper.find('form');
      const field = form.find('Field').at(0);

      expect(field.length).toEqual(1);
      expect(field.props().label).toEqual('Username:');
    });

    it('should render a `Password` field', () => {
      const wrapper = shallow(<UserSignIn {...props} />);
      const form = wrapper.find('form');
      const field = form.find('Field').at(1);

      expect(field.length).toEqual(1);
      expect(field.props().label).toEqual('Password:');
    });

    it('should render a `Submit` button', () => {
      const wrapper = shallow(<UserSignIn {...props} />);
      const form = wrapper.find('form');
      const button = form.find('button');

      expect(button.length).toEqual(1);
      expect(button.text()).toEqual('Submit');
    });
  });
});
