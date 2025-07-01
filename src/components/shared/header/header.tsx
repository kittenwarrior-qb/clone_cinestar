'use client';

import Link from 'next/link';
import { SubHeader } from "@/components/shared/header/subheader";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Ticket, Popcorn, Search, User, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full border-b sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="w-full max-w-[1200px] mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          Cinestar
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <Button size="sm" variant="outline" className="flex items-center gap-1">
            <Ticket className="w-4 h-4" />
            Đặt vé
          </Button>
          <Button size="sm" variant="outline" className="flex items-center gap-1">
            <Popcorn className="w-4 h-4" />
            Bắp nước
          </Button>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex justify-end mx-6">
          <div className="relative w-full max-w-[250px] h-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Tìm phim, rạp, suất chiếu..."
              className="pl-9 h-10 border border-gray-300 rounded-full"
            />
          </div>
        </div>


        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <User className="w-4 h-4" />
            Đăng nhập
          </Button>
        </div>

        <div className="flex md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
