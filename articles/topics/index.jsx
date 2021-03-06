import { join } from 'path'

/**
 * @param {Object} param0
 * @param {Splendid} param0.splendid
 */
export default function Index({ splendid }) {
  return null
  const topics = splendid.pages.reduce((acc, { topics: t = [] }) => {
    return acc.push(...t)
  }, []).filter((e, i, a) => a.indexOf(e) == i)
  return (<div>
    {splendid.pages.filter(({ article }) => article).map((page) => {
      return (<div key={page.key}>
        <h2><a href={page.key}>{page.title}</a></h2>
        {page.og.image && <splendid-img placeholder-auto d-block src={join('~/articles',page.og.image)} alt={page.title}/> }
        {page.seo}
      </div>)
    })}
  </div>)
}

/**
 * @typedef {import('splendid')} Splendid
 */