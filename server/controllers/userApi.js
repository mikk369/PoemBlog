const User = require('./../models/userModel');

exports.getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    //send response
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      error: 'Users not found',
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      error: 'User with given Id does not exist',
    });
  }
};
