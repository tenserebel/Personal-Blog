import { useState } from 'react'
import styles from './Figure.module.css'

// Post markdown authored image paths are inconsistent: some are absolute
// (/images/..) and some are relative (../../public/images/..). Normalise both
// to a public URL. Many referenced images are missing from the repo, so we fall
// back to a labelled placeholder frame instead of a broken-image icon.
function normalize(src = '') {
  return src.replace(/^(\.\.\/)+public/, '').replace(/^\/public/, '')
}

export default function Figure({ src, alt }) {
  const [broken, setBroken] = useState(false)
  const url = normalize(src)

  return (
    <figure className={styles.figure}>
      {broken ? (
        <div className={styles.placeholder} role="img" aria-label={alt}>
          <span className={styles.placeholderTag}>image</span>
          <span className={styles.placeholderName}>{alt || url}</span>
        </div>
      ) : (
        <img
          className={styles.image}
          src={url}
          alt={alt || ''}
          loading="lazy"
          onError={() => setBroken(true)}
        />
      )}
      {alt ? <figcaption className={styles.caption}>{alt}</figcaption> : null}
    </figure>
  )
}
