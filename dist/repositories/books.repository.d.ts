import { DefaultCrudRepository } from '@loopback/repository';
import { BooksDataSource } from '../datasources';
import { Books, BooksRelations } from '../models';
export declare class BooksRepository extends DefaultCrudRepository<Books, typeof Books.prototype.BooksID, BooksRelations> {
    constructor(dataSource: BooksDataSource);
}
