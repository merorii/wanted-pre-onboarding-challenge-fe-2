interface ITag {
  id: string;
  name: string;
}

interface ITodo {
  id: string;
  content: string;
  category: string;
  status: boolean;
  tags: ITag[];
}

interface ICreateTodo {
  content: string;
  category: string;
  status?: boolean;
  tags?: ITag[];
}

interface IUpdateTodo {
  id: string;
  content?: string;
  category?: string;
  status?: boolean;
  tags?: ITag[];
}

function createTodo2(createItem: ICreateTodo): void {}

function readTodo2(id?: string): void {}

function updateTodo2(updateItem: IUpdateTodo): void {}

function deleteTodo2(id: string): void {}
