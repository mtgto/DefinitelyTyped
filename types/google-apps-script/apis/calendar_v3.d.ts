// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace Calendar {
        namespace Collection {
            interface AclCollection {
                // Returns an access control rule.
                get(calendarId: string, ruleId: string): Schema.AclRule;
                // Returns an access control rule.
                get(calendarId: string, ruleId: string, optionalArgs: object, headers: object): Schema.AclRule;
                // Creates an access control rule.
                insert(resource: Schema.AclRule, calendarId: string): Schema.AclRule;
                // Creates an access control rule.
                insert(resource: Schema.AclRule, calendarId: string, optionalArgs: object): Schema.AclRule;
                // Creates an access control rule.
                insert(resource: Schema.AclRule, calendarId: string, optionalArgs: object, headers: object): Schema.AclRule;
                // Returns the rules in the access control list for the calendar.
                list(calendarId: string): Schema.Acl;
                // Returns the rules in the access control list for the calendar.
                list(calendarId: string, optionalArgs: object): Schema.Acl;
                // Returns the rules in the access control list for the calendar.
                list(calendarId: string, optionalArgs: object, headers: object): Schema.Acl;
                // Updates an access control rule. This method supports patch semantics.
                patch(resource: Schema.AclRule, calendarId: string, ruleId: string): Schema.AclRule;
                // Updates an access control rule. This method supports patch semantics.
                patch(resource: Schema.AclRule, calendarId: string, ruleId: string, optionalArgs: object): Schema.AclRule;
                // Updates an access control rule. This method supports patch semantics.
                patch(resource: Schema.AclRule, calendarId: string, ruleId: string, optionalArgs: object, headers: object): Schema.AclRule;
                // Deletes an access control rule.
                remove(calendarId: string, ruleId: string): void;
                // Deletes an access control rule.
                remove(calendarId: string, ruleId: string, optionalArgs: object, headers: object): void;
                // Updates an access control rule.
                update(resource: Schema.AclRule, calendarId: string, ruleId: string): Schema.AclRule;
                // Updates an access control rule.
                update(resource: Schema.AclRule, calendarId: string, ruleId: string, optionalArgs: object): Schema.AclRule;
                // Updates an access control rule.
                update(resource: Schema.AclRule, calendarId: string, ruleId: string, optionalArgs: object, headers: object): Schema.AclRule;
                // Watch for changes to ACL resources.
                watch(resource: Schema.Channel, calendarId: string): Schema.Channel;
                // Watch for changes to ACL resources.
                watch(resource: Schema.Channel, calendarId: string, optionalArgs: object): Schema.Channel;
                // Watch for changes to ACL resources.
                watch(resource: Schema.Channel, calendarId: string, optionalArgs: object, headers: object): Schema.Channel;
            }
            interface CalendarListCollection {
                // Returns a calendar from the user's calendar list.
                get(calendarId: string): Schema.CalendarListEntry;
                // Returns a calendar from the user's calendar list.
                get(calendarId: string, optionalArgs: object, headers: object): Schema.CalendarListEntry;
                // Inserts an existing calendar into the user's calendar list.
                insert(resource: Schema.CalendarListEntry): Schema.CalendarListEntry;
                // Inserts an existing calendar into the user's calendar list.
                insert(resource: Schema.CalendarListEntry, optionalArgs: object): Schema.CalendarListEntry;
                // Inserts an existing calendar into the user's calendar list.
                insert(resource: Schema.CalendarListEntry, optionalArgs: object, headers: object): Schema.CalendarListEntry;
                // Returns the calendars on the user's calendar list.
                list(): Schema.CalendarList;
                // Returns the calendars on the user's calendar list.
                list(optionalArgs: object): Schema.CalendarList;
                // Returns the calendars on the user's calendar list.
                list(optionalArgs: object, headers: object): Schema.CalendarList;
                // Updates an existing calendar on the user's calendar list. This method supports patch semantics.
                patch(resource: Schema.CalendarListEntry, calendarId: string): Schema.CalendarListEntry;
                // Updates an existing calendar on the user's calendar list. This method supports patch semantics.
                patch(resource: Schema.CalendarListEntry, calendarId: string, optionalArgs: object): Schema.CalendarListEntry;
                // Updates an existing calendar on the user's calendar list. This method supports patch semantics.
                patch(resource: Schema.CalendarListEntry, calendarId: string, optionalArgs: object, headers: object): Schema.CalendarListEntry;
                // Removes a calendar from the user's calendar list.
                remove(calendarId: string): void;
                // Removes a calendar from the user's calendar list.
                remove(calendarId: string, optionalArgs: object, headers: object): void;
                // Updates an existing calendar on the user's calendar list.
                update(resource: Schema.CalendarListEntry, calendarId: string): Schema.CalendarListEntry;
                // Updates an existing calendar on the user's calendar list.
                update(resource: Schema.CalendarListEntry, calendarId: string, optionalArgs: object): Schema.CalendarListEntry;
                // Updates an existing calendar on the user's calendar list.
                update(resource: Schema.CalendarListEntry, calendarId: string, optionalArgs: object, headers: object): Schema.CalendarListEntry;
                // Watch for changes to CalendarList resources.
                watch(resource: Schema.Channel): Schema.Channel;
                // Watch for changes to CalendarList resources.
                watch(resource: Schema.Channel, optionalArgs: object): Schema.Channel;
                // Watch for changes to CalendarList resources.
                watch(resource: Schema.Channel, optionalArgs: object, headers: object): Schema.Channel;
            }
            interface CalendarsCollection {
                // Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
                clear(calendarId: string): void;
                // Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
                clear(calendarId: string, optionalArgs: object, headers: object): void;
                // Returns metadata for a calendar.
                get(calendarId: string): Schema.Calendar;
                // Returns metadata for a calendar.
                get(calendarId: string, optionalArgs: object, headers: object): Schema.Calendar;
                // Creates a secondary calendar.
                insert(resource: Schema.Calendar): Schema.Calendar;
                // Creates a secondary calendar.
                insert(resource: Schema.Calendar, optionalArgs: object, headers: object): Schema.Calendar;
                // Updates metadata for a calendar. This method supports patch semantics.
                patch(resource: Schema.Calendar, calendarId: string): Schema.Calendar;
                // Updates metadata for a calendar. This method supports patch semantics.
                patch(resource: Schema.Calendar, calendarId: string, optionalArgs: object, headers: object): Schema.Calendar;
                // Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
                remove(calendarId: string): void;
                // Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
                remove(calendarId: string, optionalArgs: object, headers: object): void;
                // Updates metadata for a calendar.
                update(resource: Schema.Calendar, calendarId: string): Schema.Calendar;
                // Updates metadata for a calendar.
                update(resource: Schema.Calendar, calendarId: string, optionalArgs: object, headers: object): Schema.Calendar;
            }
            interface ChannelsCollection {
                // Stop watching resources through this channel
                stop(resource: Schema.Channel): void;
                // Stop watching resources through this channel
                stop(resource: Schema.Channel, optionalArgs: object, headers: object): void;
            }
            interface ColorsCollection {
                // Returns the color definitions for calendars and events.
                get(): Schema.Colors;
                // Returns the color definitions for calendars and events.
                get(optionalArgs: object, headers: object): Schema.Colors;
            }
            interface EventsCollection {
                // Returns an event.
                get(calendarId: string, eventId: string): Schema.Event;
                // Returns an event.
                get(calendarId: string, eventId: string, optionalArgs: object): Schema.Event;
                // Returns an event.
                get(calendarId: string, eventId: string, optionalArgs: object, headers: object): Schema.Event;
                // Imports an event. This operation is used to add a private copy of an existing event to a calendar.
                import(resource: Schema.Event, calendarId: string): Schema.Event;
                // Imports an event. This operation is used to add a private copy of an existing event to a calendar.
                import(resource: Schema.Event, calendarId: string, optionalArgs: object): Schema.Event;
                // Imports an event. This operation is used to add a private copy of an existing event to a calendar.
                import(resource: Schema.Event, calendarId: string, optionalArgs: object, headers: object): Schema.Event;
                // Creates an event.
                insert(resource: Schema.Event, calendarId: string): Schema.Event;
                // Creates an event.
                insert(resource: Schema.Event, calendarId: string, optionalArgs: object): Schema.Event;
                // Creates an event.
                insert(resource: Schema.Event, calendarId: string, optionalArgs: object, headers: object): Schema.Event;
                // Returns instances of the specified recurring event.
                instances(calendarId: string, eventId: string): Schema.Events;
                // Returns instances of the specified recurring event.
                instances(calendarId: string, eventId: string, optionalArgs: object): Schema.Events;
                // Returns instances of the specified recurring event.
                instances(calendarId: string, eventId: string, optionalArgs: object, headers: object): Schema.Events;
                // Returns events on the specified calendar.
                list(calendarId: string): Schema.Events;
                // Returns events on the specified calendar.
                list(calendarId: string, optionalArgs: object): Schema.Events;
                // Returns events on the specified calendar.
                list(calendarId: string, optionalArgs: object, headers: object): Schema.Events;
                // Moves an event to another calendar, i.e. changes an event's organizer.
                move(calendarId: string, eventId: string, destination: string): Schema.Event;
                // Moves an event to another calendar, i.e. changes an event's organizer.
                move(calendarId: string, eventId: string, destination: string, optionalArgs: object): Schema.Event;
                // Moves an event to another calendar, i.e. changes an event's organizer.
                move(calendarId: string, eventId: string, destination: string, optionalArgs: object, headers: object): Schema.Event;
                // Updates an event. This method supports patch semantics.
                patch(resource: Schema.Event, calendarId: string, eventId: string): Schema.Event;
                // Updates an event. This method supports patch semantics.
                patch(resource: Schema.Event, calendarId: string, eventId: string, optionalArgs: object): Schema.Event;
                // Updates an event. This method supports patch semantics.
                patch(resource: Schema.Event, calendarId: string, eventId: string, optionalArgs: object, headers: object): Schema.Event;
                // Creates an event based on a simple text string.
                quickAdd(calendarId: string, text: string): Schema.Event;
                // Creates an event based on a simple text string.
                quickAdd(calendarId: string, text: string, optionalArgs: object): Schema.Event;
                // Creates an event based on a simple text string.
                quickAdd(calendarId: string, text: string, optionalArgs: object, headers: object): Schema.Event;
                // Deletes an event.
                remove(calendarId: string, eventId: string): void;
                // Deletes an event.
                remove(calendarId: string, eventId: string, optionalArgs: object): void;
                // Deletes an event.
                remove(calendarId: string, eventId: string, optionalArgs: object, headers: object): void;
                // Updates an event.
                update(resource: Schema.Event, calendarId: string, eventId: string): Schema.Event;
                // Updates an event.
                update(resource: Schema.Event, calendarId: string, eventId: string, optionalArgs: object): Schema.Event;
                // Updates an event.
                update(resource: Schema.Event, calendarId: string, eventId: string, optionalArgs: object, headers: object): Schema.Event;
                // Watch for changes to Events resources.
                watch(resource: Schema.Channel, calendarId: string): Schema.Channel;
                // Watch for changes to Events resources.
                watch(resource: Schema.Channel, calendarId: string, optionalArgs: object): Schema.Channel;
                // Watch for changes to Events resources.
                watch(resource: Schema.Channel, calendarId: string, optionalArgs: object, headers: object): Schema.Channel;
            }
            interface FreebusyCollection {
                // Returns free/busy information for a set of calendars.
                query(resource: Schema.FreeBusyRequest): Schema.FreeBusyResponse;
                // Returns free/busy information for a set of calendars.
                query(resource: Schema.FreeBusyRequest, optionalArgs: object, headers: object): Schema.FreeBusyResponse;
            }
            interface SettingsCollection {
                // Returns a single user setting.
                get(setting: string): Schema.Setting;
                // Returns a single user setting.
                get(setting: string, optionalArgs: object, headers: object): Schema.Setting;
                // Returns all user settings for the authenticated user.
                list(): Schema.Settings;
                // Returns all user settings for the authenticated user.
                list(optionalArgs: object): Schema.Settings;
                // Returns all user settings for the authenticated user.
                list(optionalArgs: object, headers: object): Schema.Settings;
                // Watch for changes to Settings resources.
                watch(resource: Schema.Channel): Schema.Channel;
                // Watch for changes to Settings resources.
                watch(resource: Schema.Channel, optionalArgs: object): Schema.Channel;
                // Watch for changes to Settings resources.
                watch(resource: Schema.Channel, optionalArgs: object, headers: object): Schema.Channel;
            }
        }
        namespace Schema {
            interface Acl {
                // ETag of the collection.
                etag?: string;
                // List of rules on the access control list.
                items?: Schema.AclRule[];
                // Type of the collection ("calendar#acl").
                kind?: string;
                // Token used to access the next page of this result. Omitted if no further results are available, in which case
                // nextSyncToken is provided.
                nextPageToken?: string;
                // Token used at a later point in time to retrieve only the entries that have changed since this result was returned.
                // Omitted if further results are available, in which case nextPageToken is provided.
                nextSyncToken?: string;
            }
            interface AclRule {
                // ETag of the resource.
                etag?: string;
                // Identifier of the ACL rule.
                id?: string;
                // Type of the resource ("calendar#aclRule").
                kind?: string;
                // The role assigned to the scope. Possible values are:
                // - "none" - Provides no access.
                // - "freeBusyReader" - Provides read access to free/busy information.
                // - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event
                // details will be hidden.
                // - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and
                // event details will be visible.
                // - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the
                // additional ability to see and manipulate ACLs.
                role?: string;
                // The scope of the rule.
                scope?: Schema.AclRuleScope;
            }
            // The scope of the rule.
            interface AclRuleScope {
                // The type of the scope. Possible values are:
                // - "default" - The public scope. This is the default value.
                // - "user" - Limits the scope to a single user.
                // - "group" - Limits the scope to a group.
                // - "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to
                // any user, authenticated or not.
                type?: string;
                // The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default".
                value?: string;
            }
            interface Calendar {
                // Conferencing properties for this calendar, for example what types of conferences are allowed.
                conferenceProperties?: Schema.ConferenceProperties;
                // Description of the calendar. Optional.
                description?: string;
                // ETag of the resource.
                etag?: string;
                // Identifier of the calendar. To retrieve IDs call the calendarList.list() method.
                id?: string;
                // Type of the resource ("calendar#calendar").
                kind?: string;
                // Geographic location of the calendar as free-form text. Optional.
                location?: string;
                // Title of the calendar.
                summary?: string;
                // The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.
                timeZone?: string;
            }
            interface CalendarList {
                // ETag of the collection.
                etag?: string;
                // Calendars that are present on the user's calendar list.
                items?: Schema.CalendarListEntry[];
                // Type of the collection ("calendar#calendarList").
                kind?: string;
                // Token used to access the next page of this result. Omitted if no further results are available, in which case
                // nextSyncToken is provided.
                nextPageToken?: string;
                // Token used at a later point in time to retrieve only the entries that have changed since this result was returned.
                // Omitted if further results are available, in which case nextPageToken is provided.
                nextSyncToken?: string;
            }
            interface CalendarListEntry {
                // The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
                // - "freeBusyReader" - Provides read access to free/busy information.
                // - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event
                // details will be hidden.
                // - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and
                // event details will be visible.
                // - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the
                // additional ability to see and manipulate ACLs.
                accessRole?: string;
                // The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId
                // property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert,
                // update and patch methods. Optional.
                backgroundColor?: string;
                // The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the
                // colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored
                // when using these properties. Optional.
                colorId?: string;
                // Conferencing properties for this calendar, for example what types of conferences are allowed.
                conferenceProperties?: Schema.ConferenceProperties;
                // The default reminders that the authenticated user has for this calendar.
                defaultReminders?: Schema.EventReminder[];
                // Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.
                deleted?: boolean;
                // Description of the calendar. Optional. Read-only.
                description?: string;
                // ETag of the resource.
                etag?: string;
                // The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based
                // colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the
                // insert, update and patch methods. Optional.
                foregroundColor?: string;
                // Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is
                // hidden, in which case the value is true.
                hidden?: boolean;
                // Identifier of the calendar.
                id?: string;
                // Type of the resource ("calendar#calendarListEntry").
                kind?: string;
                // Geographic location of the calendar as free-form text. Optional. Read-only.
                location?: string;
                // The notifications that the authenticated user is receiving for this calendar.
                notificationSettings?: Schema.CalendarListEntryNotificationSettings;
                // Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.
                primary?: boolean;
                // Whether the calendar content shows up in the calendar UI. Optional. The default is False.
                selected?: boolean;
                // Title of the calendar. Read-only.
                summary?: string;
                // The summary that the authenticated user has set for this calendar. Optional.
                summaryOverride?: string;
                // The time zone of the calendar. Optional. Read-only.
                timeZone?: string;
            }
            // The notifications that the authenticated user is receiving for this calendar.
            interface CalendarListEntryNotificationSettings {
                // The list of notifications set for this calendar.
                notifications?: Schema.CalendarNotification[];
            }
            interface CalendarNotification {
                // The method used to deliver the notification. The possible value is:
                // - "email" - Notifications are sent via email.
                // Required when adding a notification.
                method?: string;
                // The type of notification. Possible values are:
                // - "eventCreation" - Notification sent when a new event is put on the calendar.
                // - "eventChange" - Notification sent when an event is changed.
                // - "eventCancellation" - Notification sent when an event is cancelled.
                // - "eventResponse" - Notification sent when an attendee responds to the event invitation.
                // - "agenda" - An agenda with the events of the day (sent out in the morning).
                // Required when adding a notification.
                type?: string;
            }
            interface Channel {
                // The address where notifications are delivered for this channel.
                address?: string;
                // Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
                expiration?: string;
                // A UUID or similar unique string that identifies this channel.
                id?: string;
                // Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".
                kind?: string;
                // Additional parameters controlling delivery channel behavior. Optional.
                params?: object;
                // A Boolean value to indicate whether payload is wanted. Optional.
                payload?: boolean;
                // An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
                resourceId?: string;
                // A version-specific identifier for the watched resource.
                resourceUri?: string;
                // An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
                token?: string;
                // The type of delivery mechanism used for this channel.
                type?: string;
            }
            interface ColorDefinition {
                // The background color associated with this color definition.
                background?: string;
                // The foreground color that can be used to write on top of a background with 'background' color.
                foreground?: string;
            }
            interface Colors {
                // A global palette of calendar colors, mapping from the color ID to its definition. A calendarListEntry resource refers to
                // one of these color IDs in its color field. Read-only.
                calendar?: object;
                // A global palette of event colors, mapping from the color ID to its definition. An event resource may refer to one of
                // these color IDs in its color field. Read-only.
                event?: object;
                // Type of the resource ("calendar#colors").
                kind?: string;
                // Last modification time of the color palette (as a RFC3339 timestamp). Read-only.
                updated?: string;
            }
            interface ConferenceData {
                // The ID of the conference.
                // Can be used by developers to keep track of conferences, should not be displayed to users.
                // Values for solution types:
                // - "eventHangout": unset.
                // - "eventNamedHangout": the name of the Hangout.
                // - "hangoutsMeet": the 10-letter meeting code, for example "aaa-bbbb-ccc".
                // - "addOn": defined by 3P conference provider.  Optional.
                conferenceId?: string;
                // The conference solution, such as Hangouts or Google Meet.
                // Unset for a conference with a failed create request.
                // Either conferenceSolution and at least one entryPoint, or createRequest is required.
                conferenceSolution?: Schema.ConferenceSolution;
                // A request to generate a new conference and attach it to the event. The data is generated asynchronously. To see whether
                // the data is present check the status field.
                // Either conferenceSolution and at least one entryPoint, or createRequest is required.
                createRequest?: Schema.CreateConferenceRequest;
                // Information about individual conference entry points, such as URLs or phone numbers.
                // All of them must belong to the same conference.
                // Either conferenceSolution and at least one entryPoint, or createRequest is required.
                entryPoints?: Schema.EntryPoint[];
                // Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain
                // HTML. The maximum length is 2048 characters. Optional.
                notes?: string;
                // Additional properties related to a conference. An example would be a solution-specific setting for enabling video
                // streaming.
                parameters?: Schema.ConferenceParameters;
                // The signature of the conference data.
                // Generated on server side. Must be preserved while copying the conference data between events, otherwise the conference
                // data will not be copied.
                // Unset for a conference with a failed create request.
                // Optional for a conference with a pending create request.
                signature?: string;
            }
            interface ConferenceParameters {
                // Additional add-on specific data.
                addOnParameters?: Schema.ConferenceParametersAddOnParameters;
            }
            interface ConferenceParametersAddOnParameters {
                parameters?: object;
            }
            interface ConferenceProperties {
                // The types of conference solutions that are supported for this calendar.
                // The possible values are:
                // - "eventHangout"
                // - "eventNamedHangout"
                // - "hangoutsMeet"  Optional.
                allowedConferenceSolutionTypes?: string[];
            }
            interface ConferenceRequestStatus {
                // The current status of the conference create request. Read-only.
                // The possible values are:
                // - "pending": the conference create request is still being processed.
                // - "success": the conference create request succeeded, the entry points are populated.
                // - "failure": the conference create request failed, there are no entry points.
                statusCode?: string;
            }
            interface ConferenceSolution {
                // The user-visible icon for this solution.
                iconUri?: string;
                // The key which can uniquely identify the conference solution for this event.
                key?: Schema.ConferenceSolutionKey;
                // The user-visible name of this solution. Not localized.
                name?: string;
            }
            interface ConferenceSolutionKey {
                // The conference solution type.
                // If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it
                // should disallow modifications.
                // The possible values are:
                // - "eventHangout" for Hangouts for consumers (http://hangouts.google.com)
                // - "eventNamedHangout" for classic Hangouts for Google Workspace users (http://hangouts.google.com)
                // - "hangoutsMeet" for Google Meet (http://meet.google.com)
                // - "addOn" for 3P conference providers
                type?: string;
            }
            interface CreateConferenceRequest {
                // The conference solution, such as Hangouts or Google Meet.
                conferenceSolutionKey?: Schema.ConferenceSolutionKey;
                // The client-generated unique ID for this request.
                // Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the
                // request is ignored.
                requestId?: string;
                // The status of the conference create request.
                status?: Schema.ConferenceRequestStatus;
            }
            interface EntryPoint {
                // The access code to access the conference. The maximum length is 128 characters.
                // When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields
                // that match the terminology that the conference provider uses. Only the populated fields should be displayed.
                // Optional.
                accessCode?: string;
                // Features of the entry point, such as being toll or toll-free. One entry point can have multiple features. However, toll
                // and toll-free cannot be both set on the same entry point.
                entryPointFeatures?: string[];
                // The type of the conference entry point.
                // Possible values are:
                // - "video" - joining a conference over HTTP. A conference can have zero or one video entry point.
                // - "phone" - joining a conference by dialing a phone number. A conference can have zero or more phone entry points.
                // - "sip" - joining a conference over SIP. A conference can have zero or one sip entry point.
                // - "more" - further conference joining instructions, for example additional phone numbers. A conference can have zero or
                // one more entry point. A conference with only a more entry point is not a valid conference.
                entryPointType?: string;
                // The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.
                // Examples:
                // - for video: meet.google.com/aaa-bbbb-ccc
                // - for phone: +1 123 268 2601
                // - for sip: 12345678@altostrat.com
                // - for more: should not be filled
                // Optional.
                label?: string;
                // The meeting code to access the conference. The maximum length is 128 characters.
                // When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields
                // that match the terminology that the conference provider uses. Only the populated fields should be displayed.
                // Optional.
                meetingCode?: string;
                // The passcode to access the conference. The maximum length is 128 characters.
                // When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields
                // that match the terminology that the conference provider uses. Only the populated fields should be displayed.
                passcode?: string;
                // The password to access the conference. The maximum length is 128 characters.
                // When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields
                // that match the terminology that the conference provider uses. Only the populated fields should be displayed.
                // Optional.
                password?: string;
                // The PIN to access the conference. The maximum length is 128 characters.
                // When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields
                // that match the terminology that the conference provider uses. Only the populated fields should be displayed.
                // Optional.
                pin?: string;
                // The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.
                // Calendar backend will populate this field only for EntryPointType.PHONE.
                regionCode?: string;
                // The URI of the entry point. The maximum length is 1300 characters.
                // Format:
                // - for video, http: or https: schema is required.
                // - for phone, tel: schema is required. The URI should include the entire dial sequence (e.g.,
                // tel:+12345678900,,,123456789;1234).
                // - for sip, sip: schema is required, e.g., sip:12345678@myprovider.com.
                // - for more, http: or https: schema is required.
                uri?: string;
            }
            interface Error {
                // Domain, or broad category, of the error.
                domain?: string;
                // Specific reason for the error. Some of the possible values are:
                // - "groupTooBig" - The group of users requested is too large for a single query.
                // - "tooManyCalendarsRequested" - The number of calendars requested is too large for a single query.
                // - "notFound" - The requested resource was not found.
                // - "internalError" - The API service has encountered an internal error.  Additional error types may be added in the
                // future, so clients should gracefully handle additional error statuses not included in this list.
                reason?: string;
            }
            interface Event {
                // Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is
                // False.
                anyoneCanAddSelf?: boolean;
                // File attachments for the event. Currently only Google Drive attachments are supported.
                // In order to modify attachments the supportsAttachments request parameter should be set to true.
                // There can be at most 25 attachments per event,
                attachments?: Schema.EventAttachment[];
                // The attendees of the event. See the Events with attendees guide for more information on scheduling events with other
                // calendar users. Service accounts need to use domain-wide delegation of authority to populate the attendee list.
                attendees?: Schema.EventAttendee[];
                // Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a
                // restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the
                // participant's response. Optional. The default is False.
                attendeesOmitted?: boolean;
                // The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the
                // colors endpoint). Optional.
                colorId?: string;
                // The conference-related information, such as details of a Google Meet conference. To create new conference details use
                // the createRequest field. To persist your changes, remember to set the conferenceDataVersion request parameter to 1 for
                // all event modification requests.
                conferenceData?: Schema.ConferenceData;
                // Creation time of the event (as a RFC3339 timestamp). Read-only.
                created?: string;
                // The creator of the event. Read-only.
                creator?: Schema.EventCreator;
                // Description of the event. Can contain HTML. Optional.
                description?: string;
                // The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.
                end?: Schema.EventDateTime;
                // Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this
                // attribute is set to True. The default is False.
                endTimeUnspecified?: boolean;
                // ETag of the resource.
                etag?: string;
                // Specific type of the event. Read-only. Possible values are:
                // - "default" - A regular event or not further specified.
                // - "outOfOffice" - An out-of-office event.
                eventType?: string;
                // Extended properties of the event.
                extendedProperties?: Schema.EventExtendedProperties;
                // A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday
                // calendar metadata.
                gadget?: Schema.EventGadget;
                // Whether attendees other than the organizer can invite others to the event. Optional. The default is True.
                guestsCanInviteOthers?: boolean;
                // Whether attendees other than the organizer can modify the event. Optional. The default is False.
                guestsCanModify?: boolean;
                // Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.
                guestsCanSeeOtherGuests?: boolean;
                // An absolute link to the Google+ hangout associated with this event. Read-only.
                hangoutLink?: string;
                // An absolute link to this event in the Google Calendar Web UI. Read-only.
                htmlLink?: string;
                // Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and
                // must be supplied when importing events via the import method.
                // Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One
                // difference in their semantics is that in recurring events, all occurrences of one event have different ids while they
                // all share the same icalUIDs.
                iCalUID?: string;
                // Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs
                // must follow these rules:
                // - characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see
                // section 3.1.2 in RFC2938
                // - the length of the ID must be between 5 and 1024 characters
                // - the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID
                // collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established
                // UUID algorithm such as one described in RFC4122.
                // If you do not specify an ID, it will be automatically generated by the server.
                // Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One
                // difference in their semantics is that in recurring events, all occurrences of one event have different ids while they
                // all share the same icalUIDs.
                id?: string;
                // Type of the resource ("calendar#event").
                kind?: string;
                // Geographic location of the event as free-form text. Optional.
                location?: string;
                // Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description",
                // "location", "start", "end" or "recurrence". The default is False. Read-Only.
                locked?: boolean;
                // The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees
                // with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing
                // an event.
                organizer?: Schema.EventOrganizer;
                // For an instance of a recurring event, this is the time at which this event would start according to the recurrence data
                // in the recurring event identified by recurringEventId. It uniquely identifies the instance within the recurring event
                // series even if the instance was moved to a different time. Immutable.
                originalStartTime?: Schema.EventDateTime;
                // If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional.
                // Immutable. The default is False.
                privateCopy?: boolean;
                // List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and
                // DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This
                // field is omitted for single events or instances of recurring events.
                recurrence?: string[];
                // For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.
                recurringEventId?: string;
                // Information about the event's reminders for the authenticated user.
                reminders?: Schema.EventReminders;
                // Sequence number as per iCalendar.
                sequence?: Integer;
                // Source from which the event was created. For example, a web page, an email message or any document identifiable by an
                // URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.
                source?: Schema.EventSource;
                // The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.
                start?: Schema.EventDateTime;
                // Status of the event. Optional. Possible values are:
                // - "confirmed" - The event is confirmed. This is the default status.
                // - "tentative" - The event is tentatively confirmed.
                // - "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync
                // (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns
                // them.
                // A cancelled status represents two different states depending on the event type:
                // - Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to
                // the user. Clients should store these events for the lifetime of the parent recurring event.
                // Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields
                // populated. The other fields might be empty.
                // - All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled
                // events will eventually disappear, so do not rely on them being available indefinitely.
                // Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events
                // continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the
                // events to which the user was invited and that they manually removed continue to provide details. However, incremental
                // sync requests with showDeleted set to false will not return these details.
                // If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee
                // list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.
                status?: string;
                // Title of the event.
                summary?: string;
                // Whether the event blocks time on the calendar. Optional. Possible values are:
                // - "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy
                // in the Calendar UI.
                // - "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available
                // in the Calendar UI.
                transparency?: string;
                // Last modification time of the event (as a RFC3339 timestamp). Read-only.
                updated?: string;
                // Visibility of the event. Optional. Possible values are:
                // - "default" - Uses the default visibility for events on the calendar. This is the default value.
                // - "public" - The event is public and event details are visible to all readers of the calendar.
                // - "private" - The event is private and only event attendees may view event details.
                // - "confidential" - The event is private. This value is provided for compatibility reasons.
                visibility?: string;
            }
            interface EventAttachment {
                // ID of the attached file. Read-only.
                // For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.
                fileId?: string;
                // URL link to the attachment.
                // For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the
                // Drive API.
                // Required when adding an attachment.
                fileUrl?: string;
                // URL link to the attachment's icon. Read-only.
                iconLink?: string;
                // Internet media type (MIME type) of the attachment.
                mimeType?: string;
                // Attachment title.
                title?: string;
            }
            interface EventAttendee {
                // Number of additional guests. Optional. The default is 0.
                additionalGuests?: Integer;
                // The attendee's response comment. Optional.
                comment?: string;
                // The attendee's name, if available. Optional.
                displayName?: string;
                // The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email
                // address as per RFC5322.
                // Required when adding an attendee.
                email?: string;
                // The attendee's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API
                id?: string;
                // Whether this is an optional attendee. Optional. The default is False.
                optional?: boolean;
                // Whether the attendee is the organizer of the event. Read-only. The default is False.
                organizer?: boolean;
                // Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time.
                // Subsequent modifications are ignored. Optional. The default is False.
                resource?: boolean;
                // The attendee's response status. Possible values are:
                // - "needsAction" - The attendee has not responded to the invitation.
                // - "declined" - The attendee has declined the invitation.
                // - "tentative" - The attendee has tentatively accepted the invitation.
                // - "accepted" - The attendee has accepted the invitation.
                responseStatus?: string;
                // Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.
                self?: boolean;
            }
            // The creator of the event. Read-only.
            interface EventCreator {
                // The creator's name, if available.
                displayName?: string;
                // The creator's email address, if available.
                email?: string;
                // The creator's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API
                id?: string;
                // Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is
                // False.
                self?: boolean;
            }
            interface EventDateTime {
                // The date, in the format "yyyy-mm-dd", if this is an all-day event.
                date?: string;
                // The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time
                // zone is explicitly specified in timeZone.
                dateTime?: string;
                // The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For
                // recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single
                // events this field is optional and indicates a custom time zone for the event start/end.
                timeZone?: string;
            }
            // Extended properties of the event.
            interface EventExtendedProperties {
                // Properties that are private to the copy of the event that appears on this calendar.
                private?: object;
                // Properties that are shared between copies of the event on other attendees' calendars.
                shared?: object;
            }
            // A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday
            // calendar metadata.
            interface EventGadget {
                // The gadget's display mode. Deprecated. Possible values are:
                // - "icon" - The gadget displays next to the event's title in the calendar view.
                // - "chip" - The gadget displays when the event is clicked.
                display?: string;
                // The gadget's height in pixels. The height must be an integer greater than 0. Optional. Deprecated.
                height?: Integer;
                // The gadget's icon URL. The URL scheme must be HTTPS. Deprecated.
                iconLink?: string;
                // The gadget's URL. The URL scheme must be HTTPS. Deprecated.
                link?: string;
                // Preferences.
                preferences?: object;
                // The gadget's title. Deprecated.
                title?: string;
                // The gadget's type. Deprecated.
                type?: string;
                // The gadget's width in pixels. The width must be an integer greater than 0. Optional. Deprecated.
                width?: Integer;
            }
            // The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees
            // with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing
            // an event.
            interface EventOrganizer {
                // The organizer's name, if available.
                displayName?: string;
                // The organizer's email address, if available. It must be a valid email address as per RFC5322.
                email?: string;
                // The organizer's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API
                id?: string;
                // Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is
                // False.
                self?: boolean;
            }
            interface EventReminder {
                // The method used by this reminder. Possible values are:
                // - "email" - Reminders are sent via email.
                // - "popup" - Reminders are sent via a UI popup.
                // Required when adding a reminder.
                method?: string;
                // Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320
                // (4 weeks in minutes).
                // Required when adding a reminder.
                minutes?: Integer;
            }
            // Information about the event's reminders for the authenticated user.
            interface EventReminders {
                // If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set,
                // indicates that no reminders are set for this event. The maximum number of override reminders is 5.
                overrides?: Schema.EventReminder[];
                // Whether the default reminders of the calendar apply to the event.
                useDefault?: boolean;
            }
            // Source from which the event was created. For example, a web page, an email message or any document identifiable by an
            // URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.
            interface EventSource {
                // Title of the source; for example a title of a web page or an email subject.
                title?: string;
                // URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.
                url?: string;
            }
            interface Events {
                // The user's access role for this calendar. Read-only. Possible values are:
                // - "none" - The user has no access.
                // - "freeBusyReader" - The user has read access to free/busy information.
                // - "reader" - The user has read access to the calendar. Private events will appear to users with reader access, but event
                // details will be hidden.
                // - "writer" - The user has read and write access to the calendar. Private events will appear to users with writer access,
                // and event details will be visible.
                // - "owner" - The user has ownership of the calendar. This role has all of the permissions of the writer role with the
                // additional ability to see and manipulate ACLs.
                accessRole?: string;
                // The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar
                // that do not explicitly override them (i.e. do not have reminders.useDefault set to True).
                defaultReminders?: Schema.EventReminder[];
                // Description of the calendar. Read-only.
                description?: string;
                // ETag of the collection.
                etag?: string;
                // List of events on the calendar.
                items?: Schema.Event[];
                // Type of the collection ("calendar#events").
                kind?: string;
                // Token used to access the next page of this result. Omitted if no further results are available, in which case
                // nextSyncToken is provided.
                nextPageToken?: string;
                // Token used at a later point in time to retrieve only the entries that have changed since this result was returned.
                // Omitted if further results are available, in which case nextPageToken is provided.
                nextSyncToken?: string;
                // Title of the calendar. Read-only.
                summary?: string;
                // The time zone of the calendar. Read-only.
                timeZone?: string;
                // Last modification time of the calendar (as a RFC3339 timestamp). Read-only.
                updated?: string;
            }
            interface FreeBusyCalendar {
                // List of time ranges during which this calendar should be regarded as busy.
                busy?: Schema.TimePeriod[];
                // Optional error(s) (if computation for the calendar failed).
                errors?: Schema.Error[];
            }
            interface FreeBusyGroup {
                // List of calendars' identifiers within a group.
                calendars?: string[];
                // Optional error(s) (if computation for the group failed).
                errors?: Schema.Error[];
            }
            interface FreeBusyRequest {
                // Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50.
                calendarExpansionMax?: Integer;
                // Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group
                // with more members than this value. Maximum value is 100.
                groupExpansionMax?: Integer;
                // List of calendars and/or groups to query.
                items?: Schema.FreeBusyRequestItem[];
                // The end of the interval for the query formatted as per RFC3339.
                timeMax?: string;
                // The start of the interval for the query formatted as per RFC3339.
                timeMin?: string;
                // Time zone used in the response. Optional. The default is UTC.
                timeZone?: string;
            }
            interface FreeBusyRequestItem {
                // The identifier of a calendar or a group.
                id?: string;
            }
            interface FreeBusyResponse {
                // List of free/busy information for calendars.
                calendars?: object;
                // Expansion of groups.
                groups?: object;
                // Type of the resource ("calendar#freeBusy").
                kind?: string;
                // The end of the interval.
                timeMax?: string;
                // The start of the interval.
                timeMin?: string;
            }
            interface Setting {
                // ETag of the resource.
                etag?: string;
                // The id of the user setting.
                id?: string;
                // Type of the resource ("calendar#setting").
                kind?: string;
                // Value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of
                // length up to 1024 characters.
                value?: string;
            }
            interface Settings {
                // Etag of the collection.
                etag?: string;
                // List of user settings.
                items?: Schema.Setting[];
                // Type of the collection ("calendar#settings").
                kind?: string;
                // Token used to access the next page of this result. Omitted if no further results are available, in which case
                // nextSyncToken is provided.
                nextPageToken?: string;
                // Token used at a later point in time to retrieve only the entries that have changed since this result was returned.
                // Omitted if further results are available, in which case nextPageToken is provided.
                nextSyncToken?: string;
            }
            interface TimePeriod {
                // The (exclusive) end of the time period.
                end?: string;
                // The (inclusive) start of the time period.
                start?: string;
            }
        }
    }
    // Manipulates events and other calendar data.
    interface Calendar {
        Acl?: Calendar.Collection.AclCollection;
        CalendarList?: Calendar.Collection.CalendarListCollection;
        Calendars?: Calendar.Collection.CalendarsCollection;
        Channels?: Calendar.Collection.ChannelsCollection;
        Colors?: Calendar.Collection.ColorsCollection;
        Events?: Calendar.Collection.EventsCollection;
        Freebusy?: Calendar.Collection.FreebusyCollection;
        Settings?: Calendar.Collection.SettingsCollection;
        // Create a new instance of AclRule
        newAclRule(): Calendar.Schema.AclRule;
        // Create a new instance of AclRuleScope
        newAclRuleScope(): Calendar.Schema.AclRuleScope;
        // Create a new instance of Calendar
        newCalendar(): Calendar.Schema.Calendar;
        // Create a new instance of CalendarListEntry
        newCalendarListEntry(): Calendar.Schema.CalendarListEntry;
        // Create a new instance of CalendarListEntryNotificationSettings
        newCalendarListEntryNotificationSettings(): Calendar.Schema.CalendarListEntryNotificationSettings;
        // Create a new instance of CalendarNotification
        newCalendarNotification(): Calendar.Schema.CalendarNotification;
        // Create a new instance of Channel
        newChannel(): Calendar.Schema.Channel;
        // Create a new instance of ConferenceData
        newConferenceData(): Calendar.Schema.ConferenceData;
        // Create a new instance of ConferenceParameters
        newConferenceParameters(): Calendar.Schema.ConferenceParameters;
        // Create a new instance of ConferenceParametersAddOnParameters
        newConferenceParametersAddOnParameters(): Calendar.Schema.ConferenceParametersAddOnParameters;
        // Create a new instance of ConferenceProperties
        newConferenceProperties(): Calendar.Schema.ConferenceProperties;
        // Create a new instance of ConferenceRequestStatus
        newConferenceRequestStatus(): Calendar.Schema.ConferenceRequestStatus;
        // Create a new instance of ConferenceSolution
        newConferenceSolution(): Calendar.Schema.ConferenceSolution;
        // Create a new instance of ConferenceSolutionKey
        newConferenceSolutionKey(): Calendar.Schema.ConferenceSolutionKey;
        // Create a new instance of CreateConferenceRequest
        newCreateConferenceRequest(): Calendar.Schema.CreateConferenceRequest;
        // Create a new instance of EntryPoint
        newEntryPoint(): Calendar.Schema.EntryPoint;
        // Create a new instance of Event
        newEvent(): Calendar.Schema.Event;
        // Create a new instance of EventAttachment
        newEventAttachment(): Calendar.Schema.EventAttachment;
        // Create a new instance of EventAttendee
        newEventAttendee(): Calendar.Schema.EventAttendee;
        // Create a new instance of EventCreator
        newEventCreator(): Calendar.Schema.EventCreator;
        // Create a new instance of EventDateTime
        newEventDateTime(): Calendar.Schema.EventDateTime;
        // Create a new instance of EventExtendedProperties
        newEventExtendedProperties(): Calendar.Schema.EventExtendedProperties;
        // Create a new instance of EventGadget
        newEventGadget(): Calendar.Schema.EventGadget;
        // Create a new instance of EventOrganizer
        newEventOrganizer(): Calendar.Schema.EventOrganizer;
        // Create a new instance of EventReminder
        newEventReminder(): Calendar.Schema.EventReminder;
        // Create a new instance of EventReminders
        newEventReminders(): Calendar.Schema.EventReminders;
        // Create a new instance of EventSource
        newEventSource(): Calendar.Schema.EventSource;
        // Create a new instance of FreeBusyRequest
        newFreeBusyRequest(): Calendar.Schema.FreeBusyRequest;
        // Create a new instance of FreeBusyRequestItem
        newFreeBusyRequestItem(): Calendar.Schema.FreeBusyRequestItem;
    }
}
declare const Calendar: GoogleAppsScript.Calendar;
