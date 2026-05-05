'use client';

import Image from 'next/image';
import { platformFeatures, teamMembers } from '@/core/utilities';
import { IconBrandLinkedin, IconWallet } from '@tabler/icons-react';
import { Anchor, Box, Card, Flex, Group, Paper, Stack, Text, Title } from '@mantine/core';

const AboutUs = () => {
  return (
    <Box
      py={{ base: 100, sm: 100, md: 100 }}
      style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        background:
          'linear-gradient(180deg, var(--mantine-color-gray-1) 30%, var(--mantine-color-gray-1) 5%)',
      }}
    >
      <Title order={1} mb={40} ta="center" px={20}>
        About Animaff Nano
      </Title>
      <Stack gap={50} maw={1200} w="100%">
        <Box px={20}>
          <Text fz={{ base: 16, sm: 16, md: 18 }} ta="center" maw={800} mx="auto" lh={1.6}>
            Animaff Nano develops climate-resilient livestock infrastructure using advanced cooling
            materials and smart sensing systems to reduce animal mortality and improve farm
            productivity. We are transforming livestock housing from energy-intensive systems into
            passive, materials-driven infrastructure.
          </Text>
        </Box>

        <Flex
          w="100%"
          py={50}
          gap={50}
          direction={{ base: 'column', sm: 'column', md: 'row' }}
          justify="center"
          align="center"
          style={{ backgroundColor: '#D0F8E6' }}
          px={20}
        >
          <Paper
            c="white"
            shadow="lg"
            radius={20}
            w={{ base: '100%', sm: '100%', md: 450 }}
            p={30}
            style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
          >
            <IconWallet color="black" size={40} />
            <Title order={3} c="black" mt="md">
              Solving the $1.5B Heat Stress Problem
            </Title>
            <Text c="black" fz={15} mt="sm">
              Heat stress costs the U.S. dairy industry over $1.5 billion annually, reducing milk
              yield by 10–25%. Current solutions like fans and sprinklers are energy-intensive and
              often fail during extreme heat. Animaff Nano provides a reliable, low-cost way to
              protect animals and stabilize productivity.
            </Text>
          </Paper>

          <Image
            width={350}
            height={250}
            src="/images/image_about_art_1.png"
            alt="Livestock Cooling Technology"
            style={{ borderRadius: '20px' }}
          />
        </Flex>

        <Box px={20}>
          <Flex justify="center" direction="column" align="center" w="100%" mb={40}>
            <Title order={2}>Our Innovation</Title>
            <Text fz={16} c="dimmed" ta="center" maw={600} mt="sm">
              We combine breakthrough nanotechnology with phase-change materials to create a
              self-regulating thermal system.
            </Text>
          </Flex>

          <Flex wrap="wrap" gap="lg" justify="center" px="md">
            {platformFeatures.map((feature) => (
              <Card
                shadow="sm"
                radius="md"
                padding="xl"
                withBorder
                key={feature.title}
                w={{ base: '100%', sm: '100%', md: 500 }}
              >
                <Group align="flex-start" mb="md">
                  <feature.icon size={32} color="var(--mantine-color-primary-6)" />
                </Group>
                <Title order={4} c="primary" mb={10}>
                  {feature.title}
                </Title>
                <Text size="sm" c="black" lh={1.8}>
                  {feature.description}
                </Text>
              </Card>
            ))}
          </Flex>
        </Box>

        <Box>
          <Flex
            py={60}
            gap={50}
            direction={{ base: 'column', sm: 'column', md: 'row' }}
            justify="center"
            align="center"
            style={{ backgroundColor: '#0EBE52' }}
            px={20}
          >
            <Stack maw={600}>
              <Title order={2} c="white">
                Global Impact & Traction
              </Title>
              <Text c="white" fz={{ base: 14, sm: 14, md: 16 }}>
                Currently piloting through our U.S. subsidiary, Animaff, in collaboration with the
                Moreau Nanoparticles Lab at the University of Wyoming. Supported by the US Chamber
                of Commerce, the Government of Germany (GIZ), and the European Union, we serve over
                13,000 users across our digital marketplaces in Africa and the US.
              </Text>
            </Stack>

            <Image
              width={350}
              height={250}
              src="/images/image_about_art_3.svg"
              alt="Global Reach"
              objectFit="contain"
            />
          </Flex>

          <Box
            py={80}
            w="100%"
            px={{ base: 20, sm: 20, md: 100 }}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url("/images/image_about_art_4.png")',
            }}
          >
            <Flex justify="center">
              <Stack gap="xl" w="100%" maw={1000}>
                <Paper
                  p={{ base: 20, sm: 20, md: 40 }}
                  radius="lg"
                  w={{ base: '100%', sm: '100%', md: '60%' }}
                  style={{
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <Title order={3} c="orange" mb="md">
                    Our Vision
                  </Title>
                  <Text c="white" size="md" lh={1.6}>
                    To become the global leader in climate-resilient livestock infrastructure,
                    projecting $100M+ in annual revenue by scaling passive cooling solutions across
                    North America, Africa, and Asia. We aim to redefine livestock housing as
                    intelligent, adaptive systems that protect animal welfare and global food
                    security.
                  </Text>
                </Paper>

                <Paper
                  radius="lg"
                  p={{ base: 20, sm: 20, md: 40 }}
                  w={{ base: '100%', sm: '100%', md: '60%' }}
                  ml="auto"
                  style={{
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Title order={3} c="orange" mb="md">
                    Our Mission
                  </Title>
                  <Text c="white" size="md" lh={1.6}>
                    To empower farmers with cost-effective, energy-free cooling technologies. By
                    leveraging advanced nanomaterials and AI-driven insights, we eliminate the
                    hidden costs of heat stress, fostering a more resilient and prosperous
                    agricultural ecosystem worldwide.
                  </Text>
                </Paper>
              </Stack>
            </Flex>
          </Box>
        </Box>

        <Box py={50} px={20}>
          <Title order={2} mb={40} ta="center">
            Meet the Founders
          </Title>
          <Flex wrap="wrap" gap="xl" justify="center">
            {teamMembers.map((member) => (
              <Card
                withBorder
                shadow="xl"
                radius="lg"
                padding="xl"
                key={member.name}
                w={{ base: '100%', sm: '100%', md: 550 }}
              >
                <Flex direction={{ base: 'column', sm: 'row' }} gap="xl">
                  <Box style={{ flexShrink: 0 }}>
                    <Image
                      alt={member.name}
                      src={member.image}
                      width={180}
                      height={180}
                      style={{ borderRadius: '15px', objectFit: 'cover' }}
                    />
                  </Box>
                  <Stack gap="xs">
                    <Title order={4} c="primary">
                      {member.name}
                    </Title>
                    <Text fw={600} fz="sm" c="dimmed">
                      {member.role}
                    </Text>
                    <Text size="sm" c="black" lh={1.6}>
                      {member.bio}
                    </Text>
                    <Anchor
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener"
                      mt="auto"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      <IconBrandLinkedin size={24} />
                      <Text size="xs" fw={500}>
                        Connect on LinkedIn
                      </Text>
                    </Anchor>
                  </Stack>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Box>

        <Box py={50} px={20} ta="center">
          <Title order={3} mb="lg">
            Our Roots
          </Title>
          <Text maw={800} mx="auto" c="dimmed">
            Animaff Nano was born from the success of Livestocx, Africa’s largest digital animal
            market. Our team has a track record of building scalable startups like Venille AI and
            Geotek Monitor, with support from investors like Alexis Ohanian and global institutions
            including the UNDP and US Chamber of Commerce.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default AboutUs;
