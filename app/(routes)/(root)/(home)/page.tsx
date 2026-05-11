'use client';

import { Box } from '@mantine/core';
import Hero from '@/core/components/home/hero';
import TeamSection from '@/core/components/home/team_section';
import ServicesSection from '@/core/components/home/services_section';
import MarketSection from '@/core/components/home/market_section';
import ProblemSection from '@/core/components/home/problem_section';
import ImpactSection from '@/core/components/home/impact_section';
import TractionSection from '@/core/components/home/traction_section';
import TechnologySection from '@/core/components/home/technology_section';

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <ProblemSection />
      <TechnologySection />
      {/* <ServicesSection /> */}
      <MarketSection />
      <ImpactSection />
      <TractionSection />
      <TeamSection />
    </Box>
  );
}
