import { render } from '@testing-library/react';

import Dashboard from '@/app/dashboard//page';

describe('Dashboard Component', () => {
  it('renders the component successfully', async () => {
    const view = render(<Dashboard />);
    expect(view.container).toBeInTheDocument();
  });
});
