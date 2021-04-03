import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '../constants/theme'
import { ProfilePic } from '../components/ProfilePic'
import MuteIcon from '../assets/img/CHMute.svg'
import UnmutedIcon from '../assets/img/CHUnmuted.svg'
import { SafeAreaView } from 'react-native-safe-area-context'

// This component will go inside a Modal component in RoomBrowser.tsx
export const MicToggleButton = (props: {muted: boolean; onPress: (event: GestureResponderEvent) => void}) => {
  return (
    <TouchableOpacity 
      style={{...styles.Touchable_GreyButton, ...styles.Touchable_IconButton}}
      onPress={props.onPress}>
      {props.muted
        ? <MuteIcon width={scale(20)} height={scale(20)} />
        : <UnmutedIcon width={scale(20)} height={scale(20)} />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Touchable_GreyButton: {
    backgroundColor: theme.colors.buttonColor,
    paddingTop: scale(7),
    paddingBottom: scale(6),
    paddingHorizontal: scale(14),
    borderRadius: 50,
  },
  Touchable_HideRoom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_InCallBottomMenuRight: {
    flexDirection: 'row',
  },
  Touchable_IconButton: {
    paddingHorizontal: scale(7),
    marginRight: scale(13)
  },
  View_MuteIcon: {
    marginTop: scale(-40),
    marginBottom: scale(40),
    backgroundColor: theme.colors.cardBg,
    marginLeft: scale(38),
    borderRadius: scale(50),
    padding: scale(3),
    alignSelf: 'center',
    elevation: scale(1)
  },
})