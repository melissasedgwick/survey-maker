import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should render', () => {
    const wrapper = mount(<App />);

    expect(wrapper.length).toEqual(1);
  });

  it('should render the <Header /> component', () => {
    const wrapper = mount(<App />);
    const header = wrapper.find('Header');

    expect(header.length).toEqual(1);
  });
});
