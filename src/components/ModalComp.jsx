import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box

} from "@chakra-ui/react"
import { useState } from "react"


const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [name, setName] = useState(dataEdit.name || "")
    const [email, setEmail] = useState(dataEdit.email || "")
    return (
        <>
            <ModaL isOpen={isOpen} onClose={onClose}>
            </ModaL>
        </>
    )
}

export default ModalComp