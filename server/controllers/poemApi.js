const Poem = require('./../models/poemModel');

exports.getAllPoems = async (req, res, next) => {
  try {
    const poems = await Poem.findOne();
    res.status(200).json({
      status: 'success',
      results: poems.length,
      data: {
        poems,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      error: 'poems not found',
    });
  }
};
