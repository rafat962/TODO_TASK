const Todo = require("../models/todoModel");

exports.createTodo = (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "title is required" });
    const todo = Todo.create(title);
    res.status(201).json(todo);
};

exports.getAllTodos = (req, res) => {
    let todos = Todo.getAll();
    const { search } = req.query;
    if (search) {
        todos = todos.filter((t) =>
            t.title.toLowerCase().includes(search.toLowerCase()),
        );
    }
    res.json(todos);
};

exports.getTodoById = (req, res) => {
    const todo = Todo.getById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
};

exports.updateTodo = (req, res) => {
    const todo = Todo.update(req.params.id, req.body);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
};

exports.deleteTodo = (req, res) => {
    const deleted = Todo.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Todo not found" });
    res.status(204).send();
};
