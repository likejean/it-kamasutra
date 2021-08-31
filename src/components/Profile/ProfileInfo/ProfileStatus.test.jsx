import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

const getInstance = () => {
    const component = create(<ProfileStatus status="Sergey Popach" />);
    return component.getInstance();
}

const getRoot = () => {
    const component = create(<ProfileStatus status="Sergey Popach" />);
    return component.root;
}

describe("ProfileStatus component", () => {
    test("status from props should be in the state",
        () => expect(getInstance().state.status).toBe("Sergey Popach"));

    test("after creation 'span' should be displaced with status",
        () => expect(getRoot().findByType("span")).not.toBeNull());

    test("after creation 'input' should not be displaced with status", () =>
        expect(() => getRoot().findByType("input")).toThrow());

    test("verify if text status has been passed to span",
        () => expect(getRoot().findByType("span").children[0]).toBe('Sergey Popach'));

    test("verify if input displayed after double click event upon span", () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="Sergey Popach" updateUserStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});