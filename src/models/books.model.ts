import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Books extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  BooksID?: number;

  @property({
    type: 'string',
    required: true,
  })
  Title: string;

  @property({
    type: 'string',
    required: true,
  })
  Author: string;

  @property({
    type: 'boolean',
    required: true,
  })
  isDigital: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  isFinished: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Books>) {
    super(data);
  }
}

export interface BooksRelations {
  // describe navigational properties here
}

export type BooksWithRelations = Books & BooksRelations;
