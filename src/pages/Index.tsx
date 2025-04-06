
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <DashboardLayout />
        </main>
      </div>
    </div>
  );
};

export default Index;
