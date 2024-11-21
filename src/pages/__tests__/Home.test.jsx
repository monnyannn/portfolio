import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('displays the developer name', () => {
    render(<Home />);
    expect(screen.getByText(/Shittu Abimbola/i)).toBeInTheDocument();
  });

  it('contains a call-to-action button', () => {
    render(<Home />);
    const ctaButton = screen.getByRole('button', { name: /hire me/i });
    expect(ctaButton).toBeInTheDocument();
  });
});
