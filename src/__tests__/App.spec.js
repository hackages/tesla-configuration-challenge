import React from "react";
import { App } from '../App'
import { render } from '@testing-library/react'

describe('Tesla Battery App', () => {
    it('App is running', () => {
        const { getByAltText } = render(<App />)
        expect(getByAltText('Tesla Logo')).toBeDefined();
    })
})