import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { ChatWidget } from './components/ChatWidget';
import { ViewName } from './types';
import { HomeView } from './views/HomeView';
import { FixturesView } from './views/FixturesView';
import { TicketGuideView } from './views/TicketGuideView';
import { BuyTicketsView } from './views/BuyTicketsView';
import { SquadView } from './views/SquadView';
import { AboutView } from './views/AboutView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewName>(ViewName.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewName.HOME:
        return <HomeView onNavigate={setCurrentView} />;
      case ViewName.FIXTURES:
        return <FixturesView />;
      case ViewName.TICKET_GUIDE:
        return <TicketGuideView />;
      case ViewName.BUY_TICKETS:
        return <BuyTicketsView />;
      case ViewName.SQUAD:
        return <SquadView />;
      case ViewName.ABOUT:
        return <AboutView />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderView()}
      <ChatWidget />
    </Layout>
  );
};

export default App;