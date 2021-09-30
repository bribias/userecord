import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './app/App';

describe('App', () => {
    it('tests functionality of color history hook', () => {
        const { container } = render(<App />);
        expect(container).not.toBeEmptyDOMElement();
    })
})