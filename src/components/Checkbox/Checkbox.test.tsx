//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { fireEvent, render, screen } from '@testing-library/react'
import { vitest } from 'vitest'
import { Checkbox } from '.'

describe('Checkbox', () => {
  it('renders functional Checkbox element', () => {
    const onCheckedChange = vitest.fn()

    render(
      <Checkbox
        checked={true}
        onCheckedChange={onCheckedChange}
        aria-label="Checkbox"
      />,
    )

    const element = screen.getByLabelText('Checkbox')
    fireEvent.click(element)

    const newCheckedValue = false
    expect(onCheckedChange).toHaveBeenCalledWith(newCheckedValue)
  })
})