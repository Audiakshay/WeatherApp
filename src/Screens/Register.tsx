import {View, Text, Pressable, Image, TextInput} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  // const registerUser = useSelector(state => state.RegisterReducer.inputFields);
  // console.log(registerUser);
  return (
    <View className="flex min-h-fit flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <View className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-28 h-28 w-28"
          source={require('../../assets/shopping-bag.png')}
        />
        <Text className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to create your account
        </Text>
        <View className="flex-row justify-center mt-41">
          <Text className="font-bold text-xs text-slate-600">
            Already member?
          </Text>
          <Pressable
            className="flex items-center justify-center"
            onPress={() => navigation.navigate('Login')}>
            <Text className="font-bold text-xs text-indigo-500">
              Sign in here
            </Text>
          </Pressable>
        </View>
      </View>
      <Formik
        initialValues={{
          Name: '',
          Email: '',
          Password: '',
          ConfirmPassword: '',
        }}
        onSubmit={values => dispatch({type: 'Register', payload: values})}>
        {({values, handleChange, handleSubmit}) => (
          <View className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <View>
              <View>
                <TextInput
                  placeholder="Name"
                  value={values.Name}
                  onChangeText={handleChange('Name')}
                  className="block w-full pl-4 font-bold rounded-t-md border-2 border-indigo-300  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </View>
              <View>
                <TextInput
                  placeholder="Email"
                  value={values.Email}
                  onChangeText={handleChange('Email')}
                  className="block w-full pl-4 font-bold border-2 border-indigo-300 border-b-0 border-t-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </View>
              <View>
                <TextInput
                  placeholder="Password"
                  value={values.Password}
                  onChangeText={handleChange('Password')}
                  className="block w-full pl-4 font-bold border-2 border-b-0 border-indigo-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </View>
              <View>
                <TextInput
                  placeholder="Confirm Password"
                  value={values.ConfirmPassword}
                  onChangeText={handleChange('ConfirmPassword')}
                  className="block w-full pl-4 font-bold rounded-b-md border-2 border-indigo-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </View>
              <View className="mt-6">
                <Pressable
                  onPress={handleSubmit}
                  className="flex-row w-full justify-center rounded-lg bg-yellow-400 px-3 py-3 leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <Text className="text-sm text-white font-semibold">
                    Sign up
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Register;
