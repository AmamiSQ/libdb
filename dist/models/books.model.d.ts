import { Entity } from '@loopback/repository';
export declare class Books extends Entity {
    BooksID?: number;
    Title: string;
    Author: string;
    isDigital: boolean;
    isFinished: boolean;
    [prop: string]: any;
    constructor(data?: Partial<Books>);
}
export interface BooksRelations {
}
export type BooksWithRelations = Books & BooksRelations;
