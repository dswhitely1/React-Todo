import React  from 'react';
import Form   from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Todo.scss';

const TodoForm = props => {
  const { addTask, clearComplete, formValueChange, inputValue } = props;
  return (
    <div>
      <Form onSubmit={ addTask }>
        <Form.Control type={ 'text' } placeholder={ '...todo' } onChange={ formValueChange } value={ inputValue }
                      className={ 'mb-2' }/>
        <Button type={ 'submit' } className={ 'float-left' }>Add Todo</Button>
        <Button type={ 'button' } className={ 'float-right' } onClick={ clearComplete }>Clear Completed</Button>
      </Form>
      {/*<form onSubmit={addTask}>*/ }
      {/*  <input placeholder='...todo' onChange={ formValueChange } value={ inputValue }/>*/ }
      {/*  <button type='submit' className='btn btn-primary btn-sm'>*/ }
      {/*    Add Todo*/ }
      {/*  </button>*/ }
      {/*  <button onClick={ clearComplete }>Clear Completed</button>*/ }
      {/*</form>*/ }
    </div>
  );
};

export default TodoForm;
