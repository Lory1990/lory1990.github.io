import { Meta, Story } from "@storybook/react"
import React, { useEffect, useState } from "react"
import TechStackList, { ITechStackListProps } from "./TechStackList"

export default {
    title: "components/Tech Stack List",
    component: TechStackList
} as Meta

const Template: Story<ITechStackListProps> = args => <TechStackList {...args} />

export const NoLinks: Story<ITechStackListProps> = Template.bind({})
export const Plain: Story<ITechStackListProps> = Template.bind({})

NoLinks.args = {
    techStack: []
}

Plain.args = {
    techStack: [
        {
            title: "Java"
        },
        {
            title: "Node"
        }
    ],
    columns: 3
}
