import {
  View,
  Text,
  Image,
  Press,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <View className="flex min-h-fit flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <View className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-28 h-28 w-28"
          source={require('../../assets/shopping-bag.png')}
        />
        <Text className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </Text>
      </View>
      <View className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <View className="space-y-6">
          <View>
            <Text className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </Text>
            <View className="mt-2">
              <TextInput className="block w-full rounded-md border-2 border-indigo-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </View>
          </View>
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </Text>
              <View className="text-sm">
                <Pressable>
                  <Text className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Text>
                </Pressable>
              </View>
            </View>
            <View className="mt-2">
              <TextInput className="block w-full rounded-md border-2 border-indigo-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </View>
          </View>
          <View>
            <Pressable
              onPress={() => navigation.navigate('DashBoard')}
              className="flex-row w-full justify-center rounded-lg bg-yellow-400 px-3 py-3 leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <Text className="text-sm text-white font-semibold">Sign in</Text>
            </Pressable>
          </View>
        </View>
        <View className="flex items-center w-full">
          <Text className="mt-10 text-center text-sm text-gray-500">
            Not a member?
          </Text>
          <Pressable
            className="font-semibold hover:text-indigo-500"
            onPress={() => navigation.navigate('Register')}>
            <Text className="font-semibold leading-10 text-indigo-600">
              Sign up here
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;
