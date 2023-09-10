import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Crud } from './interfaces/crud.interface';

@Injectable()
export class CrudService {
    constructor(@InjectModel('Crud') private readonly crudModel:Model<Crud>) {}

    async getPerson() {
        try {
            let persons = await this.crudModel.find({});
            if(!persons){
                throw new HttpException('not found', HttpStatus.NOT_FOUND)
            }
            return persons;
        } catch (error) {
            throw new HttpException('error_occured', HttpStatus.BAD_REQUEST)
        }
    }

    async createPerson(s: any) {
        try {
            let persons = new this.crudModel(s)
            await persons.save();
            return persons;
        } catch (error) {
            throw new HttpException('error_occured', HttpStatus.BAD_REQUEST)
        }
    }

    async updatePerson(id: string, s: any) {
        try {
            const persons = await this.crudModel.findByIdAndUpdate({ "_id": id}, s);
            return {'user-updated': persons?._id};
        } catch (error) {
            throw new HttpException('error_occured', HttpStatus.BAD_REQUEST)
        }
    }

    async deletePerson(id: string): Promise<any> {
        try {
            await this.crudModel.deleteOne({ "_id": id});
            return {'user-deleted': id}
        } catch (error) {
            throw new HttpException('error_occured', HttpStatus.BAD_REQUEST)
        }
    }
}
