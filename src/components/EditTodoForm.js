import "./EditTodoForm.css";
import { useState } from "react";

function EditTodoForm() {
  // state รับค่ามา display

  return (
    <div className="form">
      <input type="text" />
      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
}
export default EditTodoForm;
