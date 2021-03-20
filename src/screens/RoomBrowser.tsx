import React, { useState } from 'react'
import {Text, TouchableOpacity, View, StyleSheet, Modal, Alert} from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '../constants/theme'
import { ProfilePic } from '../components/ProfilePic'
import { RoomScreen } from './RoomScreen'

export const RoomBrowser = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View style={styles.View_ScreenBG}>
      <View style={styles.View_HeaderIcons}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={theme.text.h1}>[ICON] All Sam rooms</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <ProfilePic size={scale(23)}/>
        </TouchableOpacity>
      </View>
      <View style={styles.View_CardScroller}>
        <View style={{...styles.CardProportions, ...styles.View_ScheduleCard}}>
          <View style={styles.View_RoomCardContentContainer}>
            <View style={styles.View_ParticipantsPreview}>
              <Text style={{...theme.text.h2, opacity: 0.7, fontSize: scale(11)}}>3:00 PM</Text>
            </View>
            <View style={styles.View_NamesList}>
              <Text style={{...theme.text.h2, marginTop: scale(1)}}>The name of a scheduled room</Text>
            </View>
          </View>
        </View>
        <View style={{...styles.CardProportions, ...styles.View_RoomCard}}>
          <Text style={theme.text.h1}>Room title here, something something Clubhouse</Text>
          <View style={styles.View_RoomCardContentContainer}>
            <View style={styles.View_ParticipantsPreview}>
              <ProfilePic size={scale(30)} style={{marginLeft: scale(-5), zIndex: 10}}/>
              <ProfilePic size={scale(30)} style={{marginTop: scale(-17), marginLeft: scale(15)}}/>
            </View>
            <View style={styles.View_NamesList}>
              <Text style={{...theme.text.h2, ...styles.Text_ListName}}>
                Sam Stowers
              </Text>
              <Text style={{...theme.text.h2, ...styles.Text_ListName}}>
                Mary Stowers
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_BottomMenu}>
        <TouchableOpacity style={styles.Button_StartRoom} onPress={() => setModalVisible(!modalVisible)}>
          <Text style={{...theme.text.h1, ...styles.Text_CTA}}>Start a room</Text>
        </TouchableOpacity>
      </View>
      { modalVisible && (
        <View
          style={{ // display 'none' isn't working when combined with absolute position, will need to use a workaround.
            display: modalVisible ? 'flex' : 'none',
            ...styles.View_RoomScreen
          }}
        >
          <RoomScreen />
        </View>
      )}
      { modalVisible && (
        <View style={styles.View_InCallBottomMenuContainer}>
        <View style={styles.View_InCallBottomMenu}>
          <Text>Leave loudly</Text>
        </View>
        </View>
      )}
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
    justifyContent: 'space-between',
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
  },
  View_RoomScreen: {
    position: 'absolute',
    height: '90%',
    width: '100%',
    marginTop: '18%',
    backgroundColor: 'white',
    borderRadius: scale(30),
    elevation: scale(2),
    padding: scale(19)
  },
  View_InCallBottomMenuContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  View_InCallBottomMenu: {
    backgroundColor: 'yellow',
    position: 'absolute',
    elevation: scale(3),
    width: '100%',
  }
})