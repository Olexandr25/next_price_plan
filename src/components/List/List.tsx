import React from 'react'

// ! Have any clue, what's wrong with this code?
export type ListProps = {
  data: any[]
  renderItem: any
  // renderItem: (data: CardProps | FeatureItemProps) => React.ReactNode;
}

export const List: React.FC<ListProps> = ({ data, renderItem }) => {
  return data?.map(item => {
    return React.createElement(renderItem, { ...item })
  })
}
