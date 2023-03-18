import { render, screen } from '@testing-library/react';
import App from '../App';
import Contact from '../components/contact';
import Education from '../components/education';
import Experience from '../components/experience';
import Home from '../components/home';
import Skill from '../components/skill';
import Template from '../components/template';

test('Template has 3 buttons', () => {
    render(<Template/>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(3)
  })

  test('Template has 3 imgs', () => {
    render(<template/>);
    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toBe(3);
  });