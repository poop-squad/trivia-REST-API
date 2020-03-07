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
            question_id: 'e2698u',
            question_content: 'how many Bs in Angelo',
            submitter_name: 'not angelo',
            category: 'general'
        },
        {
            question_id: 'a453z',
            question_content: 'opposite of up',
            submitter_name: 'not batty',
            category: 'general'
        },
        {
            question_id: 'b290a',
            question_content: 'opposite of down',
            submitter_name: 'batty',
            category: 'general'
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
            question_id: 'e2698u',
            answer_content: '0',
            submitter_name: 'not angelo'
        },
        {
            question_id: 'a453z',
            answer_content: 'down',
            submitter_name: 'not batty'
        },
        {
            question_id: 'b290a',
            answer_content: 'up',
            submitter_name: 'batty'
        },
        {
            question_id: 'c476o',
            answer_content: '1967',
            submitter_name: 'sportsfan98'
        },
    ]);
};