import mongoose, { Schema } from 'mongoose'

const ledControllerSchema = new Schema({
isOn: {
    type:Boolean
}, 
  name: {
    type: String
  },
  color: {
    type: String
  },
  intensity: {
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
      intensity: this.intensity,
      frequency: this.frequency,
      duration: this.duration,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('LedController', ledControllerSchema)

export const schema = model.schema
export default model
