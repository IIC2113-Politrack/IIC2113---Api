'use strict';
module.exports = function (app) {
    var comments = require('../controllers/commentController');

    // comment Routes
    app
        .route('/comments')
        .get(comments.list_all_comments)
        .post(comments.create_a_comment);

    app
        .route('/comments/:commentId')
        .get(comments.read_a_comment)
        .put(comments.update_a_comment)
        .delete(comments.delete_a_comment);
};
