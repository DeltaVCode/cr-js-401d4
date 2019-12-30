import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Button,
  Image,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState, useEffect } from 'react';

import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  let [permission, setPermission] = useState(null);
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    Permissions.askAsync(Permissions.CONTACTS)
      .then(({ status }) => {
        console.log('Permission check', status);

        setPermission(status === 'granted');
      })
  }, []);

  useEffect(() => {
    if (permission) {
      Contacts.getContactsAsync()
        .then(contacts => {
          setContacts(contacts.data);
        });
    }
  }, [permission]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <FlatList data={contacts}
            keyExtractor={contact => contact.id}
            renderItem={({ item }) => (
              <Button title={item.name} />
            )}
            />
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});