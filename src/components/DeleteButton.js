import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DeleteButton({ id, onDelete }) {
  return (
    <Link to="/">
      <button
        type="button"
        className="action"
        title="Hapus"
        onClick={() => onDelete(id)}
      >
        <FiTrash2 />
      </button>
    </Link>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
