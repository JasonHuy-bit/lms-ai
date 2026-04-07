import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import { TutorWidget } from "@/components/tutor";
import {Analytics} from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <div>{children}</div>
      <SanityLive />
      <TutorWidget />
      <Analytics />
      <SpeedInsights />
    </ClerkProvider>
  );
}

export default AppLayout;