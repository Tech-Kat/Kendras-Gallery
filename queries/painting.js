const db = require("../db/dbConfig");

const getAllPaintings = async () => {
    try{
        const allPaintings = await db.any("SELECT * FROM paintings");
        return allPaintings;
    } catch(error){
        return error;
    }
};



module.exports = {
    getAllPaintings
}