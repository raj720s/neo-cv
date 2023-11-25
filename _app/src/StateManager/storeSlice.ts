// import {createSlice} from '@reduxjs/toolkit'

// export const dataStoreSlice = createSlice({
//   name: 'store',
//   initialState: {
//     personalInfo: {
//       firstName: '',
//       lastName: '',
//       Email: '',
//       Mobile: '',
//       Address1: '',
//       Address2: '',
//       City: '',
//       State: '',
//       Pin: '',
//       Objective: '',
//     },
//     workEx: [
//       {
//         title: '',
//         orgName: '',
//         startYear: '',
//         endYear: '',
//         jobDescription: '',
//       },
//     ],
//     education: [
//       {
//         Type: 'Graduation',
//         University: '',
//         Degree: '',
//         Start: '',
//         End: '',
//       },
//     ],
//     skills: [{skillName: ''}],
//     selectedTemplate: '',
//     imageFile: null,
//     errorMessages: {},
//     showErrorMessages: false,
//   },

//   reducers: {
//     updatePersonalInfo: (state: any, action) => {
//       //this function updates the targeted key of the personalInfo element of dataStore //
//       state.personalInfo[action.payload.key] = action.payload.value
//     },

//     updateWorkEx: (state: any, action) => {
//       //this function updates the targeted key of the workEx element of dataStore //
//       state.workEx[action.payload.index][action.payload.key] = action.payload.value
//     },
//     updateEducation: (state: any, action) => {
//       //this function updates the targeted key of the education element of dataStore //
//       state.education[action.payload.index][action.payload.key] = action.payload.value
//     },
//     updateKeySkills: (state: any, action) => {
//       //this function updates the targeted key of the keySkills element of dataStore //
//       state.skills[action.payload.index][action.payload.key] = action.payload.value
//     },
//     updateState: (state: any, action) => {
//       //this function can be called to update any targeted element of dataStore //
//       state[action.payload.key] = action.payload.value
//     },
//     updateErrorMessages: (state: any, action) => {
//       //this function updates errorMessages element of dataStore //
//       let key = action.payload.key
//       if (action.payload.index) {
//         key += '_' + action.payload.index
//       }
//       state.errorMessages[key] = action.payload.value
//     },
//     addArrayElement: (state: any, action) => {
//       //this function is used to push a blank object in the array of elements(workEx,education& keySkills)
//       //when the user clicks on the Add-new button to add more related details//
//       state[action.payload.key].push(action.payload.element)
//     },
//     removeArrayElement: (state: any, action) => {
//       //this function deletes the latest saved details in the array of elements(workEx,education& keySkills), when the user clicks on the remove button//
//       state[action.payload.key].pop()
//     },
//   },
// })

// export const {updatePersonalInfo, updateWorkEx, updateEducation, updateKeySkills, updateErrorMessages, updateState, addArrayElement, removeArrayElement} = dataStoreSlice.actions

// export default dataStoreSlice.reducer
