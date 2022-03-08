import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { getTodosByVisibilityFilter } from '../redux/reducer/selector';
import Todo from './Todo';

const TodoList = () => {
    const { todos, visibilityFilter } = useSelector(state => state);
    const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter );


  return (
      <Box bg='gray.200' border="black" >
        {filterTodos.length ? filterTodos.map(todo => (
            <Todo key={`todo-${todo.id}`} todo={todo} />
        )) : 
        <Box textAlign="center" my="8" fontSize="14px" fontWeight="bold"  >
            No tasks yet!
        </Box>
    }
      </Box>
  )
}

export default TodoList