class Stack {
    constructor() {
      this.items = [];
    }
  
    // Menambahkan elemen ke dalam stack
    push(element) {
      this.items.push(element);
    }
  
    // Menghapus elemen terakhir dari stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty!";
      }
      return this.items.pop();
    }
  
    // Melihat elemen terakhir di stack
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty!";
      }
      return this.items[this.items.length - 1];
    }
  
    // Mengecek apakah stack kosong
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Menampilkan isi stack
    printStack() {
      return this.items.join(" ");
    }
  }
  
  // Contoh penggunaan Stack
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log("Stack:", stack.printStack()); // Output: Stack: 10 20 30
  console.log("Peek:", stack.peek()); // Output: Peek: 30
  console.log("Pop:", stack.pop()); // Output: Pop: 30
  console.log("Stack after pop:", stack.printStack()); // Output: Stack after pop: 10 20
  