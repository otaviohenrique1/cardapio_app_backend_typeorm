import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { coluna_nome, coluna_primary_key, if_table_not_exist } from "../utils/constantes_migration";

const NOME_TABELA = 'produto';

export class createProduto1660675027141 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
      ],
    }), if_table_not_exist);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}
