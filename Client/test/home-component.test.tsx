import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeComponent from '../src/home-component';

jest.mock('../src/shared/api-service', () => {
    return {
        getHomeDataFromAPI: jest.fn()
    }
});

test("Rendering home page", () => {
    const { getByTestId } = render(<HomeComponent />);
    const value = getByTestId("homediv");
    expect(value.textContent).toBe("THIS IS THE HOME COMPONENT.");
})
