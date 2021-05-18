import { Column, ObjectID, ObjectIdColumn,Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('Log')
export class LogEntity {
    // @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: ObjectID;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

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
