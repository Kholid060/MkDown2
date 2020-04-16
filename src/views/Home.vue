<template>
  <div class="flex">
    <template v-if="retrieved">
      <side-menu v-if="sideMenu" @close="sideMenu = false"></side-menu>
      <div :style="{ width: contentWidth }">
        <Menu v-model="sideMenu"></Menu>
        <div class="flex" style="height: calc(100vh - 4rem)">
          <button-ui
           icon
           type="primary"
           round
           @click="preview = !preview"
           class="absolute lg:hidden shadow-xl z-20 bottom-0 right-0 m-6">
            <v-mdi size="28" name="mdi-eye"></v-mdi>
          </button-ui>
          <div class="bg-light lg:w-6/12 w-screen" v-show="!preview">
            <vue-codemirror v-model="markdown"></vue-codemirror>
          </div>
          <simplebar
           data-simplebar-auto-hide="false"
           class="lg:w-6/12 px-6 py-3 panel2 h-full hidden w-full"
           :class="{'active-preview': preview}">
            <preview-content :content="markdown"></preview-content>
          </simplebar>
        </div>
      </div>
    </template>
    <div
     class="h-full w-full absolute splash"
     v-else>
      <div class="content">
        <h1 class="text-6xl font-bold">MkDown</h1>
        <p class="text-2xl text-lighter">Online Markdown Editor</p>
      </div>
    </div>
  </div>
</template>
<script>
import simplebar from 'simplebar-vue';
import VueCodemirror from '../components/Pages/Home/VueCodemirror.vue';
import PreviewContent from '../components/Pages/Home/PreviewContent.vue';
import syncScroll from '~/utils/syncScroll';
import Menu from '~/components/Layout/Menu.vue';
import SideMenu from '~/components/Layout/SideMenu.vue';
import 'simplebar/dist/simplebar.min.css';

export default {
  components: {
    VueCodemirror, PreviewContent, simplebar, Menu, SideMenu,
  },
  data: () => ({
    markdown: '',
    retrieved: false,
    sideMenu: false,
    preview: false,
  }),
  computed: {
    contentWidth() {
      const width = this.sideMenu ? window.innerWidth - 280 : window.innerWidth;

      return `${width}px`;
    },
  },
  mounted() {
    this.$store.dispatch('retrieve').then(() => {
      this.retrieved = true;

      setTimeout(() => {
        syncScroll(['.CodeMirror-scroll', '.panel2 .simplebar-content-wrapper']);
      }, 2000);
    });
  },
};
</script>
<style lang="scss">
.splash{
  .content{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-align: center;
  }
}
@screen lg {
  .panel2, .gutter.gutter-horizontal{
    display: inline-block !important;
  }
}
.panel2{
  @apply overflow-x-hidden overflow-y-auto;
}
.active-preview{
  display: block !important;
}
.CodeMirror-overlayscroll-vertical div{
  background-color: #12151b
}
.gutter.gutter-horizontal{
  display: none;
  background-color: rgba(255, 255, 255, 0.02);
  cursor: col-resize
}
</style>
