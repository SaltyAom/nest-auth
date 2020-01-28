import {
    Controller,
    Get,
    Post,
    Request,
    Response,
    UseGuards,
    UseInterceptors,
    CacheInterceptor
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import AppService from 'src/app/app.service'
import AuthService from 'src/auth/auth.service'

@Controller()
export default class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly authService: AuthService,
    ) {}

    @Get('')
    @UseInterceptors(CacheInterceptor)
    getLoginPage(@Response() response) {
        return this.appService.showLoginPage(response)
    }

    @Post('login')
    @UseGuards(AuthGuard('login'))
    async login(@Request() request) {
        return this.authService.login(request.user)
    }

    @Get('profile')
    @UseGuards(AuthGuard('encrypt'))
    getProfile(@Request() request) {
        return request.user
    }
}
