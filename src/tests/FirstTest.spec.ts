import { User } from '@models/User';

test('it should be ok', () => {
  const user = new User();
  user.name = 'Rony';
  expect(user.name).toEqual('Rony');
})
