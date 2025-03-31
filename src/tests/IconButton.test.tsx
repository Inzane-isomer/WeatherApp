import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom';
import IconButton from "../components/IconButton";

describe('IconButton', () => {
    it('should render', () => {
        render(<IconButton handleEvent={() => {}}/>)
        const element = screen.getByRole('button');
        expect(element).toBeInTheDocument();
    });
})