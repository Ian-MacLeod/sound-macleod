import React from "react";

class ImageUploadForm extends React.Component {
  handleFileChange(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = this.props.action({
      file,
      url: fileReader.result
    });
  }

  render() {
    return (
      <form className="image-upload-form">
        <input type="file" onChange={this.handleFileChange.bind(this)} />
      </form>
    );
  }
}

export default ImageUploadForm;
