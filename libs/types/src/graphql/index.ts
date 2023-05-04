
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

export interface ProfileInputType {
    avatar: string;
    bio?: Nullable<string>;
    contact?: Nullable<string>;
    socials?: Nullable<SocialInputType[]>;
}

export interface SocialInputType {
    link: string;
    type: string;
}

export interface UpdateUserInput {
    created_at?: Nullable<DateTime>;
    email?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<ProfileInputType>;
    updated_at?: Nullable<DateTime>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): string | Promise<string>;
    removeUser(id: number): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
}

export interface Profile {
    avatar: string;
    bio?: Nullable<string>;
    contact?: Nullable<string>;
    created_at: DateTime;
    id: string;
    socials?: Nullable<Social[]>;
    updated_at: DateTime;
}

export interface IQuery {
    user(id: number): User | Promise<User>;
    users(): User[] | Promise<User[]>;
}

export interface Social {
    link: string;
    type: string;
}

export interface User {
    created_at: DateTime;
    email: string;
    id: string;
    name: string;
    password: string;
    profile?: Nullable<Profile>;
    updated_at: DateTime;
}

export type DateTime = any;
type Nullable<T> = T | null;
