import { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    asChild: {
      control: 'boolean',
      description: 'Renders the RadioGroupItem as a custom child element.',
      defaultValue: false,
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected value of the radio group.',
      defaultValue: 'comfortable',
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  args: {
    defaultValue: 'comfortable',
  },
  render: (args) => (
    <RadioGroup {...args} aria-label="View density">
      <div className="flex items-center">
        <RadioGroupItem value="default" id="r1" asChild={args.asChild}>
          {args.asChild ?
            <button className="h-6 w-6 rounded-full bg-gray-200" />
          : null}
        </RadioGroupItem>
        <label htmlFor="r1" className="pl-4">
          Default
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroupItem value="comfortable" id="r2" asChild={args.asChild}>
          {args.asChild ?
            <button className="h-6 w-6 rounded-full bg-gray-200" />
          : null}
        </RadioGroupItem>
        <label htmlFor="r2" className="pl-4">
          Comfortable
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroupItem value="compact" id="r3" asChild={args.asChild}>
          {args.asChild ?
            <button className="h-6 w-6 rounded-full bg-gray-200" />
          : null}
        </RadioGroupItem>
        <label htmlFor="r3" className="pl-4">
          Compact
        </label>
      </div>
    </RadioGroup>
  ),
}
