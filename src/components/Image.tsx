import React from 'react'
import { ImageProps } from '../types'

export default function Image({src}: ImageProps) {
  return (
    <img className='card-img-top' alt='' src={src}/>
  )
}
