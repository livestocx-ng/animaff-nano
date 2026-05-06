'use client';

import { motion } from 'framer-motion';
import { Box, Container, Grid, Group, Stack, Text, Title, Anchor } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Oghenekevwe Emadago',
      role: 'COO / Biophysicist & Materials Lead',
      bio: 'Award-winning biophysicist and O\'Shaughnessy Fellow, currently advancing materials research and AI strategy from the United States. A Chatham House policy-maker and NAEE 30Under30 leader driving global scientific innovation.',
      highlights: [
        '$100K O\'Shaughnessy Fellowship',
        'NAEE 30Under30',
        'Chatham House Policy-Maker',
      ],
      linkedin: 'https://www.linkedin.com/in/oghenekevwe-emadago/',
    },
    {
      name: 'Yada Martins',
      role: 'CTO / Full-Stack AI Engineer',
      bio: 'Distinguished systems engineer specializing in climate-resilient infrastructure. Secured major GIZ and UNDP contracts totaling $80K for sustainable innovation. Recognized by The World Around for pioneering high-impact climate-tech solutions.',
      highlights: [
        '$50K GIZ Government Contract',
        'UNDP Youth4Climate $30K Grant',
        'NCAIR Hackathon Winner',
      ],
      linkedin: 'https://www.linkedin.com/in/yada-martins',
    },
  ];

  return (
    <Box
      component="section"
      id="team"
      style={{ background: '#0a1f14', overflow: 'hidden', position: 'relative' }}
    >
      <Grid gutter={0} align="stretch">
        {/* LEFT — Lab image */}
        <Grid.Col span={{ base: 12, lg: 5 }} style={{ position: 'relative', minHeight: 520 }}>
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/images/image_team_lab.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Right fade to dark on desktop */}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, transparent 50%, #0a1f14 100%)',
            }}
            display={{ base: 'none', lg: 'block' }}
          />
          {/* Bottom overlay on mobile */}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, #0a1f14 100%)',
            }}
            display={{ base: 'block', lg: 'none' }}
          />

          {/* Lab label card */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: 24,
              right: 24,
              background: 'rgba(10,31,20,0.92)',
              backdropFilter: 'blur(16px)',
              borderRadius: 12,
              border: '1px solid rgba(34,163,102,0.3)',
              padding: '12px 18px',
              zIndex: 10,
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Text size="xs" c="climate.4" fw={700}>
              🔬 University of Wyoming
            </Text>
            <Text size="xs" c="rgba(255,255,255,0.6)" mt={2}>
              Nanoparticles Lab — Active R&D Partner
            </Text>
          </motion.div>
        </Grid.Col>

        {/* RIGHT — Team cards */}
        <Grid.Col span={{ base: 12, lg: 7 }}>
          <Box py={{ base: 64, lg: 96 }} px={{ base: 24, sm: 40, lg: 64 }}>
            <Stack gap="xl">
              {/* Label + Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Stack gap="md">
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
                    THE TEAM
                  </Box>
                  <Title
                    order={2}
                    c="white"
                    style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.2 }}
                  >
                    Award-Winning Scientists & Engineers
                  </Title>
                  <Text c="rgba(255,255,255,0.6)" style={{ lineHeight: 1.7 }}>
                    Our founding team brings together deep expertise in nanotechnology, AI, and
                    full-stack engineering — backed by world-class institutions.
                  </Text>
                </Stack>
              </motion.div>

              {/* Team member cards */}
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Box
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(34,163,102,0.2)',
                      borderRadius: 20,
                      padding: '28px',
                      backdropFilter: 'blur(10px)',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,163,102,0.5)';
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        '0 0 40px rgba(34,163,102,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,163,102,0.2)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <Group justify="space-between" mb="md" align="flex-start">
                      <Stack gap={4}>
                        <Text fw={700} c="white" size="lg">
                          {member.name}
                        </Text>
                        <Text size="sm" c="climate.4" fw={500}>
                          {member.role}
                        </Text>
                      </Stack>
                      <Anchor href={member.linkedin} target="_blank">
                        <Box
                          style={{
                            background: 'rgba(34,163,102,0.15)',
                            border: '1px solid rgba(34,163,102,0.3)',
                            borderRadius: 8,
                            padding: 8,
                            transition: 'background 0.2s',
                          }}
                        >
                          <IconBrandLinkedin size={20} color="#5cc494" />
                        </Box>
                      </Anchor>
                    </Group>

                    <Text
                      c="rgba(255,255,255,0.65)"
                      size="sm"
                      style={{ lineHeight: 1.7 }}
                      mb="md"
                    >
                      {member.bio}
                    </Text>

                    {/* Highlights */}
                    <Group gap="sm" wrap="wrap">
                      {member.highlights.map((h, j) => (
                        <Box
                          key={j}
                          style={{
                            background: 'rgba(34,163,102,0.1)',
                            border: '1px solid rgba(34,163,102,0.25)',
                            borderRadius: 50,
                            padding: '4px 12px',
                            color: '#5cc494',
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          ✓ {h}
                        </Box>
                      ))}
                    </Group>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default TeamSection;
