import { render, screen } from '@testing-library/react';
import App from '../App';
import Contact from '../components/contact';
import Education from '../components/education';
import Experience from '../components/experience';
import Home from '../components/home';
import Skill from '../components/skill';

test('Contact has 2 buttons', () => {
  render(<Contact/>);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(2);
});

test('Contact name field has placeholder', () => {
  render(<Contact/>);
  const placeholder = screen.getByTestId('name-test-id');
  expect(placeholder).toHaveAttribute('Name');
});

test('Contact mobile number field has placeholder', () => {
  render(<Contact/>);
  const placeholder = screen.getByTestId('mobile-test-id');
  expect(placeholder).toHaveAttribute('Mobile Number');
});

test('Contact mobile number field has placeholder', () => {
  render(<Contact/>);
  const placeholder = screen.getByTestId('-test-id');
  expect(placeholder).toHaveAttribute('Mobile Number');
});

test('Clicking next button in Contact renders new componenet', ()=>{
  render(<Contact/>);
  const nextButton = screen.getByText('Next');
  fireEvent.click(nextButton);
  expect(screen.getByText('Education')).toBeInTheDocument();
  expect(screen.getByText('Contact')).not.toBeInTheDocument();
})
test('Contact has a title', () => {
  render(<Contact/>);
  const linkElement = screen.getByText(/contact/i);
  expect(linkElement).toBeInTheDocument();
});