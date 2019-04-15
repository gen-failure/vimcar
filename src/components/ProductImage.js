import React from 'react';

export default function({id}) {

  return (
    <picture>
      <source srcSet={`/assets/${id}@2x.png`} media="(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)" />
      <source srcSet={`/assets/${id}.png`} />
      <img src={`/assets/${id}.png`} alt="" />
    </picture>
  )
}
