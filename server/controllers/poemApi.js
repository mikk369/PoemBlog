const Poem = require('./../models/poemModel');

exports.getAllPoems = async (req, res, next) => {
  try {
    const poems = await Poem.findOne();
    res.status(200).json({
      message: 'success',
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

exports.createPoem = async (req, res, next) => {
  try {
    const newPoem = await Poem.create(req.body);
    res.status(201).json({
      message: 'Poem created',
      data: {
        poem: newPoem,
      },
    });
  } catch (error) {
    res.status(411).json({ error: 'One or more required fields empty' });
  }
};
