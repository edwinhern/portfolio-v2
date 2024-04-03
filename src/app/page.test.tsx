import { render, screen } from '@testing-library/react';

import Page from '@/app/page';

describe('Home Component', () => {
  it('renders the component successfully', () => {
    render(<Page />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
    expect(screen.getByText('Edwin Hernandez')).toBeInTheDocument();
  });
});
