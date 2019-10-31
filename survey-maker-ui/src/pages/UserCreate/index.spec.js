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
