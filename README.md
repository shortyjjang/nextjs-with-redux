# MBTI 테스트 프로젝트

이 프로젝트는 Redux를 사용하여 MBTI 테스트를 구현한 Next.js 애플리케이션입니다. 사용자는 질문에 답변하고, 완료된 질문 수와 총 점수를 확인할 수 있습니다.

## 기술 스택

- **Next.js**: 15.1.6
- **React**: 19.0.0
- **Redux Toolkit**: 2.5.1
- **React Redux**: 9.2.0
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.4.1

## 폴더 구조

src/
├── app/
│ ├── api/
│ │ └── [...pathname]/route.ts
│ ├── layout.tsx
│ ├── page.tsx
│ └── test/
│ └── page.tsx
├── feature/
│ └── test/
│ ├── Landing.tsx
│ ├── Question.tsx
│ └── TestProvider.tsx
├── store/
│ ├── index.ts
│ ├── StoreProvider.tsx
│ └── testReducer.ts
└── app/globals.css


## 주요 폴더 및 파일 설명

### `src/app/`

- **`layout.tsx`**: 애플리케이션의 기본 레이아웃을 정의합니다. `StoreProvider`를 사용하여 Redux 스토어를 제공합니다.
- **`page.tsx`**: 홈 페이지 컴포넌트를 정의합니다. `Landing` 컴포넌트를 렌더링합니다.
- **`test/page.tsx`**: 테스트 페이지를 정의합니다. `Question` 컴포넌트를 렌더링합니다.

### `src/feature/test/`

- **`Landing.tsx`**: 테스트 시작 페이지를 구성합니다. 사용자가 테스트를 시작할 수 있는 버튼을 제공합니다.
- **`Question.tsx`**: 질문과 답변을 표시하고, 사용자가 답변을 선택할 수 있도록 합니다.
- **`TestProvider.tsx`**: 테스트 관련 상태를 관리하는 컨텍스트를 제공합니다.

### `src/store/`

- **`index.ts`**: Redux 스토어를 설정하고, `useAppDispatch` 및 `useAppSelector` 훅을 정의합니다.
- **`StoreProvider.tsx`**: Redux `Provider`를 설정하여 애플리케이션에 스토어를 제공합니다.
- **`testReducer.ts`**: 테스트 관련 상태와 리듀서를 정의합니다. 질문 데이터와 사용자의 답변을 관리합니다.

### `src/app/api/[...pathname]/route.ts`

- API 엔드포인트를 정의하여 질문 데이터를 제공합니다.

### `src/app/globals.css`

- Tailwind CSS를 사용하여 전역 스타일을 정의합니다.

## 시작하기

1. **설치**: 프로젝트의 의존성을 설치합니다.
   ```bash
   npm install
   ```

2. **개발 서버 실행**: 개발 서버를 시작합니다.
   ```bash
   npm run dev
   ```

3. **빌드**: 프로덕션 빌드를 생성합니다.
   ```bash
   npm run build
   ```

4. **시작**: 프로덕션 서버를 시작합니다.
   ```bash
   npm start
   ```

## 기능

- 사용자는 질문에 답변할 수 있으며, 각 질문에 대해 여러 선택지를 제공합니다.
- 완료된 질문 수와 총 점수를 계산하여 표시합니다.
- 모든 질문에 답변이 완료되면 "완료하기" 버튼이 활성화됩니다.

이 프로젝트는 Redux를 사용하여 상태 관리를 효율적으로 수행하며, React와 Next.js의 기능을 활용하여 사용자 인터페이스를 구성합니다.