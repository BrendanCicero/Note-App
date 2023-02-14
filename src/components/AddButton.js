import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

function AddButton() {
  return (
    <div className="homepage__action">
      <Link to="/notes/new">
        <button type="button" className="action" title="Tambah">
          <FiPlus />
        </button>
      </Link>
    </div>
  );
}

export default AddButton;
