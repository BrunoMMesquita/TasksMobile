import { ActivityIndicator, View } from 'react-native';
import React from 'react'

const Loading = ({ isIconAnimating }) => <ActivityIndicator size="large" color="#0000ff" animating={isIconAnimating} />;

export default Loading;