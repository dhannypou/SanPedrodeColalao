import express from "express";
import { createEvent, deleteEvent, getEvents } from "../Controllers/eventController.js";

const router = express.Router()

//Get all events
router.get("/", getEvents);

//Create a new event
router.post("/new", createEvent);

//Delete an event
router.delete("/delete/:id", deleteEvent);



export default router;