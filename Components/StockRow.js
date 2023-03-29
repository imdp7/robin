import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { key, host } from "../api";
import tw from "tailwind-react-native-classnames";
import axios from "axios";
import { db } from "../firebase";
import Graph from "./Graph";
import { useNavigation } from "@react-navigation/native";
import Shimmer from "./Shimmer";

const GRAPH_URL =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=compact&symbol=";
const GRAPH_PARAMS = "&apikey=HQA5E3338OQ9XD9H";
const BASE_URL =
  "https://yh-finance.p.rapidapi.com/stock/v2/get-profile?symbol=";
const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`;
const testData = [];

const StockRow = () => {
  const [stocksData, setStocksData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [graph, setGraph] = useState([]);
  const navigation = useNavigation();

  //   useEffect(() => {

  //     return axios
  //       .request(`${GRAPH_URL}AAPL${GRAPH_PARAMS}`)
  //       .then((res) => {
  //   let graph = res.data;
  //   setGraph(graph);
  //   })
  //       .catch((error) => {
  //   console.error("Error", error.message);
  //       });

  // },[]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    },1500)
    return () => clearTimeout(timer);
  },[])

  const getMyStocks = () => {
    db.collection("myStocks").onSnapshot((snapshot) => {
      let promises = [];
      let tempData = [];
      snapshot.docs.map((doc) => {
        promises.push(
          getStocksData(doc.data().ticker).then((res) => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res?.data,
            });
          })
        );
      });
      Promise.all(promises).then(() => {
        setMyStocks(tempData);
      });
    });
  };

  const getStocksData = (stock) => {
    return axios.request(`${BASE_URL}${stock}${KEY_URL}`).catch((error) => {
      console.error("Error", error.message);
    });
  };

  useEffect(() => {
    const stocksList = ["TSLA", "AMZN", "AAPL"];

    getMyStocks();
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          testData.push({
            name: stock,
            info: res?.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setStocksData(testData);
    });
  }, [testData]);

  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <SafeAreaView>
    {!loading ? (
      <>
      <View style={tw`p-2 mt-3`}>
        <View>
          <Text style={tw`text-black font-semibold text-2xl pl-2 pb-2`}>
            Stocks
          </Text>
        </View>

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={myStocks}
          vertical
          ItemSeparatorComponent={() => <View style={[tw`bg-gray-500`]} />}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Stock", { symbol: item?.data?.ticker, title: item.data.ticker })}
              style={tw`flex flex-row pl-2 m-1 rounded border border-gray-400 border-opacity-25 text-center`}>
              <View style={tw`flex-1`}>
                {item?.info?.price?.regularMarketPrice?.fmt ? (
                  <View
                    style={tw`flex flex-row justify-between p-2 text-center items-center`}>
                    <View style={tw`flex flex-col text-left w-24`}>
                      <Text
                        style={tw`pt-2 pr-2 text-base text-black font-normal`}>
                        {item?.data?.ticker}
                      </Text>
                      <Text style={tw`pr-2 text-sm text-black font-normal`}>
                        {item?.data?.shares} shares
                      </Text>
                    </View>
                    <Image
                      style={{ height: 50, width: 100 }}
                      source={{
                        uri: "https://www.freeiconspng.com/uploads/blue-line-png-1.png",
                      }}
                    />
                    {/* <Graph style={tw`justify-center mt-2`} graph={graph} width={"100"} height={"50"}/> */}
                    <View style={tw`flex flex-col pt-2`}>
                      <View style={tw`p-2 rounded-lg bg-green-600`}>
                        <Text style={tw`text-base font-semibold text-white`}>
                          {item?.info?.price?.currencySymbol}
                          {item?.info?.price?.regularMarketPrice?.fmt}
                        </Text>
                      </View>

                      <View style={tw`pl-2 pt-2`}>
                        {item?.info?.price?.regularMarketChangePercent?.fmt && (
                          <TouchableOpacity onPress={() => toggleFunction()}>
                            <Text
                              style={tw`text-sm text-green-700 font-normal text-right`}>
                              {toggle
                                ? item?.info?.price?.regularMarketChangePercent
                                    ?.fmt
                                : item?.info?.price?.regularMarketChange?.fmt}
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  </View>
                ) : null}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={tw`p-2 mt-3`}>
        <View>
          <Text style={tw`text-black font-semibold text-2xl pb-2 pl-2 `}>
            My Lists
          </Text>
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={stocksData}
          vertical
          ItemSeparatorComponent={() => <View style={[tw`bg-gray-500`]} />}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Stock", { symbol: item?.name })}
              style={tw`flex flex-row p-2 m-1 rounded border border-gray-400 border-opacity-25 text-center`}>
              <View style={tw`flex-1`}>
                {item?.info?.price?.regularMarketPrice?.fmt ? (
                  <View
                    style={tw`flex flex-row justify-between text-center items-center`}>
                    <View style={tw`flex flex-col text-left w-24 flex-shrink`}>
                      <Text
                        style={tw`pt-2 pr-2 text-base text-black font-normal`}>
                        {item?.name}
                      </Text>
                      <Text style={tw` pr-2 text-sm text-black font-normal `}>
                        {item?.info?.price?.longName}
                      </Text>
                    </View>
                    <Image
                      style={{ height: 50, width: 100 }}
                      source={{
                        uri: "https://www.freeiconspng.com/uploads/blue-line-png-1.png",
                      }}
                    />
                    {/* <Graph style={tw`justify-center mt-2`} item={item} height={1}/> */}
                    <View style={tw`pt-2 flex flex-col`}>
                      <View style={tw`p-2 rounded-lg bg-green-600`}>
                        <Text style={tw`text-base font-semibold text-white`}>
                          {item?.info?.price?.currencySymbol}
                          {item?.info?.price?.regularMarketPrice?.fmt}
                        </Text>
                      </View>

                      <View style={tw`pl-2 pt-2`}>
                        {item?.info?.price?.regularMarketChangePercent?.fmt && (
                          <TouchableOpacity onPress={() => toggleFunction()}>
                            <Text
                              style={tw`text-sm text-green-700 font-normal text-right`}>
                              {toggle &&
                                item?.info?.price?.regularMarketChangePercent
                                  ?.fmt}
                              {!toggle &&
                                item?.info?.price?.regularMarketChange?.fmt}
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  </View>
                ) : null}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      </>
      ) :null}
    </SafeAreaView>
  );
};

export default StockRow;
