import { render, screen } from '@testing-library/react';
import Education from '../components/education';
import Experience from '../components/experience';
import Skill from '../components/skill';

test('Skill has a title', () => {
  render(<Skill/>);
  const linkElement = screen.getByText(/skill/i);
  expect(linkElement).toBeInTheDocument();
});

