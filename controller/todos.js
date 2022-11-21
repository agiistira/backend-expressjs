let listTodos = [];

const validationTodos = (req, res, next) => {
  console.log(req.body);
  const { activityName, activityDescription } = req.body;

  if (req.file === undefined) return res.status(400).json("image required");
  if (activityName === "")
    return res.status(400).json("Activity name required");

  if (activityDescription === "")
    return res.status(400).json("Activity description required");

  req.message = "data valid";

  next();
};

const addTodos = (req, res) => {
  console.log(req.file);
  const { filename } = req.file;
  const { activityName, activityDescription } = req.body;

  listTodos = [...listTodos, { id: Math.random(), ...req.body, filename }];

  return res.status(200).json("berhasil menambah todos");
};

const getTodos = (_, res) => {
  return res.status(200).json({ listTodos });
};

module.exports = { validationTodos, addTodos, getTodos };
