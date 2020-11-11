import React from 'react';
import App from '../App';

import { mount } from 'enzyme';

describe('Counter testing', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(<App />);
    });

    test("render the title of website", () => {
        expect(wrapper.find("h1").text()).toContain("Example title");
    });

});