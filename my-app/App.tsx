import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Keyboard, ScrollView} from 'react-native';
import { Stack, Center, Input, Button, HStack, Link, Heading, NativeBaseProvider } from 'native-base'

// const App = () => {
//   return (
//     <RootNavigator />
//   );
// };

// export default App;

const LoginForm = () => {
  return <Stack space={4} w="1000" maxW="300px" mx="auto">
      <Heading>Welcome Back!</Heading>
      <Input size="2xl" placeholder="Email"/>
      <Input size="2xl" placeholder="Password"/>
      <Button onPress={() => Keyboard.dismiss()}>Login</Button>
      <Text fontSize="sm" color="coolGray.600" _dark={{
        color: "warmGray.200"
        }}>
        I'm a new user.{" "}
      </Text>
      <Button size="sm" variant="link">
        Sign Up Here!
      </Button>
      <Button isLoading isLoadingText="Submitting">
        Button
      </Button>
    </Stack>;
};


export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" mx="auto">
          <LoginForm/>
      </Center>
    </NativeBaseProvider>
  );
};
