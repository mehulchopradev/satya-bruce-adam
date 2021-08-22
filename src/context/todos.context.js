import { createContext } from "react";

const TodosContext = createContext([
  {
    id: 1,
    title: 'todo 1',
    createdDate: new Date()
  },
  {
    id: 2,
    title: 'todo 2',
    createdDate: new Date(),
  }
]);

export default TodosContext;