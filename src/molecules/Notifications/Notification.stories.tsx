//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Notification } from './Notification'
import { NotificationTitle } from './NotificationTitle'
import { NotificationTime } from './NotificationTime'
import { NotificationMessage } from './NotificationMessage'
import { NotificationImage } from './NotificationImage'
import { NotificationHeader } from './NotificationHeader'
import { NotificationActions } from './NotificationActions'
import { NotificationContentContainer } from './NotificationContentContainer'
import { NotificationLink } from './NotificationLink'

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    notification: {
      control: 'object',
      description:
        'The context data for the notification, e.g., whether it is read or unread.',
      table: {
        type: { summary: '{ isRead: boolean }' },
        defaultValue: { summary: '{ isRead: false }' },
      },
    },
    title: {
      control: 'text',
      description: 'The title of the notification.',
      table: {
        type: { summary: 'string' },
      },
    },
    message: {
      control: 'text',
      description: 'The main message/content of the notification.',
      table: {
        type: { summary: 'string' },
      },
    },
    time: {
      control: 'date',
      description: 'The time the notification was sent.',
      table: {
        type: { summary: 'Date' },
      },
    },
    imageSrc: {
      control: 'text',
      description: 'Optional image source URL for the notification.',
      table: {
        type: { summary: 'string' },
      },
    },
    link: {
      control: 'text',
      description: 'Optional link URL for the notification.',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to style the notification.',
      table: {
        type: { summary: 'string' },
      },
    },
    asChild: {
      control: 'boolean',
      description:
        'Renders the notification using a custom child element via Radix Slot.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Notification>

export const Default: Story = {
  args: {
    notification: { isRead: false },
    children: (
      <>
        <NotificationHeader>
          <NotificationImage src={null} />
          <NotificationContentContainer>
            <NotificationTitle>Notification Title</NotificationTitle>
            <NotificationTime time={new Date()} />
            <NotificationMessage>
              This is a notification message.
            </NotificationMessage>
          </NotificationContentContainer>
        </NotificationHeader>
        <NotificationActions>
          <button className="btn-primary">Action 1</button>
          <button className="btn-secondary">Action 2</button>
        </NotificationActions>
      </>
    ),
    className: '',
  },
}

export const ReadNotification: Story = {
  args: {
    notification: { isRead: true },
    children: (
      <>
        <NotificationHeader>
          <NotificationImage src={null} />
          <NotificationContentContainer>
            <NotificationTitle>Read Notification</NotificationTitle>
            <NotificationTime time={new Date()} />
            <NotificationMessage>
              This notification has been read.
            </NotificationMessage>
          </NotificationContentContainer>
        </NotificationHeader>
      </>
    ),
    className: 'bg-neutral-100',
  },
}

export const NotificationWithLink: Story = {
  args: {
    notification: { isRead: false },
    children: (
      <NotificationLink href="/details" notification={{ isRead: false }}>
        <NotificationHeader>
          <NotificationContentContainer>
            <NotificationTitle>Notification with Link</NotificationTitle>
            <NotificationMessage>
              Click here to view more details.
            </NotificationMessage>
          </NotificationContentContainer>
        </NotificationHeader>
      </NotificationLink>
    ),
  },
}

export const NotificationWithImage: Story = {
  args: {
    notification: { isRead: false },
    children: (
      <NotificationHeader>
        <NotificationImage
          src={
            'https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png'
          }
        />
        <NotificationContentContainer>
          <NotificationTitle>Notification with Link</NotificationTitle>
          <NotificationMessage>
            Click here to view more details.
          </NotificationMessage>
        </NotificationContentContainer>
      </NotificationHeader>
    ),
  },
}
