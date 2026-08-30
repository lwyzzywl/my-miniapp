import { View, Text } from "@tarojs/components"
import { useLoad } from "@tarojs/taro"
import "./index.scss"

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.")
  })

  const handleExplore = () => {
    console.log("explore")
  }

  return (
    <View className="index-page">

      {/* === HEADER === */}
      <View className="header-section">
        <View className="header-ornament-top" />
        <Text className="header-title">{'行知教育'}</Text>
        <View className="header-divider" />
        <Text className="header-subtitle">{'生活即教育，社会即学校'}</Text>
      </View>

      {/* === PORTRAIT === */}
      <View className="portrait-section">
        <View className="portrait-frame">
          <View className="portrait-placeholder">
            <Text className="portrait-placeholder-text">{'陶行知'}</Text>
            <Text className="portrait-placeholder-sub">1891-1946</Text>
          </View>
          <View className="portrait-inner-border" />
        </View>
        <Text className="portrait-caption">{'陶行知先生（1891—1946）'}</Text>
      </View>

      {/* === QUOTE === */}
      <View className="quote-section">
        <View className="quote-card">
          <View className="quote-left-line" />
          <Text className="quote-mark">{'“'}</Text>
          <Text className="quote-text">{'千教万教教人求真，千学万学学做真人。'}</Text>
          <Text className="quote-author">{'—— 陶行知'}</Text>
        </View>
      </View>

      {/* === BUTTON === */}
      <View className="action-section">
        <View className="explore-btn" hoverClass="explore-btn-hover" onClick={handleExplore}>
          <Text className="explore-btn-text">{'探索他的乡村教育实践'}</Text>
        </View>
        <View className="action-hint">
          <Text className="hint-text">{'知行合一 · 爱满天下'}</Text>
        </View>
      </View>

    </View>
  )
}
