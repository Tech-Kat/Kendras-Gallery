const db = require("../db/dbConfig");

const getAllPaintings = async () => {
  try {
    const allPaintings = await db.any("SELECT * FROM paintings");
    return allPaintings;
  } catch (error) {
    return error;
  }
};

const getPainting = async (id) => {
  try {
    const onePainting = await db.oneOrNone(
      "SELECT * FROM paintings WHERE id=$1",
      id
    );
    return onePainting;
  } catch (error) {
    return error;
  }
};

const createPainting = async (painting) => {
  const { name, artist, price, size, description, is_available, image } =
    painting;
  try {
    const newPainting = await db.oneOrNone(
      "INSERT INTO paintings (name, artist, price, size, description, is_available, image) VALUES(INITCAP($1), INITCAP($2), $3, $4, $5, $6, $7) RETURNING *",
      [name, artist, price, size, description, is_available, image]
    );
    return newPainting;
  } catch (error) {
    return error;
  }
};

const deletePainting = async (id) => {
    try{
        const deletedPainting = await db.one(
            "DELETE FROM paintings WHERE id = $1 RETURNING *", id
        );
        return deletedPainting;
    } catch (error) {
        return error;
    }
};

const updatePainting = async (id, painting) => {
    try {
        const {name, artist, price, size, description, is_available, image} = painting;
        const updatedPainting = await db.one( 
            "UPDATE paintings SET name=INITCAP($1), artist=INITCAP($2), price=$3, size=$4, description=$5, is_available=$6 image=$7 WHERE id=$8 RETURNING *",
            [name, artist, price, size, description, is_available, image, id]
        );
        return updatedPainting;
    } catch (error) {
        return error;
    }
};

module.exports = {
  getAllPaintings,
  getPainting,
  createPainting,
  deletePainting,
  updatePainting
};
