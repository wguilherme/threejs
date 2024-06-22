import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BasicPage from '../src/app/BasicPage'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<BasicPage />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})