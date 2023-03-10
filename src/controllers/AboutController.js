module.exports = {
  async index(req, res) {
    try {
      res
        .status(200)
        .json({
          message:
            "This is my about route Nishimura...",
        });
    } catch (error) {
      return res
        .status(500)
        .json({ error: error, text: "Internal server error" });
    }
  },
};
