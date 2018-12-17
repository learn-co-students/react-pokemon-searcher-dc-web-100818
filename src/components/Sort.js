import React from 'react'
import { Select } from 'semantic-ui-react'

const Sort = (props) => {
   const options = [
      {value: 'id', text: 'ID'},
      {value: 'name', text: 'Name'},
      {value: 'hp', text: 'HP'}
   ]

   return (
      <Select onChange={props.sortByHandler} placeholder='Sort by' options={options}/>
   )
}

export default Sort
