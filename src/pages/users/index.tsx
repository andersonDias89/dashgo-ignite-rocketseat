import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Th, Tr, Thead, Tbody, Td, Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header/Header";
import { Pagination } from "../../components/Pagination/Pagination";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";





export default function UserList() {
    const [page, setPage] = useState(1)
    const { data, isLoading, isFetching, error } = useUsers(page)



    const isWiteVersion = useBreakpointValue({
        base: false,
        lg: true
    })

     async function handlePrefetchUser(userId: number){
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`users/${userId}`)

            return response.data
        }, {
            staleTime: 1000 * 60 * 10 //10 min
        }
        )
    }

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px={6}>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p={8}>
                    <Flex mb={8} justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Lista de Usuários</Heading>

                        <NextLink href='/users/create' passHref>
                            <Button
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='pink'
                                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
                            >
                                Criar novo
                            </Button>
                        </NextLink>

                    </Flex>
                    {isLoading ? (
                        <Flex justify='center'>
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify='center'>
                            <Text>Falha em obter os dados</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme='whiteAlpha'>
                                <Thead>
                                    <Tr>
                                        <Th px={['4', '4', '6']} color='gray.300' w='8'>
                                            <Checkbox colorScheme='pink' />
                                        </Th>
                                        <Th>
                                            Usuários
                                            {!isLoading && isFetching && <Spinner size='sm' color="gray.500" ml={4} />}

                                        </Th>
                                        {isWiteVersion && <Th>Data de cadastro</Th>}
                                        <Th width={8}></Th>
                                    </Tr>
                                </Thead>

                                <Tbody>
                                    {data.users.map(user => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px={['4', '4', '6']}>
                                                    <Checkbox colorScheme='pink' />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Link color='purple.400' onMouseEnter={() => handlePrefetchUser(user.id)}>
                                                            <Text fontWeight='bold' >{user.name}</Text>
                                                        </Link>
                                                        <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                {isWiteVersion && <Td>{user.createdAt}</Td>}

                                            </Tr>
                                        )
                                    })}
                                </Tbody>

                            </Table>

                            <Pagination
                                totalCountOfRegisters={data.totalCount}
                                currentPage={page}
                                onPageChange={setPage}
                            />
                        </>
                    )}

                </Box>
            </Flex>


        </Box>

    )
}