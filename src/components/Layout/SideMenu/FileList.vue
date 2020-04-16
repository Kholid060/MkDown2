<template>
  <div class="file-list mt-8">
    <div class="files mb-8">
      <card-ui
       hover
       class="cursor-pointer mt-3"
       v-for="(file, id) in $store.state.files.files"
       @click="changeActive(id)"
       :key="id"
       :class="{ 'border-2 border-primary': id === $store.state.files.activeFile }">
        <div class="flex items-center">
          <input-ui
           v-model="tempFileTitle"
           autofocus
           @keyup.enter.native="updateFileTitle"
           @blur="updateFileTitle"
           class="mr-3"
           v-if="id === editFileId"></input-ui>
          <p
           class="text-sm leading-tight pr-2 font-semibold line-clamp flex-grow w-11/12"
           v-else>{{file.title}}</p>
          <button-ui icon @click="editFileId = id, tempFileTitle = file.title">
            <v-mdi name="mdi-pencil" size="20"></v-mdi>
          </button-ui>
        </div>
      </card-ui>
    </div>
    <button-ui block type="primary" @click="addFile">
      Add file
    </button-ui>
    <button-ui block class="mt-4" plain type="danger" @click="delFile">
      Delete file
    </button-ui>
  </div>
</template>
<script>
export default {
  data: () => ({
    editFileId: '',
    tempFileTitle: '',
  }),
  methods: {
    updateFileTitle() {
      if (!this.editFileId) return;

      this.$store.commit('files/updateFile', {
        id: this.editFileId,
        key: 'title',
        value: this.tempFileTitle,
      });
      this.editFileId = '';
    },
    addFile() {
      this.$store.dispatch('files/add', {
        activate: true,
        data: {
          title: 'untitled',
          content: '',
        },
      });
    },
    changeActive(id) {
      this.$store.commit('files/changeActive', id);
    },
    delFile() {
      this.$store.dispatch('files/delete');
    },
  },
};
</script>
