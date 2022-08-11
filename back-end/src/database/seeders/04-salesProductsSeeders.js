module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales_products', [
      {
        sale_id: 1,
        product_id: 2,
        quantity: 10,
      },
      {
        sale_id: 2,
        product_id: 3,
        quantity: 20,
      },
      {
        sale_id: 2,
        product_id: 4,
        quantity: 18,
      },
      {
        sale_id: 3,
        product_id: 5,
        quantity: 100,
      },
      {
        sale_id: 4,
        product_id: 6,
        quantity: 27,
      },
      {
        sale_id: 4,
        product_id: 7,
        quantity: 150,
      },
      {
        sale_id: 4,
        product_id: 8,
        quantity: 200,
      },
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales_products', null, {});
  },
};
