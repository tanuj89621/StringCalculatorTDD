import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('String Calculator App', () => {
  test('renders the calculator UI correctly', () => {
    render(<App />);
    expect(screen.getByText(/String Calculator/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter numbers.../i)).toBeInTheDocument();
    expect(screen.getByText(/Calculate/i)).toBeInTheDocument();
  });

  test('calculates the correct sum for valid input', () => {
    render(<App />);

    const inputBox = screen.getByPlaceholderText(/Enter numbers.../i);
    const calculateButton = screen.getByText(/Calculate/i);

    // Enter a valid string
    fireEvent.change(inputBox, { target: { value: '1,2,3' } });
    fireEvent.click(calculateButton);

    // Check if the result is displayed correctly
    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
  });

  test('displays an error message when a negative number is entered', () => {
    render(<App />);

    const inputBox = screen.getByPlaceholderText(/Enter numbers.../i);
    const calculateButton = screen.getByText(/Calculate/i);

    // Enter a string with a negative number
    fireEvent.change(inputBox, { target: { value: '1,-2,3' } });
    fireEvent.click(calculateButton);

    // Check if the error message is displayed
    expect(screen.getByText(/Negative numbers not allowed: -2/i)).toBeInTheDocument();
  });

  test('handles custom delimiters correctly', () => {
    render(<App />);

    const inputBox = screen.getByPlaceholderText(/Enter numbers.../i);
    const calculateButton = screen.getByText(/Calculate/i);

    // Enter a string with a custom delimiter
    fireEvent.change(inputBox, { target: { value: '//;\n1;2;3' } });
    fireEvent.click(calculateButton);

    // Check if the result is displayed correctly
    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
  });

  test('displays an empty result when the input is an empty string', () => {
    render(<App />);

    const inputBox = screen.getByPlaceholderText(/Enter numbers.../i);
    const calculateButton = screen.getByText(/Calculate/i);

    // Enter an empty string
    fireEvent.change(inputBox, { target: { value: '' } });
    fireEvent.click(calculateButton);

    // Check if the result is 0
    expect(screen.getByText(/Result: 0/i)).toBeInTheDocument();
  });
});
