'use client'
import { themes, Highlight } from 'prism-react-renderer'
import clsx from 'clsx'

export const CodeBlock = ({ children, className, node, ...rest }) => {
  const match = /language-(\w+)/.exec(className || '')
  return match ? (
    <Highlight
      theme={themes.nightOwl}
      code={String(children).replace(/\n$/, '')}
      language={match[1]}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  )
}
