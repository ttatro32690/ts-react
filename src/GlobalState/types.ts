interface BaseGlobalState {
  supplierId: number;
  fulfillmentCustomerId: number;
  features?: string[];
  isAdmin: boolean;
}

interface GlobalState<State> extends BaseGlobalState {
  globalState: State;
}

type Reducer<State, Action> = (
  state: GlobalState<State>,
  action: Action
) => GlobalState<State>;

export { Reducer, GlobalState };
