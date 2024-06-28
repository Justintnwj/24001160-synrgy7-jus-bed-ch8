const config = {
  DB_USERNAME: "postgres.qpbapqnqlbjtavgwkgsi",
  DB_PASSWORD: "binar-car-rental123",
  DB_HOST: "aws-0-ap-southeast-1.pooler.supabase.com",
  DB_NAME: "postgres",
};

module.exports = {
  development: {
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: `${config.DB_NAME}`,
    host: config.DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: `${config.DB_NAME}`,
    host: config.DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: `${config.DB_NAME}`,
    host: config.DB_HOST,
    dialect: "postgres",
  },
};
