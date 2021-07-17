import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    JoinColumn,
    PrimaryColumn
  } from "typeorm";
  import { User } from "./User.entity";
  import { Note } from "./Note.entity";
  
  @Entity()
  export class SharedNote extends BaseEntity {
    @PrimaryColumn()
    targetId: number;
    @ManyToOne(() => User, user => user.notesSharedWithYou)
    @JoinColumn({ name: "targetId" })
    target: User;
  
    @PrimaryColumn()
    senderId: number;
    @ManyToOne(() => User, user => user.notesYouShared)
    @JoinColumn({ name: "senderId" })
    sender: User;
  
    @PrimaryColumn()
    noteId: number;
    @ManyToOne(() => Note, note => note.shares)
    @JoinColumn({ name: "noteId" })
    note: Note;
  }