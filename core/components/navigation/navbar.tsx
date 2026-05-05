'use client';

import Link from 'next/link';
import { IconExternalLink } from '@tabler/icons-react';
import { Box, Burger, Button, Container, Drawer, Group, Image, rem, Stack, Text } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { navLinks } from '@/core/utilities';
import classes from './navbar.module.css';

export function Navbar() {
  const [scroll] = useWindowScroll();

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box
        component="header"
        className={classes.header}
        style={{
          transition: 'background-color 0.3s ease',
          backdropFilter: scroll.y > 0 ? 'blur(5px)' : 'none',
          WebkitBackdropFilter: scroll.y > 0 ? 'blur(5px)' : 'none',
          backgroundColor: scroll.y > 0 ? '#ffffff80' : '#ffffff00',
          borderBottom: scroll.y > 0 ? '1px solid var(--mantine-color-gray-3)' : '',
        }}
      >
        <Container size="xl" py={20}>
          <Group justify="space-between" align="center">
            {/* Left section: Logo and Navigation */}
            <Group>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                <Image
                  w={30}
                  h="auto"
                  alt="Animaff Nano"
                  src="/icons/icon_clif.jpg"
                  style={{ border: '1px solid #11111120', borderRadius: '8px' }}
                />
                <Box visibleFrom="sm">
                  <Text fw={700} size="sm" c={scroll.y > 0 ? '#0a1f14' : '#0a1f14'} style={{ letterSpacing: '-0.01em' }}>
                    <span style={{ color: '#111' }}>Nano</span>
                  </Text>
                </Box>
              </Link>

              {/* Desktop navigation */}
              <Group gap={4} visibleFrom="md">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.link}
                    target={link.target}
                    style={{
                      display: 'block',
                      lineHeight: 1,
                      padding: `${rem(8)} ${rem(14)}`,
                      borderRadius: rem(8),
                      textDecoration: 'none',
                      color: scroll.y > 0 ? '#0a1f14' : '#0a1f14',
                      fontSize: rem(14),
                      fontWeight: 500,
                      transition: 'background-color 150ms ease, color 150ms ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(34,163,102,0.08)';
                      (e.currentTarget as HTMLElement).style.color = '#22a366';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = scroll.y > 0 ? '#0a1f14' : '#0a1f14';
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Group>
            </Group>

            <Group gap="sm">
              <Link href="/contact-us" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outline"
                  radius="xl"
                  size="xs"
                  fw={600}
                  visibleFrom="sm"
                  style={{
                    borderColor: '#22a366',
                    color: '#22a366',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(34,163,102,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  Partner With Us
                </Button>
              </Link>
              <Link href="https://animaff.com" target="_blank">
                <Button
                  variant="filled"
                  radius="xl"
                  size="xs"
                  fw={600}
                  style={{
                    background: 'linear-gradient(135deg, #22a366 0%, #059669 100%)',
                    border: 'none',
                    color: 'white',
                    fontWeight: 600,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 2px 12px rgba(34,163,102,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(34,163,102,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(34,163,102,0.3)';
                  }}
                >
                  Marketplace &nbsp; <IconExternalLink size={14} />
                </Button>
              </Link>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="md"
                size="sm"
                color={scroll.y > 0 ? '#0a1f14' : '#0a1f14'}
              />
            </Group>
          </Group>
        </Container>

        {/* Mobile drawer */}
        <Drawer
          opened={opened}
          onClose={toggle}
          size="100%"
          padding="md"
          hiddenFrom="xs"
          zIndex={1000000}
        >
          <Stack>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.link}
                style={{
                  display: 'block',
                  lineHeight: 1,
                  padding: `${rem(8)} ${rem(12)}`,
                  borderRadius: 'var(--mantine-radius-sm)',
                  textDecoration: 'none',
                  color: 'var(--mantine-color-black)',
                  fontSize: 'var(--mantine-font-size-sm)',
                  fontWeight: 500,
                  transition: 'background-color 150ms ease',
                }}
                onClick={toggle}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Drawer>
      </Box>
    </>
  );
}
