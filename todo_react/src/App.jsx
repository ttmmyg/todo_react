/* eslint react-hooks/exhaustive-deps: off */
import React from "react";
import { useState } from "react";
import './App.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incomplete, setIncomplete] = useState([]);
  const [complete, setComplete] = useState([]);

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

    setIncomplete(newIncomplete);
    setComplete(newComplete);
 
  };

  //戻すボタン
  const onClickBack = (index) => {
    const newComplete = [...complete];
    newComplete.splice(index, 1);

    const newIncomplete = [...incomplete, complete[index]];

    setComplete(newComplete);
    setIncomplete(newIncomplete);
  };
  
  return (
    <>
    { incomplete.length >= 10 && <p style={{color: 'red'}} >登録できるTODOは5個まで。消化しろ!!</p> }

    <InputTodo todoText={todoText} onChangeTodo={onChangeTodo} onClickAdd={onClickAdd} disabled={incomplete.length >= 10} />

    <IncompleteTodos incomplete={incomplete} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />

    <CompleteTodos complete={complete} onClickBack={onClickBack} />

    </>
  
  
  );
};
