'use client';

import { motion } from 'framer-motion';
import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IconBuildingFactory2,
  IconCurrencyDollar,
  IconDropletHalf2Filled,
  IconTemperature,
} from '@tabler/icons-react';

const ImpactSection = () => {
  const impacts = [
    {
      icon: IconCurrencyDollar,
      value: '$1.5B+',
      label: 'Annual U.S. Heat Stress Losses',
      description: 'Lost by the U.S. dairy industry to heat stress every year',
    },
    {
      icon: IconTemperature,
      value: '10–25%',
      label: 'Milk Yield Loss',
      description: 'Reduction in output under moderate heat stress conditions',
    },
    {
      icon: IconDropletHalf2Filled,
      value: '$0',
      label: 'Energy Required',
      description: 'Our passive system needs zero electricity to operate',
    },
    {
      icon: IconBuildingFactory2,
      value: '600+',
      label: 'Farmer Engagements',
      description: 'Active engagements with U.S. and international farm operators',
    },
  ];

  const testimonials = [
    {
      quote:
        'Heat stress is one of the biggest hidden costs in our operation. During last summer\'s heat dome, we lost nearly 18% of projected milk output in just two weeks. We need a solution that works without adding to our energy bill.',
      author: 'Michael Haverford',
      location: 'Amarillo, Texas',
      role: 'Dairy Farm Operator',
      farm: '~400 head Holstein herd',
    },
    {
      quote:
        'We\'ve tried every combination of fans, misters, and shade structures. They help at the margins but during extreme heat they can\'t keep up — and the electric bill in August is brutal. A passive system that just works is exactly what this region needs.',
      author: 'Sandra Kowalski',
      location: 'Omaha, Nebraska',
      role: 'Commercial Livestock Farmer',
      farm: 'Multi-site beef and dairy operation',
    },
    {
      quote:
        'Climate change is real and it\'s hitting our farms hard. We\'ve seen more days over 90°F in the last three years than in the previous decade. Any technology that can protect animal health without adding operational complexity is worth serious consideration.',
      author: 'James Trentworth',
      location: 'Bozeman, Montana',
      role: 'Farm Owner',
      farm: 'Montana cattle ranch',
    },
  ];

  return (
    <Box component="section" id="impact" py={0}>
      {/* ─── Top: Split — Aerial Farm image + stats ─── */}
      <Box style={{ background: '#f8faf9' }}>
        <Grid gutter={0} align="stretch">
          {/* RIGHT — U.S. aerial farm image */}
          <Grid.Col
            span={{ base: 12, lg: 6 }}
            style={{ position: 'relative', minHeight: 520, order: 2 }}
          >
            <Box
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(/images/image_root_3.jpg)',
                // backgroundImage: 'url(/images/image_market_farm_aerial.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Left-side fade on desktop */}
            <Box
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, #f8faf9 0%, transparent 30%)',
              }}
              display={{ base: 'none', lg: 'block' }}
            />
            {/* Bottom fade on mobile */}
            <Box
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 50%, #f8faf9 100%)',
              }}
              display={{ base: 'block', lg: 'none' }}
            />

            {/* Floating region card */}
            {/* <motion.div
              style={{
                position: 'absolute',
                bottom: 32,
                left: 24,
                background: 'rgba(10,31,20,0.92)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: 16,
                padding: '16px 20px',
                border: '1px solid rgba(34,163,102,0.4)',
                maxWidth: 230,
                zIndex: 10,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              animate={{ y: [0, -6, 0] }}
            >
              <Text size="xs" c="climate.4" fw={700}>
                🇺🇸 Grow-NY Pilot Region
              </Text>
              <Text size="xs" c="rgba(255,255,255,0.7)" mt={4} style={{ lineHeight: 1.5 }}>
                Finger Lakes · Central NY · Southern Tier — America's dairy heartland
              </Text>
            </motion.div> */}
          </Grid.Col>

          {/* LEFT — Stats */}
          <Grid.Col span={{ base: 12, lg: 6 }} style={{ order: 1 }}>
            <Box py={{ base: 64, lg: 96 }} px={{ base: 24, sm: 40, lg: 64 }}>
              <Stack gap="xl">
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
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
                    U.S. MARKET IMPACT
                  </Box>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Title
                    order={2}
                    style={{
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                      lineHeight: 1.2,
                      background: 'linear-gradient(135deg, #0a1f14, #22a366)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Addressing America's Biggest Hidden Farm Cost
                  </Title>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Text c="dimmed" size="md" style={{ lineHeight: 1.8, maxWidth: 560 }}>
                    U.S. livestock farmers lose over{' '}
                    <span style={{ color: '#0a1f14', fontWeight: 600 }}>$1.5 billion annually</span>{' '}
                    to heat stress — a figure projected to rise sharply with climate change. Animaff-Nano
                    delivers a materials-driven, zero-electricity solution built specifically for
                    commercial farms in the Grow-NY region and beyond.
                  </Text>
                </motion.div>

                <Grid gutter="md">
                  {impacts.map((impact, index) => (
                    <Grid.Col key={index} span={{ base: 6 }}>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card
                          ta="center"
                          p="lg"
                          radius="lg"
                          style={{
                            transition: 'box-shadow 0.3s, transform 0.3s',
                            cursor: 'default',
                            border: '1px solid rgba(34,163,102,0.12)',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(34,163,102,0.15)';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <Stack align="center" gap="sm">
                            <Box
                              w={52}
                              h={52}
                              style={{
                                background:
                                  'linear-gradient(135deg, var(--mantine-color-climate-6), var(--mantine-color-climate-4))',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <impact.icon size={26} color="white" />
                            </Box>
                            <Text fw={900} c="climate.6" style={{ fontSize: '1.7rem', lineHeight: 1 }}>
                              {impact.value}
                            </Text>
                            <Text fw={700} size="sm" ta="center" c="#0a1f14">
                              {impact.label}
                            </Text>
                            <Text size="xs" c="dimmed" ta="center" style={{ lineHeight: 1.5 }}>
                              {impact.description}
                            </Text>
                          </Stack>
                        </Card>
                      </motion.div>
                    </Grid.Col>
                  ))}
                </Grid>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>

      {/* ─── Bottom: U.S. Farmer Testimonials ─── */}
      <Box py={80} style={{ background: 'white' }}>
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Stack align="center" gap="md" mb={56}>
              <Box
                style={{
                  display: 'inline-block',
                  background: 'rgba(34,163,102,0.08)',
                  border: '1px solid rgba(34,163,102,0.25)',
                  borderRadius: 50,
                  padding: '6px 20px',
                  color: '#22a366',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                }}
              >
                FARMER VOICES
              </Box>
              <Title order={3} size="2rem" ta="center" c="#0a1f14">
                What U.S. Farmers Are Saying
              </Title>
              <Text size="lg" c="dimmed" ta="center" maw={640} style={{ lineHeight: 1.6 }}>
                From over 600 direct farmer engagements across the Grow-NY region — these are
                the challenges farmers tell us they face every summer.
              </Text>
            </Stack>
          </motion.div>

          <Grid gutter="lg">
            {testimonials.map((t, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card
                    h="100%"
                    p="xl"
                    radius="lg"
                    style={{
                      border: '1px solid rgba(34,163,102,0.12)',
                      transition: 'box-shadow 0.3s, transform 0.3s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(34,163,102,0.12)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Stack gap="md">
                      {/* Large quote mark */}
                      <Text
                        style={{
                          fontSize: '4rem',
                          lineHeight: 0.8,
                          color: '#22a366',
                          fontFamily: 'Georgia, serif',
                          opacity: 0.25,
                        }}
                      >
                        "
                      </Text>
                      <Text c="dimmed" style={{ fontStyle: 'italic', lineHeight: 1.75 }}>
                        {t.quote}
                      </Text>
                      <Box pt="md" style={{ borderTop: '1px solid var(--mantine-color-gray-2)' }}>
                        <Text fw={700} c="#0a1f14">
                          {t.author}
                        </Text>
                        <Text size="sm" c="climate.6" fw={500}>
                          {t.role}
                        </Text>
                        <Text size="xs" c="dimmed" mt={2}>
                          📍 {t.location} &nbsp;·&nbsp; {t.farm}
                        </Text>
                      </Box>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ImpactSection;