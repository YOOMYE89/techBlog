<template>
    <vue-editor v-model="content" :placeholder="'Write about ' + editObj + ' Content'" :editorToolbar="customToolbar" useCustomImageHandler @image-added="handleImageAdded"/>
    <br/>
    <div class="editor-form">
        <button class="btn btn-outline-primary" @click="saveContent">Save {{ editObj }} Content</button>
    </div>
</template>

<script>
import { VueEditor } from "vue3-editor";
import { mapState, mapActions } from 'vuex'

import axios from "axios";

export default {
    components: {
        VueEditor
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if( typeof(vm.$route.params.editObj) !== 'undefined' ) {
                vm.$router.push({name : 'editor'})
            } else {
                vm.$router.push({name : 'index'})
            }
        })
    },
    created () {
        this.$store.dispatch('editStore/setEditObj', this.$route.params.editObj)
    },
    computed: {
        ...mapState('editStore', [
        'editObj'
        ]),
    },
    data() {
        return {
            content: "",
            // 툴바
            customToolbar: [
                ["bold", "underline"], // toggled buttons
                [{ script: "sub" }, { script: "super" }],
                [
                    { align: "" },
                    { align: "center" },
                    { align: "right" },
                    { align: "justify" }
                ],
                [{ font: [] }],
                [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                ["image", "video"],
                ["clean"] // remove formatting button
            ]
        }
    },
    methods : {
        ...mapActions('editStore', ['setEditObj']),
        
        saveContent () {
            console.log(this.content);
        },
        handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
            // NOTE: Your key could be different such as:
            // formData.append('file', file)

            console.log(file)
            console.log(Editor)

            var formData = new FormData();
            formData.append("image", file);

            axios({
                url: "https://fakeapi.yoursite.com/images",
                method: "POST",
                data: formData
            })
            .then(result => {
                let url = result.data.url; // Get url from response
                Editor.insertEmbed(cursorLocation, "image", url)
                resetUploader();
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>