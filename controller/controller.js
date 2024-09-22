const { validEmail } = require("../middleware/email")
const { User } = require("../model/Usermodel")
const { senduserEmail } = require("../sendmail")




const register = async (request,response) =>{
    try {
        const{firstName,lastName,email,Department} = request.body

        if(!validEmail(email)){
            return response.status(400).json({
                message:"Invalid Email Format"
            })
        }

    const new_user = new User({firstName,lastName,email,Department})
    await new_user.save()

    return response.status(200).json({
        message:"Successful",
        user: new_user
    })
    } catch (error) {
        return response.status(500).json({
            message:error.message
        })
    }
    

}



const generate= async(request,response) =>{
    const{firstName,email} = request.body
    

    const already = await User.findOne({email})

    if(!already){
        return response.status(404).json({message:"User not found"})
    }
    //return response.status(200).json({message:"welcome"})
    try {
        await senduserEmail(email,firstName)
        return response.status(200).json({message:"Email sent Successfully"})
    } catch (error) {
        
    }
    


}




module.exports= {
    register,
    generate
}