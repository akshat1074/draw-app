import express from "express";
import jwt from "jsonwebtoken"
import {CreateUserSchema,SiginSchem,CreateRoomSchema} from "@repo/common/types";
import cors from "cors";
import { prismaClient } from "@repo/db/client";


const app = express()
app.use(express.json())
app.use(cors())

app.post("/signup", async(req,res)=>{
    const parsedData = CreateUserSchema.safeParse(req.body);
    if(!parsedData.success){
        console.log(parsedData.error);
        res.json({
            message:"Incorrect inputs"
        })
        return ;
    }
    try{
        const user = await prismaClient.user.create({
            data:{
                email:parsedData.data?.username,
                password:parsedData.data.password,
                name:parsedData.data.name

            }
        })
        res.json({
            userId:user.id
        })
    } catch(e){
        res.status(411).json({
            userId: user.id

        })
    }
})

app.post("/signup",(req,res)=>{
    
})

app.post("/signup",(req,res)=>{
    
})

app.post("/signup",(req,res)=>{
    
})

