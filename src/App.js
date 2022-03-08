import { Container, Flex, Heading } from '@chakra-ui/react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilter from './components/VisibilityFilter';

function App() {
  return (
    <div className="App">
      <Container maxW="container.sm">
        <Flex
        flex="flexDirection"
        textAlign="center" 
        justifyContent="space-around" >
          <Heading my="4" p={20} color="white">TO DO </Heading>
          <button>
            <img height="30" src='https://res.cloudinary.com/sarapalacio01/image/upload/v1646698718/Reto2-Sprint3/icon-moon_hegaod.svg' alt='logo-theme' />
          </button>
        </Flex>
          <AddTodo />
        <TodoList />
        <VisibilityFilter />

      </Container>
    </div>
  );
}

export default App;
