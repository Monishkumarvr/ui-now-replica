
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { CalendarIcon, RefreshCw, Download } from "lucide-react";

const ReportControls = () => {
  return (
    <div className="space-y-4 mb-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Summary Report</h1>
        <div className="flex items-center gap-2">
          <Switch id="detailed-view" />
          <label htmlFor="detailed-view" className="text-sm">View Detailed Report</label>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <div className="w-32">
          <Select>
            <option>All</option>
          </Select>
        </div>
        <div className="w-36">
          <Select>
            <option>Furnace1</option>
          </Select>
        </div>
        <div className="relative flex items-center w-64">
          <Input type="text" placeholder="18/12/2023 - 19/12/2023" className="pl-8" />
          <CalendarIcon className="absolute left-2 h-4 w-4 text-gray-500" />
        </div>
        <Button className="bg-blue-900 hover:bg-blue-800">Filter</Button>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm">Show</span>
          <div className="w-24">
            <Select>
              <option>All</option>
            </Select>
          </div>
          <span className="text-sm">entries</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm">Search:</span>
          <Input type="text" className="w-56" />
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" className="bg-blue-100 border-blue-200 text-blue-700 hover:bg-blue-200">
            <RefreshCw className="h-4 w-4 mr-1" /> Refresh
          </Button>
          <Button variant="outline" className="bg-green-100 border-green-200 text-green-700 hover:bg-green-200">
            <Download className="h-4 w-4 mr-1" /> Download as Excel
          </Button>
          <Button variant="outline" className="bg-red-100 border-red-200 text-red-700 hover:bg-red-200">
            <Download className="h-4 w-4 mr-1" /> Download as PDF
          </Button>
        </div>
      </div>

      <div className="w-32">
        <Button variant="outline" className="bg-blue-900 text-white w-full flex justify-center items-center">
          Filter <span className="ml-1">▼</span>
        </Button>
      </div>
    </div>
  );
};

export default ReportControls;
