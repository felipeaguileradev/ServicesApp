import React from 'react'
import { render, screen } from '@testing-library/react'
import ServicesApp from './ServicesApp'

test('renders learn react link', () => {
  render(<ServicesApp />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
