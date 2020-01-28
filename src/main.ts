import { NestFactory } from '@nestjs/core'
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify'

import AppModule from 'src/app.module'

const bootstrap = async () => {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
    await app.listen(3000)
}
bootstrap()
