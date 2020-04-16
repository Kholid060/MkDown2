import Vue from 'vue';
import VueCodemirror from 'vue-codemirror';


import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
import 'codemirror/addon/edit/continuelist';

import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';

import 'codemirror/keymap/sublime';

Vue.use(VueCodemirror);
