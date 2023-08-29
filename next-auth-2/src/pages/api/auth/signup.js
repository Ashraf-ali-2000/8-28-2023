import { createUser } from "@/services/users";

export default async function handler(req,res){
  if(req.method !== "POST"){
   res.status(400).json({});
  }
  const {email,password} = req.body;
  try{
    const data = await createUser(email,password);
    res.status(201).json(data);
  }catch(err){
    res.status(400).json({message: err.message})
  }
}