import { Schema, model } from 'mongoose'

const exampleSchema = new Schema(
  {
    exampleName: {
      type: String,
    },
    exampleEmail: {
      type: String,
    },
    exampleAge: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

exampleSchema.statics.addUser = async function () {
  try {
  } catch (e) {
    console.log(e)
    return e
  }
}

exampleSchema.statics.findUser = async function () {
  try {
  } catch (e) {
    console.log(e)
    return e
  }
}

exampleSchema.statics.updateUser = async function () {
  try {
  } catch (e) {
    console.log(e)
    return e
  }
}

exampleSchema.statics.deleteUser = async function () {
  try {
  } catch (e) {
    console.log(e)
    return e
  }
}

export default model('example-modal', exampleSchema)
