import React from 'react'
import { CardBodyProps } from '../types'

export default function CardBody({content}: CardBodyProps) {
    const {title, text} = content
  return (
    <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{text}</p>
        <button className='btn btn-primary'>Button</button>
    </div>
  )
}
