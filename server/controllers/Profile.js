const Profile = require("../models/Profile");
const User = require("../models/User");


exports.updateProfile = async (req,res)=>{
    try {
        // get data
        const {dateOfBirth="",about="",contactNumber="",gender=""} =req.body;
        // userid
        let id= req.user.id;
        console.log(req.user.id)
        // check if there is a profile for the user or not 
        // validation
       
        if(!contactNumber || !gender || !id){
            return  res.status(400).json({
                success:false,
                message:"enter all details",
               
            })
        }
       
        //find and  update the profile of that particular user 
        const userDetails = await User.findById(id);
        
        const profileId = userDetails.additionalDetails;
      
        const profileDetails = await Profile.findById(profileId)
        
        profileDetails.dateOfBirth=dateOfBirth;
        profileDetails.about= about ;
        profileDetails.gender=gender;
        profileDetails.contactNumber=contactNumber;
        // db entry
       await profileDetails.save();

        // return response
       
        return res.status(200).json({
            success:true,
            message:"updated profile successfully",
            profileDetails,
        })
    } catch (error) {
       
        return res.status(500).json({
            success:false,
            message:"unable to update profile",
            error:error.message,
        }) 
    }
}


exports.deleteAccount = async (req,res) =>{
    try {
      
        // get id
        const id = req.user.id;
        // validation
        const user= await User.findById(id);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found",
                
            })
        }
        // delete profile
        await  Profile.findByIdAndDelete({_id:user.additionalDetails});
       
        // delete user
        await User.findByIdAndDelete({_id:id});
        // return response
        return res.status(200).json({
            success: true,
            message: "account deleted successfully"
            });
            
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"unable to delete profile",
            error:error.message,
        })
    }
}


// get all user detais

exports.getAllUserDetails = async (req,res) =>{
    try {
        // get id
        const id = req.user.id;
        // validation // get user details
        const userDetails = await User.findById(id).populate('additionalDetails').exec();
        console.log(userDetails);
        // return response
        return res.status(200).json({
            success:true,
            message:"user data fetched successfully",
            userDetails,
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"unable to find all profile details",
            error:error.message,
        })
    }
};




