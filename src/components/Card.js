import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/solid";

const Card = ({ item, navigation, index }) => {
  return (
    <View className="px-4 py-2 mb-4">
      <Image
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULSPiQKGEcCtCxrkr4t9Ub8U-Jwzv3kXu2RMOzQoihg&s",
        }}
        className="h-52 w-full rounded-md"
        resizeMethod="resize"
      />
      <View className="px-2 my-2">
        <Text className="text-xl text-gray-700 font-Semibold">
          {item.title}
        </Text>
        <Text className="text-sm my-2">{item.description}</Text>
        <View className="flex-row justify-between items-center  my-2">
          <Text className="text-xs  text-gray-700 ">{item.author}</Text>
          <Text>{item.publishedAt}</Text>
        </View>
        <TouchableOpacity
          className="bg-redprimary px-4 py-1.5 mt-2 w-32 justify-center items-center rounded-md flex-row space-x-2"
          onPress={() =>
            navigation.navigate("NewsViewer", {
              url: item.url,
            })
          }
        >
          <Text className="text-white text-xs">Read More</Text>
          <ArrowRightIcon color="#fff" size={18} />
        </TouchableOpacity>
      </View>
      <View className="absolute top-2 right-4 bg-redprimary px-4 rounded-md">
        <Text className="text-xs text-white py-1">{item.source.name}</Text>
      </View>
    </View>
  );
};

export default Card;
