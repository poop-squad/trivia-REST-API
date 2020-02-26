exports.up = knex => {
    return knex.schema.createTable('questions', (table) => {
        table.increments('id')
        table.text('question_id').unique()
        table.text('question_content')
        table.text('submitter_name')
    }).createTable('answers', (table) => {
        table.increments('id')
        table.text('question_id').unique()
        table.text('answer_content')
        table.text('submitter_name')
    });
};

exports.down = knex => {
  return knex.schema.dropTable('questions').dropTable('answers');
};