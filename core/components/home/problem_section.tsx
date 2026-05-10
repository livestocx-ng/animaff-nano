'use client';

import { motion } from 'framer-motion';
import { Box, Container, Grid, Stack, Text, Title } from '@mantine/core';
import { IconFlame } from '@tabler/icons-react';
import CountUp from 'react-countup';

const ProblemSection = () => {
  const problems = [
    {
      value: 1.5,
      prefix: '$',
      suffix: 'B',
      label: 'Annual U.S. dairy losses from heat stress',
      decimals: 1,
    },
    {
      value: 25,
      prefix: '',
      suffix: '%',
      label: 'Max milk yield reduction under moderate heat',
      decimals: 0,
    },
    {
      value: 0,
      prefix: '',
      suffix: '',
      label: 'Energy saved by fans & sprinklers during peak heat',
      decimals: 0,
      custom: '$0',
    },
  ];

  return (
    <Box
      component="section"
      id="problem"
      style={{
        background: '#0a1f14',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Grid gutter={0} align="stretch">
        {/* LEFT — Image */}
        <Grid.Col span={{ base: 12, lg: 5 }} style={{ position: 'relative', minHeight: 500 }}>
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/images/image_root_1.jpg)',
              // backgroundImage: 'url(/images/image_problem_cattle.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Warm amber overlay */}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to left, rgba(0,0,0,0) 50%, rgba(10,31,20,0.7) 100%), linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)',
            }}
          />
          {/* Right-side fade so it blends into dark content */}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to right, transparent 50%, #0a1f14 100%)',
              display: 'none',
            }}
            display={{ base: 'none', lg: 'block' }}
          />
        </Grid.Col>

        {/* RIGHT — Stats + Copy */}
        <Grid.Col span={{ base: 12, lg: 7 }}>
          <Box py={{ base: 64, lg: 96 }} px={{ base: 24, sm: 40, lg: 64 }}>
            <Stack gap="xl">
              {/* Section label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'rgba(251,146,60,0.1)',
                    border: '1px solid rgba(251,146,60,0.3)',
                    borderRadius: 50,
                    padding: '6px 16px',
                  }}
                >
                  <IconFlame size={14} color="#fb923c" />
                  <Text size="xs" fw={600} c="orange.4" style={{ letterSpacing: '0.05em' }}>
                    THE PROBLEM
                  </Text>
                </Box>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Title
                  order={2}
                  style={{
                    fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                    lineHeight: 1.2,
                    color: 'white',
                  }}
                >
                  Heat Stress Is Costing Farmers{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #fb923c, #f97316)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Billions
                  </span>{' '}
                  — Quietly
                </Title>
              </motion.div>

              {/* Animated stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Grid gutter="md">
                  {problems.map((p, i) => (
                    <Grid.Col key={i} span={{ base: 12, sm: 4 }}>
                      <Box
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(251,146,60,0.2)',
                          borderRadius: 16,
                          padding: '24px 20px',
                          backdropFilter: 'blur(10px)',
                          textAlign: 'center',
                          transition: 'border-color 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,146,60,0.5)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,146,60,0.2)';
                        }}
                      >
                        <Text
                          fw={900}
                          c="orange.4"
                          style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1 }}
                        >
                          {p.custom ? (
                            p.custom
                          ) : (
                            <>
                              {p.prefix}
                              <CountUp end={p.value} duration={3} decimals={p.decimals} />
                              {p.suffix}
                            </>
                          )}
                        </Text>
                        <Text size="xs" c="rgba(255,255,255,0.55)" mt={8} style={{ lineHeight: 1.4 }}>
                          {p.label}
                        </Text>
                      </Box>
                    </Grid.Col>
                  ))}
                </Grid>
              </motion.div>

              {/* Body copy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Text c="rgba(255,255,255,0.65)" style={{ lineHeight: 1.8, fontSize: 16 }}>
                  Current solutions — fans, sprinklers, and ventilation systems — are energy-intensive,
                  increasingly ineffective during extreme heat events, and costly to operate continuously.
                  As temperatures rise globally, these approaches are becoming inadequate for protecting
                  livestock health and farm productivity.
                </Text>
              </motion.div>

              {/* Pull quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Box
                  style={{
                    borderLeft: '3px solid #22a366',
                    paddingLeft: 20,
                    background: 'rgba(34,163,102,0.05)',
                    borderRadius: '0 12px 12px 0',
                    padding: '16px 20px',
                  }}
                >
                  <Text
                    c="rgba(255,255,255,0.8)"
                    style={{ fontStyle: 'italic', fontSize: 16, lineHeight: 1.6 }}
                  >
                    "Heat stress is one of the biggest hidden costs in our operation. We need a reliable,
                    low-cost way to protect our animals during extreme heat."
                  </Text>
                  <Text size="sm" c="climate.4" fw={600} mt={8}>
                    — U.S. Dairy Farmer, Finger Lakes, NY
                  </Text>
                </Box>
              </motion.div>
            </Stack>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default ProblemSection;
