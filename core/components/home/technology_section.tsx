'use client';

import { motion } from 'framer-motion';
import { Box, Container, Grid, Group, Image, Stack, Text, Title } from '@mantine/core';
import { IconBolt, IconSnowflake } from '@tabler/icons-react';

const TechnologySection = () => {
  const techCards = [
    {
      icon: IconBolt,
      iconColor: '#fbbf24',
      title: 'Radiative Cooling Coating',
      subtitle: 'Al₂O₃ Nanoparticle Outer Layer',
      description:
        'Our engineered aluminium oxide nanoparticle coating reflects up to 99% of incoming solar radiation and emits heat as infrared radiation directly into space — with zero energy input.',
      glow: 'rgba(251,191,36,0.15)',
      border: 'rgba(251,191,36,0.25)',
    },
    {
      icon: IconSnowflake,
      iconColor: '#38bdf8',
      title: 'Phase-Change Material Panels',
      subtitle: 'Vanadium Oxide Inner Wall System',
      description:
        'PCM panels embedded in walls and insulation absorb large amounts of heat from the barn interior during peak daytime temperatures via a phase transition, then safely release it at night.',
      glow: 'rgba(56,189,248,0.15)',
      border: 'rgba(56,189,248,0.25)',
    },
  ];

  return (
    <Box
      component="section"
      id="technology"
      style={{
        background: '#f8faf9',
        position: 'relative',
        overflow: 'hidden',
      }}
      py={{ base: 80, lg: 120 }}
    >
      {/* Subtle background texture */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 10% 20%, rgba(34,163,102,0.04) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(34,163,102,0.04) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      <Container size="xl">
        <Stack gap={80}>
          {/* Section header */}
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
                THE TECHNOLOGY
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
                Two Technologies. One Self-Regulating System.
              </Title>
              <Text
                ta="center"
                size="lg"
                c="dimmed"
                maw={680}
                style={{ lineHeight: 1.7 }}
              >
                Our dual-layer approach combines an outer radiative cooling coating with inner
                phase-change material panels to create a completely passive thermal management system.
              </Text>
              {/* Statement text */}
              <Box
                style={{
                  background: 'linear-gradient(135deg, #0a1f14, #1a7f4f)',
                  borderRadius: 100,
                  padding: '12px 36px',
                  marginTop: 8,
                }}
              >
                <Text fw={800} c="white" size="lg" style={{ letterSpacing: '0.02em' }}>
                  No electricity &nbsp;·&nbsp; No fans &nbsp;·&nbsp; No ongoing energy costs
                </Text>
              </Box>
            </Stack>
          </motion.div>

          {/* Diagram + nanoparticle closeup */}
          <Grid gutter="xl" align="center">
            {/* Cross-section diagram — main visual */}
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
              >
                <Box style={{ position: 'relative' }}>
                  <Box
                    style={{
                      borderRadius: 20,
                      overflow: 'hidden',
                      boxShadow: '0 0 60px rgba(34,163,102,0.15), 0 30px 60px rgba(0,0,0,0.15)',
                      border: '1px solid rgba(34,163,102,0.2)',
                      background: '#0a1f14',
                    }}
                  >
                    <Image
                      src="/images/image_tech_crosssection.png"
                      alt="Cross-section diagram of dual-layer cooling system — outer radiative coating and inner phase-change panels"
                      style={{ display: 'block', width: '100%' }}
                    />
                  </Box>
                  <Text
                    ta="center"
                    size="sm"
                    c="dimmed"
                    mt="sm"
                    style={{ fontStyle: 'italic' }}
                  >
                    Dual-layer passive thermal system — day & night heat management cycle
                  </Text>

                  {/* Nanoparticle closeup — overlapping inset card */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: 40,
                      right: -20,
                      width: 160,
                      background: '#0a1f14',
                      borderRadius: 16,
                      overflow: 'hidden',
                      border: '2px solid rgba(34,163,102,0.4)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                    }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  >
                    <Image
                      src="/images/image_nano_closeup.png"
                      alt="Al₂O₃ nanoparticle coating closeup — hexagonal molecular lattice"
                      style={{ display: 'block', width: '100%' }}
                    />
                    <Box
                      style={{
                        padding: '8px 10px',
                        borderTop: '1px solid rgba(34,163,102,0.3)',
                      }}
                    >
                      <Text size="xs" c="climate.4" fw={600} ta="center">
                        Al₂O₃ Nanoparticle Coating
                      </Text>
                      <Text size="xs" c="rgba(255,255,255,0.5)" ta="center">
                        99% Solar Reflectance
                      </Text>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid.Col>

            {/* Tech feature cards */}
            <Grid.Col span={{ base: 12, lg: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
              >
                <Stack gap="lg">
                  {techCards.map((card, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        style={{
                          background: '#0a1f14',
                          border: `1px solid ${card.border}`,
                          borderRadius: 20,
                          padding: '28px',
                          boxShadow: `0 0 40px ${card.glow}`,
                          transition: 'transform 0.3s, box-shadow 0.3s',
                          cursor: 'default',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 60px ${card.glow}, 0 20px 40px rgba(0,0,0,0.3)`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${card.glow}`;
                        }}
                      >
                        <Group gap="md" mb="md">
                          <Box
                            w={48}
                            h={48}
                            style={{
                              background: `${card.glow}`,
                              border: `1px solid ${card.border}`,
                              borderRadius: 12,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <card.icon size={24} color={card.iconColor} />
                          </Box>
                          <Stack gap={2}>
                            <Text fw={700} c="white" size="md">
                              {card.title}
                            </Text>
                            <Text size="xs" c={card.iconColor} fw={500}>
                              {card.subtitle}
                            </Text>
                          </Stack>
                        </Group>
                        <Text c="rgba(255,255,255,0.65)" style={{ lineHeight: 1.7 }} size="sm">
                          {card.description}
                        </Text>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default TechnologySection;
