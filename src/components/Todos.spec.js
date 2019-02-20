import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Todos from "components/Todos";

describe('Todos', () => {
 it('should render as expected', () => {
   const tree = renderer.create(<Todos/>).toJSON();

   expect(tree).toMatchSnapshot();
 });

 it('should add new todo', () => {
   const wrapper = shallow(<Todos/>);

   expect(wrapper.find('li').length).toBe(0);

   wrapper
     .find('input')
     .simulate('change', {target: {value: 'new todo'}});

   wrapper.find('button').simulate('click');

   expect(wrapper.find('li').text()).toBe('new todo');
 })
});