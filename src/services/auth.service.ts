import { Injectable } from '@nestjs/common';
import { UserRepository } from '@/modules/typeorm-database/repositories';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login() {
    await this.userRepository.find();
  }
}
