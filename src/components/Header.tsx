
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 border-b">
      <div className="flex items-center">
        <img 
          src="/now-purchase-logo.png" 
          alt="NOW Purchase Logo" 
          className="h-10" 
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="font-medium text-gray-700">NowPurchase</span>
        <Avatar className="h-10 w-10 bg-blue-100 border border-gray-200">
          <AvatarFallback className="bg-blue-100 text-blue-600">
            <UserRound className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
