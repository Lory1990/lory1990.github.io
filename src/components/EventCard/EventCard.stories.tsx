import { Meta, Story } from "@storybook/react"
import EventCard from "."
import { IEvent } from "../../assets/events-list"

export default {
  title: "components/EventCard",
  component: EventCard
} as Meta

const Template: Story<IEvent> = args => <EventCard {...args} />

export const Plain: Story<IEvent> = Template.bind({})

Plain.args = {
  slug: "creare-una-test-factory-aziendale",
  title: "Creare una Test Factory Aziendale",
  shortDescription:
    "In this presentation I want to tell how I handle day by day the development and the monitoring of an enterprise application. We will go deep in the architecture decision strategy and the tools we are using to ensure safety, reliability and scalability of the platform",
  link: "https://gdg.community.dev/events/details/google-gdg-valle-daosta-presents-devfest-alps-2022/",
  date: "2023-01-13",
  image: "/img/events/2022-gdg-triveneto/badge.webp",
  isOnline: false,
  venue: "Google DevFest Alps 2023"
}
