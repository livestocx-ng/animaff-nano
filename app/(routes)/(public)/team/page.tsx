'use client';

import Image from 'next/image';
import { teamMembers } from '@/core/utilities';
import { IconBrandLinkedin, IconCheck } from '@tabler/icons-react';
import { Anchor, Box, Card, Flex, Group, Stack, Text, Title, Badge, ThemeIcon } from '@mantine/core';
import { motion } from 'framer-motion';

const TeamPage = () => {
  return (
    <Box
      py={{ base: 100, sm: 100, md: 100 }}
      style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        background:
          'linear-gradient(180deg, var(--mantine-color-gray-1) 30%, var(--mantine-color-gray-1) 5%)',
      }}
    >
      <Title order={1} mb={20} ta="center" px={20}>
        Meet Our Team
      </Title>
      <Text fz={{ base: 16, sm: 16, md: 18 }} c="dimmed" ta="center" maw={800} mx="auto" lh={1.6} mb={60} px={20}>
        We are a multidisciplinary team of award-winning scientists, engineers, and strategists working together to build climate-resilient infrastructure for the future of livestock farming.
      </Text>

      <Box px={20} w="100%" maw={1200}>
        <Flex wrap="wrap" gap="xl" justify="center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ width: '100%', maxWidth: '350px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                withBorder
                shadow="sm"
                radius="lg"
                padding="xl"
                style={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = 'var(--mantine-shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'var(--mantine-shadow-sm)';
                }}
              >
                <Card.Section p="md" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <Box style={{ 
                      padding: 4,
                      width: 180, 
                      height: 180, 
                      borderRadius: '100%', 
                      position: 'relative', 
                    background: 'var(--mantine-color-gray-3)'
                  }}>
                    <Image
                      width={172}
                      height={172}
                      alt={member.name}
                      src={member.image}
                      style={{ borderRadius: '50%', objectFit: 'cover', border: '0px solid white' }}
                    />
                  </Box>
                </Card.Section>

                <Stack gap="xs" align="center" mt="sm">
                  <Title order={3} ta="center" c="black">
                    {member.name}
                  </Title>
                  <Badge color="slate" variant="light" size="lg" mb="sm">
                    {member.role}
                  </Badge>
                </Stack>

                <Text size="sm" c="dimmed" lh={1.6} ta="center" mb="xl" style={{ flexGrow: 1 }}>
                  {member.bio}
                </Text>

                <Stack gap="sm" mb="xl">
                  {member.highlights.map((highlight, idx) => (
                    <Group key={idx} gap="xs" wrap="nowrap" align="flex-start">
                      <ThemeIcon color="primary" size={20} radius="xl" variant="light">
                        <IconCheck size={12} stroke={3} />
                      </ThemeIcon>
                      <Text size="sm" fw={500} c="dark.4">
                        {highlight}
                      </Text>
                    </Group>
                  ))}
                </Stack>

                <Anchor
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '8px', 
                    marginTop: 'auto',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(10, 102, 194, 0.05)',
                    transition: 'background-color 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(10, 102, 194, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(10, 102, 194, 0.05)';
                  }}
                >
                  <IconBrandLinkedin size={20} color="#0a66c2" />
                  <Text size="sm" fw={600} c="#0a66c2">
                    Connect on LinkedIn
                  </Text>
                </Anchor>
              </Card>
            </motion.div>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default TeamPage;