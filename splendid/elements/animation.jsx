import { relative, dirname } from 'path'

/**
 * @param {Object} props
 * @param {Splendid} props.splendid
 * @param {string} props.path The path to the JSON.
 * @param {string} props.src The placeholder image.
 */
export default async function Animation({ splendid, path, src, alt, class: cl,
  dev, width, height, align }) {
  if (!path.endsWith('.json'))
    throw splendid.newError('Expected path to end with .json')
  const Path = splendid.resolveRelative(path)
  await splendid.addFile(Path)

  if (!dev) {
    // svg-anim
    splendid.preload('/js/svg-anim.js', 'script')
    await splendid.addFile('/js/svg-anim.js.map')
    // snap min
    splendid.preload('node_modules://snapsvg/dist/snap.svg-min.js', 'script')
    splendid.addExtern('node_modules://@artdeco/snapsvg-animator/types/externs.js')
  } else {
    // svg-anim
    splendid.addScript('js/svg-anim-src.js', true, {}, true)
    // snap
    splendid.preload('node_modules://snapsvg/dist/snap.svg.js', 'script')
  }

  const p = relative(
    dirname(splendid.getDocPath(splendid.page.url)),
    splendid.getDocPath(`/${Path}`)
  ) // OK voodle
  splendid.export({
    path: p,
    width, height, align, dev,
  })
  const c = cl ? `position-relative ${cl}` : 'position-relative'
  return (<div className={c}>
    <splendid-img img-fluid placeholder-auto alt={alt} src={src} />
  </div>)
}