import { Button, Flex, FormControl } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(addTodo(value));
        setValue('');
    };

    const handleInput = e => {
        setValue(e.target.value)
    };

  return (
    <form onSubmit={handleSubmit}>
        <Flex>
            <FormControl>
                <input 
                type="text"
                value={value}
                onChange={handleInput}
                />
            </FormControl>
            <Button 
            colorScheme="teal"
            color= 'white'
            variant='outline'
            type='submit' 
            disabled={!value} 
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            >
                Add Task
            </Button>
        </Flex>
    </form>

  )
}

export default AddTodo;