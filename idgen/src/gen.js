import React from 'react'
import DatePicker from 'simple-react-form-material-ui/lib/date-picker'


<Form state={this.state} onChange={changes => this.setState(changes)}>
  <Field fieldName='name' label='Name' type={Text}/>
  <Field fieldName='date' label='A Date' type={DatePicker}/>
</Form>
