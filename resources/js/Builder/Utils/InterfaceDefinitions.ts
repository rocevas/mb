export interface Block {
    uuid: string
    type: string
    icon: string
    componentName: string
    description: string
    disabledControls?: Object,
    data: Object,
    max?: number
}

export interface BlockGroup {
    uuid: string
    title: string
    blocks: Array<Block>
}

export interface Element extends Block {
    disabledControls?: Object, // object for disabling specific controls, like disabledControls: { delete: true }
    data: Object
}

export interface ElementGroup {
    uuid: string
    title: string
    visibleInDevEnv?: boolean,
    elements: Array<Element>
}

export interface Layout extends Block {
    layoutComponentType: string
}
