# Goal:

To make a web site that can be used to build common bacnet objects and to be packaged within a .zdd file so that it can be uploaded to a controller via enteliWEB.

# Requirements:

1. The file produced must be a .zdd file.
2. The website will work through the browser only. No need for installing any software.
3. Must operate just like the existing python database builder operate.
   caveat: No excel document will be required for building the objects.
4. The webpage must allow for multiple objects to be made at once.
5. Will consist of a front-end and back-end. The objects will be created on the backend server.

# Object Types:

Objects will be placed in `./assets/objects` directory.

1. AO
2. AI
3. BO
4. BI
5. AV
6. BV
7. MV
8. EV

   - Out of Range (OOR)
   - Change of State (CoS)
   - Command Failure (CF)
   - Floating Limit (FL)
   - Change of Value (CoV)

9. BDE
10. PG
11. MT

## Required Fields for AI csml

- Object Type (ex. `<Enumerated name="Object_Type" value="analog-input"/>`)
- Object Name (ex. `<Object name="AI1">`)
- Object Identifier (ex. `<ObjectIdentifier name="Object_Identifier" value="analog-input,1"/>`)
- String Name (ex. `<String name="Object_Name" value="AI Asset"/>`)

## Required Field for AI ctl

- Device_Name (ex. `Device_Name: AI Asset`)
- File_List (ex. `{<FILE_LIST_START> FIL1 STREAM AI1.csml 0 <FILE_LIST_END>}`)

## Front End Fields for AI Object

- Object Type (ex. 'Analog Input')
- Object Name (ex. 'Outside Air Temperature')
- Object Instance (ex. '1')
