type Listener<T> = (state: T) => void;

const ShedRegistry = new Map<string, any>();

export function createShed<T>(key: string, initialState: T) {
  if (ShedRegistry.has(key)) {
    throw new Error("현재 상태에 맞는 키가 이미 있습니다.");
  }
  let state = initialState;

  const listeners = new Set<Listener<T>>();

  const getState = () => state;

  const setState = (update: Partial<T> | ((prevState: T) => Partial<T>)) => {
    const nextState = typeof update === "function" ? update(state) : update;
    state = { ...state, ...nextState };
    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener: Listener<T>) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const shed = { getState, setState, subscribe };
  ShedRegistry.set(key, shed);

  return shed;
}

export function getShed(key: string) {
  const store = ShedRegistry.get(key);
  if (!store) {
    throw new Error(`맞는 키가 없습니다. Key: "${key}"`);
  }
  return store;
}
