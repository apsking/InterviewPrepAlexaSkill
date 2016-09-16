/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the"License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the"license" file accompanying this file. This file is distributed on an"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

'use strict';

// All available questions
var questions = [
    { value : "Do you have any questions for me?", tags : ["behavioral"] },
    { value : "What was the last project you led, and what was its outcome?", tags : ["behavioral"] },
    { value : "Give me an example of a time that you felt you went above and beyond the call of duty at work.", tags : ["behavioral"] },
    { value : "Can you describe a time when your work was criticized?", tags : ["behavioral"] },
    { value : "Have you ever been on a team where someone was not pulling their own weight? How did you handle it?", tags : ["behavioral", "personal"] },
    { value : "Tell me about a time when you had to give someone difficult feedback. How did you handle it?", tags : ["behavioral", "personal"] },
    { value : "What is your greatest failure, and what did you learn from it?", tags : ["behavioral", "personal"] },
    { value : "How do you handle working with people who annoy you?", tags : ["behavioral", "personal"] },
    { value : "If I were your supervisor and asked you to do something that you disagreed with, what would you do?", tags : ["behavioral"] },
    { value : "What was the most difficult period in your life, and how did you deal with it?", tags : ["behavioral", "personal"] },
    { value : "Give me an example of a time you did something wrong. How did you handle it?", tags : ["behavioral"] },
    { value : "Tell me about a time where you had to deal with conflict on the job.", tags : ["behavioral"] },
    { value : "If you were at a business lunch and you ordered a rare steak, and they brought it to you well done, what would you do?", tags : ["behavioral", "personal"] },
    { value : "If you found out your company was doing something against the law, like fraud, what would you do?", tags : ["behavioral", "personal"] },
    { value : "What assignment was too difficult for you, and how did you resolve the issue?", tags : ["behavioral"] },
    { value : "What's the most difficult decision you have made in the last two years, and how did you come to that decision?", tags : ["behavioral"] },
    { value : "Describe how you would handle a situation if you were required to finish multiple tasks by the end of the day, and there was no conceivable way that you could finish them.", tags : ["behavioral"] },
    { value : "Can you describe an environment or scenario where you would not thrive instantly?", tags : ["behavioral"] },
    { value : "What are you looking for in terms of career development?", tags : ["career"] },
    { value : "How do you want to improve yourself in the next year?", tags : ["career", "personal"] },
    { value : "What kind of goals would you have in mind if you got this job?", tags : ["career", "personal"] },
    { value : "If I were to ask your last supervisor to provide you additional training or exposure, what would she suggest?", tags : ["career"] },
    { value : "What are your career goals?", tags : ["career"] },
    { value : "Where would you like to be in your career five years from now?", tags : ["career", "personal"] },
    { value : "What's your ideal company?", tags : ["personal", "career"] },
    { value : "What attracted you to this company?", tags : ["career", "personal"] },
    { value : "Why should we hire you?", tags : ["career personal"] },
    { value : "What did you like least about your last job?", tags : ["career", "personal"] },
    { value : "When were you most satisfied in your job?", tags : ["career", "personal"] },
    { value : "What can you do for us that other candidates cannot?", tags : ["personal"] },
    { value : "What were the responsibilities of your last position?", tags : ["career", "behavioral"] },
    { value : "Why are you leaving your present job?", tags : ["career", "personal"] },
    { value : "What do you know about this industry?", tags : ["career"] },
    { value : "What do you know about our company?", tags : ["career"] },
    { value : "Are you willing to relocate?", tags : ["career", "personal"] },
    { value : "How would you go about establishing your credibility quickly with the team?", tags : ["general"] },
    { value : "How long will it take for you to make a significant contribution?", tags : ["general"] },
    { value : "What do you see yourself doing within the first 30 days of this job?", tags : ["career", "personal"] },
    { value : "If selected for this position, can you describe your strategy for the first 90 days?", tags : ["career", "personal"] },
    { value : "Who was your most difficult customer?", tags : ["behavioral", "amazon"] },
    { value : "How would you introduce AWS in an elevator pitch?", tags : ["technical", "behavioral", "amazon"] },
    { value : "What is the worst mistake you ever made?", tags : ["personal", "amazon"] },
    { value : "If your direct manager was instructing you to do something you disagreed with, how would you handle it?", tags : ["personal", "career", "amazon"] },
    { value : "Do you know our CEO? How do you pronounce his name?", tags : ["general", "amazon"] },
    { value : "Are you willing to work on your feet for ten hours, four days a week?", tags : ["personal", "amazon"] },
    { value : "What is your work style?", tags : ["personal"] },
    { value : "Describe what Human Resource means to you.", tags : ["general", "behavioral", "amazon"] },
    { value : "Tell me about yourself.", tags : ["general", "personal", "amazon", "microsoft"] },
    { value : "What are your strengths?", tags : ["general", "personal", "amazon", "microsoft", "google"] },
    { value : "What are your weaknesses?", tags : ["general", "personal", "amazon", "microsoft", "google"] },
    { value : "Why do you want this job?", tags : ["general", "personal", "amazon", "microsoft", "google"] },
    { value : "How would you describe your work style?", tags : ["personal", "behavioral"] },
    { value : "What would be your ideal working environment?", tags : ["personal", "behavioral"] },
    { value : "What do you look for in terms of culture? Structured or entrepreneurial?", tags : ["personal", "career"] },
    { value : "Give examples of ideas you have had, or implemented.", tags : ["personal", "technical", "career"] },
    { value : "What techniques and tools do you use to keep yourself organized?", tags : ["personal", "behavioral"] },
    { value : "Would you consider yourself a big-picture person or a detail-oriented person?", tags : ["personal"] },
    { value : "Tell me about your proudest achievement.", tags : ["personal", "career"] },
    { value : "Who was your favorite manager and why?", tags : ["personal", "career"] },
    { value : "What do you think of your previous boss?", tags : ["personal", "career"] },
    { value : "Was there a person in your career who really made a difference?", tags : ["personal", "career"] },
    { value : "What kind of personality do you work best with and why?", tags : ["personal", "behavioral"] },
    { value : "What are you most proud of?", tags : ["personal", "behavioral"] },
    { value : "What do you like to do?", tags : ["personal", "behavioral"] },
    { value : "What are your lifelong dreams?", tags : ["personal", "career", "behavioral"] },
    { value : "What do you ultimately want to become?", tags : ["personal", "career"] },
    { value : "What is your personal mission statement?", tags : ["personal", "career"] },
    { value : "What are three positive things your last boss would say about you?", tags : ["personal", "career"] },
    { value : "What negative thing would your last boss say about you?", tags : ["personal", "career"] },
    { value : "What three character traits would your friends use to describe you?", tags : ["personal", "career"] },
    { value : "What are three positive character traits you don't have?", tags : ["personal"] },
    { value : "If you were interviewing someone for this position, what traits would you look for?", tags : ["personal", "career"] },
    { value : "List five words that describe your character.", tags : ["personal"] },
    { value : "Who has impacted you most in your career and how?", tags : ["personal", "career"] },
    { value : "What is your greatest fear?", tags : ["personal"] },
    { value : "What is your biggest regret and why?", tags : ["personal"] },
    { value : "What's the most important thing you learned in school?", tags : ["personal", "career"] },
    { value : "Why did you choose your major?", tags : ["personal", "career"] },
    { value : "What will you miss about your current job?", tags : ["personal", "career"] },
    { value : "What are the qualities of a good leader?", tags : ["personal"] },
    { value : "What is your greatest achievement outside of work?", tags : ["personal"] },
    { value : "What are the qualities of a bad leader?", tags : ["personal"] },
    { value : "Do you think a leader should be feared or liked?   ", tags : ["personal"] },
    { value : "How do you feel about taking no for an answer?", tags : ["personal"] },
    { value : "How would you feel about working for someone who knows less than you?", tags : ["personal"] },
    { value : "How do you think I rate as an interviewer?", tags : ["personal"] },
    { value : "Tell me one thing about yourself you would not want me to know.", tags : ["personal"] },
    { value : "Tell me the difference between good and exceptional.", tags : ["personal"] },
    { value : "What kind of car do you drive?", tags : ["personal"] },
    { value : "If you could be anywhere in the world right now, where would you be?", tags : ["personal"] },
    { value : "What's the last book you read?", tags : ["personal"] },
    { value : "What magazines do you subscribe to?", tags : ["personal"] },
    { value : "What's the best movie you have seen in the last year?", tags : ["personal"] },
    { value : "What would you do if you won the lottery?", tags : ["personal"] },
    { value : "Who are your heroes?", tags : ["personal", "career"] },
    { value : "What do you like to do for fun?", tags : ["personal"] },
    { value : "What do you do in your spare time?", tags : ["personal"] },
    { value : "What is your favorite memory from childhood?", tags : ["personal"] },
    { value : "What salary are you seeking?", tags : ["salary"] },
    { value : "What's your salary history?", tags : ["salary"] },
    { value : "If I were to give you this salary you requested, but let you write your job description for the next year, what would it say?", tags : ["salary"] },
    { value : "What salary range would you require to take this job?", tags : ["salary"] },
    { value : "Would you consider taking less pay than you made in your last job?", tags : ["salary"] },
    { value : "What is the angle between the hour hand and minute hand in an analog clock?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "How do you detect whether or not a word is a palindrome?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "Here's a string with numbers from 1-250, in random order, but it's missing one number. How will you find the missing number?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "What is your favorite programming language?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "How would you implement bubble sort?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "How would you implement selection sort?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "How would you implement insertion sort?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "How would you implement merge sort?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "How would you implement quick sort?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "You have two very large numbers that cannot be stored in any available datatypes. How would you multiply them?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "How will you implement a dictionary?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "Given a matrix which is spirally sorted. Remove an element and insert another element, maintaining the sorted order.", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "How would you find if there is a cycle in a directed graph?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "How would you implement a method that converts a binary search tree into a sorted double-linked list, without creating any new nodes?", tags : ["technical", "amazon", "google", "microsoft"] },
    { value : "Can you tell me about a recent project or process that you made better, faster, smarter or more efficient?", tags : ["technical"] },
    { value : "You’ve just been assigned to a project involving a new technology. How would you get started?", tags : ["technical"] },
    { value : "What technology-related blogs, podcasts, tweets or websites do you follow? Do you share any information, yourself, online?", tags : ["technical"] },
    { value : "How do you keep your technology skills current?", tags : ["technical", "personal"] },
    { value : "What character traits would your colleagues use to describe you?", tags : ["behavioral"] },
    { value : "Can you tell me about a time when things didn’t go the way you wanted at work, such as a project that failed or being passed over for a promotion?", tags : ["technical", "career"] },
    { value : "What are your favorite and least favorite technology products, and why?", tags : ["technical", "personal"] },
    { value : "Describe to me some bad code you’ve read or inherited lately.", tags : ["technical"] },
    { value : "What do you do when you get stuck with a problem you cannot solve?", tags : ["technical"] },
    { value : "When the build does break, how do you help fix it?", tags : ["technical"] },
    { value : "What are some practices you use to help prevent a developer on the team from breaking the build?", tags : ["technical"] },
    { value : "Do you answer questions on Stack Overflow?", tags : ["technical"] },
    { value : "Are you using code from GitHub, or contributing code to an open-source project?", tags : ["technical"] },
    { value : "Do you like to work alone or as part of a team?", tags : ["personal", "behavioral"] },
    { value : "What’s the best part about your current job?", tags : ["personal", "career"] },
    { value : "What in particular are you most interested in working on?", tags : ["personal", "career"] },
    { value : "Do you have examples of your work?", tags : ["personal", "technical", "career"] },
    { value : "Explain the concept of polymorphism in object oriented programming", tags : ["technical", "hitachi consulting", "hitachi"] },
    { value : "What are 3 things that you want me to remember about you?", tags : ["personal", "behavioral", "hitachi consulting", "hitachi"] },
    { value : "Share a time when you were given a problem you could not solve.", tags : ["technical", "behavioral", "hitachi consulting", "hitachi"] },
    { value : "Tell me how to implement the Fibonacci sequence", tags : ["technical", "hitachi consulting", "hitachi"] },
    { value : "How do you implement a binary search?", tags : ["technical"] },
    { value : "How do you find the minimum depth of a binary tree?", tags : ["technical"] },
    { value : "How do you find the check whether or not a binary tree is a full binary tree?", tags : ["technical"] },
    { value : "How do you check if a binary tree is a subtree of another binary tree?", tags : ["technical"] },
    { value : "How would you compare  two strings represented as Linked Lists?", tags : ["technical"] },
    { value : "How would you detech and remove loops in a Linked List?", tags : ["technical"] },
    { value : "How would you reverse all elements in a Linked List?", tags : ["technical"] },
    { value : "How do you find if a number is a perfect square?", tags : ["technical"] },
    { value : "What is the singleton design pattern?", tags : ["technical"] },
    { value : "What is the factory design pattern?", tags : ["technical"] },
    { value : "How would you find a number's greatest common devisor using recursion?", tags : ["technical"] },
    { value : "How would you find the factorial of a number using recursion", tags : ["technical"] }
 ];

