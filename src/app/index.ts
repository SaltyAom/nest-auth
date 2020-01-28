import { Module, CacheModule } from '@nestjs/common'

import AppController from './app.controller'
import AppService from './app.service'
import AuthService from 'src/auth/auth.service'

import AuthModule from 'src/auth'
import UserModule from 'src/users'

@Module({
    imports: [
        UserModule,
        AuthModule,
        CacheModule.register()
    ],
    controllers: [AppController],
    providers: [AppService, AuthService],
})
export default class AppMoudle {}
