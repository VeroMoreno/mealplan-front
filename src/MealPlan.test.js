import React from 'react';
import { render } from '@testing-library/react';
import MealPlan from './modules/Content/MealPlan';

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  const { getByText } = render(<MealPlan />);
  const linkElement = getByText(/learn react/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});
