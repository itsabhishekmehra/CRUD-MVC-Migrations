exports.up = function (knex) {
    return knex.schema.createTable("likedislike", function (tablelikedislike) {
        tablelikedislike.increments("id").primary()
        tablelikedislike.integer("blog_id", 20).unsigned().references("blogs.id")
        tablelikedislike.integer("user_id", 20).unsigned().references("users.id").notNullable()
        tablelikedislike.boolean("likedislike", 20)
        tablelikedislike.timestamps(true, true)
    })

};

exports.down = function (knex) {
    return knex.schema.dropTable('likedislike')
};
