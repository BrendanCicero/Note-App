import React from "react";
import SaveButton from "./SaveButton";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="add-new-page__input">
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            className="add-new-page__input__title"
            type="text"
            placeholder="Catet dulu kali yaa..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            onInput={this.onTitleInputEventHandler}
            required
          />
          <textarea
            className="add-new-page__input__body"
            type="text"
            placeholder="Catet apa nih yang penting ?"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
          />
          <SaveButton />
        </form>
      </div>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
