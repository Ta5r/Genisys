import { Box, Flex, HStack, Stack, Text,Image, VStack } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import NextImage from "next/image";
import FadeInUp from "../../Anim/FadeInUp";
import ResponsiveContainer from "../ResponsiveContainer";
import FooterSection from "./FooterSection";
import FooterSectionContact from "./FooterSectionContact";
import FooterSectionHeading from "./FooterSectionHeading";
import FooterSectionLink from "./FooterSectionLink";
import FooterSectionSocialIcon from "./FooterSectionSocialIcon";
import FooterSectionSocialLink from "./FooterSectionSocialLink";
import NextLink from "../../NextLink";
import genesisLogo from "../../../public/imgs/footerlogo.png";
import ieeeLogo from "../../../public/imgs/logo.png";
import ieeecsLogo from "../../../public/imgs/ieeecs.svg";
import ieeewieLogo from "../../../public/imgs/ieeewie.svg";

const Footer = () => (
  <>
    <Box
      bgColor="#080c2c"
      width="100%"
      css={{ backgroundColor: "rgb(8, 12, 44, 0.40)"}}
      backgroundAttachment="fixed"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      paddingTop="40px"
      paddingBottom="20px"
    >
      <FadeInUp>
        <ResponsiveContainer>
          <Stack
            direction={["column", "column", "column", "column", "row"]}
            columns={[1, 1, 1, 1, 3]}
            width="100%"
            alignItems="flex-start"
            justifyItems="center"
            spacing="48px"
          >
            
            <VStack width="100%" spacing={10}>
              <FooterSection>
                <FooterSectionHeading>Get in Touch</FooterSectionHeading>
                
              </FooterSection>
            </VStack>
            <VStack width={["100%", "100%", "100%", "100%", "200%"]}>
              <HStack>
                <NextImage src={genesisLogo} alt="Genesis Logo" />
                <NextImage src={ieeeLogo} alt="IEEE SB MUJ Logo" />
                <NextImage src={ieeecsLogo} alt="IEEE CS Logo" />
                <NextImage src={ieeewieLogo} alt="IEEE WIE Logo" />
              </HStack>

              <HStack width="100%" height="100px">
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/genesismuj/"
                  underline
                >
                  @genesismuj
                </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/ieeemuj/"
                  underline
                >
                  @ieeemuj
                </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/ieee_csmuj/"
                  underline
                >
                  @ieee_csmuj
                </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/ieee.wiemuj/"
                  underline
                >
                  @ieee.wiemuj
                </FooterSectionSocialLink>
              </HStack>
            </VStack>
            <VStack width="100%" spacing={10}>
              <FooterSection>
                <FooterSectionHeading>Contact Us</FooterSectionHeading>
                <FooterSectionContact
                  number="+919999214243"
                  name="Aarohi Manchanda"
                >
                  +91 99992 14243
                </FooterSectionContact>
                <FooterSectionContact number="+917073189955" name="Mahi Jain">
                  +91 70731 89955
                </FooterSectionContact>
                <FooterSectionLink href="mailto:ieee@muj.manipal.edu">
                  ieee@muj.manipal.edu
                </FooterSectionLink>
              </FooterSection>
            </VStack>
            
          </Stack>
        </ResponsiveContainer>
      </FadeInUp>
    </Box>
  </>
);

const Footer2 = () => (
  <>
    <Box
      bgColor="#080c2c"
      width="100%"
      css={{ backgroundColor: "rgb(8, 12, 44, 0.40)"}}
      backgroundAttachment="fixed"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      paddingTop="25px"
      paddingBottom="25px"
    >
      <FadeInUp>
        <ResponsiveContainer>
          <Stack
            direction={["column", "column", "column", "column", "row"]}
            columns={[1, 1, 1, 1, 3]}
            width="100%"
            alignItems="flex-start"
            justifyItems="center"
            spacing="48px"
          >
            
            <VStack width="100%" spacing={10} fontSize={["sm","sm","sm","sm"]}>
              <FooterSection>
                <FooterSectionHeading>Get in Touch</FooterSectionHeading>
                <VStack width="100%" height="100px">
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/genesismuj/"
                  underline
                >
                  @genesismuj
                </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/ieeemuj/"
                  underline
                >
                  @ieeemuj
                </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/ieee_csmuj/"
                  underline
                >
                  @ieee_csmuj
                </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/ieee.wiemuj/"
                  underline
                >
                  @ieee.wiemuj
                </FooterSectionSocialLink>
              </VStack>
              </FooterSection>
            </VStack>
            <VStack width={["100%", "100%", "100%", "100%", "200%"]}>
              <HStack>
                <NextImage src={genesisLogo} alt="Genesis Logo" layout=""/>
                <NextImage src={ieeeLogo} alt="IEEE SB MUJ Logo" />
                <NextImage src={ieeecsLogo} alt="IEEE CS Logo" />
                <NextImage src={ieeewieLogo} alt="IEEE WIE Logo" />
              </HStack>

              
            </VStack>
            <VStack width="100%" spacing={10}>
              <FooterSection>
                <FooterSectionHeading>Contact Us</FooterSectionHeading>
                <FooterSectionContact
                  number="+919999214243"
                  name="Aarohi Manchanda"
                >
                  +91 99992 14243
                </FooterSectionContact>
                <FooterSectionContact number="+917073189955" name="Mahi Jain">
                  +91 70731 89955
                </FooterSectionContact>
              </FooterSection>
            </VStack>
            
          </Stack>
        </ResponsiveContainer>
      </FadeInUp>
    </Box>
  </>
);

export default Footer2;