// All available tips
var tips = [
    { value : "Conduct research on the employer, hiring manager, and job opportunity. You should understand the employer, the requirements of the job, and the background of the person interviewing you. The more research you conduct, the more you’ll understand the employer, and the better you’ll be able to answer interview questions.", tags : [] },
    { value : "Review common interview questions and prepare responses. Your goal is composing detailed yet concise responses, focusing on specific examples and accomplishments.", tags : [] },
    { value : "Dress for success. Plan out a wardrobe that fits the organization and its culture, striving for the most professional appearance you can accomplish.", tags : [] },
    { value : "Arrive on time for the interview. Strive to arrive about 15 minutes before your scheduled interview to complete additional paperwork and allow yourself time to get settled.", tags : [] },
    { value : "Make good first impressions. Be polite and offer warm greetings to everyone you meet, from parking attendant to the receptionist to the hiring manager.", tags : [] },
    { value : "Remember body language. Effective forms of body language are: smiling, eye contact, solid posture, active listening, and nodding while listening.", tags : [] },
    { value : "Ask insightful questions. The smart job-seeker prepares questions to ask days before the interview, adding any additional queries that might arise from the interview.", tags : [] },
    { value : "Sell yourself. You are the salesperson, and the product you are selling to the employer is your ability to fill the organization’s needs, solve its problems, and propel its success.", tags : [] },
    { value : "Thank the interviewers. Start the process while at the interview, thanking each person who interviewed you. Then, write thank you emails shortly after the interview.", tags : [] },
    { value : "Don't talk too much. Telling the interviewer more than he needs to know could be a fatal mistake. Prepare for the interview by reading through the job posting, matching your skills with the position's requirements and relating only that information.", tags : [] },
    { value : "Don't be too familiar. The interview is a professional meeting to talk business, not about making a new friend. Your level of familiarity should mimic the interviewer's demeanor.", tags : [] },
    { value : "Use appropriate language. You should use professional language during the interview. Be aware of any inappropriate slang words or references to age, race, religion, politics or sexual orientation.", tags : [] },
    { value : "Don't act desperate. Reflect the three Cs during the interview: cool, calm and confidence. You know you can do the job; make sure the interviewer believes you can, too.", tags : [] },
    { value : "Don't be cocky. There is a fine balance between confidence, professionalism and modesty.", tags : [] },
    { value : "Sweep social media. 98% of employers search your social media for any red flags. Remove any objectionable photos or posts to have a better first impresssion.", tags : [] },
    { value : "Schedule for Tuesday at 10:30AM. According to Glassdoor, the best time to interview is 10:30 AM on Tuesday.", tags : [] },
    { value : "Craft your 'story statement'. Write a brief, personable account of your life and how it pertains to your future career.", tags : [] },
    { value : "Wear a subtle fashion statement. Wear something that represents your culture or background. As long as it’s subtle and tasteful, your fashion statement can build rapport through fun conversations.", tags : [] },
    { value : "Prepare for the 'What's your weakness?' question. Use this as an opportunity to show how you are overcoming your weaknesses.", tags : [] },
    { value : "Brainstorm for 3 P. A. R. anecdotes. Problem. What was the situation? Action. What did you do to solve it? Result. What changed afterwards?", tags : [] },
    { value : "Think aloud. When answering tough questions. Think out loud and walk the interviewer through your thought process.", tags : [] },
    { value : "Ask good questions. Ask questions that not only provide answers that you are interested in, but also share something new about yourself.", tags : [] },
    { value : "Ask this question. 'Have I said anything in this interview or given you any other reason to doubt that I am a good fit for this role?'", tags : [] },
    { value : "Email a personalized thank you note. Thank your interviewer within 24 hours of finishing. It not only shows your gratitude, it also combats recency bias if you interviewed early.", tags : [] }
 ];

