import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { Colors, Spacing } from "../../../../shared/styles"

interface Tag {
  id: number
  label: string
}

interface TagListProps {
  selectedTags: number[]
  onSelectTags: (TagList: number[]) => void
}

const TagList: React.FC<TagListProps> = ({ selectedTags, onSelectTags }) => {
  const tags: Tag[] = [
    { id: 1, label: "Not worth the price" },
    { id: 2, label: "Hidden Fees" },
    { id: 3, label: "High Cost" },
    { id: 4, label: "Unbalanced Pricing" },
    { id: 5, label: "No Transparency" },
    { id: 6, label: "Overpriced Drinks" },
  ]

  const handleTagPress = (id: number) => {
    if (!selectedTags.includes(id)) {
      onSelectTags([...selectedTags, id])
    } else {
      const filteredSelectedTags = selectedTags.filter((tagId) => tagId !== id)
      onSelectTags(filteredSelectedTags)
    }
  }

  return (
    <View style={styles.container}>
      {tags.map((tag) => (
        <TouchableOpacity
          key={tag.id}
          style={[
            styles.tag,
            {
              backgroundColor: selectedTags.includes(tag.id)
                ? Colors.PRIMARY
                : Colors.PRIMARY_1,
            },
          ]}
          onPress={() => handleTagPress(tag.id)}
        >
          <Text
            style={{
              color: selectedTags.includes(tag.id)
                ? Colors.WHITE
                : Colors.BLACK,
              marginEnd: Spacing.S4,
            }}
          >
            {selectedTags.includes(tag.id) ? "-" : "+"}
          </Text>
          <Text
            style={{
              color: selectedTags.includes(tag.id)
                ? Colors.WHITE
                : Colors.BLACK,
            }}
          >
            {tag.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.S11,
    paddingHorizontal: Spacing.S16,
    marginVertical: Spacing.S4,
    marginEnd: Spacing.S11,
    borderRadius: 40,
  },
})

export default TagList
