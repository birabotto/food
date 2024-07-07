import { View, Text, Pressable, Image } from "react-native";
import PagerView from "react-native-pager-view";
import React from "react";

const BANNER1 = require("../../assets/banner1.png");
const BANNER2 = require("../../assets/banner2.png");

export function Banner() {
  return (
    <View className="w-full h-36 md:h-60 rounded-2xl mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl"
          key="1"
          onPress={() => console.log("Slide 1")}
        >
          <Image source={BANNER1} className="w-full h-36 md:h-60 rounded-2xl" />
        </Pressable>

        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl"
          key="2"
          onPress={() => console.log("Slide 2")}
        >
          <Image source={BANNER2} className="w-full h-36 md:h-60 rounded-2xl" />
        </Pressable>
      </PagerView>
    </View>
  );
}
