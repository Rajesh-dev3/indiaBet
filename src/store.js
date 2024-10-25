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
import { scoreBoard } from './services/Scoreboard/scoreboard';
import { walletBalance } from './services/Walletbalance/walletbalance';
import { stakeUpdate } from './services/StakeUpdate/stakeupdate';
import { changePassword } from './services/changepassword/changepassword';
import { gamelength } from './services/gameLength/gamelenght';

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
    [scoreBoard.reducerPath]: scoreBoard.reducer,
    [walletBalance.reducerPath]: walletBalance.reducer,
    [stakeUpdate.reducerPath]: stakeUpdate.reducer,
    [changePassword.reducerPath]: changePassword.reducer,
    [gamelength.reducerPath]: gamelength.reducer,
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
  .concat(walletBalance.middleware)
  .concat(eventDetail.middleware)
  .concat(eventDetail.middleware)
  .concat(eventSession.middleware)
  .concat(oddsBetsPlace.middleware)
  .concat(mybet.middleware)
  .concat(scoreBoard.middleware)
  .concat(stakeUpdate.middleware)
  .concat(changePassword.middleware)
  .concat(gamelength.middleware)
  .concat(eventgame.middleware),
});

setupListeners(store.dispatch)