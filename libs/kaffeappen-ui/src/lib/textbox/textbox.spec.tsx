import { render } from '@testing-library/react';
import Textbox from './textbox';

describe("Textbox", () => {
    it("should test the Textbox", () => {
        const { baseElement } = render(< Textbox placeholder={'Username'} type={"Username"}/>)
        expect(baseElement).toBeTruthy()
    })

    it("should match the snapshot", () => {
        const { baseElement } = render(< Textbox placeholder={'Username'} type={"Username"}/>)
        expect(baseElement).toMatchSnapshot()
    })
})