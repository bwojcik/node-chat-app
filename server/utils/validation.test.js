const expect = require('expect');

const {isRealString} = require('./validation.js');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		var str = '';

		var res = isRealString(str);

		expect(res).toBe(false);
	});

	it('should reject string with only spaces', () => {
		var str = '   ';

		var res = isRealString(str);

		expect(res).toBe(false);
	});

	it('should allow string with non-spaces characters', () => {
		var str = 'test';

		var res = isRealString(str);

		expect(res).toBe(true);
	});
});