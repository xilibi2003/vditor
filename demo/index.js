import Vditor from '../src/index'
import '../src/assets/scss/classic.scss'

window.vditor = new Vditor('vditor', {
  debugger: true,
  typewriterMode: true,
  placeholder: 'placeholder',
  counter: 100,
  height: 500,
  hint: {
    emojiPath: 'https://cdn.jsdelivr.net/npm/vditor@1.8.3/dist/images/emoji',
    emojiTail: '<a href="https://hacpai.com/settings/function" target="_blank">设置常用表情</a>',
    emoji: {
      'sd': '💔',
      'j': 'https://unpkg.com/vditor@1.3.1/dist/images/emoji/j.png',
    },
  },


  toolbar: [ 'undo' , 'redo', 'emoji', 'headings', 'bold', 'italic' , 'strike', '|',
  'line' , 'quote' , 'list' , 'ordered-list' , 'check' , 'code' , 'inline-code' ,
  'upload' , 'link' , 'table' ,  'wysiwyg', 'both' , 'preview' , 'format' , 'fullscreen' , 'info' , 'help', 'latex', 'inline-latex','br'] ,
  tab: '\t',
  upload: {
    accept: 'image/*,.mp3, .wav, .rar',
    token: 'test',
    url: '/api/upload/editor',
    linkToImgUrl: '/api/upload/fetch',
    filename (name) {
      return name.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, '').
        replace(/[\?\\/:|<>\*\[\]\(\)\$%\{\}@~]/g, '').
        replace('/\\s/g', '')
    },
  },
})
