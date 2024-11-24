type Listener<T> = (state: T) => void;
export declare function createShed<T>(key: string, initialState: T): {
    getState: () => T;
    setState: (update: Partial<T> | ((prevState: T) => Partial<T>)) => void;
    subscribe: (listener: Listener<T>) => () => boolean;
};
export declare function getShed(key: string): any;
export {};
