import React from 'react';
import { shallow } from 'enzyme';
import { SurveyDelete } from './';

describe('<App />', () => {
  const fetchSurvey = jest.fn();

  const props = {
    fetchSurvey,
    match: { params: { id: 1 } }
  }

  const propsWithSurvey = {
    ...props,
    survey: { name: 'This is a survey' }
  };

  it('should render', () => {
    const wrapper = shallow(<SurveyDelete {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  describe('functions', () => {
    describe('componentDidMount', () => {
      it('should call fetchSurvey with correct id', () => {
        const wrapper = shallow(<SurveyDelete {...props} />);
        wrapper.instance().componentDidMount();

        expect(fetchSurvey).toHaveBeenCalledWith(1);
      });
    });

    describe('renderContent', () => {
      describe('when there is no survey', () => {
        it('should return the text `Are you sure you want to delete this survey?`', () => {
          const wrapper = shallow(<SurveyDelete {...props} />);
          const result = wrapper.instance().renderContent();

          expect(result).toEqual('Are you sure you want to delete this survey?');
        });
      });

      describe('when there is a survey', () => {
        it('should return the text `Are you sure you want to delete this survey: {name}?`', () => {
          const wrapper = shallow(<SurveyDelete {...propsWithSurvey} />);
          const result = wrapper.instance().renderContent();

          expect(result).toEqual('Are you sure you want to delete this survey: This is a survey?');
        });
      });
    });

    describe('renderActions', () => {
      it('should render a `Delete` button', () => {
        const wrapper = shallow(<SurveyDelete {...props} />);
        const result = wrapper.instance().renderActions();
        const renderedButton = shallow(result).find('button');

        expect(renderedButton.text()).toEqual('Delete');
      });

      it('`Delete` button should call deleteSurvey with id onClick', () => {
        const deleteSurvey = jest.fn();
        const wrapper = shallow(<SurveyDelete {...props} deleteSurvey={deleteSurvey} />);
        const result = wrapper.instance().renderActions();
        const renderedButton = shallow(result).find('button');
        renderedButton.simulate('click');

        expect(deleteSurvey).toHaveBeenCalledWith(1);
      });

      it('should render a `Cancel` link', () => {
        const wrapper = shallow(<SurveyDelete {...props} />);
        const result = wrapper.instance().renderActions();
        const renderedLink = shallow(result).find('Link');

        expect(renderedLink.text()).toEqual('Cancel');
      });

      it('`Cancel` link should go to `/` route', () => {
        const wrapper = shallow(<SurveyDelete {...props} />);
        const result = wrapper.instance().renderActions();
        const renderedLink = shallow(result).find('Link');

        expect(renderedLink.props().to).toEqual('/');
      });
    });
  });

  describe('render', () => {
    it('should render a <h2 /> with the text `Delete Survey`', () => {
      const wrapper = shallow(<SurveyDelete {...props} />);
      const h2 = wrapper.find('h2');

      expect(h2.length).toEqual(1);
      expect(h2.text()).toEqual('Delete Survey');
    });

    it('should call renderContent', () => {
      const wrapper = shallow(<SurveyDelete {...props} />);
      const renderContent = jest.spyOn(wrapper.instance(), 'renderContent');
      wrapper.instance().render();

      expect(renderContent).toHaveBeenCalledTimes(1);
    });

    it('should call renderActions', () => {
      const wrapper = shallow(<SurveyDelete {...props} />);
      const renderActions = jest.spyOn(wrapper.instance(), 'renderActions');
      wrapper.instance().render();

      expect(renderActions).toHaveBeenCalledTimes(1);
    });
  });
});
