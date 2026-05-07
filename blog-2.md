
# How Generics Help Build Reusable and Type-Safe Code

## Introduction

I write this blog to explain how generics help create reusable and flexible code in TypeScript.

## What is Generics

Generics allow functions to work with any data type while keeping type safety.

### Example:
```ts
const identity = <T>(value: T): T => {
  return value;
}
```

## Without Generics

Without generics, we need multiple functions.

### Example:
```ts
const getNumber = (value: number): number => {
  return value;
}
```

## Using Generics

One generic function can handle all types.

