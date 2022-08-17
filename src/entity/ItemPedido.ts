import { Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('item_pedido')
export class ItemPedido {
  @PrimaryGeneratedColumn()
  id: number;
}
