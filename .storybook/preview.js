import {GlobalStyle} from '../src/components/global-style'

export const parameters = {
    backgrounds: {
        default: 'dark',
        values: [
            {
                name: 'dark',
                value: '#111c2a',
            },
        ],
    },
}

export const decorators = [
    (Story) => {
        return (
            <>
                <GlobalStyle/>
                <Story />
            </>
        )
    }
]
