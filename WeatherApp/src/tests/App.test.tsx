import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom';

import App from "../App"

describe('App', () => {
    it('should render app', () => {
        render(<App />)
        const element = screen.getByText('Loading...');
        expect(element).toBeInTheDocument();
    })
})
