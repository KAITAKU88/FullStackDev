# Objects and Object Constructors - Tài liệu tổng hợp

## Mục lục
1. [Giải mã từ khóa `this` trong JavaScript](#1-giải-mã-từ-khóa-this-trong-javascript)
2. [Thừa kế nguyên mẫu (Prototypal Inheritance)](#2-thừa-kế-nguyên-mẫu-prototypal-inheritance)
3. [Objects trong JavaScript](#3-objects-trong-javascript)
4. [Object Constructors](#4-object-constructors)
5. [Prototype và Constructor Functions](#5-prototype-và-constructor-functions)

---

## 1. Giải mã từ khóa `this` trong JavaScript

### 1.1. `this` là gì?

Nếu bạn đã làm việc với các ngôn ngữ lập trình khác như Java, C#, hay PHP, bạn có thể đã quen thuộc với từ khóa `this`. Trong những ngôn ngữ này, `this` thường đại diện cho phiên bản hiện tại (current instance) của một lớp (class) và chỉ có ý nghĩa trong phạm vi lớp đó.

Tuy nhiên, từ khóa `this` trong JavaScript hoạt động khác biệt. Trong JavaScript, `this` có thể được sử dụng trong ngữ cảnh toàn cục (global context) và ngữ cảnh hàm (function context), và hành vi của nó còn thay đổi giữa chế độ nghiêm ngặt (strict mode) và không nghiêm ngặt (non-strict mode).

**Tổng quát**, `this` tham chiếu đến **đối tượng mà hàm đang là một thuộc tính của nó**. Hay nói cách khác, `this` tham chiếu đến **đối tượng hiện tại đang gọi hàm** đó.

**Ví dụ cơ bản:**
```javascript
let counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};
console.log(counter.next()); // 1
console.log(counter.next()); // 2
console.log(counter.next()); // 3
```

**Ví dụ với nhiều đối tượng:**
```javascript
let calculator1 = {
  value: 0,
  add: function(num) {
    this.value += num;
    return this;
  },
  multiply: function(num) {
    this.value *= num;
    return this;
  }
};

let calculator2 = {
  value: 10,
  add: calculator1.add,      // Chia sẻ cùng hàm
  multiply: calculator1.multiply
};

console.log(calculator1.add(5).multiply(2).value); // 10
console.log(calculator2.add(5).multiply(2).value); // 30
```

### 1.2. `this` trong các ngữ cảnh khác nhau

Trong JavaScript, một hàm có thể được gọi theo nhiều cách khác nhau, và mỗi cách gọi sẽ định nghĩa ngữ cảnh riêng cho `this`.

- Gọi hàm thông thường (Function invocation)
- Gọi phương thức (Method invocation)
- Gọi hàm tạo (Constructor invocation)
- Gọi gián tiếp (Indirect invocation)
- Hàm mũi tên (Arrow functions)

#### 1.2.1. Ngữ cảnh toàn cục (Global Context)

Trong ngữ cảnh toàn cục, `this` tham chiếu đến **đối tượng toàn cục (global object)**. Trên trình duyệt web, đối tượng này là `window`. Trên Node.js, đó là đối tượng `global`.

**Ví dụ trong trình duyệt:**
```javascript
console.log(this === window); // true

this.globalVar = "I'm global!";
console.log(window.globalVar); // "I'm global!"

// Thậm chí khi tạo biến với var
var anotherGlobal = "Another global variable";
console.log(this.anotherGlobal); // "Another global variable"
```

**Ví dụ trong Node.js:**
```javascript
console.log(this === global); // true (trong Node.js REPL)
// Hoặc trong module Node.js, this sẽ là module.exports
```

#### 1.2.2. Gọi hàm thông thường (Simple Function Invocation)

Khi một hàm được gọi một cách đơn giản (không phải là phương thức của đối tượng hay hàm tạo):

**Chế độ không nghiêm ngặt (Non-strict mode):**
```javascript
function showThis() {
  console.log(this === window); // true (trong trình duyệt)
  console.log(this);            // Window object
}
showThis(); // Tương đương với window.showThis()

// Ví dụ thực tế
function greet(name) {
  this.message = `Hello, ${name}!`;
  console.log(this.message);
}
greet("Alice"); // "Hello, Alice!"
console.log(window.message); // "Hello, Alice!" - Đã tạo thuộc tính global!
```

**Chế độ nghiêm ngặt (Strict mode):**
```javascript
"use strict";
function showThis() {
  console.log(this === undefined); // true
  console.log(this);               // undefined
}
showThis();

// Ví dụ với lỗi
"use strict";
function causeError() {
  this.someProperty = "value"; // TypeError: Cannot set property of undefined
}
// causeError(); // Sẽ gây lỗi
```

**Hàm lồng nhau (Nested functions):**
```javascript
function outer() {
  console.log("Outer this:", this === window); // true
  
  function inner() {
    "use strict";
    console.log("Inner this:", this === undefined); // true
  }
  inner();
}
outer();
```

#### 1.2.3. Gọi phương thức (Method Invocation)

Khi bạn gọi một phương thức của một đối tượng, JavaScript sẽ đặt `this` thành **đối tượng sở hữu phương thức đó**.

**Ví dụ cơ bản:**
```javascript
let car = {
  brand: 'Honda',
  model: 'Civic',
  year: 2020,
  getBrand: function () {
    return this.brand;
  },
  getInfo: function() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

console.log(car.getBrand()); // "Honda"
console.log(car.getInfo());  // "2020 Honda Civic"
```

**Ví dụ với object phức tạp:**
```javascript
let user = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    getFullAddress: function() {
      // this ở đây là address object, không phải user object
      return `City: ${this.city}`;
    }
  },
  getUserInfo: function() {
    // this ở đây là user object
    return `${this.name} lives in ${this.address.city}`;
  }
};

console.log(user.address.getFullAddress()); // "City: New York"
console.log(user.getUserInfo());            // "John lives in New York"
```

**Vấn đề (Pitfall) - Mất context:**
```javascript
let car = {
  brand: 'Honda',
  getBrand: function () {
    return this.brand;
  }
}

let brand = car.getBrand; // Gán hàm vào biến
console.log(brand());     // undefined (trong non-strict) hoặc error (trong strict)

// Ví dụ thực tế với callback
setTimeout(car.getBrand, 1000); // Sẽ in undefined sau 1 giây

// Ví dụ với array methods
let cars = [
  { brand: 'Honda', getBrand: function() { return this.brand; } },
  { brand: 'Toyota', getBrand: function() { return this.brand; } }
];
let brands = cars.map(car => car.getBrand()); // ["Honda", "Toyota"]
let brandFunctions = cars.map(car => car.getBrand);
let results = brandFunctions.map(fn => fn()); // [undefined, undefined]
```

**Cách khắc phục với `bind()`:**
```javascript
let car = {
  brand: 'Honda',
  model: 'Civic',
  getBrand: function () {
    return this.brand;
  },
  getInfo: function() {
    return `${this.brand} ${this.model}`;
  }
}

// Sử dụng bind để giữ context
let boundGetBrand = car.getBrand.bind(car);
console.log(boundGetBrand()); // "Honda"

// Bind với đối tượng khác
let bike = { brand: 'Harley Davidson', model: 'Street 750' };
let bikeGetInfo = car.getInfo.bind(bike);
console.log(bikeGetInfo()); // "Harley Davidson Street 750"

// Bind với arguments
function greet(greeting, punctuation) {
  return `${greeting}, I'm ${this.name}${punctuation}`;
}
let person = { name: 'Alice' };
let boundGreet = greet.bind(person, 'Hello');
console.log(boundGreet('!')); // "Hello, I'm Alice!"
```

#### 1.2.4. Gọi hàm tạo (Constructor Invocation)

Khi bạn sử dụng từ khóa `new` để tạo một thể hiện (instance) của một đối tượng hàm, bạn đang sử dụng hàm đó như một hàm tạo (constructor).

**Ví dụ cơ bản:**
```javascript
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.getInfo = function() {
    return `${this.year} ${this.brand} ${this.model}`;
  };
}

let car1 = new Car('Honda', 'Civic', 2020);
let car2 = new Car('Toyota', 'Camry', 2021);

console.log(car1.getInfo()); // "2020 Honda Civic"
console.log(car2.getInfo()); // "2021 Toyota Camry"
console.log(car1.brand);     // "Honda"
console.log(car2.brand);     // "Toyota"
```

**Ví dụ với prototype:**
```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.mileage = 0;
}

Car.prototype.drive = function(miles) {
  this.mileage += miles;
  return `Drove ${miles} miles. Total: ${this.mileage}`;
};

Car.prototype.getInfo = function() {
  return `${this.brand} ${this.model} - ${this.mileage} miles`;
};

let car = new Car('BMW', 'X5');
console.log(car.drive(100));  // "Drove 100 miles. Total: 100"
console.log(car.drive(50));   // "Drove 50 miles. Total: 150"
console.log(car.getInfo());   // "BMW X5 - 150 miles"
```

**Vấn đề (Pitfall) - Quên từ khóa `new`:**
```javascript
function Car(brand) {
  this.brand = brand;
  // Không có return statement
}

// Gọi đúng cách
let car1 = new Car('BMW');
console.log(car1.brand); // "BMW"

// Gọi sai cách - quên 'new'
let car2 = Car('Toyota');
console.log(car2);        // undefined
console.log(car2.brand);  // TypeError: Cannot read property 'brand' of undefined
console.log(window.brand); // "Toyota" - Đã tạo biến global!
```

**Bảo vệ hàm tạo (Safeguarding constructors):**
```javascript
// Phương pháp 1: Sử dụng instanceof
function Car(brand) {
  if (!(this instanceof Car)) {
    return new Car(brand); // Tự động tạo với 'new'
    // Hoặc throw Error('Must use the new operator to call the function');
  }
  this.brand = brand;
}

// Phương pháp 2: Sử dụng new.target (ES6)
function CarES6(brand) {
  if (!new.target) {
    throw Error('Car must be called with new keyword');
  }
  this.brand = brand;
}

// Test
let car1 = Car('Honda');        // Hoạt động nhờ safeguard
let car2 = new Car('Toyota');   // Hoạt động bình thường
console.log(car1.brand, car2.brand); // "Honda Toyota"

// let car3 = CarES6('BMW');    // Error: Car must be called with new keyword
let car4 = new CarES6('BMW');   // Hoạt động bình thường
```

#### 1.2.5. Gọi gián tiếp (Indirect Invocation)

JavaScript cung cấp hai phương thức `call()` và `apply()` để gọi hàm với một giá trị `this` cụ thể.

**Sử dụng `call()`:**
```javascript
function introduce(greeting, punctuation) {
  return `${greeting}, I'm ${this.name} and I'm ${this.age} years old${punctuation}`;
}

let person1 = { name: 'Alice', age: 25 };
let person2 = { name: 'Bob', age: 30 };

console.log(introduce.call(person1, 'Hello', '!'));     // "Hello, I'm Alice and I'm 25 years old!"
console.log(introduce.call(person2, 'Hi there', '.'));  // "Hi there, I'm Bob and I'm 30 years old."

// Ví dụ với method borrowing
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

// "Mượn" method push từ numbers1 để dùng cho numbers2
Array.prototype.push.call(numbers2, 7, 8, 9);
console.log(numbers2); // [4, 5, 6, 7, 8, 9]
```

**Sử dụng `apply()`:**
```javascript
function introduce(greeting, punctuation) {
  return `${greeting}, I'm ${this.name} and I'm ${this.age} years old${punctuation}`;
}

let person = { name: 'Charlie', age: 35 };
let args = ['Greetings', '!!!'];

console.log(introduce.apply(person, args)); // "Greetings, I'm Charlie and I'm 35 years old!!!"

// Ví dụ thực tế: Tìm max trong array
let numbers = [5, 10, 2, 8, 1];
let max = Math.max.apply(null, numbers); // Tương đương Math.max(5, 10, 2, 8, 1)
console.log(max); // 10

// Với ES6 spread operator (cách hiện đại)
let maxES6 = Math.max(...numbers);
console.log(maxES6); // 10
```

**So sánh `call()`, `apply()`, và `bind()`:**
```javascript
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

let person = { name: 'David' };

// call: Gọi ngay lập tức với arguments riêng lẻ
let result1 = greet.call(person, 'Hello', '!');
console.log(result1); // "Hello, David!"

// apply: Gọi ngay lập tức với arguments trong array
let result2 = greet.apply(person, ['Hi', '.']);
console.log(result2); // "Hi, David."

// bind: Tạo function mới, không gọi ngay
let boundGreet = greet.bind(person, 'Hey');
let result3 = boundGreet('!!!');
console.log(result3); // "Hey, David!!!"
```

#### 1.2.6. Hàm mũi tên (Arrow Functions)

ES6 đã giới thiệu hàm mũi tên (arrow function). Trong hàm mũi tên, JavaScript đặt `this` **theo ngữ cảnh từ vựng (lexically)**.

**Ví dụ cơ bản:**
```javascript
// Global context
let getThis = () => this;
console.log(getThis() === window); // true (trong browser)

// So sánh với function thường
function normalGetThis() {
  return this;
}
console.log(normalGetThis() === window); // true (non-strict mode)
```

**Ví dụ trong object method:**
```javascript
let user = {
  name: 'Alice',
  
  // Regular function - this là user object
  regularMethod: function() {
    console.log('Regular:', this.name); // "Alice"
    
    // Arrow function bên trong - thừa kế this từ regularMethod
    let innerArrow = () => {
      console.log('Inner arrow:', this.name); // "Alice"
    };
    innerArrow();
    
    // Regular function bên trong - this là window (non-strict) hoặc undefined (strict)
    function innerRegular() {
      console.log('Inner regular:', this.name); // undefined hoặc error
    }
    innerRegular();
  },
  
  // Arrow function làm method - this là window/global
  arrowMethod: () => {
    console.log('Arrow method:', this.name); // undefined (this là window)
  }
};

user.regularMethod();
// Output:
// Regular: Alice
// Inner arrow: Alice
// Inner regular: undefined

user.arrowMethod();
// Output:
// Arrow method: undefined
```

**Vấn đề (Pitfall) với constructor:**
```javascript
// KHÔNG thể sử dụng arrow function làm constructor
let ArrowCar = (brand) => {
  this.brand = brand;
};

// let car = new ArrowCar('Honda'); // TypeError: ArrowCar is not a constructor
```

**Ví dụ thực tế - Event handlers:**
```javascript
class Button {
  constructor(element) {
    this.element = element;
    this.clickCount = 0;
    
    // Sử dụng arrow function để giữ nguyên this context
    this.element.addEventListener('click', () => {
      this.clickCount++;
      console.log(`Button clicked ${this.clickCount} times`);
    });
    
    // So sánh với regular function (sẽ có vấn đề)
    // this.element.addEventListener('click', function() {
    //   this.clickCount++; // this ở đây là element, không phải Button instance
    //   console.log(`Button clicked ${this.clickCount} times`); // NaN times
    // });
  }
}

// Sử dụng (trong HTML có <button id="myButton">Click me</button>)
// let button = new Button(document.getElementById('myButton'));
```

**Ví dụ với array methods:**
```javascript
class NumberProcessor {
  constructor(numbers) {
    this.numbers = numbers;
    this.multiplier = 2;
  }
  
  // Sử dụng arrow function trong map
  doubleNumbers() {
    return this.numbers.map(num => num * this.multiplier);
  }
  
  // Nếu sử dụng regular function
  doubleNumbersWrong() {
    return this.numbers.map(function(num) {
      return num * this.multiplier; // this.multiplier là undefined
    });
  }
  
  // Cách khắc phục cho regular function
  doubleNumbersFixed() {
    return this.numbers.map(function(num) {
      return num * this.multiplier;
    }.bind(this));
  }
}

let processor = new NumberProcessor([1, 2, 3, 4]);
console.log(processor.doubleNumbers());      // [2, 4, 6, 8]
console.log(processor.doubleNumbersWrong()); // [NaN, NaN, NaN, NaN]
console.log(processor.doubleNumbersFixed()); // [2, 4, 6, 8]
```

---

## 2. Thừa kế nguyên mẫu (Prototypal Inheritance)

### 2.1. Khái niệm cơ bản về Prototype

JavaScript là một **ngôn ngữ dựa trên nguyên mẫu (prototype-based language)**. Điều này có nghĩa là các thuộc tính và phương thức của đối tượng có thể được chia sẻ thông qua các đối tượng tổng quát có khả năng được sao chép và mở rộng.

**Ví dụ cơ bản về prototype chain:**
```javascript
let animal = {
  type: 'Animal',
  speak: function() {
    console.log('Some generic animal sound');
  }
};

let dog = {
  name: 'Buddy',
  breed: 'Golden Retriever'
};

// Thiết lập prototype chain
Object.setPrototypeOf(dog, animal);

console.log(dog.name);    // "Buddy" (thuộc tính riêng)
console.log(dog.type);    // "Animal" (thừa kế từ animal)
dog.speak();              // "Some generic animal sound"

// Kiểm tra prototype chain
console.log(Object.getPrototypeOf(dog) === animal); // true
```

**Ví dụ với prototype chain dài hơn:**
```javascript
let livingThing = {
  alive: true,
  breathe: function() {
    console.log('Breathing...');
  }
};

let animal = {
  type: 'Animal',
  move: function() {
    console.log('Moving...');
  }
};

let mammal = {
  warmBlooded: true,
  giveBirth: function() {
    console.log('Giving birth to live young');
  }
};

let dog = {
  name: 'Rex',
  breed: 'German Shepherd',
  bark: function() {
    console.log('Woof!');
  }
};

// Tạo prototype chain: dog -> mammal -> animal -> livingThing
Object.setPrototypeOf(mammal, animal);
Object.setPrototypeOf(animal, livingThing);
Object.setPrototypeOf(dog, mammal);

// Test prototype chain
console.log(dog.name);        // "Rex" (own property)
console.log(dog.warmBlooded); // true (from mammal)
console.log(dog.type);        // "Animal" (from animal)
console.log(dog.alive);       // true (from livingThing)

dog.bark();     // "Woof!"
dog.giveBirth(); // "Giving birth to live young"
dog.move();     // "Moving..."
dog.breathe();  // "Breathing..."
```

### 2.2. `this` và thừa kế nguyên mẫu

**`this` không bị ảnh hưởng bởi các nguyên mẫu**. Bất kể phương thức được tìm thấy ở đâu (trong đối tượng hay nguyên mẫu của nó), **trong một lời gọi phương thức, `this` luôn là đối tượng đứng trước dấu chấm**.

**Ví dụ cơ bản:**
```javascript
let animal = {
  name: 'Generic Animal',
  energy: 100,
  eat: function(food) {
    console.log(`${this.name} is eating ${food}`);
    this.energy += 10;
    console.log(`Energy level: ${this.energy}`);
  },
  sleep: function() {
    this.isSleeping = true;
    console.log(`${this.name} is sleeping`);
  }
};

let rabbit = {
  name: "White Rabbit",
  energy: 80
};

let cat = {
  name: "Fluffy Cat",
  energy: 90
};

// Thiết lập prototype
Object.setPrototypeOf(rabbit, animal);
Object.setPrototypeOf(cat, animal);

// Test - this sẽ là object gọi method
rabbit.eat('carrots');
// Output: "White Rabbit is eating carrots"
//         "Energy level: 90"

cat.eat('fish');
// Output: "Fluffy Cat is eating fish"
//         "Energy level: 100"

rabbit.sleep();
console.log(rabbit.isSleeping); // true
console.log(cat.isSleeping);    // undefined - cat không có thuộc tính này
console.log(animal.isSleeping); // undefined - animal cũng không có
```

**Ví dụ phức tạp hơn:**
```javascript
let vehicle = {
  speed: 0,
  accelerate: function(amount) {
    this.speed += amount;
    console.log(`${this.type || 'Vehicle'} accelerated to ${this.speed} mph`);
  },
  brake: function(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`${this.type || 'Vehicle'} slowed down to ${this.speed} mph`);
  }
};

let car = {
  type: 'Car',
  brand: 'Toyota',
  model: 'Camry'
};

let motorcycle = {
  type: 'Motorcycle',
  brand: 'Harley Davidson',
  model: 'Street 750'
};

Object.setPrototypeOf(car, vehicle);
Object.setPrototypeOf(motorcycle, vehicle);

car.accelerate(30);        // "Car accelerated to 30 mph"
motorcycle.accelerate(50); // "Motorcycle accelerated to 50 mph"

console.log(car.speed);        // 30
console.log(motorcycle.speed); // 50
console.log(vehicle.speed);    // 0 - không thay đổi

car.brake(10);             // "Car slowed down to 20 mph"
motorcycle.brake(20);      // "Motorcycle slowed down to 30 mph"
```

**Vấn đề (Pitfall) với thuộc tính trạng thái được chia sẻ:**
```javascript
let hamster = {
  stomach: [], // Mảng được chia sẻ - nguy hiểm!
  eat: function(food) {
    this.stomach.push(food); // Thêm vào mảng được chia sẻ
    console.log(`${this.name} ate ${food}. Stomach: [${this.stomach.join(', ')}]`);
  }
};

let speedy = {
  name: 'Speedy'
};

let lazy = {
  name: 'Lazy'
};

Object.setPrototypeOf(speedy, hamster);
Object.setPrototypeOf(lazy, hamster);

speedy.eat("apple");
// Output: "Speedy ate apple. Stomach: [apple]"

lazy.eat("banana");
// Output: "Lazy ate banana. Stomach: [apple, banana]" - Vấn đề!

console.log(speedy.stomach); // ["apple", "banana"] - Cả hai cùng chia sẻ
console.log(lazy.stomach);   // ["apple", "banana"] - cùng một mảng
```

**Cách khắc phục vấn đề chia sẻ state:**
```javascript
// Cách 1: Gán trực tiếp vào this
let hamster = {
  stomach: [],
  eat: function(food) {
    // Đảm bảo mỗi hamster có stomach riêng
    if (!this.hasOwnProperty('stomach')) {
      this.stomach = [];
    }
    this.stomach.push(food);
    console.log(`${this.name} ate ${food}. Stomach: [${this.stomach.join(', ')}]`);
  }
};

// Cách 2: Khởi tạo trong constructor
function Hamster(name) {
  this.name = name;
  this.stomach = []; // Mỗi instance có stomach riêng
}

Hamster.prototype.eat = function(food) {
  this.stomach.push(food);
  console.log(`${this.name} ate ${food}. Stomach: [${this.stomach.join(', ')}]`);
};

let speedy2 = new Hamster('Speedy');
let lazy2 = new Hamster('Lazy');

speedy2.eat("apple");  // "Speedy ate apple. Stomach: [apple]"
lazy2.eat("banana");   // "Lazy ate banana. Stomach: [banana]"

console.log(speedy2.stomach); // ["apple"]
console.log(lazy2.stomach);   // ["banana"] - Riêng biệt!
```
### 3. Hoạt động ghi/xóa và vòng lặp `for...in`

#### Hoạt động ghi/xóa (Write/delete operations)

Các hoạt động ghi hoặc xóa thuộc tính **làm việc trực tiếp với đối tượng**, chúng không sử dụng nguyên mẫu (trừ khi đó là một thuộc tính accessor (accessor property) với một hàm setter).

**Ví dụ về hoạt động ghi:**
```javascript
let animal = { eats: true };
let rabbit = { jumps: true, __proto__: animal };

// Ghi thuộc tính mới - chỉ tác động đến đối tượng rabbit
rabbit.runs = true;
console.log(rabbit.runs); // true
console.log(animal.runs); // undefined

// Ghi đè thuộc tính từ prototype
rabbit.eats = false; // Tạo thuộc tính riêng trên rabbit
console.log(rabbit.eats); // false (thuộc tính riêng)
console.log(animal.eats); // true (prototype không bị ảnh hưởng)
```

**Ví dụ về hoạt động xóa:**
```javascript
let animal = { eats: true, sleeps: true };
let rabbit = { jumps: true, eats: false, __proto__: animal };

console.log(rabbit.eats); // false (thuộc tính riêng)

// Xóa thuộc tính riêng
delete rabbit.eats;
console.log(rabbit.eats); // true (lấy từ prototype)

// Không thể xóa thuộc tính từ prototype bằng cách này
delete rabbit.sleeps; // Không có tác dụng
console.log(rabbit.sleeps); // true (vẫn có từ prototype)
```

#### Vòng lặp `for...in`

Vòng lặp `for..in` sẽ lặp qua cả **các thuộc tính riêng (own properties) và các thuộc tính được thừa kế (inherited properties)**.

**Ví dụ cơ bản:**
```javascript
let animal = { eats: true };
let rabbit = { jumps: true, __proto__: animal };

for (let prop in rabbit) {
  console.log(prop); // jumps, then eats
}
```

**Ví dụ phân biệt thuộc tính riêng và thừa kế:**
```javascript
let animal = { 
  eats: true, 
  sleeps: true,
  breathes: true 
};

let rabbit = { 
  jumps: true, 
  runs: true,
  __proto__: animal 
};

console.log("=== Tất cả thuộc tính ===");
for (let prop in rabbit) {
  console.log(prop); // jumps, runs, eats, sleeps, breathes
}

console.log("\n=== Phân loại thuộc tính ===");
for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    console.log(`Thuộc tính riêng: ${prop} = ${rabbit[prop]}`);
  } else {
    console.log(`Thuộc tính thừa kế: ${prop} = ${rabbit[prop]}`);
  }
}
```

**Ví dụ thực tế với object phức tạp:**
```javascript
function Vehicle(brand) {
  this.brand = brand;
  this.engine = true;
}
Vehicle.prototype.start = function() {
  return `${this.brand} is starting...`;
};

