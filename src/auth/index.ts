import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

import { jwtConstants } from './constants'

import UserModule from 'src/users'
import AuthService from './auth.service'
import LocalStrategy from './local.strategy'
import JwtStrategy from './jwt.strategy'

const Jwt = JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '300s' },
})

@Module({
    imports: [
        UserModule,
        PassportModule.register({ defaultStrategy: 'jwt', session: true }),
        Jwt,
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService, Jwt],
})
export default class AuthModule {}
