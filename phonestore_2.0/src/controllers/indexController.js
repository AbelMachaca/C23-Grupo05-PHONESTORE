

const indexController = {
    index:(req,res)=>{
        res.render("index",{title:"home",products})
    }

}

module.exports = indexController;