const bcrypt = require('bcrypt');

exports.handler = async (event) => {
    const password = event.password;
    const correctPasswordHash = "$2b$10$UhV9P2XyZQ5F9wX1LndSHeG6VeCZlC5IEc2eWEps5rBuIYfWDXkHe";

    try {
        // Compare the entered password with the hashed password
        const match = await bcrypt.compare(password, correctPasswordHash);

        if (match) {
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true }),
            };
        } else {
            return {
                statusCode: 401,
                body: JSON.stringify({ success: false, error: "Incorrect password" }),
            };
        }
    } catch (error) {
        console.error("Error comparing passwords:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: "Internal server error" }),
        };
    }
};
