import React from 'react';
import { shallow } from 'enzyme';
import { SignInOut } from './';

describe('<App />', () => {
  it('should render', () => {
    const wrapper = shallow(<SignInOut />);

    expect(wrapper.length).toEqual(1);
  });

  describe('functions', () => {
    describe('renderButton', () => {
      describe('when signed in', () => {
        it('should render a `Sign Out` button', () => {
          const wrapper = shallow(<SignInOut isSignedIn={true} />);
          const button = wrapper.find('button');

          expect(button.length).toEqual(1);
          expect(button.text()).toEqual('Sign Out');
        });

        it('`Sign Out` button should call signoutUser', () => {
          const signoutUser = jest.fn();
          const wrapper = shallow(<SignInOut isSignedIn={true} signoutUser={signoutUser} />);
          const button = wrapper.find('button');
          button.simulate('click');

          expect(signoutUser).toHaveBeenCalledTimes(1);
        });
      });

      describe('when signed out', () => {
        it('should render a `Sign In` Link', () => {
          const wrapper = shallow(<SignInOut isSignedIn={false} />);
          const link = wrapper.find('Link');

          expect(link.length).toEqual(1);
          expect(link.text()).toEqual('Sign In');
        });

        it('`Sign In` link should redirect to `/users/signin`', () => {
          const wrapper = shallow(<SignInOut isSignedIn={false} />);
          const link = wrapper.find('Link');

          expect(link.props().to).toEqual('/users/signin');
        });
      });
    });
  });

  describe('render', () => {
    it('should call renderButton', () => {
      const wrapper = shallow(<SignInOut isSignedIn={false} />);
      const renderButton = jest.spyOn(wrapper.instance(), 'renderButton');

      wrapper.instance().render();

      expect(renderButton).toHaveBeenCalledTimes(1);
    });
  });
});
