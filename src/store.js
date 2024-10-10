import { configureStore } from '@reduxjs/toolkit';
import { login } from './services/auth/Login'
import { accountstatement } from './services/account-statement/AccountStatement'
import { setupListeners } from '@reduxjs/toolkit/query';
import { gameName } from './services/sport/gameName';
import { eventGameList } from './services/sport/eventGameList';
import { eventgame } from './services/eventGame/gameEvent';
import { inplay } from './services/inplay/Inplay';
import { eventdetail } from './services/eventdetail';
import { eventDetail } from './services/eventDetail/eventDetail';
import { eventSession } from './services/fancy/Fancy';


export const store = configureStore({
  reducer: {
    // Add the API reducer to the store
    [login.reducerPath]: login.reducer,
    [accountstatement.reducerPath]: accountstatement.reducer,
    [gameName.reducerPath]: gameName.reducer,
    [eventGameList.reducerPath]: eventGameList.reducer,
    [eventgame.reducerPath]: eventgame.reducer,
    [inplay.reducerPath]: inplay.reducer,
    [eventdetail.reducerPath]: eventdetail.reducer,
    [eventDetail.reducerPath]: eventDetail.reducer,
    [eventSession.reducerPath]: eventSession.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(login.middleware)
  .concat(accountstatement.middleware)
  .concat(gameName.middleware)
  .concat(eventGameList.middleware)
  .concat(inplay.middleware)
  .concat(eventdetail.middleware)
  .concat(eventDetail.middleware)
  .concat(eventSession.middleware)
  .concat(eventgame.middleware),
});

setupListeners(store.dispatch)