import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {
  useEffect,
  useState,
} from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import useAppTheme from '../../theme/useAppTheme';

const Help = () => {

  const theme = useAppTheme();

  const [message, setMessage] =
    useState('');

  const [faqData, setFaqData] =
    useState([]);

  const [chatData, setChatData] =
    useState([
      {
        id: '1',
        type: 'bot',
        text: 'Hello  How can I help you?',
      },
    ]);

  useEffect(() => {
    getFAQData();
  }, []);

  // API Fetch
  const getFAQData = async () => {

    try {

      const response = await fetch(
        'https://69a7bb832cd1d055269167fa.mockapi.io/api/v1/users',
      );

      const data =
        await response.json();

      setFaqData(data);

    } catch (error) {
      console.log(error);
    }
  };

  // FAQ Click
  const handleFAQPress = item => {

    const userMsg = {
      id: Date.now().toString(),
      type: 'user',
      text: item.question,
    };

    const botMsg = {
      id: (
        Date.now() + 1
      ).toString(),
      type: 'bot',
      text: item.answer,
    };

    setChatData(prev => [
      ...prev,
      userMsg,
    ]);

    setTimeout(() => {
      setChatData(prev => [
        ...prev,
        botMsg,
      ]);
    }, 500);
  };

  // Send Message
  const sendMessage = () => {

    if (!message.trim()) {
      return;
    }

    const userMsg = {
      id: Date.now().toString(),
      type: 'user',
      text: message,
    };

    setChatData(prev => [
      ...prev,
      userMsg,
    ]);

    let botReply =
      'Sorry  Please try another question.';

    faqData.forEach(item => {

      if (
        message
          .toLowerCase()
          .includes(
            item.keyword.toLowerCase(),
          )
      ) {
        botReply = item.answer;
      }
    });

    const botMsg = {
      id: (
        Date.now() + 1
      ).toString(),
      type: 'bot',
      text: botReply,
    };

    setTimeout(() => {
      setChatData(prev => [
        ...prev,
        botMsg,
      ]);
    }, 500);

    setMessage('');
  };

  const renderItem = ({ item }) => {

    return (
      <View
        style={[
          styles.chatBox,

          item.type === 'user'
            ? [
                styles.userBox,
                {
                  backgroundColor:
                    theme.primary,
                },
              ]
            : [
                styles.botBox,
                {
                  backgroundColor:
                    theme.card,
                },
              ],
        ]}>

        <Text
          style={{
            color:
              item.type === 'user'
                ? '#fff'
                : theme.text,
          }}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,
        },
      ]}>

      {/* Header */}
      <Text
        style={[
          styles.header,
          {
            color: theme.primary,
          },
        ]}>
        Help Center
      </Text>

      {/* FAQ */}
      <FlatList
        horizontal
        data={faqData}
        showsHorizontalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        keyExtractor={item =>
          item.id.toString()
        }
        renderItem={({ item }) => (

          <TouchableOpacity
            style={[
              styles.faqBtn,
              {
                backgroundColor:
                  theme.primary,
              },
            ]}
            onPress={() =>
              handleFAQPress(item)
            }>

            <Text
              numberOfLines={2}
              style={styles.faqText}>
              {item.question}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Chat */}
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingBottom: 100,
          paddingTop: 15,
        }}
      />

      {/* Input */}
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor:
              theme.card,
            borderColor:
              theme.border,
          },
        ]}>

        <TextInput
          placeholder="Ask something..."
          value={message}
          onChangeText={setMessage}
          placeholderTextColor={
            theme.secondaryText
          }
          style={[
            styles.input,
            {
              borderColor:
                theme.inputBorder,
              backgroundColor:
                theme.inputBg,
              color: theme.text,
            },
          ]}
        />

        <TouchableOpacity
          style={[
            styles.sendBtn,
            {
              backgroundColor:
                theme.primary,
            },
          ]}
          onPress={sendMessage}>

          <Icon
            name="send"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },

  faqBtn: {
    width: 170,
    height: 50,
    padding: 12,
    borderRadius: 15,
    marginRight: 10,
    justifyContent: 'center',
  },

  faqText: {
    color: '#fff',
    fontSize: 12,
  },

  chatBox: {
    padding: 14,
    marginHorizontal: 15,
    marginBottom: 8,
    borderRadius: 14,
    maxWidth: '75%',
  },

  userBox: {
    alignSelf: 'flex-end',
  },

  botBox: {
    alignSelf: 'flex-start',
  },

  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 48,
  },

  sendBtn: {
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});