//List of all available question types. Should match slotQuestionType.txt
var questionTypes = [
 "general",
 "technical",
 "salary",
 "behavioral",
 "career",
 "personal"
];

//List of all available companies. Should match slotCompany.txt
var companies = [
 "Amazon",
 "Google",
 "Microsoft"
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

      /**
       * Uncomment this if statement and populate with your skill's application ID to
       * prevent someone else from configuring a skill that sends requests to this function.
       */

        if (event.session.application.applicationId !== AMZN_APP_ID) {
            context.fail("Invalid Application ID");
        }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type ==="LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type ==="IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type ==="SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception:" + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        +", sessionId=" + session.sessionId);
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        +", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if ("QuestionIntent" === intentName) {
        handleQuestionRequest(intent, session, callback);
    } else if ("TipsIntent" === intentName){
        handleTipsRequest(intent, session, callback);
    } else if ("NumberOfQuestionsIntent" === intentName){
        handleNumberOfQuestionsRequest(intent, session, callback);
    } else if ("QuestionTypeIntent" === intentName){
        handleQuestionTypeRequest(intent, session, callback);
    } else if ("CompanyIntent" === intentName){
        handleCompanyRequest(intent, session, callback);
    } else if ("AMAZON.RepeatIntent" === intentName){
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName){
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName){
        handleFinishSessionRequest(intent, session, callback);
    }  else if ("AMAZON.CancelIntent" === intentName){
        handleFinishSessionRequest(intent, session, callback);
    }else {
        throw"Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        +", sessionId=" + session.sessionId);
}

