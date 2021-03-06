import React from 'react'
import PropTypes from 'prop-types'
import CloseIcon from 'react-icons/lib/md/close'
import Overlay from './Overlay'

class Modal extends React.Component {
  static propTypes = {
    "data-wd-key": PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onOpenToggle: PropTypes.func.isRequired,
    children: PropTypes.node,
  }

  render() {
    return <Overlay isOpen={this.props.isOpen}>
      <div className="maputnik-modal"
        data-wd-key={this.props["data-wd-key"]}
      >
        <header className="maputnik-modal-header">
          <h1 className="maputnik-modal-header-title">{this.props.title}</h1>
          <span className="maputnik-modal-header-space"></span>
          <a className="maputnik-modal-header-toggle"
            onClick={() => this.props.onOpenToggle(false)}
            data-wd-key={this.props["data-wd-key"]+".close-modal"}
          >
            <CloseIcon />
          </a>
        </header>
        <div className="maputnik-modal-scroller">
          <div className="maputnik-modal-content">{this.props.children}</div>
        </div>
      </div>
    </Overlay>
  }
}

export default Modal
