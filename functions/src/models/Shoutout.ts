import mongoose from "mongoose"

const ShoutoutSchema = new mongoose.Schema(
	{
		to: {
			type: String,
			required: true
		},
		from: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
)

ShoutoutSchema.set("toJSON", {
	transform: function (doc, ret) {
		ret.id = ret._id.toHexString()
		delete ret._id
		delete ret.__v
	}
})

const Shoutout = mongoose.model("Shoutout", ShoutoutSchema)
export default Shoutout
