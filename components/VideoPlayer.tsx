'use client'

export default function VideoPlayer({ src, ...props }) {
  return (
    <video
      src={src}
      controls
      preload="metadata"
      style={{ width: '100%', height: 'auto' }}
      {...props}
    >
      <track kind="captions" srcLang="zh" label="中文" default />
    </video>
  )
}
