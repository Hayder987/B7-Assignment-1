
# Why "any" is Dangerous and "unknown" is Safer in TypeScript

## Introduction

I write this blog to explain why `any` is risky and why `unknown` is a safer choice in TypeScript.

## Why "any" is Dangerous

The `any` type removes type safety. It allows any operation without checking.

### Example:
```ts
let data: any = "hello";
data.toFixed(); 
```

This can cause runtime errors.

## Why "unknown" is Safer

The `unknown` type is safer because it forces type checking before use.

### Example:
```ts
let data: unknown = "hello";

if (typeof data === "string") {
  data.toUpperCase();
}
```

## Type Narrowing

Type narrowing means checking the type before using it.

### Example:
```ts
const check = (value: unknown) => {
  if (typeof value === "number") {
    return value * 2;
  }
}
```

## Conclusion

`any` is unsafe because it skips checking. `unknown` is safer because it ensures proper validation.
