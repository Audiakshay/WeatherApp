/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,

} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Stars from 'react-native-stars';
import HomeHeader from './HomeHeader';
import RazorpayCheckout from 'react-native-razorpay';

const BuyPage = () => {
  /////////count state////////
  const cartData = useSelector(state => state.cart.count);
  console.log(cartData);
  //////////product state/////
  const productData = useSelector(state => state.products.fakeApi);

  //////////cart state////////
  const cartData2 = useSelector(state => state.cart.cartProduct);
  console.log(cartData2);

  ///////////buy item//////////
  const buyItem = useSelector(state => state.buy.productDetail);
  const cartItem = cartData2.find(x => x.id === buyItem.id);
  console.log(buyItem);

  //////////dispatch function///////////
  const dispatch = useDispatch();
  return (
    <>
      <View style={{position: 'relative', top: 0, height: 45}}>
        <HomeHeader />
      </View>
      <ScrollView className="flex-1 bg-white pb-10">
        {/* Image section */}
        <View className="border-b-slate-200 py-5 border-b-2">
          <Image
            style={{resizeMode: 'contain'}}
            source={{uri: buyItem[0].image}}
            className="h-96 w-full"
          />

          <View className="my-2 flex-row justify-end items-center mx-3">
            <Text>{buyItem[0].rating}</Text>
            <Stars
              default={buyItem[0].rating}
              count={5}
              half={true}
              starSize={5}
              spacing={2}
              fullStar={
                <Image
                  source={require('../../assets/star.png')}
                  style={styles.myStarStyle}
                />
              }
              emptyStar={
                <Image
                  source={require('../../assets/emptyStar.png')}
                  style={styles.myStarStyle}
                />
              }
              halfStar={
                <Image
                  source={require('../../assets/halfStar.png')}
                  style={styles.myStarStyle}
                />
              }
            />
            <Text className="ml-3 text-black">{buyItem[0].count}</Text>
          </View>
          <Text className="mx-3 my-2 font-semibold text-sm text-black">
            {buyItem[0].title}
          </Text>
          <View className="mx-3 bg-black w-32 h-8 justify-center px-3">
            <Text className="text-white font-bold">
              BuyCart <Text className="text-orange-400 text-sm">choice</Text>
            </Text>
          </View>
        </View>
        {/* Price section */}
        <View className="border-b-slate-200 py-5 border-b-2 px-3">
          <Text className="text-red-600 font-medium text-base">Deal</Text>
          <Text className="text-slate-950 font-medium text-4xl pt-3">
            ₹{buyItem[0].price}
          </Text>
          <Text className="text-slate-950 font-normal text-sm line-through">
            M.R.P.: ₹{buyItem[0].price * 11}
          </Text>
          <View>
            <View className="flex-row items-center my-1">
              <Image
                style={{
                  tintColor: '#EB953F',
                }}
                source={require('../../assets/check-mark.png')}
                className="h-3 w-3"
              />
              <Text className="text-cyan-600 text-xs font-bold">Buy</Text>
              <Text className="pl-1 text-black">Same-Day</Text>
            </View>
            <View className="flex-row items-center">
              <Image
                source={require('../../assets/full-stop.png')}
                className="h-10 w-10"
              />
              <Text className="font-extrabold text-sm text-black">
                EMI{' '}
                <Text className="font-medium text-sm text-black">
                  from ₹121. No Cost EMI avaliable.
                </Text>
              </Text>
            </View>
            <Pressable>
              <Text className="font-medium text-sm text-teal-700">
                EMI options{' '}
                <Text className="font-medium text-sm text-black">
                  Inclusive of all taxes
                </Text>
              </Text>
            </Pressable>
          </View>
        </View>
        {/* Quantity and buy section */}
        <View className="border-b-slate-200 py-5 border-b-2 px-3">
          <Text className="text-slate-950 font-normal text-base">
            FREE delivery{' '}
            <Text className="text-slate-950 font-bold text-base">
              Today 4pm - 8pm.
            </Text>{' '}
            Order within
          </Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-green-700 font-medium text-base">
              2hrs 11mins.
            </Text>
            <Pressable className="items-center">
              <Text className="text-sm text-cyan-600 font-medium">Details</Text>
            </Pressable>
          </View>
          <View className="flex-row items-center gap-2 mt-3 mb-8">
            <Image
              style={{tintColor: '#000000'}}
              source={require('../../assets/location.png')}
              className="h-4 w-4"
            />
            <Text className="text-base text-cyan-600 font-semibold">
              Deliver to AKSHAY - Bengaluru 560022
            </Text>
          </View>
          <Text className="text-green-600 font-bold text-base">In Stock</Text>
          <View className="my-2">
            <Text>Qty: {1}</Text>
          </View>
          <View className="gap-3">
            {!cartItem && cartItem?.quantity !== 0 ? (
              <Pressable
                onPress={() => {
                  dispatch({
                    type: 'addCartItem',
                    payload: {id: buyItem.id, quantity: 1},
                  });
                  dispatch({
                    type: 'countIncrement',
                    payload: 1,
                  });
                }}
                className="bg-[#FFD500] w-80 rounded-md self-center h-[60px] justify-center items-center">
                <Text className="font-semibold text-base text-black ">
                  Add to cart
                </Text>
              </Pressable>
            ) : (
              <View className="flex-row justify-center items-center">
                <Pressable
                  className="bg-blue-400 px-12 py-3 rounded-md self-center justify-center items-center"
                  onPress={() => {
                    dispatch({
                      type: 'Decrement',
                      payload: {id: buyItem.id, quantity: 1},
                    });
                    dispatch({
                      type: 'countDecrement',
                      payload: 1,
                    });
                  }}>
                  <Text className="font-medium text-xl">-</Text>
                </Pressable>
                <Text className="font-bold mx-12 text-xl">
                  {cartItem?.quantity}
                </Text>
                <Pressable
                  className="bg-blue-400 px-12 py-3 rounded-md self-center justify-center items-center"
                  onPress={() => {
                    dispatch({
                      type: 'Increment',
                      payload: {id: buyItem.id, quantity: 1},
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
            <Pressable
              onPress={() => {
                var options = {
                  description: 'Credits towards consultation',
                  image: 'https://i.imgur.com/3g7nmJC.jpg',
                  currency: 'INR',
                  key: 'rzp_test_Fvgfd9AGr0Vfc6',
                  amount: '5000',
                  name: 'Acme Corp',
                  order_id: '', //Replace this with an order_id created using Orders API.
                  prefill: {
                    email: 'gaurav.kumar@example.com',
                    contact: '9191919191',
                    name: 'Gaurav Kumar',
                  },
                  theme: {color: '#53a20e'},
                };
                RazorpayCheckout.open(options)
                  .then(data => {
                    // handle success
                    alert(`Success: ${data.razorpay_payment_id}`);
                  })
                  .catch(error => {
                    // handle failure
                    alert(`Error: ${error.code} | ${error.description}`);
                  });
              }}
              className="bg-[#Fa9923] w-80 rounded-md self-center h-[60px] justify-center items-center">
              <Text className="font-semibold text-base text-black">
                Buy Now
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  myStarStyle: {
    tintColor: '#FFA937',
    height: 12,
    width: 12,
  },
});
export default BuyPage;
