exports.handler = async (event) => {
    const password = event.password;
    const correctPassword = "ironman";

    if (password === correctPassword) {
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
};