function Car(brand, doors) {
  Vehicle.call(this, brand);
  this.doors = doors;
  this.type = 'car';
}
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.prototype.honk = function() {
  return 'Beep beep!';
};

let myCar = new Car('Toyota', 4);

console.log("=== Duyệt tất cả thuộc tính ===");
for (let prop in myCar) {
  let isOwn = myCar.hasOwnProperty(prop);
  let value = typeof myCar[prop] === 'function' ? '[Function]' : myCar[prop];
  console.log(`${isOwn ? 'Own' : 'Inherited'}: ${prop} = ${value}`);
}
```

**Lưu ý về `Object.prototype`:**
```javascript
// Các thuộc tính của Object.prototype thường không xuất hiện trong for..in 
// vì chúng có cờ enumerable:false
let obj = { name: 'test' };

for (let prop in obj) {
  console.log(prop); // Chỉ in: name
  // Không in: hasOwnProperty, toString, valueOf, etc.
}

// Kiểm tra thuộc tính enumerable
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'hasOwnProperty'));
// { enumerable: false, ... }
```

#### Các phương thức lấy khóa/giá trị khác

Hầu hết các phương thức lấy khóa/giá trị khác như `Object.keys()`, `Object.values()` chỉ hoạt động trên chính đối tượng, bỏ qua các thuộc tính thừa kế.

**Ví dụ so sánh các phương thức:**
```javascript
let animal = { 
  eats: true, 
  sleeps: true 
};

