"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let BooksRepository = class BooksRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Books, dataSource);
    }
};
BooksRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.books')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.BooksDataSource])
], BooksRepository);
exports.BooksRepository = BooksRepository;
//# sourceMappingURL=books.repository.js.map