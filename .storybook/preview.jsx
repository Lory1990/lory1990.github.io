import { Suspense, StrictMode } from "react"

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'centered', 
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

export const decorators = [
    Story => (
        <StrictMode>
                <Suspense fallback={<div>Loading...</div>}>
                    <Story />
                </Suspense>
        </StrictMode>
    )
]
