
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    id: number;
}

export interface User {
    id: string;
    created_at: DateTime;
    updated_at: DateTime;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
    user(id: number): User | Promise<User>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;
