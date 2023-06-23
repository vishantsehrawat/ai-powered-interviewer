// const axios = require("axios");

// async function compareQuestionsAndAnswers(messages) {
//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         messages: messages,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer YOUR_API_KEY",
//         },
//       }
//     );

//     // Handle the response
//     const reply = response.data.choices[0].message.content;
//     const matchPercentage = response.data.choices[0].message.metadata.confidence;

//     console.log("Assistant's reply:", reply);
//     console.log("Match percentage:", matchPercentage);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }


// module.exports = {compareQuestionsAndAnswers}