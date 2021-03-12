import React from 'react'
import { Image } from 'react-native'

export const ProfilePic = (props: {size: number, style?: object}) => {
  return (
    <Image
      source={require('../assets/img/yellowhornguy.png')}
      style={{width: props.size, height: props.size, borderRadius: props.size/2.4, ...props.style}}
    />
  )
}