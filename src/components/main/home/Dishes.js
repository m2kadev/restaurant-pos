import React, {useState} from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { useCustomSelect } from '../../../hooks/useCustomSelect'
import DishItems from './DishItems'
import SlideUp from '../../../components/alert/SlideUp'

const options = [
  {title: 'Dine In', value: 'dine-in'},
  {title: 'To Go', value: 'togo'},
  {title: 'Delivery', value: 'delivery'}
]

const Dishes = ({category}) => {
  const [showOptions, setShowOptions] = useState(false)
  const [showSlide, setShowSlide] = useState(false)
  const { selectedValue, onChange } = useCustomSelect(options)
  
  return (
    <div className='dishes'>
        {showSlide ? <SlideUp message={'This product is out of stock now!'} />: null}
        <div className="dishes-header">
            <p className='choose-dishes'>Choose Dishes</p>
            <div 
            className="dish-options-wrapper"
            >
              <button 
              className="btn btn-lg btn-secondary btn-flex"
              onClick={() => setShowOptions(prev => !prev)}
              onBlur={() => console.log('blur')}
              >
                <FaChevronDown />
                <span>{selectedValue.title}</span>
              </button>

              <div 
              className="dish-options"
              style={{display: showOptions ? 'block': 'none'}}
              tabIndex='1'
              >
                {
                  options.map((option, i) => (
                    <div 
                    key={i} 
                    className='dish-option' 
                    onClick={(e) => {
                      e.stopPropagation()
                      onChange(option, i)
                      setShowOptions(false)
                    }}
                    >{option.title}</div>
                  ))
                }
              </div>
            </div>
        </div>

        <DishItems setShowSlide={setShowSlide} showSlide={showSlide} category={category} />
    </div>
  )
}

export default Dishes