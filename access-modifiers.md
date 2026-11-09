## Access Modifiers in TypeScript OOP
### Introduction

Object-Oriented Programming (OOP) is an important concept in TypeScript. It makes organizing code using classes and objects. Access Modifiers control how class properties and methods can be accessed. TypeScript provides four important access modifiers: `public`, `private`, `protected`, and `readonly`.

### Detailed Explanation
**1. Public**

The public modifier allows properties and methods to be accessed from anywhere, including outside the class.

```typescript
class Student {
    public name: string = "Rakib";
}

const student = new Student();
console.log(student.name);
```
**2. Private**

The private modifier allows a property or method to be accessed only inside its own class.

```typescript
class BankAccount {
    private balance: number = 5000;
}
```

The balance cannot be accessed directly outside the class.

**3. Protected**

The protected modifier allows access inside the class and its subclasses, but not from outside.

```typescript
class Employee {
    protected name: string = "Alice";
}

class Manager extends Employee {
    showName(): void {
        console.log(this.name);
    }
}
```

Here, the Manager class can access the protected name property through inheritance.

**4. Readonly**

The readonly modifier allows a property to be assigned during declaration or inside the constructor, but cannot reassign after.

```typescript
class Product {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}
```

The product ID cannot be changed after the object is created.

### Conclusion

Access Modifiers help maintain data security and proper code organization in TypeScript. Using `public`, `private`, `protected`, and `readonly` appropriately makes applications easier to manage, understand, and maintain.
