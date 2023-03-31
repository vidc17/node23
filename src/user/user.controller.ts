import {Controller, Get, Patch, Post} from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    testiram(): string {
        return "VSS GET";
    }

    @Post()
    testiramPOST(): string{
        return "VSS POST";
    }

        @Patch()
        testiramPatch(): string{
        return "Vss patch";
    }
}