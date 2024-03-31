import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

const LevelSelector = ({level,handleOtherInputChange}) => {


const handleClick = (selectedLevel) => {

    let updatedLevel = level
    if (level.includes(selectedLevel)) {
        updatedLevel = level.filter(item => item !== selectedLevel)
        
    } else {
        updatedLevel = [...level, selectedLevel]
        
    }
    handleOtherInputChange("level", updatedLevel)

}
   

  return (
    <div>
      Beginner
      {["Beginner", "Intermediate", "Advanced"].map((selectedLevel, key) => (
        <div
          key={key}
          style={{
            display: "inline-block",
            marginRight: "10px",
            cursor: "pointer",
          }}
          onClick={() => handleClick(selectedLevel)}
        >
          {level.includes(selectedLevel) ? (
            
            <PlusIcon style={{ color: "gold" }} />
          ) : (
            <MinusIcon style={{ color: "lightgrey" }} />
          )}
        </div>
      ))}
      Pro
    </div>
  );
};

export default LevelSelector;
