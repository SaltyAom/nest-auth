import { Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export default class ParseBodyPipe implements PipeTransform {
    transform(body: string): Object {
        let object: Object = {}
        const bodyArr = body.replace(/\r/g, '').split(/\n/g)

        bodyArr.forEach(part => {
            if(part === "") return
            
            let [name, body] = part.split('=')
            object[name] = body
        })

        return object
    }
}
