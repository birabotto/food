import { Text, View, ScrollView } from "react-native";
import Header from "../components/header";
import { Banner } from "../components/banner";
import Constants from "expo-constants";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";
const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>
      <Section
        name="Trending foods"
        label="See more"
        action={() => console.log("CLick see more")}
        size="text-2xl"
      />
      <TrendingFoods />

      <Section
        name="Famous on Food"
        label="See all"
        action={() => console.log("CLICOU Famous")}
        size="text-xl"
      />

      <Restaurants />

      <Section
        name="Restaurants"
        label="See all"
        action={() => console.log("CLICOU RESTAURANTS")}
        size="text-xl"
      />
      <RestaurantVerticalList />
    </ScrollView>
  );
}
