class Queue {
    constructor() {
      this.items = [];
    }
  
    // Menambahkan elemen ke dalam queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Menghapus elemen pertama dari queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty!";
      }
      return this.items.shift();
    }
  
    // Melihat elemen pertama di queue
    front() {
      if (this.isEmpty()) {
        return "Queue is empty!";
      }
      return this.items[0];
    }
  
    // Mengecek apakah queue kosong
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Menampilkan isi queue
    printQueue() {
      return this.items.join(" ");
    }
  }
  
  // Contoh penggunaan Queue
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log("Queue:", queue.printQueue()); // Output: Queue: 10 20 30
  console.log("Front:", queue.front()); // Output: Front: 10
  console.log("Dequeue:", queue.dequeue()); // Output: Dequeue: 10
  console.log("Queue after dequeue:", queue.printQueue()); // Output: Queue after dequeue: 20 30
  