import React from "react";

class ModalHolder extends React.Component {
  handleComponentClick(e) {
    e.stopPropagation();
  }

  render() {
    const Component = this.props.component;
    return (
      <div
        className={this.props.isOpen ? "open modal-bg" : "modal-bg"}
        onClick={this.props.closeModal}
      >
        <div onClick={this.handleComponentClick} className="modal-holder">
          <Component
            closeModal={this.props.closeModal}
            {...this.props.childProps}
          />
        </div>
      </div>
    );
  }
}

export default ModalHolder;
