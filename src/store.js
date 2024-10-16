import { configureStore } from '@reduxjs/toolkit';
import { login } from './services/auth/Login'
import { accountstatement } from './services/account-statement/AccountStatement'
import { setupListeners } from '@reduxjs/toolkit/query';
import { gameName } from './services/sport/gameName';
import { eventGameList } from './services/sport/eventGameList';
import { eventgame } from './services/eventGame/gameEvent';
import { inplay } from './services/inplay/Inplay';
import { bethistory } from './services/bethistory/betHistory';
import { profitnloss } from './services/profitnloss/profitnloss';
import { eventDetail } from './services/eventDetail/eventDetail';
import { eventSession } from './services/fancy/Fancy';
import { oddsBetsPlace } from './services/betPalce/oddsBetPlace';
import betDataSlice from "./services/betSlice/betSlice"
import { mybet } from './services/mybet/mybet';

export const store = configureStore({
  reducer: {
    // Add the API reducer to the store
    betData: betDataSlice,
    [login.reducerPath]: login.reducer,
    [accountstatement.reducerPath]: accountstatement.reducer,
    [gameName.reducerPath]: gameName.reducer,
    [eventGameList.reducerPath]: eventGameList.reducer,
    [eventgame.reducerPath]: eventgame.reducer,
    [inplay.reducerPath]: inplay.reducer,
    [bethistory.reducerPath]: bethistory.reducer,
    [profitnloss.reducerPath]: profitnloss.reducer,
    [eventDetail.reducerPath]: eventDetail.reducer,
    [eventDetail.reducerPath]: eventDetail.reducer,
    [eventSession.reducerPath]: eventSession.reducer,
    [mybet.reducerPath]: mybet.reducer,
    [oddsBetsPlace.reducerPath]: oddsBetsPlace.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(login.middleware)
  .concat(accountstatement.middleware)
  .concat(gameName.middleware)
  .concat(eventGameList.middleware)
  .concat(inplay.middleware)
  .concat(bethistory.middleware)
  .concat(profitnloss.middleware)
  // .concat(eventdetail.middleware)
  .concat(eventDetail.middleware)
  .concat(eventDetail.middleware)
  .concat(eventSession.middleware)
  .concat(oddsBetsPlace.middleware)
  .concat(mybet.middleware)
  .concat(eventgame.middleware),
});

setupListeners(store.dispatch)