## 🌸 React State Shed

---

## 🌸 설치

```
npm i react-state-shed
```

## 🌸 사용법

### 🌼 Shed를 생성합니다.

```javascript
export const counterShed =
  createShed <
  ShedState >
  ("count",
  {
    count: 0,
    count2: 0,
    count3: 0,
    increment: (key) => {
      counterShed.setState((prev) => ({ [key]: prev[key] + 1 }));
    },
    decrement: (key) => {
      counterShed.setState((prev) => ({ [key]: prev[key] - 1 }));
    },
  });
```

Shed는 기본적인 전역 상태 단위입니다.
<br/>
createShed 함수를 사용하여 전역 상태를 관리할 수 있습니다.
<br/>
이렇게 선언된 변수는 useShed 훅을 통해 호출할 수 있습니다.

### 🌼 useShed를 호출합니다.

```javascript
const { count, increment, decrement } =
  useShed < ShedState > ("count", (state) => state);
```

이때 수동 렌더링 최적화를 적용하면 불필요한 리렌더링을 막을 수 있습니다.
<br/>

## 🌼 Shed를 사용해 전역으로 Count를 올리고 내리는 예제

Shed 상태 타입 정의 및 생성

```javascript
export type ShedState = {
  count: number;
  count2: number;
  count3: number;
  increment: (
  key: keyof Pick<ShedState, "count" | "count2" | "count3">
  ) => void;
  decrement: (
  key: keyof Pick<ShedState, "count" | "count2" | "count3">
  ) => void;
};

export const counterShed = createShed<ShedState>("count", {
  count: 0,
  count2: 0,
  count3: 0,
  increment: (key) => {
  counterShed.setState((prev) => ({ [key]: prev[key] + 1 }));
  },
  decrement: (key) => {
  counterShed.setState((prev) => ({ [key]: prev[key] - 1 }));
  },
});
```

앱 컴포넌트

```javascript
function App() {
  return (
    <div>
      <One />
      <Two />
      <Three />
    </div>
  );
}
```

One 컴포넌트

```javascript
const One = () => {
  const { count, increment, decrement } =
    useShed < ShedState > ("count", (state) => state);
  return (
    <div style={{ height: "100px", backgroundColor: "green" }}>
      카운트 1 : {count}
      <button onClick={() => increment("count")}>count1 올리기</button>
      <button onClick={() => decrement("count")}>count1 내리기</button>
    </div>
  );
};

export default One;
```

Two 컴포넌트

```javascript
const Two = () => {
  const count = useShed < ShedState > ("count", (state) => state.count2);
  return (
    <div style={{ height: "100px", backgroundColor: "blue" }}>
      카운트 2 : {count}
    </div>
  );
};

export default Two;
```

Three 컴포넌트

```javascript
const Three = () => {
  const count = useShed < ShedState > ("count", (state) => state.count3);
  return (
    <div style={{ height: "100px", backgroundColor: "red" }}>
      카운트 3 : {count}
    </div>
  );
};
export default Three;
```

## 🌸 실행 결과

![실행 결과](/public/readme.gif)
