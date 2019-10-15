/* eslint-env browser */
import loadScripts from '@lemuria/load-scripts'
import { Component } from 'preact'

export default class Menu extends Component {
  /**
   * @suppress {checkTypes}
   */
  static 'load'(callback) {
    loadScripts([
      'js/menu.json',
      'snapsvg/dist/snap.svg-min.js',
      'js/svg-anim.js',
    ], (err, res) => {
      if (err) return callback(err)
      try {
        const [json] = /** @type {!Array<string>}*/ (res)
        callback(null, { json: JSON.parse(/** @type {string} */ (json)) })
      } catch (er) {
        callback(er)
      }
    })
  }
  /**
   * @param {Object} props
   * @param {Splendid} props.splendid
   */
  serverRender({ splendid }) {
    splendid.export()
    splendid.addFile('js/menu.json')
    splendid.addFile('js/svg-anim.js.map')
    splendid.preload('node_modules://snapsvg/dist/snap.svg-min.js', 'script')
    splendid.preload('js/svg-anim.js', 'script')
    splendid.addExtern('node_modules://@artdeco/snapsvg-animator/types/externs.js')

    return (<div id="menu" style="width:100%;" className="position-relative">
      <splendid-img
        placeholder-width="1226"
        placeholder-height="818" alt="menu" src="img/menu.svg" />
    </div>)
  }
  render({ json }) {
    const width = 1226
    const height = 818

    /** @type {!_snapsvgAnimator.SVGAnim} */
    const comp = new window['SVGAnim'](json, width, height)
    const n = comp.s.node
    // n.style['max-width'] = '100%'

    setTimeout(() => {
      const about = n.querySelector('svg > g > g[token="4"]')
      const node = n.querySelector('svg > g > g[token="3"]')
      const packages = n.querySelector('svg > g > g[token="2"]')
      const contact = n.querySelector('svg > g > g[token="1"]')

      assignLink(about, 'about')
      assignLink(node, 'node')
      assignLink(packages, 'packages')
      assignLink(contact, 'contact')
    }, 100)
    return (<div id="menu" style="width:100%;" ref={(el) => {
      el.appendChild(n)
    }}/>)
  }
}

function assignLink(target, name) {
  target.onclick = function () {
    window.location = '#' + name
  }
}

// export default function menu({ splendid }) {
//   splendid.export()
//   return (<div id="menu">Menu</div>)
// }
/**
 * @typedef {import('splendid/src/Splendid').default} Splendid
 */