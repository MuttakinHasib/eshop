/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
  email: string;
  name: string;
  password: string;
}

export interface UpdateUserInput {
  created_at?: Nullable<DateTime>;
  email?: Nullable<string>;
  id?: Nullable<string>;
  name?: Nullable<string>;
  password?: Nullable<string>;
  updated_at?: Nullable<DateTime>;
}

export interface IMutation {
  createUser(createUserInput: CreateUserInput): string | Promise<string>;
  removeUser(id: number): User | Promise<User>;
  updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
}

export interface IQuery {
  user(id: number): User | Promise<User>;
  users(): User[] | Promise<User[]>;
}

export interface User {
  created_at: DateTime;
  email: string;
  id: string;
  name: string;
  password: string;
  updated_at: DateTime;
}

export type DateTime = any;
type Nullable<T> = T | null;
