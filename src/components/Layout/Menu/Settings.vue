<template>
  <v-popover placement="left-start">
    <button-ui icon>
      <v-mdi name="mdi-cog"></v-mdi>
    </button-ui>
    <template slot="popover">
      <card-ui>
        <list-ui>
          <switch-ui
           class="mr-6" :value="settings.autoSave"
           @change="updateSetting('autoSave', $event)"></switch-ui>
          <p>Auto Save</p>
        </list-ui>
        <list-ui>
          <switch-ui class="mr-6" :value="settings.syncScroll"
           @change="updateSetting('syncScroll', $event)"></switch-ui>
          <p>Sync Scroll</p>
        </list-ui>
      </card-ui>
    </template>
  </v-popover>
</template>
<script>
export default {
  computed: {
    settings() {
      return this.$store.state.settings;
    },
  },
  methods: {
    updateSetting(key, value) {
      this.$store.commit('settings/update', {
        key,
        value,
      });
    },
  },
};
</script>
