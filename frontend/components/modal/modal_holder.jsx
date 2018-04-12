import React from "react";

class ModalHolder extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleComponentClick(e) {
    e.stopPropagation();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (this.props.isOpen && e.key === "Escape") {
      this.props.closeModal();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const Component = this.props.component;
    return (
      <div
        className={this.props.isOpen ? "open modal-bg" : "modal-bg"}
        onClick={this.props.closeModal}
      >
        {this.props.isOpen && (
          <div onClick={this.handleComponentClick} className="modal-holder">
            <Component
              closeModal={this.props.closeModal}
              {...this.props.childProps}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ModalHolder;
