import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '../constants/theme'
import { ProfilePic } from '../components/ProfilePic'

// This component will go inside a Modal component in RoomBrowser.tsx
export const RoomScreen = () => {
  return (
    <View>
      <Text>Test shit</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  View_ScreenBG: {
    flex: 1,
    backgroundColor: theme.colors.mainBg,
    justifyContent: 'space-between',
  },
  View_HeaderIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: scale(15),
    paddingTop: scale(22)
  },
  View_CardScroller: {
    justifyContent: 'flex-start',
    flex: 1
  },
  CardProportions: {
    marginHorizontal: scale(11),
    marginVertical: scale(7),
    padding: scale(15),
    borderRadius: scale(13)
  },
  View_ScheduleCard: {
    backgroundColor: theme.colors.subBg,
  },
  View_ScheduledRoomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  View_RoomCard: {
    backgroundColor: theme.colors.cardBg,
    shadowOffset: { // TODO: Configure drop shadow on iOS
      width: scale(1),
      height: scale(1)
    },
    elevation: scale(1)
  },
  View_RoomCardContentContainer: {
    flexDirection: 'row',
  },
  View_ParticipantsPreview: {
    width: scale(50),
    margin: scale(5),
    marginTop: scale(10)
  },
  View_NamesList: {
    marginTop: scale(8)
  },
  Text_ListName: {
    fontSize: scale(14)
  },
  View_BottomMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: scale(15)
  },
  Button_StartRoom: {
    flexDirection: 'row',
    backgroundColor: theme.colors.highlight,
    alignItems: 'center',
    padding: scale(10),
    paddingHorizontal: scale(20),
    borderRadius: scale(50)
  },
  Text_CTA: {
    color: '#ffffff',
    fontSize: scale(18)
  }
})