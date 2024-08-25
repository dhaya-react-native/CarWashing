import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PriceTable = () => {
  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.row}>
        <Text style={styles.headerCell}></Text>
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
  );
};
export default PriceTable;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
});
