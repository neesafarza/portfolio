import React from 'react';
import './Technologies.scss'

const Technologies = () => {
  return (
    <div className="tech-logo">
      <h2>Technologies</h2>
      <img src={require('../assets/angular.png')}/>
      <img src={require('../assets/express.png')}/>
      <img src={require('../assets/javascript.jpg')}/>
      <img src={require('../assets/koa.png')}/>
      <img src={require('../assets/mongo.jpg')}/>
      <img src={require('../assets/native.png')}/>
      <img src={require('../assets/psql.png')}/>
      <img src={require('../assets/react.jpg')}/>
      <img src={require('../assets/sql.jpg')}/>
      <img src={require('../assets/typescript.png')}/>
    </div>
  );
}

export default Technologies;