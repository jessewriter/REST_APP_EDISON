import mongoose, { Schema } from 'mongoose'

const ledControllerSchema = new Schema({
  isOn: {
    type: String
  },
  name: {
    type: String
  },
  color: {
    type: String
  },
  frequency: {
    type: String
  },
  duration: {
    type: String
  }
}, {
  timestamps: true
})

ledControllerSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      isOn: this.isOn,
      name: this.name,
      color: this.color,
      frequency: this.frequency,
      duration: this.duration,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    this.isOn
    } : view
  }
}

const model = mongoose.model('LedController', ledControllerSchema)

export const schema = model.schema
export default model
