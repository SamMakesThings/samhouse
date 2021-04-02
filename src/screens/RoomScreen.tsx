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
      <View style={styles.View_People}>
        <View style={styles.View_PersonThumbnail}>
          <ProfilePic size={scale(60)}/>
          <Text style={{...theme.text.h1, ...styles.Text_ProfilePic}}>Sam Stowers</Text>
          <View style={styles.View_MuteIcon}>
            <Text>ICON</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Text_RoomTitle: {
    fontSize: scale(15)
  },
  View_People: {
    marginTop: scale(15)
  },
  View_PersonThumbnail: {

  },
  Text_ProfilePic: {
    fontSize: scale(11.5),
    letterSpacing: scale(-0.3),
    marginTop: scale(5)
  },
  View_MuteIcon: {
    marginTop: scale(-35),
    backgroundColor: theme.colors.cardBg,
    marginLeft: scale(35)
  },
})