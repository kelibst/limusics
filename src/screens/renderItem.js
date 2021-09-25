import react from "react";

const renderItem = ({ item }) => {
    let sel = item.id === selectedId ? true : false;
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          console.log("render item")
          handleMusic(item, updateState, cont.currentState);
        }}
        sel={sel}
        isPlaying={cont.currentState.playing}
      />
    );
  };
  const areEqual = (prevProps, nextProps) => {

  
    const { isSelected } = nextProps;
    const { isSelected: prevIsSelected } = prevProps;
    
    /*if the props are equal, it won't update*/
    const isSelectedEqual = isSelected === prevIsSelected;  
    return isSelectedEqual;
  };
  export default react.memo(renderItem, areEqual)