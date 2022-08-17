import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("ingrediente_removido")
export class IngredienteRemovido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}
