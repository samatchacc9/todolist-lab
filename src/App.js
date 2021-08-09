import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import EditTodoForm from "./components/EditTodoForm";
function App() {
  //data + creat state

  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Travel" },
    { id: uuidv4(), name: "Shoppping" },
    { id: uuidv4(), name: "Watching a movie" },
  ]);

  //state การมองเห็น edit form
  const [isEditing, setIsEditing] = useState(false);
  //state ก้อนข้อมูลรายการที่การ edit
  const [editingItem, setEditingItem] = useState({});

  //========function add========//
  function addTodo(newTodo) {
    //สร้างตัวแปรเก็บก้อนข้อมูลใหม่
    const newItem = { id: uuidv4(), name: newTodo };

    //สร้างตัวแปรต่อ data เข้าไปใหม่ เพื่อทำการแกะ [] ออกด้วยการ spread แล้วต่อข้อมูลใหม่ข้างท้าย
    const newTodos = [...todos, newItem];

    //set state การเปลี่ยนแปลงข้อมูลใหม่ และ return สู่ todos
    setTodos(newTodos);
  }

  //========function delete========//
  const deleteTodo = id => {
    //สร้างตัวแปรมาเก็บข้อมูลการค้นหา id เก็บ id เพื่อทำการชื่อเป้าหมายที่ต้องการ
    const idTodo = todos.findIndex(item => item.id === id);
    // clone data copy ก้อนข้อมูล
    const newTodo = [...todos];
    // เอาก้อนข้อมูลใหม่จากการ clone มาทำการ delete ข้อมูลตัวที่ต้องการลบโดยใช้ id เป็นตัวระบุตำแหน่ง และใช้ method splice ลบ
    newTodo.splice(idTodo, 1);
    // set state หลักจากลบข้อมูลเพื่อ return ค่าข้อมุลก้อนใหม่หลังจาก delete
    setTodos(newTodo);
  };

  //========function Edit========//

  //===1=== save edit

  function editTodo(id, newName) {
    //ระบุตำแหน่งที่ต้องการแก้ไขด้วย id และสร้างตัวแปรไปเก็บ
    const idTodo = todos.findIndex(item => item.id === id);

    //clone data และสร้างตัวแปรมาเก็บ
    const newTodo = [...todos];

    //ระบุส่วนที่ต้องการ edit ทำการเข้าถึง และ แทนที่ด้วยข้อมูลใหม่ newName ที่รับเข้ามา
    newTodo[idTodo].name = newName;

    //set sate การเปลี่ยนแปลงข้อมูล
    setTodos(newTodo);
  }

  //===2=== ใช้ระบุ id เมื่อมีการกดปุ่มจากหน้า Todo.js
  const pressEdit = id => {
    //เมื่อมีการกดปุ่ม edit ให้ทำการเปิด edit form เอาฟังก์ชัน set state ไปรับค่าแล้ว return กับไปยัง current state
    setIsEditing(true);
    //ระบุตำแหน่ง id เมื่อมีการกด และสร้างตัวแปรมารับตำแหน่ง
    const idx = todos.findIndex(item => item.id === id);

    //เอา function set state มารับค่าตำแหน่ง id ที่มีการเปลี่ยนแปลง
    setEditingItem(todos[idx]);
  };

  //=== 3 === เมื่อกดปุ่ม cancel หน้า todo.js
  function cancelEditForm() {
    //เมื่อกดปุ่ม cancel ทำการปิด edit form
    setIsEditing(false);
  }
  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <EditTodoForm
        editTodo={editTodo}
        cancelEditForm={cancelEditForm}
        editingItem={editingItem}
      />
      <ul>
        {todos.map(item => (
          <Todo
            key={item.id}
            todo={item}
            deleteTodo={deleteTodo}
            pressEdit={pressEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
