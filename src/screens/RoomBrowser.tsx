import React from 'react'
import {Platform, ScrollView, Text, TouchableOpacity, View, PermissionsAndroid, StyleSheet} from 'react-native'
import { theme } from '../constants/theme'

export const RoomBrowser = () => {
  return(
    <View style={styles.View_ScreenBG}>
      <View style={styles.View_HeaderIcons}>
        <Text>Header icons here</Text>
      </View>
      <View style={styles.View_CardScroller}>
        <Text>test</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_ScreenBG: {
    flex: 1,
    backgroundColor: theme.colors.mainBg,
    justifyContent: 'flex-start',
  },
  View_HeaderIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 40
  }
})