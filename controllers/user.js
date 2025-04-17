const User = require('../models/user');

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
}
async function handleUpdateUserById(req, res) {
    
        await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
        return res.json({ message: 'User Updated' });
    
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ message: 'User Deleted' });
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    console.log(body);
    if (!body.first_name || !body.last_name|| !body.email || !body.gender || !body.job_title)
    {
       
        return res.status(400).json({ msg : "Missing required fields" });
    
    }
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    });
        
    return res.status(201).json({ msg: "success", id: reault._id });

}
module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
   
};