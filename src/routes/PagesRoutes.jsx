import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import LayoutPrimary from "../common/LayoutPrimary";
import Dashboard from "../pages/Dashboard/Dashboard";
import ChangePassword from "../pages/ChangePassoword/ChangePassword";
import DashBoardLayout from "../pages/Dashboard/DashBoardLayout";
import Event from "../pages/EventPage/Event";
import Announcement from "../pages/Announcement/Announcement";
import Runningmarket from "../pages/Runningmarket/Runningmarket";
import InPlay from "../pages/InPlay/InPlay";
import AccountStatement from "../pages/Account-statement/AccountStatement";
import ProfitLoss from "../pages/profitLoss/ProfitLoss";
import BetHistory from "../pages/BetHistory/betHistory";
import Matchprofitnloss from "../pages/Matchprofitnloss/matchprofitnloss";
import MatchProfitnlossInner from "../pages/MatchProfitnlossInner/MatchProfitnlossInner";
import CasinoGame from "../pages/Casino-Game/CasinoGame";
import Account from "../pages/Account/Account";
import CasinoResult from "../pages/CasinoResult/CasinoResult";
import Alert from "../Component/AlertPage/Alert";
import UserMatchDetail from "../pages/Account-statement/userMatchDetail";
import UserShowBet from "../pages/Account-statement/userShowBet";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPrimary />,
      children:[
        {
          path:"/user-matchDetail/:sportId/:matchId",
          element:<UserMatchDetail />
      },
        {
          path:"/show-bet/:sportId/:matchId",
          element:<UserShowBet />
      },
        {
            path:"/",
            element:<DashBoardLayout />,
            children:[

              {
                  path:"/menu",
                  element:<Dashboard />
              },
              {
                  path:"/edit-stake",
                  element:<Dashboard />
              },
              {
                  path:"/",
                  element:<Dashboard />
              },
              {
                  path:"/event/:sportId/:matchId",
                  element:<Event />
              },
          
              {
                  path:"/inPlay",
                  element:<InPlay />
              },
         
              {
                  path:"/account",
                  element:<Account />
              },
              {
                  path:"/CasinoGame",
                  element:<CasinoGame />
              },
           
            ]
        },
        {
            path:"/changePassword",
            element:<ChangePassword />
        },
        {
          path:"/announcement",
          element:<Announcement />
      },
        {
          path:"/Runningmarketanalysis",
          element:<Runningmarket />
      },
        {
          path:"/AccountStatement",
          element:<AccountStatement />
      },
    
        {
          path:"/profitLoss",
          element:<ProfitLoss />
      },
        {
          path:"/userBetHistory",
          element:<BetHistory/>
      },
        {
          path:"/matchprofitnlossinner/:sportID/:matchID",
          element:<MatchProfitnlossInner />
      },
        {
          path:"/matchprofitnloss",
          element:<Matchprofitnloss/>
      },
      {
        path:"/casino-result",
        element:<CasinoResult />
    },
      {
        path:"/alert",
        element:<Alert />
    },
      ]
    },
    {
        path:"/login",
        element:<Login/>
    },

  ]);