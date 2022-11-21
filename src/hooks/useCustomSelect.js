import { useState } from "react"

export const useCustomSelect = (options) => {
    const [index, setIndex] = useState(0)
    const [selectedValue, setSelectedValue] = useState(options[index])

    const onChange = (option, i) => {
        setSelectedValue(option)
        setIndex(i)
    }
    

    return {selectedValue, onChange, index}
}