module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 3,
        saller_id: 2,
        total_price: 75,
        delivery_address: 'Rua Irmãos Monteiro, Bairro Pedras, 851',
        delivery_number: '28123456789',
        sale_date: new Date(),
        status: 'pendente',
      },
      {
        id: 2,
        user_id: 3,
        saller_id: 2,
        total_price: 184.8,
        delivery_address: 'Rua Irmãos Monteiro, Bairro Pedras, 851',
        delivery_number: '28123456789',
        sale_date: new Date(),
        status: 'preparando',
      },
      {
        id: 3,
        user_id: 3,
        saller_id: 2,
        total_price: 219,
        delivery_address: 'Rua Irmãos Monteiro, Bairro Pedras, 851',
        delivery_number: '28123456789',
        sale_date: new Date(),
        status: 'entregue',
      },
      {
        id: 4,
        user_id: 3,
        saller_id: 2,
        total_price: 1427.73,
        delivery_address: 'Rua Irmãos Monteiro, Bairro Pedras, 851',
        delivery_number: '28123456789',
        sale_date: new Date(),
        status: 'pendente',
      },
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
