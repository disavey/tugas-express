import db from "../connection.js";

export const getCake = (req, res) => {
  const sql = "SELECT * FROM cake";
  db.query(sql, (error, result) => {
    res.send(result);
  });
};

export const getCakeById = (req, res) => {
  const sql = `SELECT * FROM cake WHERE id=${req.query.id}`;
  db.query(sql, (error, result) => {
    res.json(result);
  });
};

export const createCake = (req, res) => {
  const { cake_name, price, description } = req.body;
  const sql =
    "INSERT INTO cake (cake_name, price, description) VALUES (?,?,?)";
  db.query(sql, [cake_name, price, description], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(201);
    res.json(result);
  });
};

export const updateCake = (req, res) => {
  const id = req.query.id;

  const { cake_name, price, description } = req.body;
  if (cake_name || price || description) {
    const query = `UPDATE cake SET cake_name = "${cake_name}", price = "${price}", description = "${description},"  WHERE  id=${id}`;

    db.query(query, (error, result) => {
      if (error) res.status(400).send(error.message);
      res.json(result);
    });
  } else {
    res.send("Isi body nya");
  }
};

export const deleteCake = (req, res) => {
  const id = req.query.id;
  const sql = "DELETE FROM cake WHERE id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(200);
    res.json("data berhasil dihapus");
  });
};
