import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align='center' >
            {showProfileData && (
                <Box mr={4} textAlign='right'>
                    <Text>Anderson Dias</Text>
                    <Text
                        color='gray.300'
                        fontSize='small'
                    >
                        andersondiasmd21@gmail.com
                    </Text>
                </Box>

            )}

            <Avatar
                size='md'
                name='Anderson Dias'
                src='https://github.com/andersondias89.png'
            />

        </Flex>
    )
}