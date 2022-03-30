import React, { useState } from "react";
import * as ReactDOM from "react-dom";

function TodoList({ user, todo1, todo2 }) {
  // Render a TODO list for the given user.
  // TODO: handle more than two initial items.
  const checkbox1 = (
    <input
      type="checkbox"
      onClick={function () {
        todoItem1 = null;
      }}
    />
  );
  var todoItem1 = (
    <span key={todo1} style={{ display: "block" }}>
      {checkbox1}
      {todo1}
    </span>
  );

  const checkbox2 = (
    <input
      type="checkbox"
      onClick={function () {
        todoItem2 = null;
      }}
    />
  );
  var todoItem2 = (
    <span key={todo2} style={{ display: "block" }}>
      {checkbox2}
      {todo2}
    </span>
  );

  const [checkboxes, setCheckboxes] = useState([checkbox1, checkbox2]);
  const [todoItems, setTodoItems] = useState([todoItem1, todoItem2]);
  const [textInputValue, setTextInputValue] = useState("");

  var textInput = (
    <input
      value={textInputValue}
      onChange={(e) => {
        setTextInputValue(e.target.value);
      }}
      type="text"
    />
  );

  return (
    <>
      <h1>{user}'s todo list</h1>
      {todoItems}
      {textInput}
      <button
        onClick={() => {
          const checkbox = (
            <input
              type="checkbox"
              onClick={function () {
                setTodoItems(todoItems.filter((x) => x !== todoItem));
              }}
            />
          );
          var todoItem = (
            <span key={textInputValue} style={{ display: "block" }}>
              {checkbox}
              {textInputValue}
            </span>
          );
          setCheckboxes([...checkboxes, checkbox]);
          setTodoItems([...todoItems, todoItem]);
        }}
      >
        Add item
      </button>
      <span style={{ display: "block" }}>{checkboxes.length} items</span>
    </>
  );
}

ReactDOM.render(
  <TodoList user="Trent" todo1="Eat bananas" todo2="Code" />,
  document.getElementById("root")
);
