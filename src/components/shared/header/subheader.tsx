'use client';

import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SubHeader() {
  return (
    <div className="w-full bg-white border-b">
      <div className="w-full max-w-[1200px] mx-auto px-4 h-10 flex items-center justify-between text-sm text-muted-foreground">
        
        <div className="flex items-center gap-2">
            <Button variant="ghost" className="h-auto !p-0 text-base font-medium text-black hover:text-primary">
                <MapPin className="w-4 h-4 text-primary" />
                Chọn rạp
            </Button>
            <Button variant="ghost" className="h-auto p-0 text-base font-medium text-black hover:text-primary">
                <MapPin className="w-4 h-4 text-primary" />
                Lịch chiếu
            </Button>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/promotions" className="hover:text-primary transition-colors">Khuyến mãi</Link>
          <Link href="/about" className="hover:text-primary transition-colors">Giới thiệu</Link>
          <Link href="/events" className="hover:text-primary transition-colors">Sự kiện</Link>
        </div>
      </div>
    </div>
  );
}
