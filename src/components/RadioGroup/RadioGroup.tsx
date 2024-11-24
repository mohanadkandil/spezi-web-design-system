//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import * as RadioGroupPrimitives from '@radix-ui/react-radio-group'
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  ReactNode,
} from 'react'
import { cn } from '../../utils/className'

interface RadioGroupProps
  extends ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Root> {}

export const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitives.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitives.Root
    className={cn('flex flex-col gap-2.5', className)}
    {...props}
    ref={ref}
  />
))
RadioGroup.displayName = RadioGroupPrimitives.Root.displayName

interface RadioGroupItemProps
  extends ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item> {
  asChild?: boolean
  children?: ReactNode // Allow ReactNode to handle both valid and empty children
}

export const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitives.Item>,
  RadioGroupItemProps
>(({ className, asChild = false, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitives.Item
      asChild={asChild}
      ref={ref}
      className={cn(
        'relative h-6 w-6 cursor-pointer rounded-full border border-gray-300 bg-white outline-none hover:bg-gray-100 focus:ring-2 focus:ring-blue-500',
        className,
      )}
      {...props}
    >
      {asChild ?
        children || null // Gracefully handle missing children
      : <RadioGroupPrimitives.Indicator className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-blue-500" />
      }
    </RadioGroupPrimitives.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitives.Item.displayName
