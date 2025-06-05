import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  // User Login
  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  // User Registration
  async register(email: string, password: string) {
    // Check if user already exists
    if (!email || !password) {
      throw new ConflictException('Email and password are required');
    }
    try {
      const existingUser = await this.usersService.findByEmail(email);
      if (existingUser) {
        throw new ConflictException('User already exists');
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.usersService.createUser(email, hashedPassword);
      // Exclude the password from the response
      const { password: _, ...userWithoutPassword } = user;

      return {
        message: 'Created successfully',
        user: userWithoutPassword,
      };
    } catch (error) {
      throw new ConflictException(error.message || 'User registration failed');
    }
  }
}
