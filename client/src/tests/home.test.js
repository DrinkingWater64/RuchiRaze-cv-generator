import { render, screen } from '@testing-library/react';
import App from '../App';
import Education from '../components/education';
import Experience from '../components/experience';
import Home from '../components/home';
import Skill from '../components/skill';

test('Home has a title', () => {
  render(<Home/>);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders 6 buttons', () => {
  render(<Home/>);
  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(6);
});

