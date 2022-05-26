/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, Card, Title, Paragraph, Appbar} from 'react-native-paper';
import {FlatList, View, StyleSheet, Text, Linking} from 'react-native';
import courses from '../data/courses.json';

handleClick = (link) => {
  Linking.canOpenURL(link).then(supported => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.log("Don't know how to open URL: " + link);
    }
  });
};

const App = () => (
  <View>
    <Appbar style={styles.bar}>
      <Appbar.Content title="Courses"/>
    </Appbar>
    <FlatList
      data={courses}
      renderItem={({item}) => 
      <Card>
        <Card.Cover source={{uri: item.image}} />
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.description}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => {
            this.handleClick(item.link)
          }}>Tap to view course</Button>
        </Card.Actions>
      </Card>
      }
    /> 
  </View>
)

const styles = StyleSheet.create({
  bar: {
    marginTop: 50,
  },
});

export default App;
