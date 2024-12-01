import { IconAlignLeft, IconAlignRight, IconAlignCenter, IconAlignJustify } from '@codexteam/icons';

class Alignment {
    constructor({ api }) {
        this.api = api;
        this.button = null;
        this.dropdown = null;
        this.currentAlignment = 'left'; // Default alignment
    }

    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.innerHTML = IconAlignLeft; // Default icon
        this.button.classList.add(this.api.styles.inlineToolButton);
        this.button.addEventListener('click', () => this.toggleDropdown());

        this.dropdown = document.createElement('div');
        this.dropdown.classList.add('alignment-dropdown');
        this.dropdown.style.display = 'none';

        const alignments = [
            { name: 'left', icon: IconAlignLeft },
            { name: 'center', icon: IconAlignCenter },
            { name: 'right', icon: IconAlignRight },
            { name: 'justify', icon: IconAlignJustify }
        ];

        alignments.forEach(alignment => {
            const item = document.createElement('button');
            item.type = 'button';
            item.innerHTML = alignment.icon;
            item.addEventListener('click', () => this.alignText(alignment.name, alignment.icon));
            this.dropdown.appendChild(item);
        });

        const container = document.createElement('div');
        container.appendChild(this.button);
        container.appendChild(this.dropdown);

        return container;
    }

    toggleDropdown() {
        this.dropdown.style.display = this.dropdown.style.display === 'none' ? 'block' : 'none';
    }

    alignText(alignment, icon) {
        document.execCommand('justify' + alignment.charAt(0).toUpperCase() + alignment.slice(1));
        this.button.innerHTML = icon; // Update button icon
        this.currentAlignment = alignment; // Update current alignment
        this.dropdown.style.display = 'none';
    }

    checkState() {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const parentElement = range.commonAncestorContainer.nodeType === 1 ? range.commonAncestorContainer : range.commonAncestorContainer.parentNode;

        if (parentElement) {
            const textAlign = window.getComputedStyle(parentElement).textAlign;
            switch (textAlign) {
                case 'center':
                    this.button.innerHTML = IconAlignCenter;
                    this.currentAlignment = 'center';
                    break;
                case 'right':
                    this.button.innerHTML = IconAlignRight;
                    this.currentAlignment = 'right';
                    break;
                case 'justify':
                    this.button.innerHTML = IconAlignJustify;
                    this.currentAlignment = 'justify';
                    break;
                default:
                    this.button.innerHTML = IconAlignLeft;
                    this.currentAlignment = 'left';
                    break;
            }
        }
    }

    static get isInline() {
        return true;
    }

    static get sanitize() {
        return {
            span: {
                style: true,
            },
        };
    }
}

export default Alignment;
