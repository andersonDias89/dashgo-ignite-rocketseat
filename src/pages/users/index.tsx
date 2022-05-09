import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Th, Tr, Thead, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/Header";
import { Pagination } from "../../components/Pagination/Pagination";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import Link from "next/link";

export default function UserList() {
    const isWiteVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px={6}>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p={8}>
                    <Flex mb={8} justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Lista de Usuários</Heading>

                        <Link href='/users/create' passHref>
                            <Button
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='pink'
                                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
                            >
                                Criar novo
                            </Button>
                        </Link>

                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px={['4', '4', '6']} color='gray.300' w='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuários</Th>
                                {isWiteVersion && <Th>Data de cadastro</Th>}
                                <Th width={8}></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold' >Anderson Dias</Text>
                                        <Text fontSize='sm' color='gray.300'>andersondiasmd21@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWiteVersion && <Td>10 de maio, 2022</Td>}

                            </Tr>

                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold' >Karol Barreto</Text>
                                        <Text fontSize='sm' color='gray.300'>karolbarreto@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWiteVersion && <Td>11 de abril, 2022</Td>}

                            </Tr>

                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold' >Alice Barreto</Text>
                                        <Text fontSize='sm' color='gray.300'>alicegabriella@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWiteVersion && <Td>13 de março, 2022</Td>}

                            </Tr>


                        </Tbody>

                    </Table>

                    <Pagination />
                </Box>
            </Flex>


        </Box>

    )
}