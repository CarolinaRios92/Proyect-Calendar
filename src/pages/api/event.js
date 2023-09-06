import { getServerSession } from "next-auth";
import { mongooseConnect } from "../../../lib/mongoose";
import { authOptions } from "./auth/[...nextauth]";

export default async function handle(req, res){
    await mongooseConnect();
    const {user} = await getServerSession(req, res, authOptions);
    console.log(user)

    if(req.method === "PUT"){
        res.json("ok");
    }
}