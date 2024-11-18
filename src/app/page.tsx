import TipTapEditor from "@/components/TipTapEditor";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="basis-1/2 p-8 rounded border border-slate-600">
        <TipTapEditor />
      </section>

      <section className="basis-1/2 p-8 rounded">SECTION 2</section>
    </div>
  );
}
