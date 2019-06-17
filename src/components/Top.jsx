import React, { PropTypes, Component } from "react";

class Top extends Component {
  render() {
    return (
      <div className="top">
        <div class="section-title">ABOUT</div>
        <p>滋賀県在住。二児の父。</p>
        <p>
          2017年2月頃から趣味でUnityでオンラインゲーム開発を始め、開発が好きになる。
        </p>
        <p>2018年1月頃にWebアプリ開発に興味を持ち、Railsの勉強を始め、
        <br />
          2018年11月に初めてWebアプリ『TWESUME
          ~みんなのTwitter履歴書~』をリリース。
        </p>
        <p>Web・Unityエンジニアの高みを目指すマン。</p>

        <div className="section-subtitle">HOBBIES</div>
        <p className="about-content">
          Webアプリ開発、ゲーム開発、ギター、ピアノ
        </p>

        <div className="section-subtitle">FAVORITE</div>
        <p className="about-content">
          家族、プログラミング、ラーメン、焼肉、寿司
        </p>
      </div>
    );
  }
}

export default Top;
