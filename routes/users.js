// importing modules
import express from 'express'

import { createUser, getUser, getUsers, deleteUser, patchUser } from '../controllers/users.js'

//initialize router 
const router = express.Router()

// all routes here starts with /users
router.get('/', getUser)

router.post('/', createUser)

router.get('/:id', getUsers)

router.delete('/:id', deleteUser)

router.patch('/:id', patchUser )

export default router