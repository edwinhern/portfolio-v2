import { render } from '@testing-library/react';

import Page from '@/app/(app)/page';

describe('Home Component', () => {
  it('renders the component successfully', () => {
    render(<Page />);
  });
});
