import { ref } from 'vue'
import { nanoid } from 'nanoid'

const groups = ref([
    {
        uuid: nanoid(),
        title: 'Header',
        blocks: [
            {
                uuid: nanoid(),
                type: 'header',
                model: 'logo',
                icon: 'logo-lp',
                visible: true,
                componentName: 'HeaderLogo',
                optionsComponentName: 'HeaderLogoOptions',
                description: 'Logo',
                thumbUrl: 'https://placehold.co/600x200',
                data: {
                    imageUrl: 'https://placehold.co/600x200',
                }
            },
        ]
    },
    {
        uuid: nanoid(),
        title: 'Content',
        blocks: [
            {
                uuid: nanoid(),
                type: 'content',
                model: 'image',
                icon: 'image-lp',
                visible: true,
                componentName: 'ContentImage',
                optionsComponentName: 'ContentImageOptions',
                description: 'Image',
                thumbUrl: 'https://placehold.co/600x200',
                data: {
                    imageUrl: 'https://placehold.co/600x200',
                    paddingTop: 0,
                    paddingBottom: 0,
                },
            },
            {
                uuid: nanoid(),
                type: 'content',
                model: 'video',
                icon: 'video-lp',
                visible: true,
                componentName: 'ContentVideo',
                optionsComponentName: 'ContentVideoOptions',
                description: 'Video',
                thumbUrl: 'https://placehold.co/600x200',
                data: {
                    youtubeVideoUrl: '',
                    youtubeVideoCode: '',
                }
            },
            {
                uuid: nanoid(),
                type: 'content',
                model: 'title',
                icon: 'title-lp',
                visible: true,
                componentName: 'ContentTitle',
                optionsComponentName: 'ContentTitleOptions',
                description: 'Title',
                thumbUrl: 'https://placehold.co/600x200',
                data: {
                    title: 'Daily news',
                },
            },
            {
                uuid: nanoid(),
                type: 'content',
                model: 'text',
                icon: 'text-lp',
                visible: true,
                componentName: 'ContentText',
                optionsComponentName: 'ContentTextOptions',
                description: 'Text',
                thumbUrl: 'https://placehold.co/600x200',
                data: {
                    blocks: [
                        {
                            id: "QSE1ndpWYF",
                            type: "paragraph",
                            data: {
                                text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
                            }
                        }
                    ]
                }
            },
            {
                uuid: nanoid(),
                type: 'content',
                model: 'h-image-left',
                icon: 'image-text-lp',
                visible: true,
                componentName: 'ContentHorizontalImageText',
                optionsComponentName: 'ContentHorizontalImageTextOptions',
                description: 'Image and Text',
                thumbUrl: 'https://placehold.co/600x200',
                data: {
                    subtitle: 'September 1',
                    heading: 'Getting Cheap Airfare For Last Minute Travel',
                    text: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime possimus, omnis voluptas.',
                    imageUrl: 'https://placehold.co/600x200',
                }
            },
            {
                uuid: nanoid(),
                type: 'content',
                model: 'h-image-right',
                icon: 'text-image-lp',
                visible: true,
                componentName: 'ContentHorizontalTextImage',
                optionsComponentName: 'ContentHorizontalTextImageOptions',
                description: 'Text and Image',
                thumbUrl: 'https://placehold.co/600x200',
                data: {
                    subtitle: 'September 1',
                    heading: 'Nailing It On The Head With Free Internet Advertising',
                    text: 'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure.',
                    imageUrl: 'https://placehold.co/600x200',
                }
            },
            {
                uuid: nanoid(),
                type: 'content',
                model: 'links',
                icon: 'anchor-lp',
                visible: true,
                componentName: 'ContentLinks',
                optionsComponentName: 'ContentLinksOptions',
                description: 'Links',
                thumbUrl: 'https://placehold.co/600x200',
                data: {
                    links: [
                        {
                            uuid: nanoid(),
                            title: 'Popular article #1',
                            url: '',
                        },
                        {
                            uuid: nanoid(),
                            title: 'Popular article #2',
                            url: '',
                        },
                        {
                            uuid: nanoid(),
                            title: 'Popular article #3',
                            url: '',
                        },
                        {
                            uuid: nanoid(),
                            title: 'Popular article #4',
                            url: '',
                        },
                        {
                            uuid: nanoid(),
                            title: 'Popular article #5',
                            url: '',
                        },
                    ]
                }
            },
        ]
    },
    {
        uuid: nanoid(),
        title: 'Buttons',
        blocks: [
            {
                uuid: nanoid(),
                type: 'buttons',
                model: 'button',
                icon: 'button-lp',
                visible: true,
                componentName: 'ButtonsButton',
                optionsComponentName: 'ButtonsButtonOptions',
                description: 'Button',
                thumbUrl: 'https://placehold.co/600x200',
                data: {
                    title: 'Button',
                    url: '',
                    openNewTab: false
                }
            },
            {
                uuid: nanoid(),
                type: 'buttons',
                model: 'two-buttons',
                icon: 'sec-2-lp',
                visible: true,
                componentName: 'ButtonsTwoButtons',
                optionsComponentName: 'ButtonsTwoButtonsOptions',
                description: 'Two Buttons',
                thumbUrl: 'https://placehold.co/600x200',
                data: {
                    buttons: [
                        {
                            uuid: nanoid(),
                            title: 'Button 1',
                            url: '',
                            openNewTab: false
                        },
                        {
                            uuid: nanoid(),
                            title: 'Button 2',
                            url: '',
                            openNewTab: false
                        }
                    ]

                }
            },
            {
                uuid: nanoid(),
                type: 'buttons',
                model: 'three-buttons',
                icon: 'sec-3-lp',
                visible: true,
                componentName: 'ButtonsThreeButtons',
                optionsComponentName: 'ButtonsThreeButtonsOptions',
                description: 'Three Buttons',
                thumbUrl: 'https://placehold.co/600x200',
                data: {
                    buttons: [
                        {
                            uuid: nanoid(),
                            title: 'Button 1',
                            url: '',
                            openNewTab: false
                        },
                        {
                            uuid: nanoid(),
                            title: 'Button 2',
                            url: '',
                            openNewTab: false
                        },
                        {
                            uuid: nanoid(),
                            title: 'Button 3',
                            url: '',
                            openNewTab: false
                        }
                    ]

                }
            },
        ]
    },
    {
        uuid: nanoid(),
        title: 'Features',
        blocks: [
            {
                uuid: nanoid(),
                type: 'features',
                model: 'highlight-3',
                icon: 'sec-3-lp',
                visible: true,
                componentName: 'FeaturesHighlight3',
                optionsComponentName: 'FeaturesHighlight3Options',
                description: 'Highlight 3',
                thumbUrl: 'https://placehold.co/600x200',
                data: {
                    title: 'Features',
                    subtitle: 'Sed ut perspiciatis unde omnis iste natus',
                    list: [
                        {
                            uuid: nanoid(),
                            imageUrl: 'https://placehold.co/600x200',
                            title: 'Time saver',
                            description: 'Save a lot of time building your newsletter'
                        },
                        {
                            uuid: nanoid(),
                            imageUrl: 'https://placehold.co/600x200',
                            title: 'Clean design',
                            description: 'We designed blocks that look really good and clean.'
                        },
                        {
                            uuid: nanoid(),
                            imageUrl: 'https://placehold.co/600x200',
                            title: 'Easily customizable',
                            description: 'It is easy for anyone to make a perfect newsletter.'
                        },
                    ]
                }
            },
        ]
    },
    {
        uuid: nanoid(),
        title: 'Hidden',
        blocks: [
            {
                uuid: nanoid(),
                type: 'hidden',
                model: 'hidden-link',
                icon: '',
                visible: false,
                componentName: 'HiddenLink',
                optionsComponentName: 'HiddenLinkOptions',
                description: 'Link',
                thumbUrl: '',
                data: {
                    title: 'Features',
                    url: '#'
                }
            },
        ]
    }
])

export default {
    groups
}
