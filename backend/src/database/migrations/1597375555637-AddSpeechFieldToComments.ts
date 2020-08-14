import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddSpeechFieldToComments1597375555637 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('comments', new TableColumn({
      name: 'speech',
      type: 'varchar',
      isNullable: true,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('comments', 'speech');
  }
}
