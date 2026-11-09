# Type Narrowing in TypeScript
### Introduction

In TypeScript sometimes, a variable can hold multiple types of values using union types. Type Narrowing is a technique that helps TypeScript identify the specific type of a variable within a particular block of code. It allows us to perform operations safely without causing type errors.

### Detailed Explanation

There are several ways to narrow types in TypeScript. Three most common techniques are ***typeof***, ***instanceof***, and ***the in operator***.

**1. Using typeof**

The typeof operator checks type of a value, such as string, number, or boolean.

```typescript
function processValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value * 2);
    }
}
```

Here, TypeScript can check whether the value is a string or number.

**2. Using instanceof**

The instanceof operator checks if an object belongs to a particular class or not.

```typescript
class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

function makeSound(animal: Dog | Date): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        console.log(animal.getFullYear());
    }
}
```
**3. Using the in Operator**

The in operator checks if a specific thing exists in an object.

```typescript
function showInfo(user: { name: string } | { age: number }): void {
    if ("name" in user) {
        console.log(user.name);
    } else {
        console.log(user.age);
    }
}
```
###Conclusion

Type Narrowing makes TypeScript code safer and easier to maintain. By using typeof, instanceof, and the in operator, developers can check variable types and access properties or methods safely. It is an important concept for writing reliable TypeScript applications.
