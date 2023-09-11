import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

const HomeHeader = () => {
  const cartItemCount = useSelector(state => state.cart.count);

  return (
    <View className="w-full bg-slate-950 h-12 px-3 items-center flex-row">
      <Image
        source={require('../../assets/shopping-cart.png')}
        className="h-7 w-7"
      />
      <Text className="flex-1 font-extrabold text-xl text-center text-white">
        BuyCart
      </Text>
      <Image
        style={{tintColor: '#FFFFFF'}}
        source={require('../../assets/cart.png')}
        className="h-5 w-5"
      />
      <View className="absolute right-14 top-2 w-4 h-4 bg-red-400 justify-center items-center rounded-lg">
        <Text className="text-black text-xs font-extrabold">
          {cartItemCount}
        </Text>
      </View>
      <Image
        source={require('../../assets/man.png')}
        className="h-7 w-7 ml-6"
      />
    </View>
  );
};

export default HomeHeader;
