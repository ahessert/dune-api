import { Client } from 'pg';

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

export const connection = client;