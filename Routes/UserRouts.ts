import express, { Request, Response } from 'express'
import User from '../Model/UserModel'
const router = express.Router();


router.get("/",async (req: Request, res: Response) => {

 await User.find({}).then(user=>{
    res.status(200).json({ user:user })
 })
 .catch(error=>{
    res.status(400).json({ error:error})
 })
    
})

router.post("/save", async(req: Request, res: Response) => {
  console.log(req.body,'llll')
    const { userid,
        name,
        email,
        picture,
        accessToken } = req.body;

        const user=new User(req.body)

     await user.save().then(success=>{
         res.status(201).json({user:success});
         
     }).catch(error=>{
        res.status(400).json({error:error});
       
     })

})

router.post("/addpoint", async(req: Request, res: Response) => {
   
     console.log(req.body,'add point backend route')
await User.findOne({userid:req.body.userid},(err: any, userInfo: { php: any; js: any; python: any; save: () => Promise<any>; }) => {
   if(err){
      return res.send(400).json({err:err})
   }
  
   else if(userInfo){
      console.log(userInfo,'user found for point updating')
      if(req.body.questype=='PHP'){
         userInfo.php=req.body.point;
         console.log('php')

      }
      else if(req.body.questype=='JS'){
         console.log('js')
         userInfo.js=req.body.point;

      }else if(req.body.questype=='PYTHON'){
         userInfo.python=req.body.point;
console.log('python')
      }

      userInfo.save().then((data: any)=>{

         console.log('saved yahoo',data)
         res.status(200).json({msg:'Updated'});
      }).catch((error: any)=>{
         console.log('not saved yahoo',error)
         res.status(401).json({error:error})
      })
   }
 
 
 })

})
export default router;
