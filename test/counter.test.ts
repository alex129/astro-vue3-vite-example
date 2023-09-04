import { useCounterStore } from '@stores/counter';
import { createPinia, setActivePinia } from 'pinia';
import { assert, beforeEach, expect, test } from 'vitest';

//Create tests to check if counter store is working
test('Counter Store', () => {
	let counterStore: ReturnType<typeof useCounterStore>;

	beforeEach(() => {
        setActivePinia(createPinia());

		counterStore = useCounterStore();
	});

	test('Counter Store is defined', () => {
		expect(counterStore).toBeDefined();
	});

	test('Counter Store is reactive', () => {
		counterStore.counter = 1;
		expect(counterStore.counter).toBe(1);
	});
});
