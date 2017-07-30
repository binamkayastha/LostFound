import React from 'react';
import { shallow } from 'enzyme'
import { TestableComponent } from './GlobalSpecFunctions.js';

describe('Tests the testing framework and TestableComponent.', () => {

  const component = new TestableComponent(
      <div>
        <ul>
          <li><h1>It's a list!</h1></li>
          <li>It's a list!</li>
        </ul>
      </div>
    );

  it('checks if test framework is working', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
  });

  it('notIncludes() passes for non-existant element', () => {
    component.notIncludes('h2');
  });

  it('includesOne() passes for one element', () => {
    component.includesOne('div');
    component.includesOne('ul');
    component.includesOne('h1');
  });

  it('includesMultiple() passes for 0 elements', () => {
    component.includesMultiple(0, 'h2');
    component.includesMultiple(0, 'randomString');
  });

  it('includesMultiple() passes for 1 element', () => {
    component.includesMultiple(1, 'h1');
    component.includesMultiple(1, 'ul');
    component.includesMultiple(1, 'div');
  });

  it('includesMultiple() passes for 2 elements', () => {
    component.includesMultiple(2, 'li');
  });
}); 