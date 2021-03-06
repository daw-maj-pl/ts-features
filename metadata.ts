import 'reflect-metadata';

// const plane = {
//   color: 'red'
// };

// Reflect.defineMetadata('note', 'test', plane);
// Reflect.defineMetadata('height', 70, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);

// Reflect.defineMetadata('note', 'test2', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('Test3')
  fly(): void {
    console.log('vrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
