import { render, screen } from '@testing-library/react';
import App from '../App';
import Education from '../components/education';
import Experience from '../components/experience';
import Skill from '../components/skill';




test('Skill has a title', () => {
  render(<App/>);
  const linkElement = screen.getByText(/app/i);
  expect(linkElement).toBeInTheDocument();
});

