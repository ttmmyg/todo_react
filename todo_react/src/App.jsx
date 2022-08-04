/* eslint react-hooks/exhaustive-deps: off */
import React from "react";
import { useState } from "react";
import './App.css';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incomplete, setIncomplete] = useState(['あああ', 'いいい']);
  const [complete, setComplete] = useState(['ううう']);

  const onChangeTodo = (event) => setTodoText(event.target.value);


  //追加ボタン
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incomplete, todoText];
    setIncomplete(newTodos);
    setTodoText('');
  };

  //削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incomplete];
    newTodos.splice(index, 1);
    setIncomplete(newTodos);
  };

  //完了ボタン
  const onClickComplete = (index) => {

    const newIncomplete = [...incomplete];
    newIncomplete.splice(index, 1);

    const newComplete = [...complete, incomplete[index]];
    console.log(newComplete);

    setIncomplete(newIncomplete);
    setComplete(newComplete);
 
  };
  
  return (
    <>
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={ onChangeTodo }/>
      <button onClick={onClickAdd}>追加</button>
    </div>

    <div className="incomplete-area">
      <p className="ttl">未完了のTODO</p>
      <ul>
        {incomplete.map((todo, index) => {
          return (
            <div key={ todo } className="list-low">
            <li>{ todo }</li>
            <button onClick={() => onClickComplete(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
          );
        })}
      </ul>
    </div>

    <div className="complete-area">
      <p className="ttl">完了のTODO</p>
      <ul>
        {complete.map((todo) => {
          return (
            <div key={ todo } className="list-low">
              <li>ううう</li>
              <button>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
    </>
  
  
  );
};