let rabbit = { 
  jumps: true, 
  runs: false,
  __proto__: animal 
};

console.log("=== for...in (bao gồm thừa kế) ===");
for (let prop in rabbit) {
  console.log(prop);
}
// Output: jumps, runs, eats, sleeps

console.log("\n=== Object.keys() (chỉ thuộc tính riêng) ===");
console.log(Object.keys(rabbit));
// Output: ['jumps', 'runs']

console.log("\n=== Object.values() (chỉ giá trị thuộc tính riêng) ===");
console.log(Object.values(rabbit));
// Output: [true, false]

console.log("\n=== Object.entries() (chỉ cặp key-value thuộc tính riêng) ===");
console.log(Object.entries(rabbit));
// Output: [['jumps', true], ['runs', false]]

console.log("\n=== Object.getOwnPropertyNames() ===");
console.log(Object.getOwnPropertyNames(rabbit));
// Output: ['jumps', 'runs']
```

### 4. Hàm tạo (Constructor Functions) và thừa kế nguyên mẫu

**Hàm tạo** là các hàm được sử dụng để xây dựng các đối tượng mới. Toán tử `new` được sử dụng để tạo các thể hiện mới dựa trên hàm tạo. Theo quy ước trong JavaScript, chúng ta thường viết hoa chữ cái đầu tiên của tên hàm tạo.

#### Ví dụ cơ bản về hàm tạo

```javascript
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player1 = new Player('Alice', 'X');
const player2 = new Player('Bob', 'O');

