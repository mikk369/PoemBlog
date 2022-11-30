const User = require('./../models/userModel');

exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //regex for checking if email is valid
    const checkEmail = /\S+@\S+\.\S+/;
    // check if email is valid and password length atleast 8
    if (checkEmail.test(email) && password.length > 8) {
      let user = await User.findOne({ email });
      if (!user) {
        const createUser = new User({
          email: req.body.email,
          password: req.body.password,
        });
        await User.create(createUser);
        res.status(201).json({
          message: 'User Created',
          data: {
            user: createUser,
          },
        });
      } else {
        res.status(403).json({ error: 'User already exists' });
      }
    } else {
      res.status(406).send({ error: 'Email or password not acceptable' });
    }
  } catch (error) {
    res.status(500).send({ error: 'error' });
  }
};
