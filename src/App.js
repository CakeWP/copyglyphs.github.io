import React from 'react';
import Charmap from './components/charmap/index';
import TwitterIcon from '@material-ui/icons/Twitter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <h1>
            <span>Copy</span>
            <span>Glyphs</span>
          </h1>
        </div>
        <div className="desc">
          Copy & paste special characters and symbols with ēase.
        </div>
      </header>
      <Charmap />
      <footer className="App-footer">
        <h2>About</h2>
        <p>CopyGlyphs is a simple online tool that helps you easily copy any special characters and symbols (also known as glyphs) then paste them to any document or app that you are using.</p>
        <h2>Using WordPress?</h2>
        <p>Install and activate <a href="https://wordpress.org/plugins/block-options/">EditorsKit Plugin↗</a> which is available for free on plugin directory. EditorsKit adds set of formatting tools and helps improve writing workflow when using WordPress Gutenberg block editor.</p>
        <p>Made by <a href="https://twitter.com/phpbits">Jeffrey Carandang↗</a> - creator of EditorsKit plugin for WordPress.</p>
        <p>
          <br />
          <a href="https://twitter.com/copyglyphs">
            <TwitterIcon />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
