import { expect, test } from 'vitest'
import App from '../src/App.jsx'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

// - render content and check if the rendered content is expected

test("Render the App component", () => {
    render(<App />)

    const mainPageHeader = screen.getByText("Vite + React");
    expect(mainPageHeader).toBeInTheDocument();
})

test("Render the App component with a button", async () => {
    render(<App />)

    // Find the button
    const counterButton = screen.getByTestId("count is 0");

    // Check the buttons text 
    expect(counterButton).toBeInTheDocument();
    expect(counterButton).toHaveTextContent("count is 0");

    // Click the button
    const user = userEvent.setup();

    await user.click(counterButton);

    // Check if the button was clicked
    expect(counterButton).toHaveTextContent("count is 1");
})
