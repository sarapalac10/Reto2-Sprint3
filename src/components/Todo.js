import { Box, Checkbox, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/actions'

const Todo = ({todo}) => {
    const dispatch = useDispatch();
    const [cheked, setChecked ] = useState(false); 

    const handleChecked = () => dispatch(toggleTodo(todo.id));

    useEffect(() => {
        setChecked(todo.completed)
    }, [todo])

  return (
    <Box my={3} mb={1} p={2} >
        <Checkbox onChange={handleChecked} border="gray" colorScheme="blue.500" iconColor='purple.500' isChecked={cheked} >
            <Text as={todo.completed && "del"} >{todo.content}</Text>
        </Checkbox>
    </Box>
  )
}

export default Todo