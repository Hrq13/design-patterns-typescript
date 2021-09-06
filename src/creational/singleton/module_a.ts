import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'henrique', age: 21 });
myDatabaseClassic.add({ name: 'maria', age: 18 });
myDatabaseClassic.add({ name: 'luiz', age: 32 });
myDatabaseClassic.add({ name: 'fernando', age: 42 });

export { myDatabaseClassic };
