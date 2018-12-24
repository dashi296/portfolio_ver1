import React, { PropTypes, Component } from 'react';

class About extends Component{
  render(){
    return (
      <div className="about">
        <div className="section-title">ABOUT</div>
        <p>京都のSES企業に勤めているエンジニア。</p>
        <p>滋賀県在住。二児の父。</p>
        <p>2017年2月頃から趣味でUnityでオンラインゲーム開発を始め、開発が好きになり、</p>
        <p>2018年1月頃にWebアプリ開発に興味を持ち、Railsの勉強を始める。</p>
        <p>関西圏（主に京都、滋賀、京都寄りの大阪）でWEBエンジニアとしての転職先または仕事を探しています。</p>
        <p>お声かけいただければ大変嬉しいです。</p>
      </div>
    )
  }
}

export default About;