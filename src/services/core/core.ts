import { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { createOrder, resetConstructor } from '@slices';
import { AppDispatch, RootState } from '@store';

const core: Middleware =
  (store: MiddlewareAPI<AppDispatch, RootState>) => (next) => (action) => {
    if (createOrder.fulfilled.match(action)) {
      store.dispatch(resetConstructor());
    }
    next(action);
  };

export default core;
