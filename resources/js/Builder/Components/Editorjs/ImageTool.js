import ImageTool from '@editorjs/image';
import { IconPicture } from '@codexteam/icons';

class CustomImageTool extends ImageTool {
    static get toolbox() {
        return {
            title: 'Image',
            icon: IconPicture,
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
