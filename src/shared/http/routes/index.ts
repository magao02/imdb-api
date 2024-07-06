import { Router } from 'express';
import filmesRouter from '@modules/filmes/routes/filmes.routes';
import usersRouter from '@modules/users/routes/users.routes';
import loginRouter from '@modules/users/routes/logins.routes';
import notasRouter from '@modules/notas/routes/notas.routes';
const routes = Router();

routes.use('/filmes', filmesRouter);
routes.use('/users', usersRouter);
routes.use('/login', loginRouter);
routes.use('/notas', notasRouter);
routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default routes;
