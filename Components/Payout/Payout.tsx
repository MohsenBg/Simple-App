import {
  View,
  StyleSheet,
  VirtualizedList,
  FlatList,
  SafeAreaView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import HeaderPayout from "./HeaderPayout";
import { FullScreenSize } from "../../Function/Size";
import { Action_Type, PAY_OUT_DATA } from "../../Items/Payout&Incame";
import { items, RenderDataType } from "../../Interface/Interface";
import ItemPayOut from "./ItemPayOut";

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  items: {
    paddingTop: 10,
    paddingHorizontal: 10,
    width: FullScreenSize().width,
    height: FullScreenSize().height - 200,
  },
});

const Tabs = [Action_Type.INCOMES, Action_Type.PAY_OUT];

const Payout = () => {
  const [ActionType, setActionType] = useState(Action_Type.INCOMES);
  const [RenderData, setRenderData] =
    useState<typeof PAY_OUT_DATA>(PAY_OUT_DATA);

  useEffect(() => {
    if (ActionType === Action_Type.INCOMES) {
      scroll.current?.scrollToOffset({ offset: 0 });
    }
    if (ActionType === Action_Type.PAY_OUT) {
      scroll.current?.scrollToEnd();
    }
  }, [ActionType]);

  const scroll: React.MutableRefObject<FlatList<Action_Type> | null> =
    useRef(null);
  const getItem = (data: items[], index: number) => data[index];

  const setDataForRender = (index: number) => {
    const data = RenderData.filter((item) => item.ActionType === Tabs[index]);
    return data;
  };

  const renderData = ({ tab, index }: any) => {
    return (
      <SafeAreaView style={styles.items} key={index}>
        <VirtualizedList
          scrollEnabled={true}
          data={setDataForRender(index)}
          keyExtractor={(item) => item.Id.toString()}
          getItemCount={(data) => setDataForRender(index).length}
          getItem={getItem}
          renderItem={({ item }) => <ItemPayOut item={item} />}
        />
      </SafeAreaView>
    );
  };

  const scrollHandel = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (e.nativeEvent.contentOffset.x === e.nativeEvent.contentSize.width / 2)
      setActionType(Action_Type.PAY_OUT);
    if (e.nativeEvent.contentOffset.x === 0) setActionType(Action_Type.INCOMES);
  };
  return (
    <View style={styles.container}>
      <HeaderPayout setActionType={setActionType} ActionType={ActionType} />
      <SafeAreaView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Tabs}
          keyExtractor={(item, index) => item}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderData}
          pagingEnabled
          bounces={false}
          onScroll={(e) => scrollHandel(e)}
          ref={(ref) => (scroll.current = ref)}
        />
      </SafeAreaView>
    </View>
  );
};

export default Payout;
