class Queue {
	queue: any[] = [];

	Enqueue = async (item: any) => {
		if (typeof item === 'function') {
			this.queue.push(await item());
		} else {
			this.queue.push(item);
		}
	};

	Dequeue = (): any | undefined => {
		return this.queue.shift();
	};

	Peek = (): any | undefined => {
		return this.queue[0];
	};

	Count = (): number => {
		return this.queue.length;
	};
}

async function enqueue(input: string[]) {
	const myQueue = new Queue();

	await Promise.all(input.map(async (item) => await myQueue.Enqueue(item)));

	let queueOutput = '';
	while (myQueue.Count() > 0) {
		queueOutput += myQueue.Dequeue();
		if (myQueue.Count() > 0) queueOutput += ' ';
	}
	return queueOutput;
}

async function enqueueFunction(input: string[]) {
	const myQueue = new Queue();
	const toes = async (piggy: string) => piggy;

	await Promise.all(
		input.map(async (item) => await myQueue.Enqueue(() => toes(item))),
	);

	let queueOutput = '';
	while (myQueue.Count() > 0) {
		queueOutput += myQueue.Dequeue();
		if (myQueue.Count() > 0) queueOutput += ' ';
	}
	return queueOutput;
}

test('queue', async () => {
	const input = ['This', 'little', 'piggy', 'ate', 'roast', 'beef'];
	const output = 'This little piggy ate roast beef';

	expect(await enqueue(input)).toBe(output);
	expect(await enqueue(input)).toBe(output);
});
