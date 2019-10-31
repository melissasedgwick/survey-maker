import React from 'react';
import { shallow } from 'enzyme';
import { SurveyDelete } from './';
import history from '../../history';

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
    it('should render a Modal', () => {
      const wrapper = shallow(<SurveyDelete {...props} />);
      const modal = wrapper.find('Modal');

      expect(modal.length).toEqual(1);
    });

    it('should pass title prop of `Delete Survey` to Modal', () => {
      const wrapper = shallow(<SurveyDelete {...props} />);
      const modal = wrapper.find('Modal');

      expect(modal.props().title).toEqual('Delete Survey');
    });

    it('should pass content prop as renderContent to Modal', () => {
      const wrapper = shallow(<SurveyDelete {...props} />);
      const modal = wrapper.find('Modal');
      const renderedContent = wrapper.instance().renderContent();

      expect(modal.props().content).toEqual(renderedContent);
    });

    it('should pass actions prop as renderActions to Modal', () => {
      const wrapper = shallow(<SurveyDelete {...props} />);
      const modal = wrapper.find('Modal');
      const renderedActions = JSON.stringify(wrapper.instance().renderActions());
      const modalActions = JSON.stringify(modal.props().actions);

      expect(modalActions).toEqual(renderedActions);
    });

    it('should pass an onDismiss prop to Modal which redirects to `/`', () => {
      const wrapper = shallow(<SurveyDelete {...props} />);
      const modal = wrapper.find('Modal');
      const historySpy = jest.spyOn(history, 'push');
      modal.props().onDismiss();

      expect(historySpy).toHaveBeenCalledWith('/');
    });
  });
});
