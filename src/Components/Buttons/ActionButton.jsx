import { CustomButton } from "./style"

const ActionButton = ({label, bg_color, radius, padding, margin_y, width, on_click}) => {
  return (
    <CustomButton bg_color={bg_color} radius={radius} padding={padding} margin_y={margin_y} width={width} onClick={on_click}> {label} </CustomButton>
  )
}

export default ActionButton
