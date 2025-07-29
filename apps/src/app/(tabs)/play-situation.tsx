import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from 'react-native'
import { router, useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { useSettings } from '@/hooks/useSettings'
import LottieView from 'lottie-react-native'
import { images } from '@/constants'
import HeaderSetting from '@/components/HeaderSetting'

const { width } = Dimensions.get('screen')

export default function LearnScreen() {
  const { userQuery } = useSettings()
  const router = useRouter()

  return (
    <ImageBackground source={images.bgPlayChess} className="h-full flex-1">
      <SafeAreaView className="flex-1 ">
        <HeaderSetting title="Thực hành" />
        <View className="flex-1 items-center justify-center px-6">
          {/* 1. Animation header */}
          <View className="items-center">
            <LottieView
              source={require('../../assets/animations/programming.json')}
              autoPlay
              loop
              style={{ width: width * 0.8, height: width * 0.8 }}
            />
          </View>

          <Text className="text-2xl font-bold text-gray-800 text-center mb-4">
            Welcome to Python Coding!
          </Text>

          <Text className="text-base text-gray-500 text-center mb-6 leading-[22px]">
            Here you can write and run Python code directly in the app.{'\n'}
            Test your logic and see instant results.
          </Text>

          <TouchableOpacity
            className="bg-blue-500 py-3 px-8 rounded-full shadow-md"
            activeOpacity={0.8}
            onPress={() => router.push(ERouteTable.CODE_SCREEN)}
          >
            <Text className="text-white text-lg font-semibold">Start Coding</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}
