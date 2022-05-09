import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Th, Tr, Thead, Tbody, Td, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px={6}>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p={8}>
                    <Flex mb={8} justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Lista de Usuários</Heading>

                        <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='pink'
                            leftIcon={<Icon as={RiAddLine} fontSize={20} />}
                        >
                            Criar novo
                        </Button>

                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px={6} color='gray.300' w='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuários</Th>
                                <Th>Data de cadastro</Th>
                                <Th width={8}></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px={6}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold' >Anderson Dias</Text>
                                        <Text fontSize='sm' color='gray.300'>andersondiasmd21@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>10 de maio, 2022</Td>
                                <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={6}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold' >Karol Barreto</Text>
                                        <Text fontSize='sm' color='gray.300'>karolbarreto@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>11 de abril, 2022</Td>
                                <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={6}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold' >Alice Barreto</Text>
                                        <Text fontSize='sm' color='gray.300'>alicegabriella@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>13 de março, 2022</Td>
                                <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>


                        </Tbody>

                    </Table>
                    
                    <Pagination />
                </Box>
            </Flex>


        </Box>

    )
}