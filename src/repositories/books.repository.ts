import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BooksDataSource} from '../datasources';
import {Books, BooksRelations} from '../models';

export class BooksRepository extends DefaultCrudRepository<
  Books,
  typeof Books.prototype.BooksID,
  BooksRelations
> {
  constructor(
    @inject('datasources.books') dataSource: BooksDataSource,
  ) {
    super(Books, dataSource);
  }
}
