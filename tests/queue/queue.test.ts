class Queue {
	queue: any[] = [];

	Enqueue = async (item: any) => {
		if (typeof item === "function") {
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

const INPUT = ["This", "little", "piggy", "ate", "roast", "beef"];
const OUTPUT = "This little piggy ate roast beef";

async function enqueue() {
	const myQueue = new Queue();

	await Promise.all(INPUT.map(async (item) => await myQueue.Enqueue(item)));

	let queueOutput = "";
	while (myQueue.Count() > 0) {
		queueOutput += myQueue.Dequeue();
		if (myQueue.Count() > 0) queueOutput += " ";
	}
	return queueOutput;
}

async function enqueueFunction() {
	const myQueue = new Queue();
	const toes = async (piggy: string) => piggy;

	await Promise.all(
		INPUT.map(async (item) => await myQueue.Enqueue(() => toes(item))),
	);

	let queueOutput = "";
	while (myQueue.Count() > 0) {
		queueOutput += myQueue.Dequeue();
		if (myQueue.Count() > 0) queueOutput += " ";
	}
	return queueOutput;
}

test("enqueue", async () => {
	expect(await enqueue()).toBe(OUTPUT);
});

test("enqueueFunction", async () => {
	expect(await enqueue()).toBe(OUTPUT);
});
