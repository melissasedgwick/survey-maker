import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should render', () => {
    const wrapper = mount(<App />);

    expect(wrapper.length).toEqual(1);
  });

  it('should render a <h1 /> with the text `Survey Maker`', () => {
    const wrapper = mount(<App />);
    const h1 = wrapper.find('h1');

    expect(h1.length).toEqual(1);
    expect(h1.text()).toEqual('Survey Maker');
  });
});
