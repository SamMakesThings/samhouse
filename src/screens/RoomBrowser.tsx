import React from 'react'
import {Platform, ScrollView, Text, TouchableOpacity, View, PermissionsAndroid, StyleSheet} from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '../constants/theme'

export const RoomBrowser = () => {
  return(
    <View style={styles.View_ScreenBG}>
      <View style={styles.View_HeaderIcons}>
        <Text>Header icons here</Text>
      </View>
      <View style={styles.View_CardScroller}>
        <View style={{...styles.CardProportions, ...styles.View_ScheduleCard}}>
          <View style={styles.View_ScheduledRoomContainer}>
            <Text>3:00 PM</Text>
            <Text>The name of a scheduled room</Text>
          </View>
        </View>
        <View style={{...styles.CardProportions, ...styles.View_RoomCard}}>
          <Text style={theme.text.h1}>Room title here, something something Clubhouse</Text>
          <View style={styles.View_RoomCardContentContainer}>
            <View style={styles.View_ParticipantsPreview}>
              <Text>Profiles preview</Text>
            </View>
            <View style={styles.View_NamesList}>
              <Text style={{...theme.text.h2, ...styles.Text_ListName}}>
                Sam Stowers {'&amp;'}
              </Text>
              <Text style={{...theme.text.h2, ...styles.Text_ListName}}>
                Mary Stowers
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_BottomMenu}>
        <TouchableOpacity style={styles.Button_StartRoom}>
          <Text style={{...theme.text.h1, ...styles.Text_CTA}}>Start a room</Text>
        </TouchableOpacity>
      </View>
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
    height: scale(40)
  },
  View_CardScroller: {
    justifyContent: 'flex-start',
    flex: 1
  },
  CardProportions: {
    margin: scale(11),
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