console.log(player1.name); // 'Alice'
console.log(player2.marker); // 'O'
```

**Ví dụ mở rộng với validation:**
```javascript
function User(name, email, age) {
  // Validation
  if (!name || !email) {
    throw new Error('Name and email are required');
  }
  
  this.name = name;
  this.email = email;
  this.age = age || 0;
  this.createdAt = new Date();
  this.isActive = true;
}

// Tạo các đối tượng
try {
  let user1 = new User('John Doe', 'john@example.com', 25);
  let user2 = new User('Jane Smith', 'jane@example.com'); // age sẽ là 0
  
  console.log(user1);
  console.log(user2);
} catch (error) {
  console.error(error.message);
}
```

#### Thuộc tính trong hàm tạo vs Phương thức trên prototype

**Các thuộc tính được định nghĩa với `this.`** bên trong hàm tạo là các thuộc tính **riêng của mỗi thể hiện**.

**Ví dụ so sánh cách định nghĩa phương thức:**

```javascript
// ❌ Cách KHÔNG nên - định nghĩa trong constructor
function PlayerBad(name, marker) {
  this.name = name;
  this.marker = marker;
  
  // Mỗi instance sẽ có một bản copy riêng của function này
  this.sayHello = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
  this.getInfo = function() {
    return `Player: ${this.name}, Marker: ${this.marker}`;
  };
}

