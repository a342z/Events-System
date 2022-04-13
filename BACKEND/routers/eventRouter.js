const express=require("express");
const {body,query,param}=require("express-validator")
const router=express.Router();

const controller=require("./../Controllers/eventController");
let isAuth = require("./../middleware/authMW");

router.route("/events")
.get(isAuth,[],controller.getAllEvents)

.post(isAuth,[
    body("title").isString().withMessage("Title should be a string"),
    body("date").isDate().withMessage("eventDate should be a Date"),
    body("mainspeaker").notEmpty().withMessage("mainSpeaker should not be empty"),
    // body("speakers").isArray().withMessage("speakers should be an array"),
    // body("students").isArray().withMessage("students should be an array")


],controller.addEvent)

.delete(isAuth,[
    body("_id").isNumeric().withMessage("ID Should be a number")
],controller.deleteEvent)

.put(isAuth,[
    body("title").isString().withMessage("Image should be a string"),
    body("date").notEmpty().withMessage("eventDateshould not be empty"),
    body("mainspeaker").notEmpty().withMessage("mainSpeaker should not be empty"),
    // body("speakers").isArray().withMessage("speakers should be an array"),
    // body("students").isArray().withMessage("students should be an array")
],controller.updateEvent)


router.route("/events/:id")
.get(isAuth,[],controller.getEvent)

module.exports=router;