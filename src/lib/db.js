const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('Vantar DATABASE_URL í .env skrá');
  process.exit(1);
}

const pool = new Pool({
  connectionString,
});

pool.on('error', (err) => {
  console.error('Óvænt villa í tengingu við gagnagrunn', err);
  process.exit(-1);
});

async function query(q, values = []) {
  const client = await pool.connect();
  try {
    const result = await client.query(q, values);
    return result;
  } catch (e) {
    console.error('Villa í query', e);
    throw e;
  } finally {
    client.release();
  }
}

module.exports = {
  query,
};