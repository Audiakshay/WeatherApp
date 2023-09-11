/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, Image, Pressable, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Stars from 'react-native-stars';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';

const Mens = ({navigation}) => {
  /////////count state////////
  const cartData = useSelector(state => state.cart.count);
  console.log(cartData);
  //////////product state/////
  const productData = useSelector(state => state.products.fakeApi);

  //////////cart state////////
  const cartData2 = useSelector(state => state.cart.cartProduct);
  console.log(cartData2);

  //////////dispatch function///////////
  const dispatch = useDispatch();
  return (
    <View className="flex-1 bg-white">
      <View>
        <FlatList
          data={productData}
          renderItem={({item}) => {
            const cartItem = cartData2.find(x => x.id === item.id);
            if (item.category === "men's clothing") {
              return (
                <View className="w-full p-5 bg-white h-60 border-b-2 border-b-slate-300 justify-between">
                  <View className="flex-row">
                    <Pressable
                      onPress={() => {
                        dispatch({
                          type: 'productClicked',
                          payload: {
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            desc: item.description,
                            price: item.price,
                            rating: item.rating.rate,
                            count: item.rating.count,
                          },
                        });
                        navigation.navigate('BuyPage');
                      }}>
                      <Image
                        style={{resizeMode: 'contain'}}
                        source={{uri: item.image}}
                        className="h-32 w-32"
                      />
                    </Pressable>
                    <View className="w-48 pl-3">
                      <Text className="font-extrabold text-base text-black">
                        {item.title}
                      </Text>
                      <Text className="text-sm font-bold text-slate-950 my-2 mx-1">
                        ₹{item.price}
                      </Text>
                      <View className="items-start">
                        <Stars
                          default={item.rating.rate}
                          count={5}
                          half={true}
                          starSize={10}
                          spacing={2}
                          fullStar={
                            <Image
                              source={require('../../../assets/star.png')}
                              style={styles.myStarStyle}
                            />
                          }
                          emptyStar={
                            <Image
                              source={require('../../../assets/emptyStar.png')}
                              style={styles.myStarStyle}
                            />
                          }
                          halfStar={
                            <Image
                              source={require('../../../assets/halfStar.png')}
                              style={styles.myStarStyle}
                            />
                          }
                        />
                      </View>
                    </View>
                  </View>
                  
                </View>
              );
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myStarStyle: {
    tintColor: '#FFA937',
    height: 20,
    width: 20,
  },
});
export default Mens;
