## [Coding Challenge - Queue](https://shiftparadigm.slack.com/archives/C06R174JN6P/p1728676802694129)

Queues are an essential data structures in computer science and used throughout our code bases and architecture which help manage the flow of data using ordering methods such as [first-in first-out (FIFO)](<https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)>). Queues using FIFO store items in the order they are added (enqueued) ensuring that the first item added is the first to be removed (dequeued). The concept is the same as a real-world queue or line---first person to arrive is the first person served, then the next moves up, etc. For day-to-day usage, queues are ideal structures for task scheduling, request processing, concurrency, load balancing and more.

## The challenge

Ignoring whatever sort of first-class queue data structure your language provides, create a FIFO queue which satisfies the contract below and can accept an async function  `const toes = async (piggy: string): Promise<string> => piggy`

- `Enqueue(T item): void` --- Adds an item to the end of the queue
- `Dequeue(): T` --- Removes and returns the first item in the queue
- `Peek(): T` --- Returns the first item in the queue without removing it
- `Count(): number` --- Returns the number of items in the queue

## Assertion

Prove your queue can keep async order by enqueueing the data set `["This", "little", "piggy", "ate", "roast", "beef"]` and dequeueing as a concatenated `string` which equals `"This little piggy ate roast beef"`.

## Example

```
queue.enqueue(() => toes("This"));
queue.enqueue(() => toes("little"));
queue.enqueue(() => toes("piggy"));
...
```