// ✅ Cách NÊN - định nghĩa trên prototype
function PlayerGood(name, marker) {
  this.name = name;
  this.marker = marker;
}

// Tất cả instances chia sẻ cùng một function
PlayerGood.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

PlayerGood.prototype.getInfo = function() {
  return `Player: ${this.name}, Marker: ${this.marker}`;
};

// So sánh bộ nhớ sử dụng
let badPlayers = [];
let goodPlayers = [];

for (let i = 0; i < 1000; i++) {
  badPlayers.push(new PlayerBad(`Player${i}`, 'X'));
  goodPlayers.push(new PlayerGood(`Player${i}`, 'X'));
}

// badPlayers sử dụng nhiều bộ nhớ hơn vì mỗi object có copy riêng của methods
console.log(badPlayers[0].sayHello === badPlayers[1].sayHello); // false
console.log(goodPlayers[0].sayHello === goodPlayers[1].sayHello); // true
```

**Ví dụ thực tế với nhiều phương thức:**
```javascript
function BankAccount(accountNumber, initialBalance) {
  this.accountNumber = accountNumber;
  this.balance = initialBalance || 0;
  this.transactions = [];
}

BankAccount.prototype.deposit = function(amount) {
  if (amount <= 0) {
    throw new Error('Deposit amount must be positive');
  }
  this.balance += amount;
  this.transactions.push({
    type: 'deposit',
    amount: amount,
    date: new Date(),
    balance: this.balance
  });
  return this.balance;
};

BankAccount.prototype.withdraw = function(amount) {
  if (amount <= 0) {
    throw new Error('Withdrawal amount must be positive');
  }
  if (amount > this.balance) {
    throw new Error('Insufficient funds');
  }
  this.balance -= amount;
  this.transactions.push({
    type: 'withdrawal',
    amount: amount,
    date: new Date(),
    balance: this.balance
  });
  return this.balance;
};

BankAccount.prototype.getStatement = function() {
  console.log(`Account: ${this.accountNumber}`);
  console.log(`Current Balance: $${this.balance}`);
  console.log('Recent Transactions:');
  this.transactions.forEach(transaction => {
    console.log(`${transaction.type}: $${transaction.amount} (Balance: $${transaction.balance})`);
  });
};

// Sử dụng
let account = new BankAccount('12345', 1000);
account.deposit(500);
account.withdraw(200);
account.getStatement();
```

#### Liên kết các nguyên mẫu để thừa kế (Linking Prototypes for Inheritance)

**Phương pháp được khuyến nghị: `Object.setPrototypeOf()`**

```javascript
// Lớp cha
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function() {
  return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
};

Person.prototype.walk = function() {
  return `${this.name} is walking.`;
};

// Lớp con
function Student(name, age, school, grade) {
  // Gọi constructor của lớp cha
  Person.call(this, name, age);
  this.school = school;
  this.grade = grade;
}

