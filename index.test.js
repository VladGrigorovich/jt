const {PostgreSqlContainer} = require('testcontainers');
const {Pool} = require('pg');

describe("index.js", () => {
    let container;
    let pool;
    beforeAll(async () => {
        container = await new PostgreSqlContainer('postgres:13.10-alpine3.17').start();
        const uri = container.getConnectionUri();
        pool = new Pool({connectionString: uri})
    });

    afterAll(async () => {
        await pool.end();
        await container.stop()
    })

    it('SHould work', async () => {
        const result = await pool.query('SELECT * FROM pg_tables');
        console.log(result);
        expect(true).toBe(true);
    });
});