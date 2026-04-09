export type HookInfo = {
  name: string;
  path: string;
  levels: string[];
};

export type HookCategory = {
  category: string;
  description: string;
  hooks: HookInfo[];
};

export const hookCategories: HookCategory[] = [
  {
    category: "Basic Hooks",
    description: "Core React hooks for state and lifecycle management.",
    hooks: [
      { name: 'useState', path: 'usestate', levels: ['basic', 'intermediate'] },
      { name: 'useEffect', path: 'useEffect', levels: ['basic', 'intermediate', 'advance'] },
      { name: 'useContext', path: 'useContext', levels: ['basic', 'intermediate', 'advance'] },
      { name: 'useRef', path: 'useRef', levels: ['basic', 'intermediate', 'advanced'] },
    ]
  },
  {
    category: "Performance Hooks",
    description: "Hooks designed to optimize rendering performance.",
    hooks: [
      { name: 'useMemo', path: 'useMemo', levels: ['basic', 'intermediate', 'advanced'] },
      { name: 'useCallback', path: 'useCallback', levels: ['basic', 'intermediate'] },
      { name: 'useTransition', path: 'useTransition', levels: ['basic', 'intermediate', 'advanced'] },
      { name: 'useDeferredValue', path: 'useDeferredValue', levels: ['basic', 'intermediate', 'advanced'] },
    ]
  },
  {
    category: "Advanced Hooks",
    description: "Specialized hooks for complex use cases and libraries.",
    hooks: [
      { name: 'useReducer', path: 'useReducer', levels: ['basic', 'intermediate', 'advanced'] },
      { name: 'useLayoutEffect', path: 'useLayoutEffect', levels: ['basic', 'intermediate', 'advanced'] },
      { name: 'useInsertionEffect', path: 'useInsertionEffect', levels: ['basic', 'intermediate', 'advanced'] },
      { name: 'useImperativeHandle', path: 'useImperativeHandle', levels: ['basic', 'intermediate', 'advanced'] },
      { name: 'useId', path: 'useId', levels: ['basic', 'intermediate', 'advanced'] },
      { name: 'useDebugValue', path: 'useDebugValue', levels: ['basic', 'advanced'] },
      { name: 'useSyncExternalStore', path: 'useSyncExternalStore', levels: ['basic', 'intermediate'] },
      { name: 'useActionState', path: 'useActionState', levels: ['basic', 'intermediate', 'advanced'] },
      { name: 'useEffectEvent', path: 'useEffectEvent', levels: ['basic', 'intermediate', 'advanced'] },
      { name: 'useOptimistic', path: 'useOptimistic', levels: ['basic', 'intermediate', 'advanced'] },
    ]
  }
];
