'use client'

import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoPlayer({ src }: { src: string }) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        src={src}
        width="100%"
        height="100%"
        controls
        playing={false}
      />
    </div>
  )
}
