import { render, screen } from '@testing-library/react';
import Education from '../components/education';
import Experience from '../components/experience';
import Skill from '../components/skill';

test('Experience has a title', () => {
  render(<Experience/>);
  const linkElement = screen.getByText(/experience/i);
  expect(linkElement).toBeInTheDocument();
});