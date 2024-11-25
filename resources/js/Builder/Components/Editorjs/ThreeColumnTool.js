import EditorJS from '@editorjs/editorjs';

class ThreeColumnTool {
    static get toolbox() {
        return {
            title: '3 Columns',
            icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 2v14h6V5H5zm8 0v14h6V5h-6z"/></svg>',
        };
    }

    constructor({ data, api }) {
        this.api = api;
        this.data = {
            content: data.content || ['', '', ''],
            widths: data.widths || ['33.33%', '33.33%', '33.33%'],
        };
        this.wrapper = null;
    }

    render() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('column-tool');

        this.data.content.forEach((content, index) => {
            const column = document.createElement('div');
            column.classList.add('column');
            column.contentEditable = true;
            column.innerHTML = content;
            column.style.flexBasis = this.data.widths[index];
            column.addEventListener('input', () => {
                this.data.content[index] = column.innerHTML;
            });
            this.wrapper.appendChild(column);
        });

        return this.wrapper;
    }

    save(blockContent) {
        const columns = blockContent.querySelectorAll('.column');
        return {
            content: Array.from(columns).map(column => column.innerHTML),
            widths: Array.from(columns).map(column => column.style.flexBasis),
        };
    }

    renderSettings() {
        const settingsWrapper = document.createElement('div');

        const layoutOptions = [
            { label: '1/3, 1/3, 1/3', value: ['33.33%', '33.33%', '33.33%'] },
            { label: '1/4, 2/4, 1/4', value: ['25%', '50%', '25%'] },
        ];

        layoutOptions.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option.label;
            button.addEventListener('click', () => {
                this.data.widths = option.value;
                this.wrapper.querySelectorAll('.column').forEach((column, index) => {
                    column.style.flexBasis = this.data.widths[index];
                });
            });
            settingsWrapper.appendChild(button);
        });

        return settingsWrapper;
    }

    static get sanitize() {
        return {
            content: {
                br: true,
            },
        };
    }
}

export default ThreeColumnTool;
