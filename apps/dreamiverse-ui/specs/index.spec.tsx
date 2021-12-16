import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/getting-started';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
