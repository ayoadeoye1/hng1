import { Controller, Body, Delete, Get, Post, Res, Param, Patch } from '@nestjs/common';
import { Response } from 'express';
import { CrudService } from './crud.service';
import { CrudDto } from './dto/crud.dto';
 
@Controller('api') 
export class CrudController {
    constructor(private readonly crudService: CrudService) {}

    @Get()
    async getPerson(@Res() res: Response): Promise<void> {
        try {
            const data = await this.crudService.getPerson()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    @Post()
    async createPerson(@Body() crudDto: CrudDto, @Res() res: Response): Promise<void> {
        try {
            const data = await this.crudService.createPerson(crudDto)
            res.status(201).json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    @Patch(':id')
    async updatePerson(@Body() crudDto: CrudDto, @Res() res: Response, @Param('id') id: string): Promise<void> {
        try {
            const data = await this.crudService.updatePerson(id, crudDto);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    @Delete(':id')
    async deletePerson(@Res() res: Response, @Param('id') id: string): Promise<void> {
        try {
            const data = await this.crudService.deletePerson(id)
            res.status(201).json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}
