import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.length).toEqual(1);
  });

  it('should render the <Header /> component', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find('Header');

    expect(header.length).toEqual(1);
  });
});
