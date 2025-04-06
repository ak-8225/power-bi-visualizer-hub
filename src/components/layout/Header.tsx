
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur">
      <div className="flex h-14 items-center px-4 md:px-6">
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="relative w-full max-w-[400px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search dashboards..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-powerbi-red"></span>
          </Button>
          
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" alt="User" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
