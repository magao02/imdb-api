/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "c56a4180-65aa-42ec-a945-5fd21dec0538"
 *         nome:
 *           type: string
 *           example: "John Doe"
 *         email:
 *           type: string
 *           format: email
 *           example: "johndoe@example.com"
 *         password:
 *           type: string
 *           example: "password123"
 *         role:
 *           type: string
 *           example: "user"
 *         notas:
 *           type: array
 *           items:
 *             $ref: './modules/notas/typeorm/entities/nota.ts#'
 *         isActive:
 *           type: boolean
 *           example: true
 */
import Nota from '@modules/notas/typeorm/entities/nota';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string;

  @OneToMany(() => Nota, nota => nota.usuario, { nullable: true })
  notas: Nota[];

  @Column({ default: true })
  isActive: boolean;
}

export default User;
