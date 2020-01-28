import { Injectable } from '@nestjs/common'

interface database {
    username: string
    password: string
    bio: string
}

@Injectable()
export default class UserService {
    private readonly database: database[]

    constructor() {
        this.database = [
            { username: 'admin', password: '12345678', bio: 'I like train' },
        ]
    }

    async findOne(username: string): Promise<database | undefined> {
        return this.database.find(user => user.username === username)
    }
}
