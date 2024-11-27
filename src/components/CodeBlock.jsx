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
        <div className="w-full overflow-x-auto">
          <pre 
            className={clsx(
              className, 
              'text-sm', 
              'p-4', 
              'rounded-lg', 
              'bg-gray-800', 
              'text-white', 
              'max-w-full', 
              'overflow-x-auto'
            )} 
            style={{
              ...style,
              overflowX: 'auto',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all'
            }}
          >
            {tokens.map((line, i) => (
              <div 
                key={i} 
                {...getLineProps({ line, key: i })}
              >
                {line.map((token, key) => (
                  <span 
                    key={key} 
                    {...getTokenProps({ token, key })}
                  />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  ) : (
    <code 
      {...rest} 
      className={clsx(
        className, 
        'inline-block', 
        'bg-gray-100', 
        'px-1', 
        'py-0.5', 
        'rounded', 
        'text-sm'
      )}
    >
      {children}
    </code>
  )
}

export default CodeBlock