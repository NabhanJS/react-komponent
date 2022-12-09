import { render } from '@testing-library/react';
import Button from './button';

describe("Button", () => {
    it("should test the button", () => {
        const { baseElement } = render(< Button variant={'login'} label={"login"}/>)
        expect(baseElement).toBeTruthy()
    })
    it("should match the snapshot", () => {
        const { baseElement } = render(< Button variant={'login'} label={"login"}/>)
        expect(baseElement).toMatchSnapshot()
    })
})