import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Card from "./components/Card";
import Header from "./components/Header";

const HomeScreen = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [Select, setSelect] = useState(0);

  const [Category, setCategory] = useState([
    {
      id: 1,
      name: "Top Headlines",
      category: "general",
    },

    {
      id: 2,
      name: "Business",
      category: "business",
    },
    {
      id: 3,
      name: "Entertainment",
      category: "entertainment",
    },
    {
      id: 4,
      name: "Health",
      category: "health",
    },
    {
      id: 5,
      name: "Sports",
      category: "sports",
    },
    {
      id: 6,
      name: "Science",
      category: "science",
    },
    {
      id: 7,
      name: "Technology",
      category: "technology",
    },
  ]);
  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=026e854640094628b3ae480e52e71fd0`
    );
    const data = await response.json();
    setData(data.articles);
  };

  const getData2 = async (category) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=026e854640094628b3ae480e52e71fd0&category=${category}`
    );

    const data = await response.json();
    setData(data.articles);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <View className="flex-1">
        <Header navigation={navigation} />
        <View className="px-4 py-2">
          <FlatList
            data={Category}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  className={
                    index == Select
                      ? "px-4 py-1  mr-3 rounded-md bg-redprimary"
                      : "px-4 py-1  mr-3 rounded-md bg-gray-200"
                  }
                  onPress={() => {
                    setSelect(index);
                    getData2(Category[index].category);
                  }}
                >
                  <Text
                    className={index == Select ? "text-white" : "text-gray-600"}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View>
          <FlatList
            data={Data}
            renderItem={({ item, index }) => {
              return <Card item={item} navigation={navigation} index={index} />;
            }}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
