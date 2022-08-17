import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('ingrediente_opcional')
export class IngredienteOpcional {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;
}
