import { FiCheck } from "react-icons/fi";

function SaveButton() {
  return (
    <div className="add-new-page__action">
      <button type="submit" className="action" title="Simpan">
        <FiCheck />
      </button>
    </div>
  );
}

export default SaveButton;
