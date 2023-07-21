import { Routedirection } from "../components/Routedirection";

import { Flex } from '@chakra-ui/react'
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
                                <Heading as='h2' size='md' my='2'>
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
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&sortby=pubdate&citation_for_view=GLpno30AAAAJ:O3NaXMp0MMsC' isExternal>
                                    Supervised Machine Learning Applied to Non-Invasive EMG Signal Classification for an Anthropomorphic Robotic Hand
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    Bolivar Núñez-Montoya, Mauricio Valarezo Añazco, Alexander Saravia-Avila, Francis R Loayza, Edwin Valarezo Añazco, Efrain Teran
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2022
                                </Text>
                            </LinkBox>

                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:RHpTSmoSYBkC' isExternal>
                                    Human activities recognition with a single writs IMU via a Variational Autoencoder and android deep recurrent neural nets
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    Añazco Edwin Valarezo, Lopez Patricio Rivera, Hyemin Park, Nahyeon Park, Tae-Seong Kim
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2020
                                </Text>
                            </LinkBox>

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
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:_Qo2XoVZTnwC' isExternal>
                                    Human-like Object Grasping and Relocation for an Anthropomorphic Robotic Hand with Natural Hand Pose Priors in Deep Reinforcement Learning
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    Edwin Valarezo Añazco, Patricio Rivera Lopez, Hyemin Park, Nahyeon Park, Jiheon Oh, Sangmin Lee, Kyungmin Byun, Tae-Seong Kim
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2019
                                </Text>
                            </LinkBox>

                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&citation_for_view=GLpno30AAAAJ:TFP_iSt0sucC' isExternal>
                                    Fully Autonomous Deep Learning RGB-D Vision-based Object Manipulation with an Anthropomorphic Robotic Hand
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    Edwin Valarezo Añazco, Patricio Rivera Lopez, Na Hyeon Park, Ji Heon Oh, Ga Hyeon Ryu, Tae-Seong Kim
                                </Text>
                                <Text mb='3'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Year of Publication: </Box>
                                    2021
                                </Text>
                            </LinkBox>

                            <LinkBox as='article' w='100%' p='5' borderWidth='1px' rounded='md' className="ooo">
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='https://scholar.google.com/citations?view_op=view_citation&hl=es&user=GLpno30AAAAJ&cstart=20&pagesize=80&citation_for_view=GLpno30AAAAJ:r0BpntZqJG4C' isExternal>
                                    Three‐dimensional shape reconstruction of objects from a single depth view using deep U‐Net convolutional neural network with bottle‐neck skip connections
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='1'>
                                    <Box as='span' color='teal.400' fontWeight='bold'>Autors: </Box>
                                    Edwin Valarezo Añazco, Patricio Rivera Lopez, Tae‐Seong Kim
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