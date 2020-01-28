import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import UserService from 'src/users/users.service'

interface userData {
    username: string
    bio: string
}

@Injectable()
export default class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(username: string, pass: string) {
        const user = await this.userService.findOne(username)

        if (!user || user.password !== pass) return null

        const { password, ...result } = user
        return result
    }

    async login({ username, bio }: userData) {
        return {
            access_token: this.jwtService.sign({ username: username, bio: bio }),
        }
    }
}
