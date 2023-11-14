
const { createUserService, getAllusersService, userModified, loginUserService, deletingUsers } = require('../services/user.services');

//Controlador para crear un usuario
const createUser = async (req, res) => {
  try {
    const newUser = await createUserService(req.body);
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Controlador para iniciar sesion
const loginUser = async (req, res) => {
  try {
    const logedUser = await loginUserService(req.body);
    res.status(200).json({ logedUser });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Controlador para obtener en pagina admin el listado de todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await getAllusersService(req.headers);
    res.status(200).json( {users} );
  } catch (error) {
    console.log(error)
    res.status(500).json({ error });
  }
};

//Controlador para editar un usuario
const editUser = async (req,res) => {
  try {
    const userEdited= await userModified(req.body);
    res.status(200).json({userEdited})    
  } catch (error) {
    console.log(error);
    res.status(304).json({error: error.message});    
  }
}

//Controlador para eliminar un usuario
const deleteUser = async (req,res) => {
  try {
    const userDeleted= await deletingUsers(req.body);
    res.status(200).json({userDeleted});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message});
  }
}

module.exports = {
  createUser,
  getAllUsers,
  editUser,
  loginUser,
  deleteUser
};
