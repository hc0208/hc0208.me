import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import Typed from 'typed.js';
import './styles/main.scss';
import './image/loading.gif';
import './image/hiroki_chida.jpg';

class Loader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideLoader: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hideLoader: true
      });
    }, 2300);
  }

  render() {
    return (
      <div className={ this.state.hideLoader ? 'hide' : 'loader' }>
        <img src='src/image/loading.gif' alt='Now Loading...' />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header className='header clearfix'>
        <a href='index.html'><img src='src/image/hiroki_chida.jpg' alt='Hiroki Chida' /></a>
        <div className='header-contents'>
          <h1 className='title'><a href='index.html'>hc0208.me</a></h1>
          <div className='sns-icons clearfix'>
            <a href='https://twitter.com/hc0208' target='_blank'>
              <FontAwesome name='twitter' className='twitter' />
            </a>
            <a href='https://www.instagram.com/hc0208' target='_blank'>
              <FontAwesome name='instagram' className='instagram' />
            </a>
            <a href='https://github.com/hc0208' target='_blank'>
              <FontAwesome name='github' className='github' />
            </a>
            <a href='https://www.facebook.com/chida.hiroki' target='_blank'>
              <FontAwesome name='facebook-official' className='facebook' />
            </a>
            <a href='https://qiita.com/hc0208' target='_blank'>
              <div className='qiita-wrapper'>
                <FontAwesome name='search' className='qiita' />
              </div>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

class Terminal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showContents: false
    };
  }

  componentDidMount() {
    new Typed('.terminal-contents', {
      startDelay: 3000,
      strings: ["Hello", "My name is Hiroki Chida", "Welcme", "Welcome to my site", "<br>$&nbsp;<br>$&nbsp;<br>$&nbsp;less profile.md"],
      typeSpeed: 40,
      backSpeed: 30
    });

    setTimeout(() => {
      this.setState({
        showContents: true
      });
    }, 12500);
  }

  render() {
    return (
      <div className='terminal-wrapper'>
        <div className='terminal-header'>
          <div className='red'></div><div className='yellow'></div><div className='green'></div>
          bash
        </div>
        <div className='terminal-body'>
          <div className={ this.state.showContents ? 'hide' : null }>
            $&nbsp;<span className='terminal-contents'></span>
          </div>
          <div className={ this.state.showContents ? 'terminal-profile' : 'hide' }>
            <h2>##&nbsp; Profile</h2>
            <p>
              千田浩輝(23) / フリーランスエンジニア<br />
              fever立ち上げメンバー<br />
              大学2年次に休学しインドネシアのSriwijaya大学へ1年間国費留学。<br />
              内定先を全て辞退し新卒フリーランスエンジニアとして活動中。<br />
              実装物は[Github](<a href='https://github.com/hc0208' target='_blank'>https://github.com/hc0208</a>)参照。<br />
              ブログは[こちら](<a href='http://hc0208.hatenadiary.jp/' target='_blank'>http://hc0208.hatenadiary.jp/</a>)。<br />
              お仕事の依頼は[Twitter](<a href='https://twitter.com/hc0208' target='_blank'>https://twitter.com/hc0208</a>)まで。<br />
            </p>
            <h2>##&nbsp; Skill</h2>
            <p>
              *&nbsp; Ruby,&nbsp; Ruby on Rails<br />
              *&nbsp; HTML,&nbsp; CSS<br />
              *&nbsp; 基本情報技術者, 応用情報技術者<br />
              *&nbsp; インドネシア語
            </p>
            <h2>##&nbsp; Work</h2>
            <p>
              *&nbsp; [fever](<a href='https://fe-ver.jp/' target='_blank'>https://fe-ver.jp/</a>)<br />
              ∟&nbsp; デザイン（一部）, フロントエンド, バックエンド, インフラ<br />
              *&nbsp; [fever投票所](<a href='https://vote.fe-ver.jp/' target='_blank'>https://vote.fe-ver.jp/</a>)<br />
              ∟&nbsp; デザイン, フロントエンド, バックエンド, インフラ<br />
              *&nbsp; [dressbox](<a href='https://dressbox.jp/' target='_blank'>https://dressbox.jp/</a>)<br />
              ∟&nbsp; デザイン（一部）, フロントエンド, バックエンド, インフラ<br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        © Hiroki Chida
      </footer>
    );
  }
}

class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showContents: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showContents: true
      });
    }, 2400);
  }

  render() {
    return (
      <div className='wrapper'>
        <Loader />
        <div className={ this.state.showContents ? null : 'hide' }>
          <div className='contents'>
            <Header />
            <Terminal />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Top />,
  document.getElementById('root')
);
