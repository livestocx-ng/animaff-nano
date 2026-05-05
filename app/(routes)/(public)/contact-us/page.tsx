'use client';

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconLocation,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';
import {
  Accordion,
  Box,
  Button,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import useContactUsMutation from '@/core/hooks/public/useContactUsMutation';
import { ContactUsDTO } from '@/core/sdk/account';
import { platformFaqs } from '@/core/utilities';
import { validateContactForm } from '@/core/validations/public.validations';

const ContactUs = () => {
  const { isPending, mutate } = useContactUsMutation();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const submitHandler = async (payload: ContactUsDTO) => {
    const message = validateContactForm(payload);

    if (message !== '') {
      showNotification({
        message,
        color: 'red',
        title: 'Message',
        autoClose: 3000,
      });
      return;
    }

    mutate(payload);
  };

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
      <Title order={3} mb={40}>
        Contact Nano
      </Title>
      <Paper
        shadow="lg"
        p={{ base: 'md', sm: 'md', md: 'xl' }}
        w={{ base: '90%', sm: '70%', md: '80%' }}
      >
        <Flex
          direction={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
          align="stretch"
          justify="space-between"
        >
          <Paper
            p={30}
            // h='100%'
            mt={{ base: 40, sm: 40, md: 0 }}
            w={{ base: '100%', sm: '100%', md: '50%' }}
            style={{
              backgroundImage: 'url(/images/image_contact_us.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '12px',
            }}
          >
            <Stack gap={60}>
              <Title order={4} c="white">
                Contact Information
              </Title>

              <Stack gap={30}>
                <Flex align="center" gap="md">
                  <IconPhone color="white" size={24} />
                  <Text c="white" fz={{ base: 14, sm: 14, md: 16 }}>
                    +1 (559) 668 3783
                  </Text>
                </Flex>
                <Flex align="center" gap="md">
                  <IconMail color="white" size={24} />
                  <Text c="white" fz={{ base: 14, sm: 14, md: 16 }}>
                    support@animaff.com
                  </Text>
                </Flex>
                <Flex align="flex-start" gap="md">
                  <IconLocation color="white" size={24} />
                  <Text c="white" fz={{ base: 14, sm: 14, md: 16 }}>
                    1680 East Barstow Avenue,
                    <br />
                    Fresno California, United States
                  </Text>
                </Flex>
              </Stack>
              {/* <Group gap="lg">
                <IconBrandFacebook size={24} color="white" />
                <IconBrandLinkedin size={24} color="white" />
                <IconBrandInstagram size={24} color="white" />
              </Group> */}
            </Stack>
          </Paper>

          <Box w={{ base: '100%', sm: '100%', md: '45%' }}>
            <form
              style={{ width: '100%' }}
              onSubmit={form.onSubmit((values) => {
                submitHandler(values);
              })}
            >
              <Stack gap={10}>
                <TextInput
                  size="lg"
                  radius="0px"
                  withAsterisk
                  label="Name"
                  style={{
                    border: '0px',
                  }}
                  styles={{
                    label: { fontSize: '16px' },
                    root: { fontSize: '14px' },
                    input: {
                      fontSize: '14px',
                      border: 'none',
                      borderBottom: '1px solid #ced4da', // Adds only bottom border
                      borderRadius: 0,
                    },
                  }}
                  // key={form.key('email')}
                  placeholder="Name"
                  {...form.getInputProps('name')}
                />
                <TextInput
                  size="lg"
                  radius="0px"
                  withAsterisk
                  label="Email"
                  style={{
                    border: '0px',
                  }}
                  styles={{
                    label: { fontSize: '16px' },
                    root: { fontSize: '14px' },
                    input: {
                      fontSize: '14px',
                      border: 'none',
                      borderBottom: '1px solid #ced4da', // Adds only bottom border
                      borderRadius: 0,
                    },
                  }}
                  // key={form.key('email')}
                  placeholder="tunde@gmail.com"
                  {...form.getInputProps('email')}
                />
                <TextInput
                  size="lg"
                  radius="0px"
                  withAsterisk
                  label="Subject"
                  style={{
                    border: '0px',
                  }}
                  styles={{
                    label: { fontSize: '16px' },
                    root: { fontSize: '14px' },
                    input: {
                      fontSize: '14px',
                      border: 'none',
                      borderBottom: '1px solid #ced4da', // Adds only bottom border
                      borderRadius: 0,
                    },
                  }}
                  // key={form.key('email')}
                  placeholder="Subject"
                  {...form.getInputProps('subject')}
                />

                <Textarea
                  withAsterisk
                  label="Message"
                  placeholder="Message"
                  {...form.getInputProps('message')}
                  styles={{
                    label: { fontSize: '16px' },
                    root: { fontSize: '14px' },
                    input: {
                      fontSize: '14px',
                      border: 'none',
                      borderBottom: '1px solid #ced4da', // Adds only bottom border
                      borderRadius: 0,
                    },
                  }}
                />

                <Button
                  radius="lg"
                  h={50}
                  variant="filled"
                  mt={10}
                  type="submit"
                  loading={isPending}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Flex>

        <Flex justify="center">
          {' '}
          <Title order={3} mt={100}>
            FAQs
          </Title>
        </Flex>
        <Accordion>
          {platformFaqs.map((item) => (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.Control fw={500} ff="heading" fz={16}>
                {item.value}
              </Accordion.Control>
              <Accordion.Panel fz={14}>{item.description}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Paper>
    </Box>
  );
};

export default ContactUs;
