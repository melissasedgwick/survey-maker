import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { Modal } from './';

describe('<Modal />', () => {
  const onDismiss = jest.fn();

  const props = {
    title: 'This is the title',
    content: 'This is content',
    actions: 'These are actions',
    onDismiss
  };

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('should render', () => {
    const wrapper = shallow(<Modal {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  it('should call onDismiss onClick of the outer div', () => {
    const wrapper = shallow(<Modal {...props} />);
    const outerDiv = wrapper.find('div[id="outer-div"]');
    outerDiv.simulate('click');

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('should render the title', () => {
    const wrapper = shallow(<Modal {...props} />);
    const title = wrapper.find('div[className="header"]');

    expect(title.text()).toEqual('This is the title');
  });

  it('should render the content', () => {
    const wrapper = shallow(<Modal {...props} />);
    const content = wrapper.find('div[className="content"]');

    expect(content.text()).toEqual('This is content');
  });

  it('should render the actions', () => {
    const wrapper = shallow(<Modal {...props} />);
    const actions = wrapper.find('div[className="actions"]');

    expect(actions.text()).toEqual('These are actions');
  });
});
