import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from '../schemas/user.schema';
import { LoginUserDto } from './dto/login-user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private usersService: UserService,
    private jwtService: JwtService,
    private configService:ConfigService
  ) {}
  
  async register(registerUserDto: RegisterUserDto): Promise<User> {
    const hashPassword = await this.hashPassword(registerUserDto.password);

    return await this.userModel.create({ ...registerUserDto, refresh_token: "refresh_token_string", password: hashPassword });
  }

  async login(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.userModel.findOne(
        { email: loginUserDto.email }
    )
    if (!user) {
        throw new HttpException("Email is not exist", HttpStatus.UNAUTHORIZED);
    }
    const checkPass = bcrypt.compareSync(loginUserDto.password, user.password);
    if (!checkPass) {
        throw new HttpException('Password is not correct', HttpStatus.UNAUTHORIZED);
    }
    //generate access token and refresh token 
    const payload = { id: user.id, email: user.email };
    return this.generateToken(payload);
  }

  async refreshToken(refresh_token: string): Promise<any> {
    try {
        const verify = await this.jwtService.verifyAsync(refresh_token, {
            secret: '123456'
        })
        const checkExistToken = await this.userModel.findOne({ email: verify.email, refresh_token })
        if (checkExistToken) {
            return this.generateToken({ id: verify.id, email: verify.email })
        } else {
            throw new HttpException('Refresh token is not valid', HttpStatus.BAD_REQUEST);
        }

    } catch (error) {
        throw new HttpException('Refresh token is not valid', HttpStatus.BAD_REQUEST)
    }
}

  private async generateToken(payload: { id: number, email: string }) {
    const access_token = await this.jwtService.signAsync(payload);
    const refresh_token = await this.jwtService.signAsync(payload, {
        secret: '123456',
        expiresIn: '1d'
    })

    await this.userModel.findOneAndUpdate(
        { email: payload.email },
        { refresh_token: refresh_token }
    )

    return { access_token, refresh_token };
}
  private async hashPassword(password: string): Promise<string> {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hash = await bcrypt.hash(password, salt);

    return hash;
}
}