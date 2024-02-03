import { type Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: Decorator = (story) => {
  return <BrowserRouter>{story()}</BrowserRouter>;
};
