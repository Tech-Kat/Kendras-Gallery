const db = require("../db/dbConfig");

const getAllPaintings = async () => {
    try{
        const allPaintings = await db.any("SELECT * FROM paintings");
        return allPaintings;
    } catch(error){
        return error;
    }
};

const getPainting = async (id) => {
    try{
        const onePainting = await db.oneOrNone("SELECT * FROM paintings WHERE id=$1", id);
        return onePainting;
    }catch (error) {
        return error;
    }
};

const createPainting = async (painting) => {
    const {name, artist, price, size, description, is_available, image}= painting;
    try{
        const newPainting = await db.oneOrNone("INSERT INTO paintings (name, INITCAP(artist), price, size, description, is_available, image)")
    }
}

module.exports = {
    getAllPaintings, getPainting,
}