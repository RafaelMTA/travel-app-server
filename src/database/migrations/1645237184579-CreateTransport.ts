import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransport1645237184579 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "transports",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "100",
                        isNullable: true
                    },        
                    {
                        name: "arrival",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "departure",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "address",
                        type: "varchar",
                        isNullable: true 
                    },   
                    {
                        name: "imageURL",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "event_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_transports_user",
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_transports_event",
                        columnNames: ["event_id"],
                        referencedTableName: "events",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transports");
    }

}
