import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: any[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
        pet: { name: 'alfred', picId: 1 },
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
        pet: { name: 'gopher', picId: 2 },
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        pet: { name: 'jenny', picId: 3 },
      },

      {
        userId: 4,
        username: 'dafa',
        password: '1234567',
        pet: { name: 'ahmad', picId: 4 },
      },

      {
        userId: 5,
        username: 'udin',
        password: '7654321',
        pet: { name: 'heri', picId: 5 },
      },

    ];
  }

  async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }
}
