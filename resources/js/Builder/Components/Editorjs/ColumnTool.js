import EditorJS from '@editorjs/editorjs';

class ColumnTool {
    static get toolbox() {
        return {
            title: 'Columns',
            icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 2v14h6V5H5zm8 0v14h6V5h-6z"/></svg>',
        };
    }

    constructor({ data, api }) {
        this.api = api;
        this.data = {
            columns: data.columns || 2,
            content: data.content || ['', ''],
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
            columns: this.data.columns,
            content: Array.from(columns).map(column => column.innerHTML),
        };
    }

    static get sanitize() {
        return {
            content: {
                br: true,
            },
        };
    }
}

export default ColumnTool;
