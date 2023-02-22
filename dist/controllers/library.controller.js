"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LibraryController = class LibraryController {
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
    async create(books) {
        return this.booksRepository.create(books);
    }
    async count(where) {
        return this.booksRepository.count(where);
    }
    async find(filter) {
        return this.booksRepository.find(filter);
    }
    async updateAll(books, where) {
        return this.booksRepository.updateAll(books, where);
    }
    async findById(id, filter) {
        return this.booksRepository.findById(id, filter);
    }
    async updateById(id, books) {
        await this.booksRepository.updateById(id, books);
    }
    async replaceById(id, books) {
        await this.booksRepository.replaceById(id, books);
    }
    async deleteById(id) {
        await this.booksRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/library'),
    (0, rest_1.response)(200, {
        description: 'Books model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Books) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Books, {
                    title: 'NewBooks',
                    exclude: ['BooksID'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LibraryController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/library/count'),
    (0, rest_1.response)(200, {
        description: 'Books model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Books)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LibraryController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/library'),
    (0, rest_1.response)(200, {
        description: 'Array of Books model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Books, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Books)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LibraryController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/library'),
    (0, rest_1.response)(200, {
        description: 'Books PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Books, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Books)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Books, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LibraryController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/library/{id}'),
    (0, rest_1.response)(200, {
        description: 'Books model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Books, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Books, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LibraryController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/library/{id}'),
    (0, rest_1.response)(204, {
        description: 'Books PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Books, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Books]),
    tslib_1.__metadata("design:returntype", Promise)
], LibraryController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/library/{id}'),
    (0, rest_1.response)(204, {
        description: 'Books PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Books]),
    tslib_1.__metadata("design:returntype", Promise)
], LibraryController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/library/{id}'),
    (0, rest_1.response)(204, {
        description: 'Books DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], LibraryController.prototype, "deleteById", null);
LibraryController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.BooksRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BooksRepository])
], LibraryController);
exports.LibraryController = LibraryController;
//# sourceMappingURL=library.controller.js.map