import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { RECOMMEND_URL, key, host, KEY_URL } from "../api";
import axios from "axios";
import Card from "./Card";
import tw from "tailwind-react-native-classnames";
const Recommendation = ({ item }) => {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    const getRecommend = async () => {
      let res = await axios.get(
        `${RECOMMEND_URL}${KEY_URL}${key}${host}&symbol=${item?.info?.symbol}`
      );
      let data = res.data?.finance?.result[0]?.quotes;
      setRecommend(data);
    };

    getRecommend();
  }, [item?.info?.symbol]);

  return (
    <View style={tw`p-2`}>
      <Card
        key={item?.info?.symbol}
        keyExtractor={item?.info?.symbol}
        recommend={recommend}
        heading={"People also own"}
        desc={`This list is based on the portfolios of people on Robinhood who owns ${item?.info?.symbol}. It's not an investment recommendation.`}
      />
    </View>
  );
};

export default Recommendation;
