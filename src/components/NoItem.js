import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SPACING, FONT_SIZE, RADIUS, COMMON } from '../styles';

const NoItem = () => {
  return (
    <SafeAreaView style={{top:300, left:100}}> 
            <Text style={{fontSize:18,fontWeight:'bold'}}>No items in Cart 🛒 </Text>
          </SafeAreaView>
  )
}

export default NoItem

const styles = StyleSheet.create({})