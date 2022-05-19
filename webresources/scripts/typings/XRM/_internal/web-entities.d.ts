interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
interface WebEntity {
}
interface WebEntity_Fixed {
  "@odata.etag": string;
}
interface Account_Base extends WebEntity {
}
interface Account_Fixed extends WebEntity_Fixed {
  accountid: string;
}
interface Account extends Account_Base, Account_Relationships {
}
interface Account_Relationships {
}
interface Account_Result extends Account_Base, Account_Relationships {
}
interface Account_FormattedResult {
}
interface Account_Select {
}
interface Account_Expand {
}
interface Account_Filter {
}
interface Account_Create extends Account {
}
interface Account_Update extends Account {
}
interface Contact_Base extends WebEntity {
}
interface Contact_Fixed extends WebEntity_Fixed {
  contactid: string;
}
interface Contact extends Contact_Base, Contact_Relationships {
}
interface Contact_Relationships {
}
interface Contact_Result extends Contact_Base, Contact_Relationships {
}
interface Contact_FormattedResult {
}
interface Contact_Select {
}
interface Contact_Expand {
}
interface Contact_Filter {
}
interface Contact_Create extends Contact {
}
interface Contact_Update extends Contact {
}
interface BulkOperationLog_Base extends WebEntity {
}
interface BulkOperationLog_Fixed extends WebEntity_Fixed {
  bulkoperationlogid: string;
}
interface BulkOperationLog extends BulkOperationLog_Base, BulkOperationLog_Relationships {
}
interface BulkOperationLog_Relationships {
}
interface BulkOperationLog_Result extends BulkOperationLog_Base, BulkOperationLog_Relationships {
}
interface BulkOperationLog_FormattedResult {
}
interface BulkOperationLog_Select {
}
interface BulkOperationLog_Expand {
}
interface BulkOperationLog_Filter {
}
interface BulkOperationLog_Create extends BulkOperationLog {
}
interface BulkOperationLog_Update extends BulkOperationLog {
}
interface ActivityParty_Base extends WebEntity {
}
interface ActivityParty_Fixed extends WebEntity_Fixed {
  activitypartyid: string;
}
interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_Relationships {
}
interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_FormattedResult {
}
interface ActivityParty_Select {
}
interface ActivityParty_Expand {
}
interface ActivityParty_Filter {
}
interface ActivityParty_Create extends ActivityParty {
}
interface ActivityParty_Update extends ActivityParty {
}
interface Connection_Base extends WebEntity {
}
interface Connection_Fixed extends WebEntity_Fixed {
  connectionid: string;
}
interface Connection extends Connection_Base, Connection_Relationships {
}
interface Connection_Relationships {
}
interface Connection_Result extends Connection_Base, Connection_Relationships {
}
interface Connection_FormattedResult {
}
interface Connection_Select {
}
interface Connection_Expand {
}
interface Connection_Filter {
}
interface Connection_Create extends Connection {
}
interface Connection_Update extends Connection {
}
interface msdyn_accountkpiitem_Base extends WebEntity {
}
interface msdyn_accountkpiitem_Fixed extends WebEntity_Fixed {
  msdyn_accountkpiitemid: string;
}
interface msdyn_accountkpiitem extends msdyn_accountkpiitem_Base, msdyn_accountkpiitem_Relationships {
}
interface msdyn_accountkpiitem_Relationships {
}
interface msdyn_accountkpiitem_Result extends msdyn_accountkpiitem_Base, msdyn_accountkpiitem_Relationships {
}
interface msdyn_accountkpiitem_FormattedResult {
}
interface msdyn_accountkpiitem_Select {
}
interface msdyn_accountkpiitem_Expand {
}
interface msdyn_accountkpiitem_Filter {
}
interface msdyn_accountkpiitem_Create extends msdyn_accountkpiitem {
}
interface msdyn_accountkpiitem_Update extends msdyn_accountkpiitem {
}
interface msdyn_contactkpiitem_Base extends WebEntity {
}
interface msdyn_contactkpiitem_Fixed extends WebEntity_Fixed {
  msdyn_contactkpiitemid: string;
}
interface msdyn_contactkpiitem extends msdyn_contactkpiitem_Base, msdyn_contactkpiitem_Relationships {
}
interface msdyn_contactkpiitem_Relationships {
}
interface msdyn_contactkpiitem_Result extends msdyn_contactkpiitem_Base, msdyn_contactkpiitem_Relationships {
}
interface msdyn_contactkpiitem_FormattedResult {
}
interface msdyn_contactkpiitem_Select {
}
interface msdyn_contactkpiitem_Expand {
}
interface msdyn_contactkpiitem_Filter {
}
interface msdyn_contactkpiitem_Create extends msdyn_contactkpiitem {
}
interface msdyn_contactkpiitem_Update extends msdyn_contactkpiitem {
}
