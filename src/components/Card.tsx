import React, { PropsWithChildren } from 'react'

export default function Card({ children }: PropsWithChildren) {
    return (
        <div className='card' style={{width:'18em', margin:'10vh auto'}}>
            {children}
        </div>
    )
}
