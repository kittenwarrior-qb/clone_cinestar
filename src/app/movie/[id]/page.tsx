'use client';

import { useParams } from 'next/navigation';

export default function HomeDetailPage() {
  const { id } = useParams();

  return (
    <section className="">
      <h1 className="">Welcome to movie ID: {id}</h1>
    </section>
  );
}
