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
                thumbUrl: '/images/thumbs/v1/header/logo.png',
                data: {
                    imageUrl: 'https://cdn.mailerlite.com/images/editor/logo.png',
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
                thumbUrl: 'https://placeholder.mailerlite.com/1020x260-icon_v2.jpg',
                data: {
                    imageUrl: 'https://placeholder.mailerlite.com/1020x260-icon_v2.jpg',
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
                thumbUrl: 'https://placeholder.mailerlite.com/640x200-video_v2.jpg',
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
                thumbUrl: '/images/thumbs/v1/content/title.jpg',
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
                thumbUrl: '/images/thumbs/v1/content/text.png',
                data: {
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
                },
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
                thumbUrl: '/images/thumbs/v1/content/h-img-text.png',
                data: {
                    subtitle: 'September 1',
                    heading: 'Getting Cheap Airfare For Last Minute Travel',
                    text: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime possimus, omnis voluptas.',
                    imageUrl: 'https://cdn.mailerlite.com/images/editor/img6.png',
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
                thumbUrl: '/images/thumbs/v1/content/h-text-img.png',
                data: {
                    subtitle: 'September 1',
                    heading: 'Nailing It On The Head With Free Internet Advertising',
                    text: 'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure.',
                    imageUrl: 'https://cdn.mailerlite.com/images/editor/img7.png',
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
                thumbUrl: '/images/thumbs/v1/content/links.png',
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
                thumbUrl: '/images/thumbs/v1/buttons/button1.jpg',
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
                thumbUrl: '/images/thumbs/v1/buttons/button1.jpg',
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
                thumbUrl: '/images/thumbs/v1/buttons/button1.jpg',
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
                thumbUrl: '/images/thumbs/v1/features/highlight-3.png',
                data: {
                    title: 'Features',
                    subtitle: 'Sed ut perspiciatis unde omnis iste natus',
                    list: [
                        {
                            uuid: nanoid(),
                            imageUrl: 'https://cdn.mailerlite.com/images/editor/icon1.png',
                            title: 'Time saver',
                            description: 'Save a lot of time building your newsletter'
                        },
                        {
                            uuid: nanoid(),
                            imageUrl: 'https://cdn.mailerlite.com/images/editor/icon2.png',
                            title: 'Clean design',
                            description: 'We designed blocks that look really good and clean.'
                        },
                        {
                            uuid: nanoid(),
                            imageUrl: 'https://cdn.mailerlite.com/images/editor/icon3.png',
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
