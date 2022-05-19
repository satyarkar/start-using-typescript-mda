import * as helper from "../common/commonForm";
export class AccountForm {
  static onLoad(executionContext: Xrm.ExecutionContext<any, any>): void {
    const mainForm = <Form.account.Main.Account>executionContext.getFormContext();
    const formType = executionContext.getFormContext().ui.getFormType();
    if (formType === Xrm.FormType.Create) {
      mainForm.ui.tabs.get("DETAILS_TAB").setVisible(false);
      mainForm.getAttribute("websiteurl").setValue("https://");
    } else {
      mainForm.ui.tabs.get("DETAILS_TAB").setVisible(true);
    }

    // Set header field value
    mainForm.getControl("header_numberofemployees").getAttribute().setValue(10);

    // Make field mandarory
    mainForm.getAttribute("fax").setRequiredLevel("recommended");

    // Call common methods
    helper.Common.setMandatoryFields(executionContext, "websiteurl,telephone1");
    helper.Common.openDialog("Title", "Welcome to TypeScript!");

    // Set lookup field
    const lookup: Xrm.EntityReference<"contact">[] = [
      {
        entityType: "contact",
        id: "{ced94344-76d4-ec11-a7b5-0022481a4fff}",
        name: "Demo Contact",
      },
    ];

    mainForm.getAttribute("primarycontactid").setValue(lookup);
  }
}
