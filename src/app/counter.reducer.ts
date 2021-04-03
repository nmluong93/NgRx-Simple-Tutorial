import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
);
/**
 * Reducer is used to handle changes in the state (counter value) based on the proided action (increasement, decresement, .. in counter.action.ts)
 */
export function counterReducer(state: number | undefined, action: Action) {
    return _counterReducer(state, action);
}