const test = (req, res) => {
    res.status(200).send({
        status: "success",
        message: "Peticion exitosa"
    })
}

module.exports = {
    test
}