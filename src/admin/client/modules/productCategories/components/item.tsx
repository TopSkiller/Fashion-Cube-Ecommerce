import FontIcon from "material-ui/FontIcon"
import { ListItem } from "material-ui/List"
import React, { FC } from "react"

export const styles = {
  selectedItem: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  innerItem: {
    paddingLeft: 55,
  },
  nestedListStyle: {
    padding: "0 0 0 15px",
  },
}

const FolderIcon = <FontIcon className="material-icons">folder</FontIcon>
const DraftIcon = <FontIcon className="material-icons">visibility_off</FontIcon>

interface props {
  item
  opened
  selectedId
  nestedItems
  onSelect: (itemID: string) => void
}

const Item: FC<props> = props => {
  const { item, opened, selectedId, nestedItems, onSelect } = props

  const icon = item.enabled ? FolderIcon : DraftIcon
  const style = item.id === selectedId ? styles.selectedItem : null

  return (
    <ListItem
      className="treeItem"
      initiallyOpen={opened}
      style={style}
      innerDivStyle={styles.innerItem}
      primaryText={item.name}
      nestedItems={nestedItems}
      leftIcon={icon}
      onClick={() => onSelect(item.id)}
      nestedListStyle={styles.nestedListStyle}
    />
  )
}

export default Item
