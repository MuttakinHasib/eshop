
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateOrUpdateProfileInput {
    avatar?: Nullable<string>;
    bio?: Nullable<string>;
    contact?: Nullable<string>;
    socials?: Nullable<SocialInputType[]>;
}

export interface CreateUserInput {
    email: string;
    name: string;
    password: string;
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface ProfileInputType {
    avatar?: Nullable<string>;
    bio?: Nullable<string>;
    contact?: Nullable<string>;
    created_at: DateTime;
    id: string;
    socials?: Nullable<SocialInputType[]>;
    updated_at: DateTime;
    user?: Nullable<UserInputType>;
}

export interface SocialInputType {
    link?: Nullable<string>;
    type?: Nullable<string>;
}

export interface UpdateAuthInput {
    email?: Nullable<string>;
    id: number;
    password?: Nullable<string>;
}

export interface UpdateUserInput {
    created_at?: Nullable<DateTime>;
    email?: Nullable<string>;
    id?: Nullable<string>;
    is_active?: Nullable<boolean>;
    name?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<ProfileInputType>;
    updated_at?: Nullable<DateTime>;
}

export interface UserInputType {
    created_at: DateTime;
    email: string;
    id: string;
    is_active: boolean;
    name: string;
    password: string;
    profile?: Nullable<ProfileInputType>;
    updated_at: DateTime;
}

export interface Auth {
    exampleField: number;
}

export interface LoginResponse {
    message: string;
    user: UserWithoutPassword;
}

export interface IMutation {
    createOrUpdateProfile(createOrUpdateProfileInput: CreateOrUpdateProfileInput): string | Promise<string>;
    createUser(createUserInput: CreateUserInput): UserWithoutPassword | Promise<UserWithoutPassword>;
    login(loginInput: LoginInput): LoginResponse | Promise<LoginResponse>;
    removeAuth(id: number): Auth | Promise<Auth>;
    removeProfile(id: number): Profile | Promise<Profile>;
    removeUser(id: number): UserWithoutPassword | Promise<UserWithoutPassword>;
    updateAuth(updateAuthInput: UpdateAuthInput): Auth | Promise<Auth>;
    updateUser(updateUserInput: UpdateUserInput): UserWithoutPassword | Promise<UserWithoutPassword>;
}

export interface Profile {
    avatar?: Nullable<string>;
    bio?: Nullable<string>;
    contact?: Nullable<string>;
    created_at: DateTime;
    id: string;
    socials?: Nullable<Social[]>;
    updated_at: DateTime;
    user?: Nullable<User>;
}

export interface IQuery {
    auth(id: number): Auth | Promise<Auth>;
    logout(): string | Promise<string>;
    profile(id: number): Profile | Promise<Profile>;
    profiles(): Profile[] | Promise<Profile[]>;
    user(id: number): UserWithoutPassword | Promise<UserWithoutPassword>;
    users(): UserWithoutPassword[] | Promise<UserWithoutPassword[]>;
    whoAmI(): UserWithoutPassword | Promise<UserWithoutPassword>;
}

export interface Social {
    link?: Nullable<string>;
    type?: Nullable<string>;
}

export interface User {
    created_at: DateTime;
    email: string;
    id: string;
    is_active: boolean;
    name: string;
    password: string;
    profile?: Nullable<Profile>;
    updated_at: DateTime;
}

export interface UserWithoutPassword {
    created_at: DateTime;
    email: string;
    id: string;
    is_active: boolean;
    name: string;
    profile?: Nullable<Profile>;
    updated_at: DateTime;
}

export type DateTime = any;
type Nullable<T> = T | null;
