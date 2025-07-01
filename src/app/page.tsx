'use client';

import { CarouselBanner } from "@/app/(user)/_components/banners/carouselbanner";
import { QuickBook } from "@/app/(user)/_components/forms/quickbook";

export default function UserHomePage() {
  return (
    <section className="w-full max-w-[1200px] mx-auto">
        <CarouselBanner></CarouselBanner>
        <QuickBook></QuickBook>
        <p className="mt-6 text-2xl text-center">PHIM ĐANG CHIẾU</p>
    </section>
  );
}
