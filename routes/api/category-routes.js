const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories & be sure to include its associated Products
  try {
    const getCategory = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    });
    res.status(200).json(getCategory);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value & be sure to include its associated Products
  try {
    const getCategorybyID = await Category.findByPk(req.params.id, {
      include: [{
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      }]
    });
    if (!getCategorybyID) {
      res.status(404).json({message: 'There is no category with that id'});
      return;
    } else {
      res.status(200).json(getCategorybyID);
    }      
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const createCategory = await Category.create(req.body); 
    res.status(200).json(createCategory);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id
        }
      },
    ); 
    res.status(200).json(updateCategory);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy(
      {
        where: {
          id: req.params.id
        }
      },
    ); 
    if (!deleteCategory) {
      res.status(404).json({message: 'There is no category with that id'});
      return;
    } else {
      res.status(200).json(deleteCategory);
    }      
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
