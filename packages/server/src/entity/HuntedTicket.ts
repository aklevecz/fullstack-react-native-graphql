import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { finderDefaultId } from "../constants";
  
  @Entity("huntedtickets")
  export class HuntedTicket extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id: string;

    @Column("varchar", {length:30}) artist: string;

    @Column("varchar", {length:30}) venue: string;

    @Column("date") date: Date;

    @Column("varchar", {length:30,}) hunt: string;
  
    @Column("varchar", {length:100}) filename: string;
  
    @Column("uuid", {default:finderDefaultId}) finderId: string;
  }
  
