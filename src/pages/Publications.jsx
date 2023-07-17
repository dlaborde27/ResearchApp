import { Routedirection } from "../components/Routedirection";

import { Center, Flex, Spacer } from '@chakra-ui/react'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Box, Text, Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import "./Publications.css"

export function Publications() {
    return (
        <>
            <div id="all-content">
                <h1 id="text">Publications</h1>
                <div id="primary-content">
                    <div id="separated-content">
                        <Routedirection mensaje="Publications" />
                        <Flex wrap="wrap" justifyContent="center" gap={25}>
                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:4JMBOYKVnBMC' isExternal>
                                    Natural object manipulation using anthropomorphic robotic hand through deep reinforcement learning and deep grasping probability network
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    Edwin Valarezo Anazco, Patricio Rivera Lopez, Nahyeon Park, Jiheon Oh, Gahyeon Ryu, Mugahed A Al-antari, Tae-Seong Kim
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2021
                                </Text>
                            </LinkBox>

                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:iH-uZ7U-co4C' isExternal>
                                    Hand Gesture Recognition Using Single Patchable Six-Axis Inertial Measurement Unit via Recurrent Neural Networks
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    Edwin Valarezo Añazco, Han Seng Ju, Kim Kangil, Patricio Rivera Lopez, Tae-Seong Kim, Lee Sangmin
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2021
                                </Text>
                            </LinkBox>



                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:R3hNpaxXUhUC' isExternal>
                                    Emg signal processing with clustering algorithms for motor gesture tasks
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    Víctor Asanza, Enrique Peláez, Francis Loayza, Iker Mesa, Javier Díaz, Edwin Valarezo
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2018
                                </Text>
                            </LinkBox>

                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:-f6ydRqryjwC' isExternal>
                                        Simultaneous detection and classification of breast masses in digital mammograms via a deep learning YOLO-based CAD system
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                     Mohammed A Al-Masni, Mugahed A Al-Antari, Jeong-Min Park, Geon Gi, Tae-Yeon Kim, Patricio Rivera, Edwin Valarezo, Mun-Taek Choi, Seung-Moo Han, Tae-Seong Kim
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2018
                                </Text>
                            </LinkBox>

                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:hqOjcs7Dif8C' isExternal>
                                    Smoking activity recognition using a single wrist IMU and deep learning light
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    Edwin Valarezo Añazco, Patricio Rivera Lopez, Sangmin Lee, Kyungmin Byun, Tae-Seong Kim
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2018
                                </Text>
                            </LinkBox>

                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:mB3voiENLucC' isExternal>
                                    An automatic recognition of multi-class skin lesions via deep learning convolutional neural networks
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    MA Al-Antari, P Rivera, MA Al-Masni, E Valarezo, G Gi, TY Kim, HM Park, TS Kim
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2018
                                </Text>
                            </LinkBox>



                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:hFOr9nPyWt4C' isExternal>
                                    Detection and classification of the breast abnormalities in digital mammograms via regional convolutional neural network
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    Mohammed A Al-masni, Mugahed A Al-antari, JM Park, Geon Gi, Tae-Yeon Kim, Patricio Rivera, Edwin Valarezo, S-M Han, T-S Kim
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2017
                                </Text>
                            </LinkBox>

                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:dhFuZR0502QC' isExternal>
                                    Recognition of human hand activities based on a single wrist imu using recurrent neural networks
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    Patricio Rivera, Edwin Valarezo, Mun-Taik Choi, Tae-Seong Kim
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2017
                                </Text>
                            </LinkBox>

                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:QIV2ME_5wuYC' isExternal>
                                    Human activity recognition using a single wrist IMU sensor via deep learning convolutional and recurrent neural nets
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    E Valarezo, P Rivera, JM Park, G Gi, TY Kim, MA Al-Antari, M Al-Masni, T-S Kim
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2017
                                </Text>
                            </LinkBox>

                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:qxL8FJ1GzNcC' isExternal>
                                    Non-local means filter denoising for DEXA images
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    Mugahed A Al-antari, Mohammed A Al-masni, M Metwally, Dildar Hussain, Edwin Valarezo, Patricio Rivera, Geon Gi, JM Park, Tae-Yeon Kim, S-J Park, J-S Shin, S-M Han, T-S Kim
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2017
                                </Text>
                            </LinkBox>

                            <LinkBox>
                                <LinkOverlay href='https://scholar.google.com/citations?user=GLpno30AAAAJ&hl=es' isExternal>
                                    <Button colorScheme='teal' variant='solid'>More information</Button>
                                </LinkOverlay>
                            </LinkBox>

                            
                        </Flex>
                        
                    </div>
                </div>
            </div>
        </>
    )
}