"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config_json_1 = require("./config.json");
const config = {
    name: 'books',
    connector: 'postgresql',
    url: config_json_1.urlDB,
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: config_json_1.passwordDB,
    database: 'LibDB'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let BooksDataSource = class BooksDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
BooksDataSource.dataSourceName = 'books';
BooksDataSource.defaultConfig = config;
BooksDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.books', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], BooksDataSource);
exports.BooksDataSource = BooksDataSource;
//# sourceMappingURL=books.datasource.js.map