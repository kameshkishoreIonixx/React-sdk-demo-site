import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Header } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Header title='this is sample' />)
  })
})
