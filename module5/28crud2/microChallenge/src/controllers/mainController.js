const fs = require('fs')
const path = require('path')
const rutaArchivo = path.resolve('./src/database/products.json')
const platos = JSON.parse(fs.readFileSync(rutaArchivo))

module.exports = {
    index: (req, res) => {
        const sinBorrados = platos.filter(plato => plato.borrado != true)
        return res.render('index', {menu: sinBorrados})
    },
    detalle: (req, res) => {
        const platoEncontrado = platos.find(row => row.id == req.params.id)
        if (platoEncontrado && platoEncontrado.borrado != true) return res.render('detalleMenu', { plato: platoEncontrado })
        else return res.send("ERROR 404 NOT FOUND")
        
    },
    create: (req, res) => {
        return res.render('formCreate')
    },
    processCreate: (req, res) => {
        let productoNuevo = {
            "id": platos.length+1, 
            "nombre": req.body.name,
            "detalle": req.body.desc,
            "precio": req.body.price,
            "img": req.file.filename,
            "borrado": false
        }
        fs.writeFileSync(rutaArchivo, JSON.stringify([...platos, productoNuevo], null, 2), "utf-8")
        return res.redirect("/products/create")
    },
    edit: (req, res) => {
        const platoEncontrado = platos.find(row => row.id == req.params.id)
        if (platoEncontrado) return res.render('formEdit', { plato: platoEncontrado })
        else return res.send("ERROR 404 NOT FOUND")
    },
    editProcess: (req, res) => {
        const platoEncontrado = platos.find(row => row.id == req.params.id)
        platoEncontrado.nombre = req.body.name
        platoEncontrado.detalle = req.body.desc
        platoEncontrado.precio = req.body.price
        fs.writeFileSync(rutaArchivo, JSON.stringify(platos, null, 2), "utf-8") 
        return res.redirect("/")
    },
    
    deleteProcess: (req, res) => {
        const platoEncontrado = platos.find(row => row.id == req.params.id)
        platoEncontrado.borrado = true
        fs.writeFileSync(rutaArchivo, JSON.stringify(platos, null, 2), "utf-8") 
        return res.redirect("/")
    }
}