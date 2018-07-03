import React, {Component} from 'react';
import '../assets/style/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    );
  }
}