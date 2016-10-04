import React from 'react';
import Modal from 'react-modal';


/**
 * Built on top of react-modal
 * https://github.com/reactjs/react-modal
 */
class ModalBase extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            open: true,
        };

        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.afterModalOpen = this.afterModalOpen.bind(this);
        this.afterModalClose = this.afterModalClose.bind(this);
    }
    handleModalOpen() {
        this.setState({ open: true });
    }
    handleModalClose() {
        this.setState({ open: false });
    }
    afterModalClose() {
    }
    afterModalClose() {
    }
    /**
     * overlay: {
     *      position        : 'fixed',
     *      top             : 0,
     *      left            : 0,
     *      right           : 0,
     *      bottom          : 0,
     *      backgroundColor : 'rgba(255, 255, 255, 0.75)'
     * }
     */
    get overlay() {
        return {};
    }
    /**
     * content: {
     *      position                : 'absolute',
     *      top                     : '40px',
     *      left                    : '40px',
     *      right                   : '40px',
     *      bottom                  : '40px',
     *      border                  : '1px solid #ccc',
     *      backgorund              : '#fff',
     *      overflow                : 'auto',
     *      WebkitOverflowScrolling : 'touch',
     *      borderRadius            : '4px',
     *      outline                 : 'none',
     *      padding                 : '20px'
     * }
     */
    get content() {
        return {};
    }
    get style() {
        return {
            overlay: this.overlay,
            content: this.content,
        };
    }
    render() {
        return (
          <div>
            <Modal
              isOpen={this.state.open}
              onAfterOpen={this.afterModalOpen}
              onRequestClose={this.afterModalClose}
              style={this.style}
            >
              {this.props.children}
            </Modal>
          </div>
        );
    }
}


ModalBase.propTypes = {

}


export default ModalBase;
