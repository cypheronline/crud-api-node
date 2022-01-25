import mongoose, { Schema } from 'mongoose'

const testApiSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: String
  },
  gender: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

testApiSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      age: this.age,
      gender: this.gender,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('TestApi', testApiSchema)

export const schema = model.schema
export default model
