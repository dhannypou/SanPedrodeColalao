import Event from "../models/Event.js";


// Create new Event 
const createEvent = async (req, res) => {
    const newEvent = new Event(req.body)
    try {
        console.log(req.body);
        const savedEvent = newEvent.save();

      res.status(200).json({ success: true, message: 'Successfully created', data: savedEvent })
    } catch (error) {
        console.log(error);
      res.status(500).json({ success: true, message: 'Failed to create. Try again!' })
      
    }
}


// Delete event
const deleteEvent = async (req, res) => {
    const id = req.params.id
    try {
        await Event.findByIdAndDelete(id);
        res.status(200).json({ success: true, message:'Successfully deleted'})
    } catch (error) {
        res.status(500).json({ success: true, message: 'Failed to deleted. Try again!'})
        
    }
}


//Get All Events 
const getEvents = async (req, res) => {
    try {
        const allEvents = await Event.find();
        res.status(200).json({ success: true, message:'Successfully', data: allEvents })
    } catch (error) {
        res.status(500).json({ success: true, message:'Events not found'})
        
    }
}

export { createEvent, getEvents, deleteEvent }