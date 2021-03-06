import React from 'react';

const screenShot = require('./screen-shot-sqlectron-gui.png');

export default class Hero extends React.Component {
  render() {
    return (
      <div id="hero">
        <div className="container">
          <h1 className="description">
            A simple and lightweight SQL client desktop/terminal<br />with cross database and platform support.
          </h1>
          <div className="download-box">
            <div>
              <a className="button" href="https://github.com/sqlectron/sqlectron-gui/releases/latest">Download GUI</a>
              <a className="button" href="https://github.com/sqlectron/sqlectron-term/releases/latest">Download Term</a>
            </div>
            <span>Available for Linux, Mac and Windows</span>
          </div>
          <img id="banner" src={screenShot} />
        </div>
      </div>
    )
  }
}
