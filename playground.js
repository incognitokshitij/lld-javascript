for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (not 0, 1, 2!)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Fix with closure:
// Output: 0, 1, 2
// With let, each iteration gets its own copy of i:

// Timeline:


// Time 0ms:
// ├── Iteration 1: let i = 0 (new box in memory) → callback remembers THIS i
// ├── Iteration 2: let i = 1 (new box in memory) → callback remembers THIS i
// ├── Iteration 3: let i = 2 (new box in memory) → callback remembers THIS i
// │
// │   ... 1 second passes ...
// │
// Time 1000ms:
// ├── callback 1 → looks at its i → 0 → prints 0
// ├── callback 2 → looks at its i → 1 → prints 1
// ├── callback 3 → looks at its i → 2 → prints 2
// Visual difference:


// // var: ONE shared box
// ┌─────────┐
// │  i = 3  │  ← all callbacks point here
// └─────────┘

// // let: THREE separate boxes
// ┌─────────┐  ┌─────────┐  ┌─────────┐
// │  i = 0  │  │  i = 1  │  │  i = 2  │
// └─────────┘  └─────────┘  └─────────┘
//      ↑            ↑            ↑
//  callback 1   callback 2   callback 3
// Why? let is block-scoped. The for loop block { } runs 3 times, so JavaScript creates a fresh i for each block execution.

// Each callback forms a closure over its own i, not a shared one.