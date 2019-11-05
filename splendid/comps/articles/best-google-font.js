import __initBottom from '../__init/bottom'
import '../../../articles/best-google-font/script'
import '../../js/load-background-img'
import makeClassGetter from '../__mcg'
const renameMaps = {  }
__initBottom()
import { makeIo, init, startPlain } from '../__competent-lib'
import Parallax from 'splendid/build/components/parallax'
import Animation from '../../components/animation.js'
import Highlightjs from 'splendid/build/components/highlightjs'
import Tip from '../../components/tip.js'

const __components = {
  'parallax': Parallax,
  'animation': Animation,
  'highlightjs': Highlightjs,
  'tip': Tip,
}

const io = makeIo()

const meta = [{
  key: 'parallax',
  id: 'c70819',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'parallax',
  id: 'c56385',
  props: {
    'background-image': '/img/tile.jpg',
  },
},
{
  key: 'animation',
  id: 'c52507',
  props: {
    path: 'best-google-font/animate/agf.json',
    width: '550',
    height: '400',
    align: 'center',
  },
},
{
  key: 'parallax',
  id: 'c27532',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'highlightjs',
  id: 'c45018',
  props: {
    lang: 'xml,javascript',
  },
},
{
  key: 'parallax',
  id: 'c25081',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'parallax',
  id: 'c78401',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'highlightjs',
  id: 'c74268',
  props: {
    lang: 'xml',
  },
},
{
  key: 'parallax',
  id: 'c72096',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'highlightjs',
  id: 'c57253',
  props: {
    lang: 'xml,javascript',
  },
},
{
  key: 'highlightjs',
  id: 'c65987',
  props: {
    lang: 'xml,javascript',
  },
},
{
  key: 'parallax',
  id: 'c70368',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'parallax',
  id: 'c73556',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'parallax',
  id: 'c66833',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'highlightjs',
  id: 'c75046',
  props: {
    lang: 'css',
  },
},
{
  key: 'highlightjs',
  id: 'c80',
  props: {
    lang: 'css',
  },
},
{
  key: 'highlightjs',
  id: 'c82466',
  props: {
    lang: 'xml',
  },
},
{
  key: 'highlightjs',
  id: 'c84852',
  props: {
    lang: 'xml',
  },
},
{
  key: 'highlightjs',
  id: 'c88891',
  props: {
    lang: 'xml,javascript',
  },
},
{
  key: 'parallax',
  id: 'c97934',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'tip',
  id: 'c9848',
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const { parent, el } = init(id, key)
  const Comp = __components[key]
  const plain = true
  const renderMeta = /** @type {_competent.RenderMeta} */ ({ key, id, plain })
  let comp
  props.splendid = { addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  } }
  el.render = () => {
    comp = startPlain(renderMeta, Comp, comp, el, parent, props, children)
    return comp
  }
  el.render.meta = renderMeta
  io.observe(el)
})
