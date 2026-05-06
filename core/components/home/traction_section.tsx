'use client';

import { motion } from 'framer-motion';
import { Box, Container, Grid, Group, Stack, Text, Title } from '@mantine/core';
import { IconAward, IconBuildingBank, IconCurrencyDollar, IconUsers } from '@tabler/icons-react';

const TractionSection = () => {
  const partners = [
    {
      emoji: '🏛️',
      name: 'University of Wyoming',
      detail: 'Nanoparticles Lab — Active R&D Partner',
      color: '#fbbf24',
    },
    // {
    //   emoji: '🇩🇪',
    //   name: 'German Government / GIZ',
    //   detail: 'Funding 200+ farmer demos through Dec 2026',
    //   color: '#38bdf8',
    // },
    {
      emoji: '🇺🇸',
      name: 'U.S. Chamber of Commerce',
      detail: 'Digital Innovation Award Winner',
      color: '#5cc494',
    },
    // {
    //   emoji: '🇺🇳',
    //   name: 'UNDP Youth4Climate',
    //   detail: '$30,000 Grant Recipient',
    //   color: '#a78bfa',
    // },
    // {
    //   emoji: '🇪🇺',
    //   name: 'European Union',
    //   detail: 'Co-funded early testing & farmer onboarding',
    //   color: '#fb923c',
    // },
    {
      emoji: '💰',
      name: 'Alexis Ohanian (Reddit Founder)',
      detail: '$100,000+ invested in founding team',
      color: '#f472b6',
    },
  ];

  const milestones = [
    { icon: IconCurrencyDollar, label: 'Monthly Revenue', value: '$10K+', color: '#5cc494' },
    { icon: IconUsers, label: 'Farmer Engagements', value: '600+', color: '#38bdf8' },
    { icon: IconAward, label: 'Awards & Grants', value: '$730K+', color: '#fbbf24' },
    { icon: IconBuildingBank, label: 'Government Partners', value: '3+', color: '#a78bfa' },
  ];

  return (
    <Box
      component="section"
      id="traction"
      py={{ base: 80, lg: 120 }}
      style={{ background: '#f8faf9', position: 'relative', overflow: 'hidden' }}
    >
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(34,163,102,0.05) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />
      <Container size="xl">
        <Stack gap={64}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Stack align="center" gap="md">
              <Box
                style={{
                  display: 'inline-block',
                  background: 'rgba(34,163,102,0.1)',
                  border: '1px solid rgba(34,163,102,0.3)',
                  borderRadius: 50,
                  padding: '6px 20px',
                  color: '#22a366',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                }}
              >
                TRACTION & VALIDATION
              </Box>
              <Title
                order={2}
                ta="center"
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #0a1f14, #22a366)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Proven by Partners. Tested in the Field.
              </Title>
              <Text size="lg" c="dimmed" ta="center" maw={640}>
                We have been tested, validated, and supported by world-class institutions and
                governments across four continents.
              </Text>
            </Stack>
          </motion.div>

          {/* Milestone Stats */}
          <Grid gutter="lg">
            {milestones.map((m, i) => (
              <Grid.Col key={i} span={{ base: 6, lg: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    ta="center"
                    style={{
                      background: '#0a1f14',
                      borderRadius: 20,
                      padding: '32px 20px',
                      border: `1px solid ${m.color}33`,
                      boxShadow: `0 0 40px ${m.color}10`,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 60px ${m.color}25, 0 20px 40px rgba(0,0,0,0.3)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${m.color}10`;
                    }}
                  >
                    <Box
                      w={56}
                      h={56}
                      mx="auto"
                      mb="md"
                      style={{
                        background: `${m.color}20`,
                        border: `1px solid ${m.color}40`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <m.icon size={28} color={m.color} />
                    </Box>
                    <Text fw={900} style={{ fontSize: '2rem', color: m.color, lineHeight: 1 }}>
                      {m.value}
                    </Text>
                    <Text size="sm" c="rgba(255,255,255,0.6)" mt={8}>
                      {m.label}
                    </Text>
                  </Box>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>

          {/* Partner cards */}
          <Grid gutter="md">
            {partners.map((p, i) => (
              <Grid.Col key={i} span={{ base: 12, sm: 6, lg: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Box
                    style={{
                      background: 'white',
                      border: '1px solid rgba(34,163,102,0.12)',
                      borderRadius: 16,
                      padding: '20px 24px',
                      display: 'flex',
                      gap: 16,
                      alignItems: 'flex-start',
                      transition: 'box-shadow 0.3s, transform 0.3s',
                      cursor: 'default',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(34,163,102,0.12)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}
                  >
                    <Text style={{ fontSize: '2rem', lineHeight: 1 }}>{p.emoji}</Text>
                    <Stack gap={4}>
                      <Text fw={700} size="sm" c="#0a1f14">
                        {p.name}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {p.detail}
                      </Text>
                    </Stack>
                  </Box>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default TractionSection;
