import React from 'react';
import { shallow } from 'enzyme'

/**
 * The purpose of this class is to make testing more readable, by
 * extending the react component.
 */
export class TestableComponent extends React.Component {
    constructor(componentToTest) {
        super(componentToTest.props); // Required for extending React.Components
        this.componentToTest = componentToTest;
    }

    includesOne(innerElement) {
        const wrapper = shallow(this.componentToTest);
        return expect(wrapper.find(innerElement).length).toEqual(1);
    }

    notIncludes(innerElement) {
        const wrapper = shallow(this.componentToTest);
        return expect(wrapper.find(innerElement).length).toEqual(0);
    }

    includesMultiple(number, innerElement) {
        const wrapper = shallow(this.componentToTest);
        return expect(wrapper.find(innerElement).length).toEqual(number);

    }

}