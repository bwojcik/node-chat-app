const expect = require('expect');
const {Users} = require('./users.js');

describe('Users', () => {
	var users;
	beforeEach (() => {
		users = new Users();
		users.users = [{
			id: 1, 
			name: 'Beata',
			room: 'Node course'
		}, {
			id: 2, 
			name: 'Michal',
			room: 'React course'
		}, {
			id: 3, 
			name: 'Mikolaj',
			room: 'Node course'
		}

		];
	});

	it('should create new user', () => {
		var users = new Users();
		var user = {
			id: 123, 
			name: 'Beata',
			room: 'Test'
		};

		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should return names for node course room', () => {
		var userList = users.getUserList('Node course');

		expect(userList).toEqual(['Beata', 'Mikolaj']);
	});

	it('should return names for React course room', () => {
		var userList = users.getUserList('React course');

		expect(userList).toEqual(['Michal']);
	});

	it('should find a user', () => {
		var id = 2;
		var user = users.getUser(id);

		expect(user.id).toEqual(id);
	});

	it('should not find a user', () => {
		var id = 99;
		var user = users.getUser(id);

		expect(user).toNotExist();
	});

	it('should remove a user', () => {
		var id = 2;
		var user = users.removeUser(id);

		expect(user.id).toEqual(id);
		expect(users.users.length).toBe(2);
	});

	it('should not remove a user', () => {
		var id = 99;
		var user = users.getUser(id);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});
});