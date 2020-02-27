exports.up = knex => {
  return knex.schema.table('questions', table => {
    table.text('category')
  });
};

exports.down = knex => {
    return knex.schema.table('questions', table => {
        table.dropColumn('category')
      });
};
