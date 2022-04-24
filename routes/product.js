
const express= require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const con= require("../connection")
const router= express.Router();

router.post("/create", (req, res, next)=>{
    let product = req.body;
    query="insert into product (name, description, price) values(?,?,?)";
    con.query(query,[product.name, product.description, product.price], (err, results)=>{
        if(!err)
        {
            return res.status(200).json({message:"product added successfully"})

        }
        else
        {
            return res.status(500).json(err);
        }
    })
})

router.get("/read", (req, res, next)=>{
  
    query="select * from product";
    con.query(query,(err, results)=>{
        if(!err)
        {
            return res.status(200).json(results)

        }
        else
        {
            return res.status(500).json(err);
        }
    })
})

router.patch("/update/:id", (req, res, next)=>{
    const id= req.params.id;
    let product=req.body
  
    query="update product set name=?, description=?, price=? where id=?";
    con.query(query,[product.name, product.description, product.price, id], (err, results)=>{
        if(!err)
        {
            if(results.affectedRows==0){

                return res.status(404).json({message: "product id is invalid"})
            }
            return res.status(200).json({message: "product updated successfully"})
        

        }
        else
        {
            return res.status(500).json(err);
        }
    })
})


router.delete("/delete/:id", (req, res, next)=>{
    const id= req.params.id;

  
    query="delete from product where id=?";
    con.query(query,[id],(err, results)=>{
        if(!err)
        {
            if(results.affectedRows==0){

                return res.status(404).json({message: "product id is invalid"})
            }
            return res.status(200).json({message: "product deleted successfully"})
        

        }
        else
        {
            return res.status(500).json(err);
        }
    })
})
 
module.exports= router;