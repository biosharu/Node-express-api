import express from 'express';
import {v4 as uuidv4} from 'uuid';
import {getUsers, createUser, getUser, deleteUser, updateUser} from '../controllers/users.js';


const router = express.Router();

const users = [
    {
        firstName : "John",
        lastName : "Doe",
        age : 25,
        id : "1"
    },
    {
        firstName : "Denis",
        lastName : "Doe",
        age : 20,
        id : "2"
    }
]

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;