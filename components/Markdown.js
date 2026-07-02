import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import Figure from './Figure'
import styles from './Markdown.module.css'

const components = {
  img: ({ src, alt }) => <Figure src={src} alt={alt} />,
  // A standalone image renders as a <figure> (block), which is invalid inside
  // the <p> react-markdown wraps it in. Unwrap image-only paragraphs.
  p: ({ node, children }) => {
    const onlyImage =
      node?.children?.length === 1 && node.children[0].tagName === 'img'
    return onlyImage ? <>{children}</> : <p>{children}</p>
  },
  a: ({ href, children }) => {
    const external = href && /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    )
  },
  hr: () => <hr className={styles.rule} />
}

export default function Markdown({ children }) {
  return (
    <div className={styles.prose}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug, rehypeHighlight]}
        components={components}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
