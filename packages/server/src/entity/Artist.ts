import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity("artists")
  export class Artist extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id: string;
  
    @Column("varchar", {length:100}) artistName: string;

    @Column("varchar", {length:100}) spotifyId: string;
  
    @Column("uuid") addedBy: string;
  }
  