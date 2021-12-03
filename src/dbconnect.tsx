import { Client } from 'pg';

export class dbConnection {

    conn : Client;

    constructor () {
        const client = new Client({
            host: 'localhost',
            port: 5438,
            user: 'dev_read',
            password: 'dev',
            database: 'postgres'
        })

        client.connect(err => {
            if (err) {
            console.error('connection error', err.stack)
            } else {
            console.log('connected')
            }
        })
        
        this.conn = client
    }

    public getClient = () : Client =>  {
            return this.conn
    }
}
