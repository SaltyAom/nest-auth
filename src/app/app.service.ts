import { Injectable, UnauthorizedException } from '@nestjs/common'

import { resolve } from 'path'
import { createReadStream, ReadStream } from 'fs'

@Injectable()
export default class AppService {
    showLoginPage(res): ReadStream {
        try {
            const stream = createReadStream(resolve('html/index.min.html'))
            return res.type('text/html').send(stream)
        } catch (err) {
            console.log(err)
            return res.type('text/plain').send(err)
        }
    }
}