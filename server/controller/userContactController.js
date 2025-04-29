const userContactDetails = require("../schema/userContact");

module.exports.userContactDetails = async (req, res) => {
    const { name, email, subject, enquiry, message } = req.body;

    try {
        const newUserContact = new userContactDetails({
            name,
            email,
            subject,
            enquiry,
            message
        });
        await newUserContact.save();

        console.log("User contact saved successfully:", newUserContact);
        
        res.status(200).json({ message: "User contact saved successfully" });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message: "Error saving user contact" });
    }
}