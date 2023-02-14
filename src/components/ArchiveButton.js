import { FiDownload, FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ArchiveButton({ id, archived, onArchive, onUnarchive }) {
  return (
    <Link to="/">
      {archived ? (
        <button
          type="button"
          className="action"
          title="Aktifkan"
          onClick={() => onUnarchive(id)}
        >
          <FiUpload />
        </button>
      ) : (
        <button
          type="button"
          className="action"
          title="Arsipkan"
          onClick={() => onArchive(id)}
        >
          <FiDownload />
        </button>
      )}
    </Link>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
