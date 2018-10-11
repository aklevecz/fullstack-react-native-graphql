import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne
  } from "typeorm";
import { User } from "./User";
import { Listing } from "./Listing";
import { finderDefaultId } from "../constants";
  
  @Entity("tickets")
  export class Ticket extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id: string;
  
    @Column("varchar", {length:100}) filename: string;
  
    @Column("uuid") ownerId: string;

    @Column("uuid", {default:finderDefaultId}) finderId: string;
  
    @ManyToOne(() => User)
    user: User;
  
    @Column("uuid") listingId: string;
  
    @ManyToOne(() => Listing)
    listing: Listing;
  }
  