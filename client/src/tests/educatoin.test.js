import { render, screen } from '@testing-library/react';
import Education from '../components/education';
import Experience from '../components/experience';
import Skill from '../components/skill';




test('Clicking next button in Education renders new componenet', ()=>{
  render(<Education/>);
  const nextButton = screen.getByText('Next');
  fireEvent.click(nextButton);
  expect(screen.getByText('Experience')).toBeInTheDocument();
  expect(screen.getByText('Education')).not.toBeInTheDocument();
})



test('Education has a title', () => {
  render(<Education/>);
  const linkElement = screen.getByText(/Education/i);
  expect(linkElement).toBeInTheDocument();
});

