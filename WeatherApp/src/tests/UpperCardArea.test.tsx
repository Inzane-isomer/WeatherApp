import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom';
import UpperCardArea from "../components/UpperCardArea";

describe('Upper card area', () => {
    it('should render', () => {
        render(<UpperCardArea handleEvent={undefined} loading={false} error={""} />)
        const element = screen.getByRole('button');
        expect(element).toBeInTheDocument();
    });
})