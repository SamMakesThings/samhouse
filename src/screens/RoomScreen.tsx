import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '../constants/theme'
import { ProfilePic } from '../components/ProfilePic'
import { ProfileThumbnail } from '../components/ProfileThumbnail'

// This component will go inside a Modal component in RoomBrowser.tsx
export const RoomScreen = () => {
  return (
    <View>
      <Text style={{...theme.text.h1, ...styles.Text_RoomTitle}}>Room title here, something something Clubhouse</Text>
      <View style={styles.View_People}>
        <ProfileThumbnail
          name={"Sam Stowers"}
          muted={true}
        />
        <ProfileThumbnail
          name={"Sam Stowers"}
          muted={true}
        />
        <ProfileThumbnail
          name={"Sam Stowers"}
          muted={true}
        />
        <ProfileThumbnail
          name={"Sam Stowers"}
          muted={true}
        />
        <ProfileThumbnail
          name={"Sam Stowers"}
          muted={true}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Text_RoomTitle: {
    fontSize: scale(15)
  },
  View_People: {
    marginTop: scale(15),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
})