"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var Angular5_csv_1 = require("./Angular5-csv");
describe('Component: Angular2Csv', function () {
    it('should create an file with name My_Report.csv', function () {
        var component = new Angular5_csv_1.Angular5Csv([{ name: 'test', age: 20 }], 'My Report');
        expect(component).toBeTruthy();
    });
    it('should return correct order', function () {
        var component = new Angular5_csv_1.Angular5Csv([{ name: 'test', age: 20 }], 'My Report', { useBom: false });
        var csv = component['csv'];
        var csv_rows = csv.split(Angular5_csv_1.CsvConfigConsts.EOL);
        var first_row = csv_rows[0].replace(/"/g, '').split(',');
        expect(first_row[0]).toEqual('test');
        expect(first_row[1]).toBe("" + 20);
    });
    it('should return csv with title', function () {
        var component = new Angular5_csv_1.Angular5Csv([{ name: 'test', age: 20 }], 'My Report', { showTitle: true, useBom: false });
        var csv = component['csv'];
        var title = csv.split(Angular5_csv_1.CsvConfigConsts.EOL)[0];
        expect(title).toEqual('My Report');
    });
    it('should return csv file with custom field separator', function () {
        var component = new Angular5_csv_1.Angular5Csv([{ name: 'test', age: 20 }], 'My Report', { useBom: false, fieldSeparator: ';' });
        var csv = component['csv'];
        var first_row = csv.split(Angular5_csv_1.CsvConfigConsts.EOL)[0];
        expect(first_row.split(';').length).toBe(2);
    });
    it('should return csv file with custom field separator', function () {
        var component = new Angular5_csv_1.Angular5Csv([{ name: 'test', age: 20 }], 'My Report', { useBom: false, quoteStrings: '|' });
        var csv = component['csv'];
        var first_row = csv.split(Angular5_csv_1.CsvConfigConsts.EOL)[0].split(',');
        expect(first_row[0]).toMatch('\\|.*\\|');
    });
    it('should return csv file with correct header labels', function () {
        var component = new Angular5_csv_1.Angular5Csv([{ name: 'test', age: 20 }], 'My Report', {
            useBom: false,
            showLabels: true,
            headers: ["name", "age"]
        });
        var csv = component['csv'];
        var labels = csv.split(Angular5_csv_1.CsvConfigConsts.EOL)[0].split(',');
        expect(labels[0]).toEqual('name');
        expect(labels[1]).toEqual('age');
    });
    it('should return nulls as empty strings if the options is selected', function () {
        var component = new Angular5_csv_1.Angular5Csv([{ name: null, age: null }], 'My Report', { useBom: false, nullToEmptyString: true });
        var csv = component['csv'];
        var csv_rows = csv.split(Angular5_csv_1.CsvConfigConsts.EOL);
        var first_row = csv_rows[0].replace(/"/g, '').split(',');
        expect(first_row[0]).toEqual('');
        expect(first_row[1]).toBe('');
    });
});
//# sourceMappingURL=Angular5-csv.spec.js.map