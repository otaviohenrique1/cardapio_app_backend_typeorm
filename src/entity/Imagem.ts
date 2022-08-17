import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "./Produto";

@Entity('imagem')
export class Imagem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Produto, produto => produto.imagens)
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @Column({ type: 'integer', unsigned: true })
  produto_id: number;
}
