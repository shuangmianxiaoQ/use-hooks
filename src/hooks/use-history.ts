import { Dispatch, useCallback, useReducer } from "react";

enum ActionType {
  SET = "SET",
  UNDO = "UNDO",
  REDO = "REDO",
  CLEAR = "CLEAR"
}

interface State<T> {
  prevArr: T[];
  currValue: T;
  nextArr: T[];
}

interface Action<T> {
  type: ActionType;
  newValue?: T;
}

const initialState = {
  /** 记录回退时的每一次状态 */
  prevArr: [],
  /** 存储当前显示的状态值 */
  currValue: null,
  /** 记录将要前进到某状态 */
  nextArr: []
};

const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
  const { prevArr, currValue, nextArr } = state;

  switch (action.type) {
    case ActionType.SET:
      if (action.newValue === currValue) {
        return state;
      }

      return {
        prevArr: [...prevArr, currValue],
        currValue: action.newValue!,
        nextArr: []
      };
    case ActionType.UNDO:
      const prevValue = prevArr[prevArr.length - 1];
      const newPrevArr = prevArr.slice(0, prevArr.length - 1);

      return {
        prevArr: newPrevArr,
        currValue: prevValue,
        nextArr: [currValue, ...nextArr]
      };
    case ActionType.REDO:
      const nextValue = nextArr[0];
      const newNextArr = nextArr.slice(1);

      return {
        prevArr: [...prevArr, nextValue],
        currValue: nextValue,
        nextArr: newNextArr
      };
    case ActionType.CLEAR:
      return {
        ...initialState,
        currValue: action.newValue!
      };
  }
  return state;
};

const useHistory = <T>(initialValue: T) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    currValue: initialValue
  }) as [State<T>, Dispatch<Action<T>>];

  console.log(state);

  const canUndo = state.prevArr.length !== 0;
  const canRedo = state.nextArr.length !== 0;

  const set = useCallback((newValue) => {
    dispatch({ type: ActionType.SET, newValue });
  }, []);

  const undo = useCallback(() => {
    if (canUndo) {
      dispatch({ type: ActionType.UNDO });
    }
  }, [canUndo]);

  const redo = useCallback(() => {
    if (canRedo) {
      dispatch({ type: ActionType.REDO });
    }
  }, [canRedo]);

  const clear = useCallback(() => {
    dispatch({ type: ActionType.CLEAR, newValue: initialValue });
  }, [initialValue]);

  return { state: state.currValue, set, undo, redo, canUndo, canRedo, clear };
};

export default useHistory;
