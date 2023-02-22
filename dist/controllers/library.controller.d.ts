import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Books } from '../models';
import { BooksRepository } from '../repositories';
export declare class LibraryController {
    booksRepository: BooksRepository;
    constructor(booksRepository: BooksRepository);
    create(books: Omit<Books, 'BooksID'>): Promise<Books>;
    count(where?: Where<Books>): Promise<Count>;
    find(filter?: Filter<Books>): Promise<Books[]>;
    updateAll(books: Books, where?: Where<Books>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Books>): Promise<Books>;
    updateById(id: number, books: Books): Promise<void>;
    replaceById(id: number, books: Books): Promise<void>;
    deleteById(id: number): Promise<void>;
}
