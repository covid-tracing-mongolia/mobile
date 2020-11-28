import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
export interface TitleProp {
  text?: string
}
export const Title = ({ text }: TitleProp) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontFamily: "SF Pro Display"
  }
})
