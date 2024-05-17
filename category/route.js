const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { postCategory,getCategories,putCategoriId,deletecategoryId, postService,getServices,deleteserviceId,putServiceId} = require("./controller");



// add category
app.post("/category", postCategory);

//get categories
app.get("/categories",getCategories);


//upadte categories by id
app.put("/category/:categoryId",putCategoriId);

//Delete category id
app.delete("/category/:categoryId",deletecategoryId);

// POST categoryId service
app.post("/category/:categoryId/service", postService);

//get service
app.get("/category/:categoryId/services",getServices);

//DELETE category categoryId service serviceId
app.delete("/category/:categoryId/service/:serviceId",deleteserviceId);


// PUT /category/:categoryId/service/:serviceId
app.put("/category/:categoryId/service/:serviceId",putServiceId);





module.exports = app;
