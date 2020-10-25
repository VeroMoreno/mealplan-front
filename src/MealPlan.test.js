import React from 'react';
import { render } from '@testing-library/react';
import MealPlan from './components/MealPlan';

test('renders learn react link', () => {
  const { getByText } = render(<MealPlan />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
