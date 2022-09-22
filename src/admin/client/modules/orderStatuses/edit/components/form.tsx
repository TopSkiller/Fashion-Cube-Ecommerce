import messages from "lib/text"
import FlatButton from "material-ui/FlatButton"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import React, { FC } from "react"
import { Field, Form } from "react-final-form"
import { TextField } from "redux-form-material-ui"
import style from "./style.sass"

const validate = values => {
  const errors = {}
  const requiredFields = ["name"]

  requiredFields.forEach(field => {
    if (values && !values[field]) {
      errors[field] = messages.errors_required
    }
  })

  return errors
}

interface Props {
  initialValues
  onSubmit
  isSaving
  onCancel
}

const OrderStatusForm: FC<Props> = props => {
  const { initialValues, onSubmit, isSaving, onCancel } = props

  let statusId = null

  if (initialValues) {
    statusId = initialValues.id
  }

  return (
    <Paper className="paper-box" zDepth={1}>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {({ handleSubmit, pristine, form, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div className={style.innerBox}>
              <Field
                name="name"
                component={TextField}
                floatingLabelText={messages.orderStatusName + " *"}
                fullWidth
              />
              <br />
              <Field
                name="description"
                component={TextField}
                floatingLabelText={messages.description}
                fullWidth
                multiLine
                rows={1}
              />
            </div>
            <div className="buttons-box">
              <FlatButton
                label={messages.cancel}
                className={style.button}
                onClick={() => {
                  onCancel()
                  form.reset()
                }}
              />
              <RaisedButton
                type="submit"
                label={statusId ? messages.save : messages.add}
                primary
                className={style.button}
                disabled={pristine || submitting || isSaving}
              />
            </div>
          </form>
        )}
      </Form>
    </Paper>
  )
}

export default OrderStatusForm
