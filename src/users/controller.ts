import { JsonController, Get, Param, Body, Post  } from 'routing-controllers';
import User from './entity'


@JsonController()
export default class UserController {

    @Post('/users')
    async createUser(
        @Body() data: User
    ) {
        const {password, ...rest} = data
        const entity = User.create(rest)
        await entity.setPassword(password)
        const user = await entity.save()
        return user
    }


    @Get('/users/:id([0-9]+)')
    getUser(
        @Param('id') id: number
    ) {
        return User.findOne(id)   
    }

    @Get('/users')
    allUsers() { 
        return User.find()
    }
}