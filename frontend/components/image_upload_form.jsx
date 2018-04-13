import React from "react";

class ImageUploadForm extends React.Component {
  handleFileChange(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      if (file) {
        this.props.action({
          file,
          url: fileReader.result
        });
      }
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <form className="image-upload-area">
        <label htmlFor="image-file" />
        <input
          ref={this.input}
          id="image-file"
          type="file"
          onChange={this.handleFileChange.bind(this)}
        />
        <div className="instructions">Update Image</div>
      </form>
    );
  }
}

export default ImageUploadForm;
