import {
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


export function Publicationcard(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior] = React.useState('inside')
    const [size, setSize] = React.useState('xl')
    return (
      <>
        <Button onClick={onOpen}>{props.investigation}</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior} size={size}>
          <ModalOverlay>
            <ModalContent>
                <ModalHeader>{props.investigation}</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <img src={props.img} alt="cf"/>
                    <p>{props.summary}</p>
                    {props.img2 && <img src={props.img2} alt="cf" />}
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