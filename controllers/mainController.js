exports.mainPage = (req,res) => {
    res.render("index",{
        nombrePagina: "Skol solutions"
    });
}

exports.quienesSomos = (req,res) => {
    res.render("quienes-somos",{
        nombrePagina: "Skol solutions - quienes somos"
    });
}