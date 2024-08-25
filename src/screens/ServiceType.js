import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  TopNav,
  Section,
  SectionContent,
  SectionImage,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
// import { PriceTable } from "./PriceTable";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <Layout>
      <TopNav
        middleContent="Vehicle Type"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={"log-out-outline"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          signOut(auth);
        }}
      />
      <Section>
        <SectionImage
          resizeMode="cover"
          style={{
            height: 220,
            width: "100%",
          }}
          source={require("../../assets/washcar.gif")}
        />
        {/* <SectionImage source={require("../../assets/washcar.gif")} /> */}
      </Section>
      <View style={{ flex: 1 }}>
        {/* This text using ubuntu font */}
        <View style={styles.container}>
          {/* Header Row */}
          <View style={styles.row}>
            <Text style={styles.headerCell}>Quality/Size</Text>
            <Text style={styles.headerCell}>Compact Sedan</Text>
            <Text style={styles.headerCell}>Full Size Sedan</Text>
            <Text style={styles.headerCell}>SUV</Text>
            <Text style={styles.headerCell}>Mini-Van</Text>
          </View>

          {/* Silver Row */}
          <View style={styles.row}>
            <Text style={styles.cell}>Silver</Text>
            <Text style={styles.cell}>100</Text>
            <Text style={styles.cell}>140</Text>
            <Text style={styles.cell}>160</Text>
            <Text style={styles.cell}>200</Text>
          </View>

          {/* Gold Row */}
          <View style={styles.row}>
            <Text style={styles.cell}>Gold</Text>
            <Text style={styles.cell}>150</Text>
            <Text style={styles.cell}>190</Text>
            <Text style={styles.cell}>210</Text>
            <Text style={styles.cell}>250</Text>
          </View>

          {/* Platinum Row */}
          <View style={styles.row}>
            <Text style={styles.cell}>Platinum</Text>
            <Text style={styles.cell}>200</Text>
            <Text style={styles.cell}>240</Text>
            <Text style={styles.cell}>260</Text>
            <Text style={styles.cell}>300</Text>
          </View>

          {/* Unobtanium Row */}
          <View style={styles.row}>
            <Text style={styles.cell}>Unobtanium</Text>
            <Text style={styles.cell}>250</Text>
            <Text style={styles.cell}>290</Text>
            <Text style={styles.cell}>310</Text>
            <Text style={styles.cell}>350</Text>
          </View>
        </View>
        {/* <PriceTable /> */}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    marginTop: 5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontSize: 12,
    textAlign: "left",
    backgroundColor: "black",
    color: "white",
  },
  cell: {
    flex: 1,
    fontSize: 12,
    textAlign: "center",
  },
});
