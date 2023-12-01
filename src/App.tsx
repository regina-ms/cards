import React from 'react';
import './App.css';
import Card from './components/Card';
import Image from './components/Image';
import CardBody from './components/CardBody';
import { mockContentArr } from './types';
import { TContent } from './types'


function App() {
  return (
    <div className='container' style={{display:'flex', alignItems: 'end'}}>
      {
        mockContentArr.map((el: TContent, index) => (
          <Card key={index}>
            {
              el.img ? <Image src={el.img} /> : null
            }
            <CardBody content={el} />
          </Card>
        ))
      }
    </div>
  );
}

export default App;
