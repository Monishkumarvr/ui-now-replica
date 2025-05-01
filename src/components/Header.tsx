
import { Avatar } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 border-b">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/1156913c-7234-4624-bfd3-7ef0b00e3d0e.png" 
          alt="NOW Purchase Logo" 
          className="h-10" 
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="font-medium text-gray-700">NowPurchase</span>
        <Avatar className="h-10 w-10 border border-gray-200">
          <UserRound className="h-6 w-6" />
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