// ------- Skill specific business logic -------

var CARD_TITLE ="Interview Prep"; // Be sure to change this for your skill.
var RESPONSE_NO_QUESTIONS ="I don't have any questions like that.";
var RESPONSE_NO_TIPS ="I don't have any tips like that.";
var EXCLUDED_GENERAL_TAGS = ["technical", "amazon", "google", "microsoft"]; // tags to be excluded from generic request
var AMZN_APP_ID = "redacted";

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "You can ask for an interview. You can specify a question type or a specific company"
              + " if you want a more precise question.",
        repromptText = "",
        shouldEndSession = false;

    sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText
    };

    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

/**
Get a random question from the list by filtering down by tags.
@param Array<string> tags Tags with which to filter down question List
@param Array<string> arr Array with which to grab random element
@return Element random node from filtered list. Returns null if none exist
*/
function getElement(tags, arr){
  var filteredElements;

  // only filter question list if specified
  if(typeof tags !== 'undefined' && tags !== null){
    filteredElements = getElementsByTags(tags, arr);
  }else{
    filteredElements = arr;
  }

  // if any questions exist, return random one
  if(filteredElements.length > 0){
    var randIndex = Math.floor(Math.random() * filteredElements.length);
    return filteredElements[randIndex];
  }else{
    return null;
  }
}

