import {ref} from 'vue'
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useFileManagerStore = defineStore('FileManagerStore', {
    state: () => ({
        visible: false,
        editing: {
            block: {},
            varName: ''
        },
        files: useLocalStorage('filemanager', [
            {
                "url": "https://images.unsplash.com/photo-1659536540437-510ce63eb672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
                "title": "Drone.jpg"
            },
            {
                "url": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
                "title": "Travel.jpg"
            },
            {
                "url": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
                "title": "Colorado.jpg"
            },
            {
                "url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
                "title": "Boat.jpg"
            },
            {
                "url": "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
                "title": "Balloons.jpg"
            },
            {
                "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
                "title": "Jungle.jpg"
            },
            {
                "url": "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
                "title": "Mountains.jpg"
            },
            {
                "url": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
                "title": "Italy-seaside.jpg"
            },
            {
                "url": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
                "title": "Beach-n-boats.jpg"
            },
            {
                "url": "https://images.unsplash.com/photo-1527824404775-dce343118ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
                "title": "Desert.jpg"
            },
            {
                "url": "https://local.mlcdn.com/a/0/1/images/a38ba81211179b0ed8f44e3383414a2032773b13.png",
                "title": "Mailerlite"
            },
            {
                "url": "https://local.mlcdn.com/a/0/1/images/3f6ac7f5cc1a1e51d7013634154b1cd16c501b0b.png",
                "title": "Newsletter"
            },
            {
                "url": "https://bucket.mlcdn.com/a/2977/2977903/images/892fe770574331e643d4fce0328ee74bc4d1a643.jpeg",
                "title": "Team"
            },
            {
                "url": "https://bucket.mlcdn.com/a/2977/2977903/images/a4c8914f9af35a6908defe6fb8808768b921f6cf.jpeg",
                "title": "Team 2"
            },
            {
                "url": "https://local.mlcdn.com/a/0/1/images/01ddc5d7357d231b33e0a72ae40d6fd7804f1818.jpeg",
                "title": "Team 3"
            },
            {
                "url": "https://local.mlcdn.com/a/0/1/images/f7f9db845eb3a26b1674753fbc634bbf18656a0c.jpeg",
                "title": "Team 4"
            },
            {
                "url": "https://local.mlcdn.com/a/0/1/images/e7c97ec7424c83bbe82acdaa1659fbca95d921e6.jpeg",
                "title": "Team 5"
            },
            {
                "url": "https://local.mlcdn.com/a/0/1/images/ec313b6b5bd3736d274c551d5f95cb548a88ed53.jpeg",
                "title": "Team 6"
            },
            {
                "url": "https://local.mlcdn.com/a/0/1/images/5badc6d043abe739ccbcb5679973c24e507c140d.jpeg",
                "title": "Team 7"
            },
            {
                "url": "https://www.mailerlite.com/assets/blog/cover-mailersend.jpg",
                "title": "Team 8"
            },
        ])
    }),
    getters: {
        isFileManagerVisible: (state) => {
            return () => state.visible
        },

        getFiles: (state) => {
            return () => state.files
        }
    },
    actions: {
        showFileManager(block, varName) {
            this.editing.block = ref(block);
            this.editing.varName = varName;
            this.visible = true;
        },
        selectFileManager(selected) {
            this.editing.block[this.editing.varName] = selected;
            this.hideFileManager();
        },
        addFileByUrl(url) {
            this.files.push({
                url: url,
                title: '',
            })
        },
        deleteFile(url) {
            const index = this.files.findIndex((file) => {
                return file.url === url
            })

            this.files.splice(index, 1);
        },
        hideFileManager() {
            this.visible = false;
        },
    },
})