// Thiết lập thừa kế TRƯỚC KHI thêm methods vào Student.prototype
Object.setPrototypeOf(Student.prototype, Person.prototype);

Student.prototype.study = function() {
  return `${this.name} is studying at ${this.school}.`;
};

Student.prototype.introduce = function() {
  // Có thể gọi method của lớp cha
  let personIntro = Person.prototype.introduce.call(this);
  return `${personIntro} I'm a grade ${this.grade} student at ${this.school}.`;
};

// Sử dụng
let student1 = new Student('Alice', 16, 'High School ABC', 10);
console.log(student1.introduce());
console.log(student1.walk()); // Thừa kế từ Person
console.log(student1.study()); // Method riêng của Student

// Kiểm tra inheritance
console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true
console.log(student1 instanceof Object);  // true
```

**Ví dụ phức tạp hơn với nhiều lớp thừa kế:**
```javascript
// Lớp gốc
function Animal(name) {
  this.name = name;
  this.energy = 100;
}

Animal.prototype.eat = function() {
  this.energy += 10;
  return `${this.name} is eating. Energy: ${this.energy}`;
};

Animal.prototype.sleep = function() {
  this.energy += 20;
  return `${this.name} is sleeping. Energy: ${this.energy}`;
};

// Lớp trung gian
function Mammal(name, furColor) {
  Animal.call(this, name);
  this.furColor = furColor;
  this.bodyTemperature = 37; // warm-blooded
}

Object.setPrototypeOf(Mammal.prototype, Animal.prototype);

Mammal.prototype.groom = function() {
  return `${this.name} is grooming its ${this.furColor} fur.`;
};

// Lớp con cuối cùng
function Dog(name, furColor, breed) {
  Mammal.call(this, name, furColor);
  this.breed = breed;
  this.loyalty = 100;
}

Object.setPrototypeOf(Dog.prototype, Mammal.prototype);

Dog.prototype.bark = function() {
  this.energy -= 5;
  return `${this.name} barks! Woof! Energy: ${this.energy}`;
};

Dog.prototype.wagTail = function() {
  return `${this.name} wags tail happily!`;
};

// Sử dụng
let myDog = new Dog('Buddy', 'golden', 'Golden Retriever');

console.log(myDog.eat());    // Từ Animal
console.log(myDog.groom());  // Từ Mammal
console.log(myDog.bark());   // Từ Dog
console.log(myDog.wagTail()); // Từ Dog

// Kiểm tra chuỗi thừa kế
console.log(myDog instanceof Dog);     // true
console.log(myDog instanceof Mammal); // true
console.log(myDog instanceof Animal); // true
```

#### Các phương pháp không được khuyến nghị

**1. `ChildConstructor.prototype = ParentConstructor.prototype` - ❌ KHÔNG NÊN:**
```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return `${this.name} makes a sound`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// ❌ SAII: Cả hai prototype sẽ tham chiếu cùng một object
Dog.prototype = Animal.prototype;

Dog.prototype.bark = function() {
  return `${this.name} barks!`;
};

// Vấn đề: Animal cũng có method bark!
let animal = new Animal('Generic');
console.log(animal.bark()); // "Generic barks!" - Không mong muốn!
```

**2. `Object.create()` - Cần cẩn thận:**
```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return `${this.name} makes a sound`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Vấn đề với Object.create()
console.log(Dog.prototype.constructor); // [Function: Dog] - OK

Dog.prototype = Object.create(Animal.prototype);

console.log(Dog.prototype.constructor); // [Function: Animal] - SAI!

// Phải sửa lại constructor
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  return `${this.name} barks!`;
};

// Các instance tạo TRƯỚC khi thay đổi prototype sẽ không có method mới
let earlyDog = new Dog('Early', 'Pug'); // Tạo trước khi có bark method
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function() { return 'Woof!'; };

let lateDog = new Dog('Late', 'Pug');   // Tạo sau khi có bark method

console.log(typeof earlyDog.bark); // undefined
console.log(typeof lateDog.bark);  // function
```

#### `Object.create()` method

`Object.create()` tạo một đối tượng mới với nguyên mẫu đã cho.

**Cú pháp:** `Object.create(proto, [propertiesObject])`

**Ví dụ cơ bản:**
```javascript
// Tạo object với prototype cụ thể
let animal = {
  type: 'animal',
  speak: function() {
    return `${this.name} makes a sound`;
  }
};

let dog = Object.create(animal);
dog.name = 'Buddy';
dog.breed = 'Golden Retriever';

console.log(dog.speak()); // "Buddy makes a sound"
console.log(dog.type);    // "animal" (từ prototype)
```

**Ví dụ với properties descriptor:**
```javascript
let animal = {
  speak: function() {
    return `${this.name} makes a sound`;
  }
};

let dog = Object.create(animal, {
  name: {
    value: 'Buddy',
    writable: true,
    enumerable: true,
    configurable: true
  },
  breed: {
    value: 'Golden Retriever',
    writable: false,    // Không thể thay đổi
    enumerable: true,
    configurable: false
  },
  age: {
    get: function() {
      return this._age;
    },
    set: function(value) {
      if (value < 0) throw new Error('Age cannot be negative');
      this._age = value;
    },
    enumerable: true,
    configurable: true
  }
});

dog.age = 3;
console.log(dog.age); // 3

try {
  dog.age = -1; // Error: Age cannot be negative
} catch (e) {
  console.error(e.message);
}

dog.breed = 'Poodle'; // Không có tác dụng vì writable: false
console.log(dog.breed); // "Golden Retriever"
```

**Tạo object không có prototype (null prototype):**
```javascript
// Object bình thường có Object.prototype
let normalObj = {};
console.log(normalObj.toString); // [Function: toString]

// Object không có prototype
let nullPrototypeObj = Object.create(null);
console.log(nullPrototypeObj.toString); // undefined

// Hữu ích cho việc tạo "clean" objects làm dictionary/map
let dictionary = Object.create(null);
dictionary.key1 = 'value1';
dictionary.key2 = 'value2';

// Không có methods không mong muốn từ Object.prototype
for (let key in dictionary) {
  console.log(key); // Chỉ in key1, key2
}
```

**Sử dụng trong pattern inheritance:**
```javascript
function Shape(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  return `Moved to (${this.x}, ${this.y})`;
};

Shape.prototype.area = function() {
  return 0; // Abstract method
};

function Rectangle(x, y, width, height) {
  Shape.call(this, x, y);
  this.width = width;
  this.height = height;
}

// Sử dụng Object.create để setup inheritance
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

Rectangle.prototype.draw = function() {
  return `Drawing rectangle at (${this.x}, ${this.y}) with area ${this.area()}`;
};

