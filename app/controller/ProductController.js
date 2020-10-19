class ProductController {
  async index(req, res) {
    const data = [
      {
        name: "SAMSUNG A50S",
        price: 5000000,
        qty: 1,
      },
    ];

    return res.status(200).send({ data: data });
  }
}

module.exports = new ProductController();
