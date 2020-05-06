import React from "react";
import { shallow } from 'enzyme';

import findTestByAttr from './../../helpers/findTestByAttr'
import App from './App';

describe('App', () => {
  
  test('should render without error', () => {
    const wrapper = shallow(<App />)
    const inputContainer = findTestByAttr(wrapper, 'App');
    expect(inputContainer.length).toBe(1);
  })
})