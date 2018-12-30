interface StorageInterface {
	setItem(key: string, value: string): Promise<void>;
	getItem(key: string, defaultValue: any): Promise<any>;

	keys(): Promise<string[]>;
	remove(key: string): Promise<void>;
	clear(): Promise<void>;
}

class LocalStorage implements StorageInterface{
	setItem(key: string, value: string): Promise<void> {
		window.localStorage.setItem(key, value);
		return Promise.resolve();
	}

	getItem(key: string, defaultValue: any = null): Promise<string|any> {
		let value = window.localStorage.getItem(key);
		if (value === null)
			return Promise.resolve(defaultValue);
		return Promise.resolve(value);
	}

	keys(): Promise<string[]> {
		let keys: string[] = [];
		for (let i = 0; i < window.localStorage.length; ++i) {
			let k = window.localStorage.key(i);
			if (k !== null)
				keys.push(k);
		}

		return Promise.resolve(keys);
	}

	remove(key: string): Promise<void> {
		window.localStorage.removeItem(key);
		return Promise.resolve();
	}

	clear(): Promise<void> {
		window.localStorage.clear();
		return Promise.resolve();
	}
}
