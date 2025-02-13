// 1 Requiring Express
const express = require("express")
// require keyword is used to import the express module


// 2 Initializing Express In App Variable

const app = express()
// app variable is used to initialize the express module



// 3 Setting Up The Port
const PORT = 3000;



// 4 Listening To The Port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// 5 Creating A Route
