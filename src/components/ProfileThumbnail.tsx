import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '../constants/theme'
import { ProfilePic } from '../components/ProfilePic'

// This component will go inside a Modal component in RoomBrowser.tsx
export const ProfileThumbnail = (props: {name: string; muted: boolean;}) => {
  return (
    <View style={styles.View_PersonThumbnail}>
      <ProfilePic size={scale(60)}/>
      <Text style={{...theme.text.h1, ...styles.Text_ProfilePic}}>{props.name}</Text>
      <View style={{...styles.View_MuteIcon, display: props.muted ? 'flex' : 'none'}}>
        <Text>ICON</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_PersonThumbnail: {
    marginHorizontal: scale(10),
    marginBottom: scale(35)
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