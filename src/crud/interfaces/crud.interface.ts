import { Document } from "mongoose"

export interface Crud extends Document {
    name: string,
    timestamps: string
}