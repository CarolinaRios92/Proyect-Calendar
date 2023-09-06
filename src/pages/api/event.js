import { getServerSession } from "next-auth";
import { mongooseConnect } from "../../../lib/mongoose";
import { authOptions } from "./auth/[...nextauth]";
import { Event } from "../../../models/Event";

export default async function handle(req, res){
    await mongooseConnect();
    const {user} = await getServerSession(req, res, authOptions);
    console.log(user)

    if(req.method === "POST"){
        const {userEmail,
            title,
            color,
            description,
            inicial_date,
            final_date,
            reminder} = req.body;

        try {
            const newEvent = await Event.create({
            userEmail,
            title,
            color,
            description,
            inicial_date,
            final_date,
            reminder
        })
            res.json(newEvent);
        } catch (error) {
            res.status(400).json(error.message);
        }
        
    }
}