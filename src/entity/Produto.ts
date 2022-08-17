import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Imagem } from "./Imagem";
import { Ingrediente } from "./Ingrediente";

@Entity('produto')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

  @Column()
  preco: number;

  @Column()
  descricao: string;

  @Column()
  ativo: boolean;

  @Column()
  quantidade: number;

  @Column()
  unidade_quantidade: string; // unidade, ml, l, mg, g, kg

  @Column()
  tipo_produto: string; // ('comida' e 'bebida')

   /* 1 produto com 1 ou mais imagens */
   @OneToMany(() => Imagem, imagem => imagem.produto, {
    cascade: ['insert', 'update', 'remove']
  })
  imagens: Imagem[];

  /* 1 produto com 1 ou mais ingredientes */
  /* Ver se vai ser opcional */
  @OneToMany(() => Ingrediente, ingrediente => ingrediente.produto, {
    cascade: ['insert', 'update', 'remove']
  })
  ingredientes: Ingrediente[];
}
