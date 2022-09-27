import { EditIcon, DeleteIcon } from "@chakra-ui/icons"
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakPointValue
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ModalComp from "./components/ModalComp"

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dasta, setData] = useState([])
  const [dataEdit,setDataEdit] = useState({})

  return 
}

export default App
