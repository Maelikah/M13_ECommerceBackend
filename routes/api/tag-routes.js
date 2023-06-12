const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags & be sure to include its associated Product data
  try {
    const getTag = await Tag.findAll({
      attributes: ['id', 'tag_name'],
      include: [{ model: Product}]
    });
    res.status(200).json(getTag);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id` & be sure to include its associated Product data
  try {
    const getTagbyID = await Tag.findByPk(req.params.id, {
      attributes: ['id', 'tag_name'],
      include: [{ model: Product}]
    });
    if (!getTagbyID) {
      res.status(404).json({message: 'There is no tag with that id'});
      return;
    } else {
      res.status(200).json(getTagbyID);
    }      
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const createTag = await Tag.create(req.body); 
    res.status(200).json(createTag);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const currentTag = await Tag.findByPk(req.params.id);
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!currentTag) {
      res.status(404).json( { error: "No tag found with that ID." });
      return;
    }
    res.status(200).json(updateTag);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const currentTag = await Tag.findByPk(req.params.id);
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!currentTag) {
      res.status(404).json( { error: "No tag found with that ID." });
      return;
    }
    res.status(200).json(deleteTag);

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;