let rect = new Rectangle(10, 20, 5, 8);
console.log(rect.move(5, 5));  // "Moved to (15, 25)"
console.log(rect.draw());      // "Drawing rectangle at (15, 25) with area 40"
```

### 5. So sánh: Định nghĩa phương thức trong hàm tạo vs. trên prototype

#### Định nghĩa phương thức trong hàm tạo

**Ưu điểm: Truy cập biến "private"**
```javascript
function Counter(initialValue) {
  let count = initialValue || 0; // Biến "private"
  let history = [];              // Biến "private"
  
  // Methods có thể truy cập biến private thông qua closure
  this.increment = function() {
    count++;
    history.push({ action: 'increment', value: count, timestamp: new Date() });
    return count;
  };
  
  this.decrement = function() {
    count--;
    history.push({ action: 'decrement', value: count, timestamp: new Date() });
    return count;
  };
  
  this.getValue = function() {
    return count;
  };
  
  this.getHistory = function() {
    return [...history]; // Return copy để bảo vệ dữ liệu
  };
  
  this.reset = function() {
    count = 0;
    history.push({ action: 'reset', value: count, timestamp: new Date() });
    return count;
  };
}

let counter1 = new Counter(10);
let counter2 = new Counter(5);

console.log(counter1.increment()); // 11
console.log(counter1.increment()); // 12
console.log(counter2.decrement()); // 4

// Không thể truy cập trực tiếp biến private
console.log(counter1.count); // undefined
console.log(counter1.getValue()); // 12

console.log(counter1.getHistory());
// Các object methods khác nhau
console.log(counter1.increment === counter2.increment); // false
```

**Nhược điểm: Tiêu tốn bộ nhớ**
```javascript
function User(name) {
  this.name = name;
  
  // Mỗi instance có một copy riêng của function này
  this.greet = function() {
    return `Hello, I'm ${this.name}`;
  };
  
  this.updateName = function(newName) {
    this.name = newName;
  };
}

// Tạo nhiều users
let users = [];
for (let i = 0; i < 1000; i++) {
  users.push(new User(`User${i}`));
}

// Mỗi user có methods riêng biệt
console.log(users[0].greet === users[1].greet); // false
// => 1000 copies của greet function, 1000 copies của updateName function
```

#### Định nghĩa phương thức trên prototype

**Ưu điểm: Tiết kiệm bộ nhớ và linh hoạt**
```javascript
function User(name, email) {
  this.name = name;
  this.email = email;
  this.loginCount = 0;
}

// Tất cả instances chia sẻ cùng methods
User.prototype.greet = function() {
  return `Hello, I'm ${this.name}`;
};

User.prototype.login = function() {
  this.loginCount++;
  return `${this.name} logged in. Total logins: ${this.loginCount}`;
};

User.prototype.updateEmail = function(newEmail) {
  let oldEmail = this.email;
  this.email = newEmail;
  return `Email updated from ${oldEmail} to ${newEmail}`;
};

// Có thể thay đổi methods sau khi tạo objects
User.prototype.getInfo = function() {
  return {
    name: this.name,
    email: this.email,
    loginCount: this.loginCount
  };
};

let users = [];
for (let i = 0; i < 1000; i++) {
  users.push(new User(`User${i}`, `user${i}@example.com`));
}

// Tất cả users chia sẻ cùng methods
console.log(users[0].greet === users[1].greet); // true

// Có thể thay đổi method cho tất cả instances
User.prototype.greet = function() {
  return `Hi there! I'm ${this.name} (${this.email})`;
};

console.log(users[0].greet()); // Sử dụng method mới
console.log(users[500].greet()); // Tất cả đều dùng method mới
```

**Ví dụ về dynamic method modification:**
```javascript
function Calculator() {
  this.result = 0;
}

Calculator.prototype.add = function(num) {
  this.result += num;
  return this;
};

Calculator.prototype.multiply = function(num) {
  this.result *= num;
  return this;
};

Calculator.prototype.getValue = function() {
  return this.result;
};

let calc1 = new Calculator();
let calc2 = new Calculator();

console.log(calc1.add(5).multiply(2).getValue()); // 10

// Thêm method mới cho tất cả instances
Calculator.prototype.subtract = function(num) {
  this.result -= num;
  return this;
};

Calculator.prototype.divide = function(num) {
  if (num === 0) throw new Error('Cannot divide by zero');
  this.result /= num;
  return this;
};

// Cả calc1 và calc2 đều có methods mới
console.log(calc2.add(20).subtract(5).divide(3).getValue()); // 5

// Thay đổi existing method
Calculator.prototype.add = function(num) {
  console.log(`Adding ${num} to ${this.result}`);
  this.result += num;
  return this;
};

let calc3 = new Calculator();
calc3.add(10); // Logs: "Adding 10 to 0"
```

#### Phương pháp kết hợp (Hybrid Approach)

**Sử dụng cả hai khi cần thiết:**
```javascript
function BankAccount(accountNumber, initialBalance, pin) {
  // Public properties
  this.accountNumber = accountNumber;
  this.balance = initialBalance || 0;
  this.createdAt = new Date();
  
  // Private variables (chỉ accessible through closures)
  let actualPin = pin;
  let loginAttempts = 0;
  let isLocked = false;
  
  // Methods cần truy cập private variables - định nghĩa trong constructor
  this.authenticate = function(inputPin) {
    if (isLocked) {
      throw new Error('Account is locked due to too many failed attempts');
    }
    
    if (inputPin === actualPin) {
      loginAttempts = 0;
      return true;
    } else {
      loginAttempts++;
      if (loginAttempts >= 3) {
        isLocked = true;
        throw new Error('Account locked due to too many failed attempts');
      }
      throw new Error(`Invalid PIN. ${3 - loginAttempts} attempts remaining`);
    }
  };
  
  this.changePin = function(oldPin, newPin) {
    if (!this.authenticate(oldPin)) {
      throw new Error('Cannot change PIN: authentication failed');
    }
    actualPin = newPin;
    return 'PIN changed successfully';
  };
  
  this.isAccountLocked = function() {
    return isLocked;
  };
}

// Methods không cần private variables - định nghĩa trên prototype
BankAccount.prototype.deposit = function(amount) {
  if (amount <= 0) {
    throw new Error('Deposit amount must be positive');
  }
  this.balance += amount;
  return `Deposited ${amount}. New balance: ${this.balance}`;
};

BankAccount.prototype.withdraw = function(amount, pin) {
  if (!this.authenticate(pin)) {
    throw new Error('Authentication required for withdrawal');
  }
  
  if (amount <= 0) {
    throw new Error('Withdrawal amount must be positive');
  }
  
  if (amount > this.balance) {
    throw new Error('Insufficient funds');
  }
  
  this.balance -= amount;
  return `Withdrew ${amount}. New balance: ${this.balance}`;
};

