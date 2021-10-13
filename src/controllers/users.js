const Users = require("../../repository/users");
const { HttpCode } = require("../../config/constants");

const signup = async (req, res, next) => {
  const { email, password, subscription } = req.body;
  const user = await Users.findByEmail(email);
  if (user) {
    return res.status(HttpCode.CONFLICT).json({
      status: "error",
      code: HttpCode.CONFLICT,
      message: "Email in use",
    });
  }

  try {
    const newUser = await Users.create({ email, password, subscription });
    return res.status(HttpCode.CREATED).json({
      status: "success",
      code: HttpCode.CREATED,
      data: {
        id: newUser.id,
        email: newUser.email,
        password: newUser.password,
        subscription: newUser.subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {};

const logout = async (req, res, next) => {};

module.exports = {
  signup,
  login,
  logout,
};
