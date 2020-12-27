import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Enter Title:</Text>
      <TextInput
        value={title}
        style={styles.input}
        onChangeText={text => setTitle(text)}
      />
      <Text>Enter Content:</Text>
      <TextInput
        value={content}
        style={styles.input}
        onChangeText={text => setContent(text)}
      />
      <Button
        title="Add Blog Post"
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  }
});

export default CreateScreen;
