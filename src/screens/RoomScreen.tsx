import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '../constants/theme'
import { ProfilePic } from '../components/ProfilePic'

// This component will go inside a Modal component in RoomBrowser.tsx
export const RoomScreen = () => {
  return (
    <View>
      <Text style={{...theme.text.h1, ...styles.Text_RoomTitle}}>Room title here, something something Clubhouse</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Text_RoomTitle: {
    fontSize: scale(15)
  }
})