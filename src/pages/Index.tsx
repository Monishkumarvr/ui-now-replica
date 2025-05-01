
import Header from "@/components/Header";
import ReportControls from "@/components/ReportControls";
import ReportTable from "@/components/ReportTable";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6 max-w-full">
        <ReportControls />
        <ReportTable />
      </div>
    </div>
  );
};

export default Index;
