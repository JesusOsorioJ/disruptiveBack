import { Router } from 'express';

import {
  filterByAllContent,
  createOneContent,
  updateOneContent,
  deleteOneContent,
} from './user.controller';

const router = Router();

router.get('/filterbyapplication', filterByAllContent);
router.post('/', createOneContent);
router.put('/', updateOneContent);
router.delete('/:makerId', deleteOneContent);

export default router;

/**
 * @openapi
 * '/api/makers':
 *  post:
 *     tags:
 *     - Makers
 *     summary: Register a maker
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateMakerRequest'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateMakerResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */