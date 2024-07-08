import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import Ator from '@modules/filmes/typeorm/entities/ator';
import Filme from '@modules/filmes/typeorm/entities/filme';
import Genero from '@modules/filmes/typeorm/entities/genero';
import Nota from '@modules/notas/typeorm/entities/nota';
import User from '@modules/users/typeorm/entities/user';
import { CreateFilmesTable1720184633073 } from './migrations/1720184633073-CreateFilmesTable';
import { CreateGenerosTable1720186027429 } from './migrations/1720186027429-CreateGenerosTable';
import { CreateAtoresTable1720186176083 } from './migrations/1720186176083-CreateAtoresTable';
import { CreateFilmesGenerosTable1720186224185 } from './migrations/1720186224185-CreateFilmesGenerosTable';
import { CreateFilmesAtoresTable1720186557775 } from './migrations/1720186557775-CreateFilmesAtoresTable';
import { CreateUserTable1720187040476 } from './migrations/1720187040476-CreateUserTable';
import { CreateNotasTable1720187049630 } from './migrations/1720187049630-CreateNotasTable';
import { InsertUserAdmin1720188774044 } from './migrations/1720188774044-insertUserAdmin';
dotenv.config();
export const dataSource: DataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [Filme, User, Genero, Ator, Nota],
  migrations: [
    CreateFilmesTable1720184633073,
    CreateGenerosTable1720186027429,
    CreateAtoresTable1720186176083,
    CreateFilmesGenerosTable1720186224185,
    CreateFilmesAtoresTable1720186557775,
    CreateUserTable1720187040476,
    CreateNotasTable1720187049630,
    InsertUserAdmin1720188774044,
  ],
});
