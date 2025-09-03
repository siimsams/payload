'use client'
import React from 'react'

// Define the props type based on DefaultFilterProps from WhereBuilder
type DefaultFilterProps = {
  booleanSelect: boolean
  disabled: boolean
  filterOptions: any
  internalField: any
  onChange: (value: any) => void
  operator: string
  options: Array<{ label: string; value: string }>
  value: any
}

type UnitConversionFilterProps = {
  fromUnit?: string
} & DefaultFilterProps

export const UnitConversionFilter: React.FC<UnitConversionFilterProps> = (props) => {
  console.log('=== UnitConversionFilter Debug ===')
  console.log('All props:', JSON.stringify(props, null, 2))
  console.log('fromUnit:', props.fromUnit)
  console.log('onChange available:', typeof props.onChange)
  console.log('value:', props.value)
  console.log('options:', props.options)
  console.log('================================')

  return (
    <div>
      <h1>Unit Conversion Filter</h1>
    </div>
  )
}

export default UnitConversionFilter
