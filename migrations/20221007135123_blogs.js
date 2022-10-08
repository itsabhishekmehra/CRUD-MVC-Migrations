exports.up = function (knex) {
    return knex.schema.createTable("blogs", function (tableblog) {
        tableblog.increments("id").primary()
        tableblog.integer('user_id', 11).unsigned().references('users.id').notNullable();
        tableblog.string("title", 100).unique().notNullable();
        tableblog.text("description").notNullable()
        // tableblog.timestamps(true, true)
        tableblog.timestamp('created_at').defaultTo(knex.fn.now())
        tableblog.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('blogs')
};
