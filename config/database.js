module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cd839h9a6gds9o4tdb3g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_g3mx'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'DIK2FCgxiBp2v9n4DjQnHMS18t8teW6v'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
