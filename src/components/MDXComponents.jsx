import clsx from 'clsx'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { StatList, StatListItem } from '@/components/StatList'
import { TagList, TagListItem } from '@/components/TagList'
import Image from 'next/image'
import Highlight, { defaultProps } from 'prism-react-renderer'

export const MDXComponents = {
  Blockquote({ className, ...props }) {
    return <Blockquote className={clsx('my-32', className)} {...props} />
  },
  img: function Img({ className, ...props }) {
    if (props.src.startsWith('data')) {
      return null
    }
    return (
      <Image
        layout="responsive"
        width={500}
        alt=""
        src={props.src}
        className={clsx('w-full', className)}
        {...props}
        height={400}
      />
    )
  },
  code({className, ...properties}) {
    return <code className={className} {...properties} />
  },
  StatList({ className, ...props }) {
    return (
      <StatList className={clsx('my-32 !max-w-none', className)} {...props} />
    )
  },
  StatListItem,
  table: function Table({ className, ...props }) {
    return (
      <div
        className={clsx(
          'my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto',
          className
        )}
      >
        <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
          <table {...props} />
        </div>
      </div>
    )
  },
  TagList({ className, ...props }) {
    return <TagList className={clsx('my-6', className)} {...props} />
  },
  TagListItem,
  TopTip({ className, children }) {
    return (
      <Border position="left" className={clsx('my-10 pl-8', className)}>
        <p className="font-display text-sm font-bold uppercase tracking-widest text-neutral-950">
          Top tip
        </p>
        <div className="mt-4">{children}</div>
      </Border>
    )
  },
  Typography({ className, ...props }) {
    return <div className={clsx('typography', className)} {...props} />
  },
  wrapper({ className, ...props }) {
    return (
      <div
        className={clsx(
          '[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0',
          className
        )}
        {...props}
      />
    )
  },
}
