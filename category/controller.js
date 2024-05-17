const pool = require("../configs/dbconfig");
const Knex = require("../configs/knex");

const postCategory = async (req, res) => {
  try {
    const name=req.body;
    //Insert category on database
    const insertCategory = Knex('category').insert({
      name: name,
    }).returning('*').toString();
    const result = await pool.query(insertCategory);

    res.status(200).json({
      status: true,
      results: result.rows,
    })
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const getCategories = async (req, res) => {
    try {
      // fetching all category on databaes 
      const getQuery = Knex('category').returning('*').toString();
      const result = await pool.query(getQuery);
  
      res.status(200).json({
        status: true,
        results: result.rows,
      })
  
    } catch (e) {
      console.log(e)
      res.sendStatus(500);
    }

};

const putCategoriId = async (req, res) => {
  try {
    const id = req.parms.id;
    const {name}=req.body;

    // check data existing or not 
    const getDuplicateUser = Knex("category")
      .select("name")
      .where({id })
      .toString();
    const dataToUpdate = await pool.query(getDuplicateUser);
    const cate_uploadfile = dataToUpdate.rows[0];

    if (!cate_uploadfile) {
      res
        .status(400)
        .send({ error: " No data found for resource with given by id" });
      return;
    }

     //upadte category on databases
     const updateCategory = Knex('category').update({
        name: name,
      })
      .where("id",id).returning('*').toString();
      const result = await pool.query(updateCategory);
    
    res.status(200).json({
      status: true,
      results: result.rows,
    })

  } catch (e) {
    console.log(e)
    res.sendStatus(500);
  }
};

const deletecategoryId = async (req, res) => {
    try {
      const id = req.parms.id;
      const {name}=req.body;
  
       //delete category on databases
       const updateCategory = Knex('category').delete()
        .where("id",id).returning('*').toString();
        const result = await pool.query(updateCategory);
      
      res.status(200).json({
        status: true,
        results: result.rows,
      })
  
    } catch (e) {
      console.log(e)
      res.sendStatus(500);
    }
  };

const postService = async (req, res) => {
    try {
        const category_id = req.parms.category_id;
      const {name,type,price_option}=req.body;
      //Insert category on database
      const insertCategory = Knex('service').insert({
        name: name,
        type:type,
        price_option,price_option,
        category_id:category_id,
      }).returning('*').toString();
      const result = await pool.query(insertCategory);
  
      res.status(200).json({
        status: true,
        results: result.rows,
      })
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
};

const getServices = async (req, res) => {
    try {
        const category_id = req.parms.category_id;
      // fetching all category on databaes 
      const getQuery = Knex('service').where("category_id",category_id).returning('*').toString();
      const result = await pool.query(getQuery);
  
      res.status(200).json({
        status: true,
        results: result.rows,
      })
  
    } catch (e) {
      console.log(e)
      res.sendStatus(500);
    }

};

const deleteserviceId = async (req, res) => {
    try {
      const category_id = req.parms.category_id;
      const id = req.parms.id;
      const {name}=req.body;
  
       //delete category on databases
       const updateCategory = Knex('service').delete()
        .where("id",id).andWhere("category_id",category_id).returning('*').toString();
        const result = await pool.query(updateCategory);
      
      res.status(200).json({
        status: true,
        results: result.rows,
      })
  
    } catch (e) {
      console.log(e)
      res.sendStatus(500);
    }
  };
  
const putServiceId = async (req, res) => {
    try {
      const id = req.parms.id;
      const category_id = req.parms.category_id;
     
      const {name,type,price_option}=req.body;
      
      // check data existing or not 
      const getDuplicateUser = Knex("category")
        .select("name","type","price_option","category_id")
        .where({id })
        .andWhere({category_id})
        .toString();
      const dataToUpdate = await pool.query(getDuplicateUser);
      const cate_uploadfile = dataToUpdate.rows[0];
  
      if (!cate_uploadfile) {
        res
          .status(400)
          .send({ error: " No data found for resource with given by id" });
        return;
      }
  
       //upadte category on databases
       const updateCategory = Knex('category').update({
        name: name,
        type:type,
        price_option,price_option,
        category_id:category_id,
        })
        .where("id",id).returning('*').toString();
        const result = await pool.query(updateCategory);
      
      res.status(200).json({
        status: true,
        results: result.rows,
      })
  
    } catch (e) {
      console.log(e)
      res.sendStatus(500);
    }
  };

module.exports = { postCategory,getCategories,putCategoriId, deletecategoryId, postService,getServices ,deleteserviceId, putServiceId};