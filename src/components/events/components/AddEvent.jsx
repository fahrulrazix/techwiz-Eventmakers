import { Input } from '@nextui-org/react'
import React from 'react'

export default function AddEvent() {
  const inputAttribute = [
    {
      "name" : "name",
      "type": "text",
      "label": "Event Name",
      "placeholder":"Enter your event name"
    },
    {
      "name" : "location",
      "type": "text",
      "label": "Location",
      "placeholder":"Where will the event be held?"
    },
    {
      "name" : "date",
      "type": "date",
      "label": "Date",
      "placeholder":"When will the event be held?"
    },
    {
      "name" : "description",
      "type": "text",
      "label": "Description",
      "placeholder":"Tell us more about your event"
    },
   
  ]
  return (
    <div className="create-event-wrap">
      <h1 className='text-white-main font-bold text-3xl mb-5'>Let's create your event</h1>
    
       {inputAttribute.map((att) => (
         <Input
           classNames={{
             label: "text-white-main dark:text-white-main",
             input: [
               "bg-transparent",
               "text-white-main dark:text-white-main",
               "placeholder:text-white-main",
             ],
             inputWrapper:"mb-5"
             
           }}

              key={att.name} 
              name={att.name}
              variant="underlined"
              type={att.type}
              //onChange={handleChange}
              label={att.label}
              placeholder={att.placeholder}    
           
          />
      ))}
      
    </div>
  )
}
