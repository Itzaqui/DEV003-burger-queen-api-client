"use client"
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Button,
} from '@chakra-ui/react'
import Image from 'next/image'
import styles from './page.module.css'
import { Box, Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className={styles.main}>
      <Flex minHeight='100vh'
            width='full'
            align='center'
            justifyContent='center'
            >
              <Box px={12}
                  py={12}
                   width='400px'
                   height='400px'
                   justifyContent='center'
                   align='center'
                   backgroundColor='#02040F'
                   borderRadius='6px 0 0 6px'
                   >
                <Heading>
                  <Text className={styles.title}>BURGER</Text>
                  <Text className={styles.titleQueen}>QUEEN</Text>
                </Heading>
                <Image
              src='/images/burger.png'
              alt='Burger'
              className={styles.burger}
              width={260}
              height={260}
              priority
              
            />
              </Box>
              <Box 
                  px={12}
                  py={14}
                  width='400px'
                  height='400px'
                  justifyContent='center'
                  align='center'
                  backgroundColor='#02040F'
                  borderRadius='0 6px 6px 0'>
              <form action=''>
              <FormControl isRequired>
               <FormLabel color='#F8B507'>Email</FormLabel>
               <Input type='email' backgroundColor='white'/>
              </FormControl>
              <FormControl isRequired>
               <FormLabel color='#F8B507' marginTop={4}>Password</FormLabel>
               <Input type='password' backgroundColor='white' />
              </FormControl>
              <Button type='submit' backgroundColor='#F8B507' marginTop={9}>Login</Button>
              </form>
              </Box>
            </Flex>
    </main>
  )
}
