import { JsonController, Get, Param  } from 'routing-controllers';
import Tree from './entity'


@JsonController()
export default class TreeController {



    @Get('/trees/:id([0-9]+)')
    getUser(
        @Param('id') id: number
    ) {
        return Tree.findOne(id)   
    }

    @Get('/trees')
    allUsers() { 
        return Tree.find()
    }
}