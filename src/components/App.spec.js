import React from 'react';
import { TestableComponent } from './../../spec/GlobalSpecFunctions.js';
import App from './App';

describe('Tests the testing framework and TestableComponent.', () => {
  it('should render the App', () => {
    const component = new TestableComponent(<App />);
    component.includesOne('Framework7App');
    component.includesOne('MainViews');
  });
}); 