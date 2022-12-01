const Poem = require('./../models/poemModel');
exports.getAllPoems = async (req, res, next) => {
  try {
    const poems = await Poem.find();
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

exports.getPoem = async (req, res, next) => {
  try {
    const poem = await Poem.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        poem,
      },
    });
  } catch (error) {
    res.status(404).json({
      error: 'Poem with given Id does not found',
    });
  }
};

exports.updatePoem = async (req, res, next) => {
  try {
    const poem = await Poem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        poem,
      },
    });
  } catch (error) {
    res.status(404).json({
      error: 'Poem with given Id not found',
    });
  }
};
