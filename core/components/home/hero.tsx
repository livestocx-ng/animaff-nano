'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Box, Container, Flex, Grid, Group, Image, Stack, Text, Title, Badge } from '@mantine/core';
import { IconArrowRight, IconFlask, IconTemperature } from '@tabler/icons-react';
import { useAppContext } from '@/core/context';
import useFetchClimateResilienceForecastQuery from '@/core/hooks/public/useFetchClimateResilienceForecastQuery';
import { Sponsors } from '@/core/utilities';

const Hero = () => {
  useFetchClimateResilienceForecastQuery();
  const { climateResilienceForecast } = useAppContext();

  const stats = [
    { value: 13390, label: 'Active Farmers', suffix: '+', decimals: 0 },
    { value: 2, label: 'Countries', suffix: '', decimals: 0 },
    { value: 10, label: 'Monthly Revenue', prefix: '$', suffix: 'K+', decimals: 0 },
    { value: 600, label: 'Farmer Engagements', suffix: '+', decimals: 0 },
  ];

  return (
    <Box>
      {/* ─── HERO ─── */}
      <Box
        component="section"
        id="home"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #081a10 0%, #0a1f14 50%, #0d2a1a 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Molecular mesh background */}
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(34,163,102,0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(92,196,148,0.06) 0%, transparent 50%)`,
            pointerEvents: 'none',
          }}
        />
        {/* Subtle grid lines */}
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(34,163,102,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,163,102,0.04) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }}
        />

        {/* Climate data ticker */}
        <Box
          style={{
            borderBottom: '1px solid rgba(34,163,102,0.2)',
            background: 'rgba(34,163,102,0.05)',
            overflow: 'hidden',
            padding: '8px 0',
          }}
          display={{ base: 'none', md: 'block' }}
        >
          <motion.div
            style={{ display: 'flex', gap: 48, width: 'max-content', alignItems: 'center' }}
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
          >
            {[...climateResilienceForecast, ...climateResilienceForecast].map((item, index) => (
              <Flex
                key={`${item.name}-${index}`}
                align="center"
                gap={8}
                style={{ borderRight: '1px solid rgba(34,163,102,0.2)', paddingRight: 48 }}
              >
                <img
                  width={24}
                  height={24}
                  src={item.condition_icon}
                  alt={item.name}
                  style={{ borderRadius: 4 }}
                />
                <Text size="xs" c="rgba(255,255,255,0.7)" fw={500}>
                  {item.name}, {item.country}
                </Text>
                <Text size="xs" c="climate.4" fw={700}>
                  {item.temp_c}°C
                </Text>
              </Flex>
            ))}
          </motion.div>
        </Box>

        {/* Main hero content */}
        <Box style={{ flex: 1, display: 'flex', alignItems: 'center', paddingTop: 40, paddingBottom: 60 }}>
          <Container size="xl" w="100%">
            <Grid gutter={{ base: 'xl', lg: 80 }} align="center">
              {/* LEFT — Content */}
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Stack gap="xl">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Box style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      <Badge
                        size="lg"
                        radius="xl"
                        style={{
                          background: 'rgba(34,163,102,0.15)',
                          border: '1px solid rgba(34,163,102,0.4)',
                          color: '#5cc494',
                          fontWeight: 500,
                          padding: '8px 16px',
                        }}
                        leftSection={<IconFlask size={14} />}
                      >
                        Nanotechnology-Powered Livestock Infrastructure
                      </Badge>
                    </Box>
                  </motion.div>

                  {/* Headline */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Title
                      order={1}
                      style={{
                        fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                        lineHeight: 1.1,
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #ffffff 0%, #5cc494 60%, #22a366 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Cooling Livestock Farms — Without a Single Watt of Electricity
                    </Title>
                  </motion.div>

                  {/* Sub-headline */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                  >
                    <Text
                      size="lg"
                      style={{
                        color: 'rgba(255,255,255,0.65)',
                        lineHeight: 1.7,
                        maxWidth: 560,
                      }}
                    >
                      Advanced radiative cooling nanocoatings and phase-change materials passively
                      regulate barn temperatures — protecting animals and farm productivity with{' '}
                      <span style={{ color: '#5cc494', fontWeight: 600 }}>zero energy costs</span>.
                    </Text>
                  </motion.div>

                  {/* Stats grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <Grid gutter="md">
                      {stats.map((stat, i) => (
                        <Grid.Col key={i} span={6}>
                          <Box
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(34,163,102,0.2)',
                              borderRadius: 12,
                              padding: '16px',
                              backdropFilter: 'blur(10px)',
                            }}
                          >
                            <Text
                              fw={800}
                              style={{
                                fontSize: '1.6rem',
                                color: '#5cc494',
                                lineHeight: 1,
                              }}
                            >
                              {stat.prefix}
                              <CountUp end={stat.value} duration={3} separator="," />
                              {stat.suffix}
                            </Text>
                            <Text size="xs" c="rgba(255,255,255,0.5)" mt={4}>
                              {stat.label}
                            </Text>
                          </Box>
                        </Grid.Col>
                      ))}
                    </Grid>
                  </motion.div>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.65 }}
                  >
                    <Group gap="md" align="center" wrap="wrap">
                      <Link href="/contact-us">
                        <Box
                          component="button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '14px 28px',
                            background: 'linear-gradient(135deg, #22a366, #10b981)',
                            border: 'none',
                            borderRadius: 50,
                            color: 'white',
                            fontWeight: 600,
                            fontSize: 15,
                            cursor: 'pointer',
                            boxShadow: '0 0 30px rgba(34,163,102,0.4)',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(34,163,102,0.6)';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(34,163,102,0.4)';
                          }}
                        >
                          Join Our Pilot Program <IconArrowRight size={16} />
                        </Box>
                      </Link>
                      {/* <Link href="https://climateresilience.livestocx.com" target="_blank">
                        <Box
                          component="button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '13px 28px',
                            background: 'transparent',
                            border: '1px solid rgba(34,163,102,0.5)',
                            borderRadius: 50,
                            color: '#5cc494',
                            fontWeight: 600,
                            fontSize: 15,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(34,163,102,0.1)';
                            (e.currentTarget as HTMLElement).style.borderColor = '#22a366';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = 'transparent';
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,163,102,0.5)';
                          }}
                        >
                          Explore Platform
                        </Box>
                      </Link> */}
                    </Group>

                    {/* App Store badges */}
                    {/* <Group gap="md" mt="lg">
                      <Link
                        href="https://apps.apple.com/ng/app/livestocx/id6738842775?platform=iphone"
                        target="_blank"
                      >
                        <Image
                          src="/icons/icon_appstore.svg"
                          alt="App Store"
                          w={140}
                          h="auto"
                          fit="contain"
                        />
                      </Link>
                      <Link
                        href="https://play.google.com/store/apps/details?id=com.livestocx.livestocx_mobile"
                        target="_blank"
                      >
                        <Image
                          src="/icons/icon_playstore.svg"
                          alt="Google Play"
                          w={140}
                          h="auto"
                          fit="contain"
                        />
                      </Link>
                    </Group> */}
                  </motion.div>
                </Stack>
              </Grid.Col>

              {/* RIGHT — Hero Image */}
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <Box style={{ position: 'relative' }}>
                    {/* Main image */}
                    <Box
                      style={{
                        borderRadius: 24,
                        overflow: 'hidden',
                        boxShadow: '0 0 80px rgba(34,163,102,0.25), 0 40px 80px rgba(0,0,0,0.6)',
                        border: '1px solid rgba(34,163,102,0.2)',
                      }}
                    >
                      <Image
                        src="/images/image_hero_barn_nano.png"
                        alt="Livestock barn with nanotechnology cooling coating reflecting solar radiation"
                        style={{ display: 'block', width: '100%' }}
                      />
                    </Box>

                    {/* Floating card — top right: Live Alert */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: -16,
                        right: -12,
                        background: 'rgba(10, 31, 20, 0.9)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderRadius: 12,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                        padding: '12px 16px',
                        maxWidth: 180,
                        border: '1px solid rgba(34,163,102,0.3)',
                        zIndex: 10,
                      }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Group gap={6} mb={6}>
                        <Box
                          w={8}
                          h={8}
                          style={{
                            background: '#22c55e',
                            borderRadius: '50%',
                            boxShadow: '0 0 6px #22c55e',
                          }}
                        />
                        <Text size="xs" fw={600} c="white">
                          Live Alert
                        </Text>
                      </Group>
                      <Text size="xs" c="rgba(255,255,255,0.65)" style={{ lineHeight: 1.4 }}>
                        Disease outbreak detected — Vet response dispatched
                      </Text>
                    </motion.div>

                    {/* Floating card — bottom left: Weather */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        bottom: -20,
                        left: -12,
                        background: 'rgba(10, 31, 20, 0.9)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderRadius: 12,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                        padding: '12px 16px',
                        maxWidth: 190,
                        border: '1px solid rgba(92,196,148,0.25)',
                        zIndex: 10,
                      }}
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    >
                      <Group gap={6} mb={6}>
                        <IconTemperature size={14} color="#5cc494" />
                        <Text size="xs" fw={600} c="white">
                          Heat Forecast
                        </Text>
                      </Group>
                      <Text size="xs" c="rgba(255,255,255,0.65)" style={{ lineHeight: 1.4 }}>
                        Heat stress warning in 5 days — prepare cooling systems
                      </Text>
                    </motion.div>

                    {/* Glow orb behind image */}
                    <Box
                      style={{
                        position: 'absolute',
                        inset: -40,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(34,163,102,0.12) 0%, transparent 70%)',
                        zIndex: -1,
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* ─── Sponsor Ticker ─── */}
        {/* <Box
          style={{
            borderTop: '1px solid rgba(34,163,102,0.15)',
            background: 'rgba(0,0,0,0.2)',
            padding: '20px 0',
            overflow: 'hidden',
          }}
        >
          <motion.div
            style={{ display: 'flex', gap: 48, width: 'max-content', alignItems: 'center' }}
            animate={{ x: [0, -1400] }}
            transition={{ duration: 35, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
          >
            {[...Sponsors, ...Sponsors].map((sponsor, index) => (
              <Box
                key={`${sponsor.name}-${index}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  borderRight: '1px solid rgba(255,255,255,0.1)',
                  paddingRight: 48,
                  opacity: 0.7,
                  filter: 'grayscale(0.3) brightness(1.2)',
                  transition: 'opacity 0.2s',
                }}
              >
                <Image
                  width={50}
                  height={50}
                  src={sponsor.image}
                  style={{ objectFit: 'contain', borderRadius: 8 }}
                  alt={`Backed by: ${sponsor.name}`}
                />
              </Box>
            ))}
          </motion.div>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Hero;
