import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";

@Entity("listings")
export class Listing extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 100 })
  artist: string;

  @Column("varchar", { length: 100 })
  venue: string;

  @Column("text") pictureUrl: string;

  @Column("date") date: Date;

  @Column("uuid") userId: string;

  @ManyToOne(() => User, user => user.listings)
  user: User;
}
