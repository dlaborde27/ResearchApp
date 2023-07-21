import { Publicationmodal } from "../components/Publicationmodal";

import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import { Card, CardBody, CardFooter, Center } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

export function Publicationcard(props) {
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image src={props.img} alt={props.img} borderRadius='lg'/>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{props.investigation}</Heading>
                        <Box>
                            <Text><Text as='b'>Published on: </Text> I{props.orgPublished} </Text>
                        </Box>
                        <Box>
                            <Text as='b'>Available on: </Text>
                            {props.linkInvestigation ? (<Link href={props.linkInvestigation} isExternal> Investigation online <ExternalLinkIcon mx='2px' /></Link>) : 
                                                        (<span> Coming soon ... </span>)}
                        </Box>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Center w='100%'>
                        <Publicationmodal investigation={props.investigation}
                        summary={props.summary}
                        img={props.img}
                        img2Title={props.img2Title}
                        img2={props.img2}
                        videoTitle={props.videoTitle}
                        video={props.video}/>
                    </Center>
                </CardFooter>
            </Card>
        </>
      )
}