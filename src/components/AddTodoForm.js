import { useState } from "react";

function AddTodoForm(props) {
  //state มี 2 อัน 1)ข้อมูลใน input 2)error data

  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");

  //function การรับค่าช่อง input
  const handleChangeNewTodo = e => {
    //1) เก็บค่าที่รับเข้ามา
    const value = e.target.value;
    //2) เช็คเงื่อนไขต้องไม่เป็นค่าว่าง กรอกค่า Error
    if (value === "") {
      setError("Todo is require");
    } else {
      setError("");
    }
    //3) set ค่า data ที่รับมาเก็บ
    setNewTodo(value);
  };

  //function ปุ่ม Add

  const handleClickAdd = () => {
    //1) เช็ค error
    if (newTodo === "") {
      setError("Todo is require");
    } else {
      setError("");
      //ส่ง data เป็น argument ไปประมวณผลน่า App
      props.addTodo(newTodo);
      //เมื่อส่งข้อมูล clear data ออก
      setNewTodo("");
    }
  };
  return (
    <div style={{ marginTop: "1rem" }}>
      <input
        type="text"
        placeholder="Enter new todo"
        onChange={handleChangeNewTodo}
        value={newTodo}
      />
      <button onClick={handleClickAdd}>Add</button>

      <p
        style={{ fontSize: "0.75rem", margin: 0, padding: 0, color: "red" }}
      ></p>
    </div>
  );
}

export default AddTodoForm;
