import {View, Text, FlatList, Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Stars from 'react-native-stars';

const Electronics = () => {
  /////////count state////////
  const cartData = useSelector(state => state.cart.count);

  //////////cart state////////
  const cartData2 = useSelector(state => state.cart.cartProduct);
  console.log(cartData2);

  //////////dispatch function///////////
  const dispatch = useDispatch();

  const productData = useSelector(state => state?.products?.fakeApi);
  // console.log('WOMENS', productData);
  return (
    <View className="flex-1 bg-red-400">
      <View>
        <FlatList
          data={productData}
          renderItem={({item}) => {
            const cartItem = cartData2.find(x => x.id === item.id);
            if (item.category === 'electronics') {
              return (
                <View className="w-full p-5 bg-white h-60 border-b-2 border-b-slate-300 justify-between">
                  <View className="flex-row">
                    <Image
                      style={{resizeMode: 'contain'}}
                      source={{uri: item.image}}
                      className="h-32 w-32"
                    />
                    <View className="w-48 pl-3">
                      <Text className="font-extrabold text-base text-black">{item.title}</Text>
                      <Text className="text-sm font-bold text-slate-950 my-2 mx-1">₹{item.price}</Text>
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
                  {!cartItem && cartItem?.quantity !== 0 ? (
                    <Pressable
                      onPress={() => {
                        dispatch({
                          type: 'addCartItem',
                          payload: {id: item.id, quantity: 1},
                        });
                        dispatch({
                          type: 'countIncrement',
                          payload: 1,
                        });
                      }}
                      className="bg-blue-400 w-80 rounded-md self-center h-10 justify-center items-center">
                      <Text>Add to cart</Text>
                    </Pressable>
                  ) : (
                    <View className="flex-row justify-center items-center">
                      <Pressable
                        className="bg-blue-400 w-20 rounded-md self-center h-10 justify-center items-center"
                        onPress={() => {
                          dispatch({
                            type: 'Decrement',
                            payload: {id: item.id, quantity: 1},
                          });
                          dispatch({
                            type: 'countDecrement',
                            payload: 1,
                          });
                        }}>
                        <Text className="font-medium text-xl">-</Text>
                      </Pressable>
                      <Text className="font-bold mx-10 text-xl">
                        {cartItem?.quantity}
                      </Text>
                      <Pressable
                        className="bg-blue-400 w-20 rounded-md self-center h-10 justify-center items-center"
                        onPress={() => {
                          dispatch({
                            type: 'Increment',
                            payload: {id: item.id, quantity: 1},
                          });
                          dispatch({
                            type: 'countIncrement',
                            payload: 1,
                          });
                        }}>
                        <Text className="font-medium text-xl">+</Text>
                      </Pressable>
                    </View>
                  )}
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
export default Electronics;
