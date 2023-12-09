import establishConnection from "../establishConnection"
import Shoutout from "../models/Shoutout"
import { Request, Response } from "express"

export interface ReqRes {
    (req: Request, res: Response): Promise<void>
}

// CREATE new Shoutout

export const postShoutout: ReqRes = async (req, res) => {
    try {
        await establishConnection()
        const shoutout = await Shoutout.create(req.body)
        console.log(shoutout)
        res.status(201).send(shoutout)
    } catch (err) {
        console.log(err)
        res.status(401).send("Bad Request")
    }
}

// READ ALL

export const getShoutouts: ReqRes = async (req, res) => {
    try {
        await establishConnection()
        const shoutouts = await Shoutout.find()
        res.status(200).send(shoutouts)
    } catch (err) {
        res.status(500).send("Server Error")
    }
}

// READ

export const getShoutout: ReqRes = async (req, res) => {
    try {
        await establishConnection()
        const shoutouts = await Shoutout.find()
        res.status(200).send(shoutouts)
    } catch (err) {
        res.status(500).send("Shoutout not found")
    }
}

// UPDATE

export const putShoutout: ReqRes = async (req, res) => {
    try {
        await establishConnection()
        const { id } = req.params
        const shoutout = await Shoutout.findByIdAndUpdate(id, req.body)
        res.status(204).send(shoutout)
    } catch (err) {
        res.status(500).send("Server Error")
    }
}

// DESTROY

export const deleteShoutout: ReqRes = async (req, res) => {
	try {
		await establishConnection()
		const { id } = req.params
		console.log("here")
		await Shoutout.findByIdAndDelete(id)
		res.status(204).send()
	} catch (err) {
		res.status(404).send("Item not found")
	}
}