/**
Get a list of elements from the list by filtering down by tags.
@param Array<string> tags Tags with which to filter down question List
@param Array<string> arr Array to search for a question
@return Array<element> questions from filtered list.
*/
function getElementsByTags(tags, arr){
  var i, j, contains;
  var ret = [];

  for (i = 0; i < arr.length; i++){
    contains = true;
    for (j = 0; j < tags.length; j++){
      if(arr[i].tags.indexOf(tags[j]) === -1){
        contains = false;
        break;
      }
    }

    if(contains){
      ret.push(arr[i]);
    }
  }

  return ret;
}

/**
Get a list of elements from an array which do not only contain the provided tags
@param Array<string> tags Tags with which to filter down element List
@param Array<string> arr Array to search for a element
@return Array<element> elements from filtered list.
*/
function getExcludedElementsByTags(tags, arr){
  var i,
  		j,
      contains,
			ret = [],
      filteredTagsArray = [],
      filteredTags = {};

  //remove any uneccesary tags
  for (i = 0; i < arr.length; i++){
    contains = false;
    for (j = 0; j < arr[i].tags.length; j++){
      filteredTags[arr[i].tags[j]] = true;
    }
  }

  //if tags exist add them to filter array
  for(i = 0; i < tags.length; i ++){
  	if(filteredTags[tags[i]]){
    	filteredTagsArray.push(tags[i]);
    }
  }

   //interate through every element in the arr
  for (i = 0; i < arr.length; i++){
    contains = false;
    for (j = 0; j < tags.length; j++){ //iterate through every element in tags
      if(arr[i].tags.indexOf(tags[j]) > -1){ //if any tag element exists in arr, return true and break;
        contains = true;
        break;
      }
    }

    // only add elements to list who have more than the specified tags or if its tag list doesn't contain any specified tag
    if((arr[i].tags.length > tags.length) || (!contains)) {
      ret.push(arr[i]);
  	}
  }

  return ret;
}

/**
Get a string representation of an array.
@param Array<string> arr Array to transform into a string
@param string lastDelimiter String to insert before last element
@return string string representation of array.
*/
function getArrayString(arr, lastDelimiter){
  var delim = ', ';
  if(arr){
    if(arr.length <= 1){
      return arr.join('');
    }else{
      if (typeof lastDelimiter === 'string'){
        arr[arr.length - 1] = lastDelimiter + ' ' + arr[arr.length - 1];
        return arr.join(delim);
      }else{
        return arr.join(delim);
      }
    }
  }else{
    return null;
  }
}

