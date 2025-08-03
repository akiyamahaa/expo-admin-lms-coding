import { Text, ImageBackground, TouchableOpacity, View } from 'react-native'
import { images } from '@/constants'
import { ERouteTable } from '@/constants/route-table'
import { router } from 'expo-router'
import AppButton from '@/components/common/AppButton'

export default function Onboarding() {
  return (
    <ImageBackground
      source={images.onboarding2}
      resizeMode="cover"
      className="h-full items-center justify-center"
    >
      <View className="absolute bottom-40 p-6 w-full items-center">
        <Text className="text-center text-4xl leading-[100%] font-bold">
          Lập Trình, {'\n'} Tại Sao Không?
        </Text>
        <Text className="text-center py-6 w-4/5">
          Bước vào kỷ nguyên số với kiến thức và kỹ năng được cung cấp bởi CodePlanet.
        </Text>
        <AppButton
          title="Bắt đầu"
          className="w-3/5"
          onPress={() => router.replace(ERouteTable.SIGIN_IN)}
        />
      </View>
    </ImageBackground>
  )
}
