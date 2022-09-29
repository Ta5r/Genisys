import {
  Box, Flex, HStack, Stack, Text, VStack,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import NextImage from 'next/image';
import FadeInUp from '../../Anim/FadeInUp';
import ResponsiveContainer from '../ResponsiveContainer';
import FooterSection from './FooterSection';
import FooterSectionContact from './FooterSectionContact';
import FooterSectionHeading from './FooterSectionHeading';
import FooterSectionLink from './FooterSectionLink';
import FooterSectionSocialIcon from './FooterSectionSocialIcon';
import FooterSectionSocialLink from './FooterSectionSocialLink';
import NextLink from '../../NextLink';
import ieeeLogo from '../../../public/imgs/logo.png';

const Footer = () => (
  <>
    <Box
      bgColor="white"
      width="100%"
      backgroundImage="url(/svg/footer.svg)"
      backgroundAttachment="fixed"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      paddingTop="96px"
      paddingBottom="96px"
    >
      <FadeInUp>
        <ResponsiveContainer>
          <Stack
            direction={['column', 'column', 'column', 'column', 'row']}
            columns={[1, 1, 1, 1, 3]}
            width="100%"
            alignItems="flex-start"
            justifyItems="center"
            spacing="48px"
          >
            <VStack
              width={['100%', '100%', '100%', '100%', '200%']}
            >
              <NextImage
                src={ieeeLogo}
                alt="IEEE SB MUJ Logo"
              />
              <HStack
                width="100%"
                height="100px"
              >
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/ieeemuj"
                  underline
                >
                  @ieeemuj
                </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaLinkedin} />}
                  href="https://www.linkedin.com/company/ieeesbmuj/"
                  underline
                >
                  IEEE SB MUJ
                </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaFacebook} />}
                  href="https://www.facebook.com/ieeemuj/"
                  underline
                >
                  @ieeemuj
                </FooterSectionSocialLink>
              </HStack>
            </VStack>
            <VStack
              width="100%"
              spacing={10}
            >
              <FooterSection>
                <FooterSectionHeading>Contact Us</FooterSectionHeading>
                <FooterSectionContact number="+919999214243" name="Aarohi Manchanda">
                +91 99992 14243
                </FooterSectionContact>
                <FooterSectionContact number="+919930048037" name="Vikramaditya Hiran">
                +91 99300 48037
                </FooterSectionContact>
                <FooterSectionLink href="mailto:ieee@muj.manipal.edu">
                  ieee@muj.manipal.edu
                </FooterSectionLink>
              </FooterSection>
              <FooterSection>
                <FooterSectionHeading>Address</FooterSectionHeading>
                <Text
                  color="black"
                  size="sm"
                >
                  Manipal University Jaipur,
                  Dehmi Kalan, Near GVK Toll Plaza,
                  Jaipur-Ajmer Expressway, Jaipur,
                  Rajasthan 303007
                </Text>
              </FooterSection>
            </VStack>
            <VStack
              width="100%"
              spacing={10}
            >
              <FooterSection>
                <FooterSectionHeading>Faculty Messages</FooterSectionHeading>
                <NextLink
                  color="black"
                  to="/faculty-messages/director-scit"
                >
                  Director&apos;s Message
                </NextLink>
                <NextLink
                  color="black"
                  to="/faculty-messages/coordinator"
                >
                  Coordinator&apos;s Message
                </NextLink>
                <NextLink
                  color="black"
                  to="/faculty-messages/dsw"
                >
                  DSW&apos;s Message
                </NextLink>
                <NextLink
                  color="black"
                  to="/faculty-messages/faculty-advisor-wie"
                >
                  Advisor&apos;s Message
                </NextLink>
              </FooterSection>
              <FooterSection>
                <FooterSectionHeading>Links</FooterSectionHeading>
                <NextLink
                  color="black"
                  to="/credits"
                >
                  Website Team
                </NextLink>
                <NextLink
                  color="black"
                  to="http://jaipur.manipal.edu/"
                >
                  MUJ Official Website
                </NextLink>
                <NextLink
                  color="black"
                  to="http://www.ieee.org/about/index.html"
                >
                  IEEE Official Website
                </NextLink>
                <NextLink
                  color="black"
                  to="https://site.ieee.org/r1-sac/resources/student-scholarships/"
                >
                  IEEE Scholarships
                </NextLink>
                <NextLink
                  color="black"
                  to="http://www.ieee.org/membership_services/membership/benefits/benefits.html"
                >
                  IEEE Benefits
                </NextLink>
                <NextLink
                  color="black"
                  to="http://www.ieee.org/membership_services/membership/join/index.html"
                >
                  IEEE Global Membership
                </NextLink>
              </FooterSection>
            </VStack>
          </Stack>
        </ResponsiveContainer>
      </FadeInUp>
    </Box>
    <Flex
      bgColor="white"
      width="100%"
      height="32px"
      textAlign="center"
      justifyItems="center"
      alignItems="center"
      color="black"
      fontWeight="bold"
    >
      <Text
        width="100%"
        fontSize="sm"
      >
        MADE WITH ❤️ USING OPEN SOURCE
      </Text>
    </Flex>
  </>
);

export default Footer;
