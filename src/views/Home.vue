<template>
  <div class="flex">
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
    contentWidth: '100%',
    markdown: '',
    sideMenu: false,
    preview: false,
  }),
  watch: {
    sideMenu() {
      this.resizeHandler();
    },
  },
  methods: {
    resizeHandler() {
      const width = this.sideMenu ? window.innerWidth - 280 : window.innerWidth;
      this.contentWidth = `${width}px`;
    },
  },
  created() {
    window.addEventListener('resize', this.resizeHandler);
  },
  mounted() {
    setTimeout(() => {
      syncScroll(['.CodeMirror-scroll', '.panel2 .simplebar-content-wrapper']);
    }, 2000);
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeHandler);
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