BankAccount.prototype.getBalance = function() {
  return this.balance;
};

BankAccount.prototype.getAccountInfo = function() {
  return {
    accountNumber: this.accountNumber,
    balance: this.balance,
    createdAt: this.createdAt,
    isLocked: this.isAccountLocked()
  };
};

// Sử dụng hybrid approach
let account = new BankAccount('12345', 1000, '1234');

try {
  console.log(account.deposit(500)); // OK - không cần PIN
  console.log(account.withdraw(200, '1234')); // OK - đúng PIN
  console.log(account.withdraw(100, '0000')); // Error - sai PIN
} catch (error) {
  console.error(error.message);
}

// Mỗi account có authentication methods riêng (vì cần truy cập private variables)
let account2 = new BankAccount('67890', 2000, '5678');
console.log(account.authenticate === account2.authenticate); // false

// Nhưng chia sẻ cùng public methods (trên prototype)
console.log(account.deposit === account2.deposit); // true
```

#### Quy tắc chung

**Nên ưu tiên sử dụng phương pháp prototype** cho hầu hết các trường hợp:

```javascript
// ✅ Recommended pattern
function TodoList(name) {
  this.name = name;
  this.todos = [];
  this.createdAt = new Date();
}

TodoList.prototype.addTodo = function(text, priority = 'medium') {
  let todo = {
    id: Date.now(),
    text: text,
    priority: priority,
    completed: false,
    createdAt: new Date()
  };
  this.todos.push(todo);
  return todo;
};

TodoList.prototype.completeTodo = function(id) {
  let todo = this.todos.find(t => t.id === id);
  if (todo) {
    todo.completed = true;
    todo.completedAt = new Date();
    return todo;
  }
  throw new Error('Todo not found');
};

TodoList.prototype.removeTodo = function(id) {
  let index = this.todos.findIndex(t => t.id === id);
  if (index !== -1) {
    return this.todos.splice(index, 1)[0];
  }
  throw new Error('Todo not found');
};

TodoList.prototype.getStats = function() {
  let total = this.todos.length;
  let completed = this.todos.filter(t => t.completed).length;
  let pending = total - completed;
  
  return {
    total,
    completed,
    pending,
    completionRate: total > 0 ? (completed / total * 100).toFixed(1) + '%' : '0%'
  };
};

TodoList.prototype.getTodosByPriority = function(priority) {
  return this.todos.filter(t => t.priority === priority);
};

// Có thể mở rộng functionality sau này
TodoList.prototype.exportToJSON = function() {
  return JSON.stringify({
    name: this.name,
    todos: this.todos,
    createdAt: this.createdAt,
    stats: this.getStats()
  }, null, 2);
};

// Sử dụng
let workTodos = new TodoList('Work Tasks');
let personalTodos = new TodoList('Personal Tasks');

workTodos.addTodo('Review code', 'high');
workTodos.addTodo('Update documentation', 'medium');
workTodos.addTodo('Team meeting', 'high');

personalTodos.addTodo('Buy groceries', 'medium');
personalTodos.addTodo('Exercise', 'high');

workTodos.completeTodo(workTodos.todos[0].id);

console.log('Work Stats:', workTodos.getStats());
console.log('High priority work tasks:', workTodos.getTodosByPriority('high'));

// Tất cả instances chia sẻ cùng methods
console.log(workTodos.addTodo === personalTodos.addTodo); // true
```

**Khi nào sử dụng methods trong constructor:**

```javascript
// Chỉ khi cần truy cập private variables hoặc có logic phức tạp liên quan đến closure
function SecureCounter(initialValue, maxValue) {
  let count = initialValue || 0;
  let maxCount = maxValue || 100;
  let accessLog = [];
  
  // Private function
  function log(action, value) {
    accessLog.push({ action, value, timestamp: new Date() });
  }
  
  // Methods cần truy cập private variables
  this.increment = function() {
    if (count >= maxCount) {
      log('increment_failed', count);
      throw new Error(`Cannot exceed maximum value of ${maxCount}`);
    }
    count++;
    log('increment', count);
    return count;
  };
  
  this.decrement = function() {
    if (count <= 0) {
      log('decrement_failed', count);
      throw new Error('Cannot go below zero');
    }
    count--;
    log('decrement', count);
    return count;
  };
  
  this.getValue = function() {
    log('get_value', count);
    return count;
  };
  
  this.getAccessLog = function() {
    return [...accessLog]; // Return copy
  };
  
  this.reset = function() {
    let oldValue = count;
    count = initialValue || 0;
    log('reset', `${oldValue} -> ${count}`);
    return count;
  };
}

// Public methods that don't need private access - on prototype
SecureCounter.prototype.getInfo = function() {
  return {
    currentValue: this.getValue(),
    logEntries: this.getAccessLog().length
  };
};

let counter = new SecureCounter(0, 10);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getInfo());
```

### Kết luận

Hiểu rõ về object và constructor trong JavaScript là nền tảng quan trọng để:

1. **Quản lý bộ nhớ hiệu quả** - Sử dụng prototype methods khi có thể
2. **Tạo cấu trúc thừa kế rõ ràng** - Sử dụng `Object.setPrototypeOf()` một cách chính xác
3. **Bảo vệ dữ liệu** - Sử dụng closures cho private variables khi cần thiết
4. **Viết code có thể mở rộng** - Prototype cho phép thêm/sửa methods sau này

**Checklist cho việc thiết kế constructor:**

- ✅ Sử dụng prototype methods cho các functions không cần private access
- ✅ Sử dụng `Object.setPrototypeOf()` để setup inheritance
- ✅ Validate input trong constructor
- ✅ Đặt tên constructor với PascalCase
- ✅ Sử dụng `new` keyword khi tạo instances
- ✅ Cân nhắc sử dụng closure chỉ khi thực sự cần private variables
- ✅ Document behavior và expected usage

Hy vọng tài liệu này giúp bạn hiểu rõ hơn về `this` và thừa kế nguyên mẫu trong JavaScript!





## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2

1. https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors
1. https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript
1. http://javascript.info/prototype-inheritance
1. https://www.javascripttutorial.net/javascript-this/
1. https://medium.com/@eamonocallaghan/prototype-vs-proto-vs-prototype-in-javascript-6758cadcbae8
1. https://www.youtube.com/watch?v=MACDGu96wrA
1. https://stackoverflow.com/questions/9772307/declaring-javascript-object-method-in-constructor-function-vs-in-prototype/9772864#9772864
1. https://scrimba.com/scrim/co2624f87981575448091d5a2
1. https://www.youtube.com/watch?v=cwChC4BQF0Q

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**