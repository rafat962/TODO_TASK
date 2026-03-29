let todos = [];
let nextId = 1;

const getAll = () => todos;

const getById = (id) => todos.find((t) => t.id === parseInt(id));

const create = (title) => {
    const todo = { id: nextId++, title, isCompleted: false };
    todos.push(todo);
    return todo;
};

const update = (id, fields) => {
    const todo = getById(id);
    if (!todo) return null;
    if (fields.title !== undefined) todo.title = fields.title;
    if (fields.isCompleted !== undefined) todo.isCompleted = fields.isCompleted;
    return todo;
};

const remove = (id) => {
    const index = todos.findIndex((t) => t.id === parseInt(id));
    if (index === -1) return false;
    todos.splice(index, 1);
    return true;
};

module.exports = { getAll, getById, create, update, remove };
