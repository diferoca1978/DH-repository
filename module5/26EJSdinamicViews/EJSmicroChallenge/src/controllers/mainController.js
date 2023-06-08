//* The first view

/*If we're use EJS we don't need use the command (res.send or res.sendFile) 
because with EJS we can use the command (res.render) it already doesn't 
need the hole path, only need the name of the view instead.*/
// * But we must use this line onto entry point
//* app.set("views", path.resolve(__dirname, "../views"))
//* with this line we are indicating the whole path to the views folder.

/*const controller = {
  index: (req, res) => {
    res.render("home");
  },
};*/
/*--------------------------------------------------------------------------*/

//* Sharing parameters

/* Well EJS even afford us using a second parameter onto the res.render 
and it can be an object literal that have the task to send the data 
we can show in the view */

const dish = [
  {
    id: 1,
    type: "Carpaccio fresco",
    description: "Entrada Carpaccio de salmón con cítricos",
    price: 65.5,
    image: "Carpaccio-de-salmon.jpg",
  },
  {
    id: 2,
    type: "Risotto de berenjena",
    description: "Risotto de berenjena y queso de cabra",
    price: 47.0,
    image: "berenjena-queso-cabra.jpg",
  },
  {
    id: 3,
    type: "Mousse de arroz",
    description: "Mousse de arroz con leche y aroma de azahar",
    price: 27.5,
    image: "Mousse-de-arroz-con-leche.jpg",
  },
  {
    id: 4,
    type: "Espárragos blancos",
    description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    price: 37.5,
    image: "esparragos.png",
  },
];

module.exports = {
  //* With this method we are indicated to the method index that use the array above called dish.
  index: (req, res) => {
    return res.render("index", { menu: dish });
  },
  detail: (req, res) => {
    const finddish = dish.find((row) => row.id == req.params.id);
    if (finddish) return res.render("detalleMenu", { plate: finddish });
    else return res.send("ERROR 404 PAGE NOT FOUND");
  },
};
