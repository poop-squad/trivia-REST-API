exports.seed = async knex => {
    await knex.raw('TRUNCATE TABLE questions RESTART IDENTITY CASCADE');
    await knex.raw('TRUNCATE TABLE answers RESTART IDENTITY CASCADE');
    await knex('questions').insert([
        {
            question_id: 'b213j',
            question_content: 'how many As in Angelo',
            submitter_name: 'angelo',
            category: 'general'
        },
        {
            question_id: 'a453z',
            question_content: 'opposite of up',
            submitter_name: 'batty',
            category: 'idiot'
        },
        {
            question_id: 'c476o',
            question_content: 'what year was the first superbowl',
            submitter_name: 'sportsfan98',
            category: 'sports'
        }
    ]);
    await knex('answers').insert([
        {
            question_id: 'b213j',
            answer_content: '1',
            submitter_name: 'angelo'
        },
        {
            question_id: 'a453z',
            answer_content: 'down',
            submitter_name: 'batty'
        },
        {
            question_id: 'c476o',
            answer_content: '1967',
            submitter_name: 'sportsfan98'
        },
    ]);
};