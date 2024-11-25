import EditorJS from '@editorjs/editorjs';

class VideoTool {
    static get toolbox() {
        return {
            title: 'Video',
            icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M10 8.64L15.27 12 10 15.36V8.64M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>',
        };
    }

    constructor({ data, api }) {
        this.api = api;
        this.data = {
            youtubeVideoUrl: data.youtubeVideoUrl || '',
            youtubeVideoCode: data.youtubeVideoCode || '',
        };
        this.wrapper = null;
    }

    render() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('video-tool');
        this._updateVideo();
        return this.wrapper;
    }

    _updateVideo() {
        let videoElement = this.wrapper.querySelector('.video-preview');
        if (!videoElement) {
            videoElement = document.createElement('div');
            videoElement.classList.add('video-preview');
            this.wrapper.appendChild(videoElement);
        }
        const imageUrl = this.data.youtubeVideoCode
            ? `https://img.youtube.com/vi/${this.data.youtubeVideoCode}/maxresdefault.jpg`
            : 'https://placehold.co/600x200';
        videoElement.innerHTML = `
            <a href="${this.data.youtubeVideoCode ? `https://www.youtube.com/watch?v=${this.data.youtubeVideoCode}` : '#'}" target="_blank">
                <img src="${imageUrl}" alt="YouTube Video" class="object-cover h-96 w-full" loading="lazy">
                ${this.data.youtubeVideoCode ? `
                <span class="absolute inset-0 flex justify-center items-center z-10">
                    <img src="/images/placeholders/play-red.png" alt="Play" class="object-cover h-16 w-auto" loading="lazy">
                </span>` : ''}
            </a>
        `;
    }

    renderSettings() {
        const settingsWrapper = document.createElement('div');
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter YouTube URL';
        input.value = this.data.youtubeVideoUrl;
        input.addEventListener('input', (event) => {
            this.data.youtubeVideoUrl = event.target.value;
            const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            const match = event.target.value.match(regExp);
            this.data.youtubeVideoCode = match && match[7].length === 11 ? match[7] : '';
            this._updateVideo();
        });

        settingsWrapper.appendChild(input);
        return settingsWrapper;
    }

    save(blockContent) {
        return {
            youtubeVideoUrl: this.data.youtubeVideoUrl,
            youtubeVideoCode: this.data.youtubeVideoCode,
        };
    }

    static get sanitize() {
        return {
            youtubeVideoUrl: {},
            youtubeVideoCode: {},
        };
    }
}

export default VideoTool;