function handleNumberOfQuestionsRequest(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        numQuestions,
        questionType,
        companyName;

    // User specified type and company
    if(intent.slots && intent.slots.QuestionType && intent.slots.QuestionType.value
          && intent.slots.CompanyName && intent.slots.CompanyName.value){
      numQuestions = getElementsByTags([intent.slots.QuestionType.value.toLowerCase(), intent.slots.CompanyName.value.toLowerCase()], questions).length;
      companyName = intent.slots.CompanyName.value;
      questionType = intent.slots.QuestionType.value;
    }else if(intent.slots && intent.slots.QuestionType && intent.slots.QuestionType.value){ // User specified type
      numQuestions = getElementsByTags([intent.slots.QuestionType.value.toLowerCase()], questions).length;
      questionType = intent.slots.QuestionType.value;
    }else if(intent.slots && intent.slots.CompanyName && intent.slots.CompanyName.value){ // User specified company
      numQuestions = getElementsByTags([intent.slots.CompanyName.value.toLowerCase()], questions).length;
      companyName = intent.slots.CompanyName.value;
    }else{ // if user asked a simple question
      numQuestions = getExcludedElementsByTags(EXCLUDED_GENERAL_TAGS, questions).length;
    }

    //create response string
    if(numQuestions < 1){
      speechOutput = RESPONSE_NO_QUESTIONS;
    }else if(questionType || companyName){
      speechOutput = "I have " + numQuestions + " ";

      //if type asked
      if(questionType){
        speechOutput += questionType + " ";
      }

      speechOutput += numQuestions === 1 ?"question " : "questions ";

      //if company asked
      if(companyName){
        speechOutput += "from " + companyName + ".";
      }
    }else {
      speechOutput = "I have " + numQuestions + " total questions.";
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponseWithoutCard(speechOutput, repromptText, true));
}

function handleQuestionRequest(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        question;

    // User specified type and company
    if(intent.slots && intent.slots.QuestionType && intent.slots.QuestionType.value
          && intent.slots.CompanyName && intent.slots.CompanyName.value){
      question = getElement([intent.slots.QuestionType.value.toLowerCase(), intent.slots.CompanyName.value.toLowerCase()], questions);
    }else if(intent.slots && intent.slots.QuestionType && intent.slots.QuestionType.value){ // User specified type
      question = getElement([intent.slots.QuestionType.value.toLowerCase()], questions);
    }else if(intent.slots && intent.slots.CompanyName && intent.slots.CompanyName.value){ // User specified company
      question = getElement([intent.slots.CompanyName.value.toLowerCase()], questions);
    }else{ // if user asked a simple question
      question = getElement([], getExcludedElementsByTags(EXCLUDED_GENERAL_TAGS, questions));
    }

    if(question){
      speechOutput = question.value;
    }else{
      speechOutput = RESPONSE_NO_QUESTIONS;
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Interview Question", speechOutput, repromptText, true));
}

function handleTipsRequest(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        tip = getElement([], tips);

    if(tip && tip.value){
      speechOutput = tip.value;
    }else{
      speechOutput = RESPONSE_NO_TIPS;
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Interview Tip", speechOutput, repromptText, true));
}

function handleQuestionTypeRequest(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput = "You can ask for " + getArrayString(questionTypes, "and") + " questions. If you don't specify a type, I will pick one at random.",
        repromptText = speechOutput;

        sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": repromptText
        };

    callback(sessionAttributes,
                 buildSpeechletResponseWithoutCard(speechOutput, repromptText, false));
}

function handleCompanyRequest(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput = "You can ask for questions from " + getArrayString(companies, "or") + "."
            + "If you don't specify a company, I will pick one at random.",
        repromptText = speechOutput;

        sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": repromptText
        };

    callback(sessionAttributes,
                 buildSpeechletResponseWithoutCard(speechOutput, repromptText, false));
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (session.new ||!session.attributes ||  !session.attributes.speechOutput || !session.attributes.repromptText) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput ="You can say, 'Ask Interview Prep for a question.' "
            + "You can also specify a type of question, or a question "
            + "for a specific company, like this, 'Ask Interview Prep for a technical question from Amazon.'",
        repromptText = speechOutput,
        shouldEndSession = false;

    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a"Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!","", true));
}

// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type:"PlainText",
            text: output
        },
        card: {
            type:"Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type:"PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type:"PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type:"PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version:"1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
