import React from 'react'
import { render, screen } from '@testing-library/react'
import List from './list'

test('renders search label', () => {
  render(<List />)
  const label = screen.getByText(/Search by keywords:/i)
  expect(label).toBeInTheDocument()
})
