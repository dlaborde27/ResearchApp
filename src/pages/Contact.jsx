import { Routedirection } from "../components/Routedirection";
import { Image } from '@chakra-ui/react'
import imagenContact from "../../public/imagenContact.jpeg";
import { Text } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Highlight } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import "./Contact.css"

export function Contact() {
    return (
        <>
            <div id="all-content">
                <h1 id="text">Contact</h1>
                <div id="primary-content">
                    <div id="separated-content">
                        <Routedirection mensaje="Contact" />
                        <VStack id="contenedor-stack" spacing='3rem' marginX="15%"> 
                            <Center width='100%'>
                                <Image id='imageContact' src={imagenContact} alt='contacto' width='50%' borderRadius='10'/>
                            </Center>
                            <VStack spacing='1.2rem' width='100%' alignItems='flex-start'>
                                <Box as="p" fontSize='lg' align='justify' >
                                    <Highlight as='p' query={['lba2.tech@gmail.com', 'edgivala@espol.edu.ec']} styles={{ px: '3', py: '0', rounded: 'full', bg: '#38B2AC' }}>
                                        For collaboration opportunities or further information, please contact us at the lab email  lba2.tech@gmail.com and the director email edgivala@espol.edu.ec.
                                    </Highlight>
                                </Box>
                                <Text fontSize='lg' align='justify'>We are always excited to explore new partnerships, share knowledge, and collaborate on cutting-edge research in bioinformatics and autonomous systems.</Text>
                            </VStack>
                        </VStack>
                    </div>
                </div>
            </div>
        </>
    )
}