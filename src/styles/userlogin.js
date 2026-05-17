import React from "react";
import { StyleSheet } from "react-native";

export  const userlogin={
    grey:'#A8A8A9',
    pink:'#F83758',
    border:1
}

export const aapleView= {
    borderWidth: 1,
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor:userlogin.pink ,
    backgroundColor: '#FCF3F6',
    marginLeft: 10,
    marginTop: 20,
  }

export const ggleView= {
    borderWidth: userlogin.border,
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: userlogin.pink,
    marginLeft: 80,
    backgroundColor: '#FCF3F6',
    marginTop: 20,
  }

export const input={
    borderWidth: userlogin.border,
    // paddingVertical: 55,
    borderColor: userlogin.grey,
    // paddingHorizontal: 317,
    borderRadius: 10,
    paddingLeft:40,
    paddingTop:21,
    paddingHorizontal:32,
    paddingBottom:19,
    
  }

export const btn = {
    borderWidth: 1,
    width: 350,
    height: 55,
    backgroundColor: userlogin.pink,
    borderColor: userlogin.pink,
    borderRadius: 5,
    marginLeft: 30,
    marginTop: 30,
}

export const headline= {
    fontSize: 36,
    width: 203,
    margin: 30,
    fontWeight: 'bold',
    height:83
  }