export class Common {
  static openDialog(dialogTitle: string, dialogText: string) {
    const alertOptions: Xrm.AlertStrings = {
      text: dialogText,
      title: dialogTitle,
    };
    Xrm.Navigation.openAlertDialog(alertOptions);
  }

  static setMandatoryFields(executionContext: Xrm.ExecutionContext<any, any>, fieldsToMakeMandatory: string) {
    const _formContext = executionContext.getFormContext();
    const mandatoryFields = fieldsToMakeMandatory?.split(",");
    mandatoryFields.forEach((x) => (_formContext as any).getAttribute(x)?.setRequiredLevel("required"));
  }
}
