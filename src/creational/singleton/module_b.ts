import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'henrique b', age: 21 });
console.log(myDatabaseClassic);

myDatabaseClassic.add({ name: 'maria b', age: 18 });
myDatabaseClassic.add({ name: 'luiz b', age: 32 });
myDatabaseClassic.add({ name: 'fernando b', age: 42 });
myDatabaseClassic.show();
console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
