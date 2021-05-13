import { Column, ObjectID, ObjectIdColumn,Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Log')
export class LogEntity {
    // @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    level: string;

    @Column()
    channel: string;

    @Column()
    corelationId: string;

    @Column()
    userId: string;

    @Column()
    Operation: String;

    @Column()
    message: string;
}
