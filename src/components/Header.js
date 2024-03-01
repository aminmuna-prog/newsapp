import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";

const Header = ({ navigation }) => {
  return (
    <View className="mt-5 flex-row px-4 py-3 justify-between items-center bg-white shadow-lg ">
      <Text className="text-base text-redprimary font-bold">Exlusive News</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <MagnifyingGlassIcon color="#000" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
