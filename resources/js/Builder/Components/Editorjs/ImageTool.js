import ImageTool from '@editorjs/image';

class CustomImageTool extends ImageTool {
    static get toolbox() {
        return {
            title: 'Image',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path stroke="null" d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>',
        };
    }

    render() {
        this._element = super.render();
        return this._element;
    }

    renderSettings() {
        const settings = [
            {
                name: 'alignment',
                icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M3 3h18v2H3V3zm0 4h12v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm0 4h18v2H3v-2z"/></svg>',
                action: this.toggleAlignment.bind(this),
            },
            {
                name: 'width',
                icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/></svg>',
                action: this.toggleWidth.bind(this),
            },
            {
                name: 'borderRadius',
                icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5z"/></svg>',
                action: this.toggleBorderRadius.bind(this),
            },
        ];

        const wrapper = document.createElement('div');

        settings.forEach((setting) => {
            const button = document.createElement('div');
            button.classList.add('cdx-settings-button');
            button.innerHTML = setting.icon;
            button.addEventListener('click', () => setting.action(setting.name));
            wrapper.appendChild(button);
        });

        return wrapper;
    }

    toggleAlignment(name) {
        const imageElement = this._element.querySelector('img');
        const currentAlignment = imageElement.style.textAlign;

        switch (currentAlignment) {
            case 'left':
                imageElement.style.textAlign = 'center';
                break;
            case 'center':
                imageElement.style.textAlign = 'right';
                break;
            case 'right':
                imageElement.style.textAlign = 'justify';
                break;
            default:
                imageElement.style.textAlign = 'left';
                break;
        }
    }

    toggleWidth(name) {
        const imageElement = this._element.querySelector('img');
        if (imageElement.style.width === '100%') {
            imageElement.style.width = '50%';
        } else {
            imageElement.style.width = '100%';
        }
    }

    toggleBorderRadius(name) {
        const imageElement = this._element.querySelector('img');
        if (imageElement.style.borderRadius === '50%') {
            imageElement.style.borderRadius = '0';
        } else {
            imageElement.style.borderRadius = '50%';
        }
    }
}

export default CustomImageTool;
