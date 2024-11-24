import { render, screen, fireEvent } from '@testing-library/react'
import { RadioGroup, RadioGroupItem } from './RadioGroup'

describe('RadioGroup', () => {
  it('renders all radio items', () => {
    render(
      <RadioGroup defaultValue="comfortable" aria-label="View density">
        <RadioGroupItem value="default" id="r1" />
        <RadioGroupItem value="comfortable" id="r2" />
        <RadioGroupItem value="compact" id="r3" />
      </RadioGroup>,
    )
    expect(screen.getAllByRole('radio')).toHaveLength(3)
  })

  it('selects the default value', () => {
    render(
      <RadioGroup defaultValue="comfortable" aria-label="View density">
        <RadioGroupItem value="default" id="r1" />
        <RadioGroupItem value="comfortable" id="r2" />
        <RadioGroupItem value="compact" id="r3" />
      </RadioGroup>,
    )

    const defaultRadio = screen.getByRole('radio', { name: /comfortable/i })
    expect(defaultRadio).toHaveAttribute('data-state', 'checked')
  })

  it('changes selection when a radio item is clicked', () => {
    render(
      <RadioGroup defaultValue="default" aria-label="View density">
        <RadioGroupItem value="default" id="r1" />
        <RadioGroupItem value="comfortable" id="r2" />
        <RadioGroupItem value="compact" id="r3" />
      </RadioGroup>,
    )

    const compactRadio = screen.getByRole('radio', { name: /compact/i })
    fireEvent.click(compactRadio)
    expect(compactRadio).toHaveAttribute('data-state', 'checked')
  })

  it('calls onValueChange when an option is selected', () => {
    const handleChange = vi.fn()

    render(
      <RadioGroup onValueChange={handleChange} aria-label="View density">
        <RadioGroupItem value="default" id="r1" />
        <RadioGroupItem value="comfortable" id="r2" />
        <RadioGroupItem value="compact" id="r3" />
      </RadioGroup>,
    )

    const compactRadio = screen.getByRole('radio', { name: /compact/i })
    fireEvent.click(compactRadio)

    expect(handleChange).toHaveBeenCalledWith('compact')
  })

  it('supports keyboard navigation', () => {
    render(
      <RadioGroup defaultValue="default" aria-label="View density">
        <RadioGroupItem value="default" id="r1" />
        <RadioGroupItem value="comfortable" id="r2" />
        <RadioGroupItem value="compact" id="r3" />
      </RadioGroup>,
    )

    const firstRadio = screen.getByRole('radio', { name: /default/i })
    const secondRadio = screen.getByRole('radio', { name: /comfortable/i })
    const thirdRadio = screen.getByRole('radio', { name: /compact/i })

    // Focus on the first radio
    firstRadio.focus()
    expect(firstRadio).toHaveFocus()

    // Navigate to the next radio using ArrowDown
    fireEvent.keyDown(firstRadio, { key: 'ArrowDown' })
    expect(secondRadio).toHaveFocus()

    // Navigate to the next radio using ArrowDown
    fireEvent.keyDown(secondRadio, { key: 'ArrowDown' })
    expect(thirdRadio).toHaveFocus()

    // Navigate back to the previous radio using ArrowUp
    fireEvent.keyDown(thirdRadio, { key: 'ArrowUp' })
    expect(secondRadio).toHaveFocus()
  })
})
