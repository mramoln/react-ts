import React, { render, screen } from '@testing-library/react';

import App from './App';

test('should render', () => { 
    render(<App />);
    const textElem = screen.getByText(/basic react app/i);
    expect(textElem).toBeTruthy();
});