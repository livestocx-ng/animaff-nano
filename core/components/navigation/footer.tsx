import {
  Box,
  Text,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Title,
  Anchor,
  Container,
} from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

export function Footer() {
  return (
    <Box bg="#01653B" py={{ base: 'md', sm: 'lg' }} style={{ color: 'white' }}>
      <Container size="xl">
        <Grid gutter={{ base: 'xl', sm: 'xl' }} justify="space-between">
          {/* Left Section - Company Info */}
          <Grid.Col span={{ base: 12, sm: 6 }} mb={{ base: 'xl', sm: 0 }}>
            <Stack gap="md">
              <Flex align="center" gap="xs">
                <Image
                  w={35}
                  h="auto"
                  alt="lvx"
                  src="/icons/icon_clif.jpg"
                  style={{ border: '1px solid #ffffff', borderRadius: '10px' }}
                />{' '}
                <Title order={4} c="white">
                  Nano
                </Title>
              </Flex>

              <Text size="sm" c="white">
                1680 East Barstow Avenue,
                <br />
                Fresno California, United States
              </Text>
              <Text size="sm" c="white">
                +1 (559) 668 3783
              </Text>
              <Anchor href="mailto:support@animaff.com" size="sm" c="gray.2">
                support@animaff.com
              </Anchor>
            </Stack>
          </Grid.Col>

          {/* Right Section - Links and Social */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Grid>
              {/* Helps */}
              <Grid.Col span={{ base: 12, sm: 4 }} mb={{ base: 'xl', sm: 0 }}>
                <Stack gap="md">
                  <Anchor href="/about-us" size="sm" c="gray.2">
                    About Us
                  </Anchor>
                  <Anchor href="/contact-us" size="sm" c="gray.2">
                    Contact Us
                  </Anchor>
                  <Anchor href="#" size="sm" c="gray.2">
                    FAQs
                  </Anchor>
                </Stack>
              </Grid.Col>


              {/* Socials + App Stores */}
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <Stack gap="md">
                  <Group gap="xs">
                    <IconBrandFacebook size={24} color="white" />
                    <IconBrandLinkedin size={24} color="white" />
                    <IconBrandInstagram size={24} color="white" />
                  </Group>
                  {/* <Stack gap="sm">
                    <Link
                      href="https://apps.apple.com/ng/app/livestocx/id6738842775?platform=iphone"
                      target="_blank"
                    >
                      <Image
                        src="/icons/icon_appstore.svg"
                        alt="App Store"
                        w={{ base: 100, sm: 110, md: 120 }}
                        h="auto"
                        fit="contain"
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.livestocx.livestocx_mobile"
                    >
                      <Image
                        src="/icons/icon_playstore.svg"
                        alt="Google Play"
                        w={{ base: 100, sm: 110, md: 120 }}
                        h="auto"
                        fit="contain"
                      />
                    </Link>
                  </Stack> */}
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>

      <Box mt="md" pt="sm" style={{ borderTop: '1px solid #ffffff22' }}>
        <Container size="xl">
          <Text size="xs" ta="center" c="gray.3">
            Powered by Livestocx Inc © {new Date().getFullYear()}. All Rights Reserved
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
