import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="footerTop" >
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div style={{ maxWidth: '100vw' , justifyContent: 'center' }} className="columns cr-text">
              Copyright © 2020 Open Creatives
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
