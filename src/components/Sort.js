import React from 'react'
import { Select } from 'semantic-ui-react'

const Sort = (props) => {
   const options = [
      {value: 'id', text: 'ID'},
      {value: 'name', text: 'Name'},
      {value: 'hp', text: 'HP'}
   ]

   return (
      <div className='sort-box'>
         <Select onChange={props.sortByHandler} placeholder='Sort by' options={options}/>
      </div>
   )
}

export default Sort
