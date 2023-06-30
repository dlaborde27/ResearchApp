import {
    Text,
    Heading,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';


export function Publicationmodal(props) {
    const OverlayOne = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const [size, setSize] = React.useState('xl')
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    return (
      <>
        <Button variant='solid' colorScheme='blue' onClick={onOpen}>More information</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior} size={size}>
        {overlay}
          <ModalOverlay>
            <ModalContent>
                <ModalHeader>{props.investigation}</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <img src={props.img} alt="cf"/>
                    <Heading as='h2' size='lg' my={4}>Summary:</Heading>
                    <Text fontSize='md' textAlign={"justify"}>{props.summary}</Text>
                    {props.img2Title && <Heading as='h2' size='lg' my={4}>{props.img2Title}</Heading>}
                    {props.img2 && <img src={props.img2} alt="cf" />}
                    {props.videoTitle && <Heading as='h2' size='lg' my={4}>{props.videoTitle}</Heading>}
                    {props.video && <video autoPlay loop muted controls src={props.video}></video>}
                </ModalBody>

                <ModalFooter bg="white">
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </>
    )
  }