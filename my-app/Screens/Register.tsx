import React, { useState } from 'react'
import { StyleSheet, Text, View, Keyboard, ScrollView} from 'react-native';
import { Stack, Center, Input, Button, HStack, Link, Heading, NativeBaseProvider } from 'native-base'

const RegisterForm = () => {

  const [email, setEmail] = useState('')
  const [fullName, setFullname] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [isValidFullName, setIsValidFullName] = useState(true)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidPassword, setIsValidPassword] = useState(true)
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true)


  const onSubmit = () => {
    const payload = {
      name: fullName,
      email,
      password,
      passwordRepeat
    }

    //check if password is less than 3 
    //check if full name is less than 6
    //chek if password and password repeat is different

    let isValidate = true

    if (fullName.length < 6) {
      isValidate = false
      setIsValidFullName(false)
    }

    if (email.length < 5) {
      isValidate = false
      setIsValidEmail(false)
    }


    if (password.length < 5) {
      isValidate = false
      setIsValidPassword(false)
    }


    if (password !== passwordRepeat) {
      isValidate = false
      setIsValidConfirmPassword(false)
    }
  }
  const navigation = useNavigation()
  return (





  )
}

export default () => {
    return (
      <NativeBaseProvider>
        <Center flex={1} px="3" mx="auto">
            <RegisterForm/>
        </Center>
      </NativeBaseProvider>
    );
  };