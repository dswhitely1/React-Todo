import React from 'react';
import Form  from 'react-bootstrap/Form';

const TodoSearch = props => {
  const { searchResults, searchValue } = props;
  return (
    <Form>
      <Form.Control type={ 'text' } value={ searchValue } onChange={ searchResults } placeholder={ 'Search todo' }
                    className={ 'mb-2' }/>
    </Form>
  );
};

export default TodoSearch;