/*Module exports are the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code*/

 module.exports =  {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'kansha',
    DB: 'event',
    dialect: 'mysql',
    pool: {
        max: 5, //max no of connections in pool
        min: 0,
        acquire: 30000, //max time in msec that poolwill try to get connectionbefore throwing error
        idle: 10000 //max time in msec that a connection can be idle before being released

    }
};
