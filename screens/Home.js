import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import SigHeader from "../components/General/SigHeader";
import ToDoItem from "../components/General/ToDoItem";

export default function Home() {
  const [DATA, setDATA] = useState([
    {
      id: 0,
      title: "Wake Up on 5am",
      duration: 0,
      finished: true,
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
      showDetails: false,
    },
    {
      id: 1,
      title: "Wake Up on 5am",
      duration: 0,
      finished: true,
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
      showDetails: false,
    },
    {
      id: 2,
      title: "Wake Up on 5am",
      duration: 0,
      finished: false,
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
      showDetails: false,
    },
    {
      id: 3,
      title: "Wake Up on 5am",
      duration: 0,
      finished: false,
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
      showDetails: false,
    },
    {
      id: 4,
      title: "Wake Up on 5am",
      duration: 0,
      finished: false,
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
      showDetails: false,
    },
    {
      id: 5,
      title: "Wake Up on 5am",
      duration: 0,
      finished: false,
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
      showDetails: false,
    },
    {
      id: 6,
      title: "Wake Up on 5am",
      duration: 0,
      finished: false,
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
      showDetails: false,
    },
    {
      id: 7,
      title: "Wake Up on 5am",
      duration: 0,
      finished: false,
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
      showDetails: false,
    },
    {
      id: 8,
      title: "Wake Up on 5am",
      duration: 0,
      finished: false,
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
      showDetails: false,
    },
    {
      id: 9,
      title: "Wake Up on 5am",
      duration: 0,
      finished: false,
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
      showDetails: false,
    },
  ]);

  const toggleFinished = (id) => () => {
    const toDo = [...DATA];
    const selectedToDo = toDo.find((toDo) => toDo.id === id);
    selectedToDo.finished = !selectedToDo.finished;
    setDATA(toDo);
  };

  const toggleShowDetails = (id) => () => {
    const toDo = [...DATA];
    const selectedToDo = toDo.find((toDo) => toDo.id === id);
    selectedToDo.showDetails = !selectedToDo.showDetails;
    setDATA(toDo);
  };

  const renderProgress = () => {
    const percent =
      Math.ceil(
        ((DATA.filter((toDo) => toDo.finished).length / DATA.length) * 100) / 5
      ) *
        5 +
      "%";

    return {
      width: percent,
      height: 7,
      backgroundColor: "#5E227F",
      borderRadius: 10,
    };
  };

  const renderItem = ({ item }) => (
    <ToDoItem
      id={item.id}
      title={item.title}
      duration={item.duration}
      finished={item.finished}
      details={item.details}
      showDetails={item.showDetails}
      toggleFinished={toggleFinished}
      toggleShowDetails={toggleShowDetails}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.topTab}>
          <SigHeader label={"Mozart's Routine"} />
        </View>
        <View style={styles.statusCard}>
          <View style={styles.statusCardFirstGroup}>
            <Svg
              width={27}
              height={27}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={styles.metricSvg}
            >
              <Path
                d="M.018 10.232A3.21 3.21 0 013.23 7a3.252 3.252 0 013.249 3.23l.074 13.539A3.21 3.21 0 013.34 27a3.252 3.252 0 01-3.248-3.23L.018 10.232z"
                fill="#BDBDBD"
              />
              <Path
                d="M10.017 3.028A3.007 3.007 0 0113.027 0a3.047 3.047 0 013.044 3.027l.114 20.946A3.007 3.007 0 0113.175 27a3.047 3.047 0 01-3.044-3.027l-.114-20.946z"
                fill="#BDBDBD"
              />
              <Path
                d="M20.017 16.018A2.998 2.998 0 0123.018 13a3.038 3.038 0 013.034 3.018l.044 7.965A2.998 2.998 0 0123.095 27a3.038 3.038 0 01-3.035-3.017l-.043-7.965z"
                fill="#BDBDBD"
              />
            </Svg>
            <Text style={styles.statusCardFirstGroupLabel}>
              Current Progress
            </Text>
          </View>
          <View style={styles.statusCardSecondGroup}>
            <View style={styles.secondGroupDay}>
              <View style={styles.secondGroupDayGroup}>
                <Text style={styles.secondGroupDayLabel}>3</Text>
                <Text style={styles.secondGroupDaySubscript}>rd</Text>
              </View>
              <Text style={styles.secondGroupLabel}>Week</Text>
            </View>
            <View style={styles.secondGroupProgress}>
              <View style={styles.secondGroupDayGroup}>
                <Text style={styles.secondGroupDayLabel}>7</Text>
                <Text style={styles.secondGroupDaySubscript}>th</Text>
              </View>
              <Text style={styles.secondGroupLabel}>Day</Text>
            </View>
            <View style={styles.secondGroupAces}>
              <Text style={styles.secondGroupAmount}>
                {Math.ceil(
                  ((DATA.filter((toDo) => toDo.finished).length / DATA.length) *
                    100) /
                    5
                ) * 5}
                %
              </Text>
              <Text style={styles.secondGroupLabel}>Tasks</Text>
            </View>
          </View>
        </View>
        <View style={styles.routine}>
          <Text style={styles.routineHeader}>Agenda:</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  topTab: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 15,
    marginTop: 10,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  statusCard: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
  statusCardFirstGroup: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 15,
  },
  statusCardFirstGroupLabel: {
    fontFamily: "inter-semibold",
    fontSize: 18,
    color: "#BDBDBD",
  },
  metricSvg: {
    marginRight: 8,
    marginLeft: 5,
  },
  statusCardSecondGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  secondGroupDay: {
    alignItems: "center",
    width: "31%",
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 15,
  },
  secondGroupProgress: {
    alignItems: "center",
    width: "31%",
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 15,
  },
  secondGroupAces: {
    alignItems: "center",
    width: "31%",
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 15,
  },
  secondGroupDayGroup: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  secondGroupDayLabel: {
    fontFamily: "inter-semibold",
    fontSize: 30,
    lineHeight: 35,
    color: "#fff",
  },
  secondGroupDaySubscript: {
    fontFamily: "inter-semibold",
    fontSize: 15,
    lineHeight: 22,
    color: "#fff",
  },
  secondGroupAcesAmount: {
    fontFamily: "inter-semibold",
    fontSize: 30,
    lineHeight: 55,
    color: "#fff",
  },
  secondGroupAmount: {
    fontFamily: "inter-semibold",
    fontSize: 25,
    color: "#fff",
    marginVertical: 10,
  },
  secondGroupLabel: {
    fontFamily: "inter-semibold",
    fontSize: 15,
    color: "#fff",
  },
  routine: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 10,
  },
  routineHeader: {
    fontFamily: "inter-semibold",
    fontSize: 22,
    marginBottom: 10,
    marginLeft: 10,
  },
});
