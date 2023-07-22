import { useState, useCallback } from 'react';

type State<T> = {
  data: T;
  error: Error | null;
  loading: boolean;
};

type SetStateFn<T> = React.Dispatch<React.SetStateAction<State<T>>>;

export function useObjectState<T>(initialState: T): [State<T>, SetStateFn<T>] {
  const [state, setState] = useState<State<T>>({
    data: initialState,
    error: null,
    loading: false,
  });

  const updateState = useCallback((newState: State<T> | ((prevState: State<T>) => State<T>)) => {
    setState((prevState) => ({
      ...prevState,
      ...(typeof newState === 'function' ? newState(prevState) : newState),
    }));
  }, []);

  return [state, updateState];
}

export default useObjectState;
