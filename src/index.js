/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the"License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the"license" file accompanying this file. This file is distributed on an"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

'use strict';

 var questions = [
      { question :"Tell me about yourself.", tags : ["general","amazon"] },
      { question :"What are your strengths?", tags : ["general"] },
      { question :"What are your weaknesses?", tags : ["general"] },
      { question :"Why do you want this job?", tags : ["general"] },
      { question :"Where would you like to be in your career five years from now?", tags : ["general"] },
      { question :"What's your ideal company?", tags : ["general"] },
      { question :"What attracted you to this company?", tags : ["general"] },
      { question :"Why should we hire you?", tags : ["general"] },
      { question :"What did you like least about your last job?", tags : ["general"] },
      { question :"When were you most satisfied in your job?", tags : ["general"] },
      { question :"What can you do for us that other candidates can't?", tags : ["general"] },
      { question :"What were the responsibilities of your last position?", tags : ["general"] },
      { question :"Why are you leaving your present job?", tags : ["general"] },
      { question :"What do you know about this industry?", tags : ["general"] },
      { question :"What do you know about our company?", tags : ["general"] },
      { question :"Are you willing to relocate?", tags : ["general"] },
      { question :"How would you go about establishing your credibility quickly with the team?", tags : ["general"] },
      { question :"How long will it take for you to make a significant contribution?", tags : ["general"] },
      { question :"What do you see yourself doing within the first 30 days of this job?", tags : ["general"] },
      { question :"If selected for this position, can you describe your strategy for the first 90 days?", tags : ["general"] },
      { question :"Do you have any questions for me?", tags : ["behavioral"] },
      { question :"What was the last project you led, and what was its outcome?", tags : ["behavioral"] },
      { question :"Give me an example of a time that you felt you went above and beyond the call of duty at work.", tags : ["behavioral"] },
      { question :"Can you describe a time when your work was criticized?", tags : ["behavioral"] },
      { question :"Have you ever been on a team where someone was not pulling their own weight? How did you handle it?", tags : ["behavioral"] },
      { question :"Tell me about a time when you had to give someone difficult feedback. How did you handle it?", tags : ["behavioral"] },
      { question :"What is your greatest failure, and what did you learn from it?", tags : ["behavioral"] },
      { question :"How do you handle working with people who annoy you?", tags : ["behavioral"] },
      { question :"If I were your supervisor and asked you to do something that you disagreed with, what would you do?", tags : ["behavioral"] },
      { question :"What was the most difficult period in your life, and how did you deal with it?", tags : ["behavioral"] },
      { question :"Give me an example of a time you did something wrong. How did you handle it?", tags : ["behavioral"] },
      { question :"Tell me about a time where you had to deal with conflict on the job.", tags : ["behavioral"] },
      { question :"If you were at a business lunch and you ordered a rare steak and they brought it to you well done, what would you do?", tags : ["behavioral"] },
      { question :"If you found out your company was doing something against the law, like fraud, what would you do?", tags : ["behavioral"] },
      { question :"What assignment was too difficult for you, and how did you resolve the issue?", tags : ["behavioral"] },
      { question :"What's the most difficult decision you've made in the last two years and how did you come to that decision?", tags : ["behavioral"] },
      { question :"Describe how you would handle a situation if you were required to finish multiple tasks by the end of the day, and there was no conceivable way that you could finish them.", tags : ["behavioral"] },
      { question :"What salary are you seeking?", tags : ["salary"] },
      { question :"What's your salary history?", tags : ["salary"] },
      { question :"If I were to give you this salary you requested, but let you write your job description for the next year, what would it say?", tags : ["salary"] },
      { question :"What are you looking for in terms of career development?", tags : ["career"] },
      { question :"How do you want to improve yourself in the next year?", tags : ["career"] },
      { question :"What kind of goals would you have in mind if you got this job?", tags : ["career"] },
      { question :"If I were to ask your last supervisor to provide you additional training or exposure, what would she suggest?", tags : ["career"] },
      { question :"How would you describe your work style?", tags : ["personal"] },
      { question :"What would be your ideal working environment?", tags : ["personal"] },
      { question :"What do you look for in terms of culture? structured or entrepreneurial?", tags : ["personal"] },
      { question :"Give examples of ideas you've had or implemented.", tags : ["personal"] },
      { question :"What techniques and tools do you use to keep yourself organized? ", tags : ["personal"] },
      { question :"If you had to choose one, would you consider yourself a big-picture person or a detail-oriented person?", tags : ["personal"] },
      { question :"Tell me about your proudest achievement.", tags : ["personal"] },
      { question :"Who was your favorite manager and why?", tags : ["personal"] },
      { question :"What do you think of your previous boss?", tags : ["personal"] },
      { question :"Was there a person in your career who really made a difference?", tags : ["personal"] },
      { question :"What kind of personality do you work best with and why?", tags : ["personal"] },
      { question :"What are you most proud of?", tags : ["personal"] },
      { question :"What do you like to do?", tags : ["personal"] },
      { question :"What are your lifelong dreams?", tags : ["personal"] },
      { question :"What do you ultimately want to become?", tags : ["personal"] },
      { question :"What is your personal mission statement? ", tags : ["personal"] },
      { question :"What are three positive things your last boss would say about you?", tags : ["personal"] },
      { question :"What negative thing would your last boss say about you?", tags : ["personal"] },
      { question :"What three character traits would your friends use to describe you?", tags : ["personal"] },
      { question :"What are three positive character traits you don't have?", tags : ["personal"] },
      { question :"If you were interviewing someone for this position, what traits would you look for?", tags : ["personal"] },
      { question :"List five words that describe your character. ", tags : ["personal"] },
      { question :"Who has impacted you most in your career and how?", tags : ["personal"] },
      { question :"What is your greatest fear?", tags : ["personal"] },
      { question :"What is your biggest regret and why? ", tags : ["personal"] },
      { question :"What's the most important thing you learned in school?", tags : ["personal"] },
      { question :"Why did you choose your major?", tags : ["personal"] },
      { question :"What will you miss about your present/last job?", tags : ["personal"] },
      { question :"What is your greatest achievement outside of work?", tags : ["personal"] },
      { question :"What are the qualities of a good leader? A bad leader?", tags : ["personal"] },
      { question :"Do you think a leader should be feared or liked?   ", tags : ["personal"] },
      { question :"How do you feel about taking no for an answer?", tags : ["personal"] },
      { question :"How would you feel about working for someone who knows less than you?", tags : ["personal"] },
      { question :"How do you think I rate as an interviewer?", tags : ["personal"] },
      { question :"Tell me one thing about yourself you wouldn't want me to know.", tags : ["personal"] },
      { question :"Tell me the difference between good and exceptional.", tags : ["personal"] },
      { question :"What kind of car do you drive?", tags : ["personal"] },
      { question :"If you could be anywhere in the world right now, where would you be?", tags : ["personal"] },
      { question :"What's the last book you read?", tags : ["personal"] },
      { question :"What magazines do you subscribe to?", tags : ["personal"] },
      { question :"What's the best movie you've seen in the last year?", tags : ["personal"] },
      { question :"What would you do if you won the lottery?", tags : ["personal"] },
      { question :"Who are your heroes?", tags : ["personal"] },
      { question :"What do you like to do for fun?", tags : ["personal"] },
      { question :"What do you do in your spare time?", tags : ["personal"] },
      { question :"What is your favorite memory from childhood?", tags : ["personal"] },
      { question :"Who was your most difficult customer?", tags : ["general","amazon"] },
      { question :"How would you introduce AWS in an elevator pitch?", tags : ["general","amazon"] },
      { question :"What is the worst mistake you ever made?", tags : ["general","amazon"] },
      { question :"If your direct manager was instructing you to do something you disagreed with, how would you handle it?", tags : ["general","amazon"] },
      { question :"Describe what Human Resource means to you.", tags : ["general","amazon"] },
      { question :"What is the angle between the hour hand and minute hand in an analog clock?", tags : ["technical","amazon"] },
      { question :"How do you detect whether or not a word is a palindrome?", tags : ["technical","amazon"] },
      { question :"Do you know our CEO? How do you pronounce his name?", tags : ["general","amazon"] },
      { question :"Here's a string with numbers from 1-250 in random order, but it's missing one number. How will you find the missed number?", tags : ["technical","amazon"] },
      { question :"Are you willing to work on your feet for ten hours, four days a week?", tags : ["general","amazon"] },
      { question :"What is your favourite programming language?", tags : ["technical"] },
      { question :"What is your work style?", tags : ["general"] },
      { question :"What are your career goals?", tags : ["career"] },
      { question :"Can you describe an environment or scenario where you would not thrive instantly?", tags : ["behavioral"] },
      { question :"How would you implement bubble sort?", tags : ["technical"] },
      { question :"How would you implement selection sort?", tags : ["technical"] },
      { question :"How would you implement insertion sort?", tags : ["technical"] },
      { question :"How would you implement merge sort?", tags : ["technical"] },
      { question :"How would you implement quick sort?", tags : ["technical"] },
      { question :"You have two very large numbers that cannot be stored in any available datatypes. How would you multiply them?", tags : ["technical","microsoft"] },
      { question :"How will you implement a dictionary?", tags : ["technical","microsoft"] },
      { question :"Given a matrix which is spirally sorted. Remove an element and insert another element maintaining the sorted order.", tags : ["technical","microsoft"] },
      { question :"How would you find if there is a cycle in a directed graph?", tags : ["technical","microsoft"] },
      { question :"How would you implementa method that converts a binary search tree into a sorted double-linked list without creating any new nodes?", tags : ["technical","microsoft"] },
      { question :"What salary range would you require to take this job?", tags : ["salary"] },
      { question :"Would you consider taking less pay than you made in your last job?", tags : ["salary"] }
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
        +", sessionId=" + session.sessionId);

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
var AMZN_APP_ID = "amzn1.ask.skill.c9ab158b-cffe-4466-8936-d590e08a45de";

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        question = getQuestion(),
        speechOutput = "I will ask you an interview question. Take some time to think about it"
          + "and then answer, preferably in front of a mirror. Here we go. ",
        repromptText = "",
        shouldEndSession = false;

    //If question exists, append it to welcome, otherwise end session with message
    if(question){
      speechOutput += question;
    }else{
      speechOutput = "I'm sorry, I am don't currently have any questions to ask. Good bye!";
      shouldEndSession = true;
    }

    //repromptText = speechOutput;

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
@return string random question from filtered list. Returns null if none exist
*/
function getQuestion(tags){
  var filteredQuestions;

  // only filter question list if specified
  if(typeof tags !== 'undefined'){
    filteredQuestions = getQuestionsByTags(tags);
  }else{
    filteredQuestions = questions;
  }

  // if any questions exist, return random one
  if(filteredQuestions.length > 0){
    var randIndex = Math.floor(Math.random() * filteredQuestions.length);
    return filteredQuestions[randIndex].question;
  }else{
    return null;
  }
}

/**
Get a list of questions from the list by filtering down by tags.
@param Array<string> tags Tags with which to filter down question List
@return Array<string> questions from filtered list.
*/
function getQuestionsByTags(tags){
  var i, j, contains;
  var arr = new Array();

  for (i = 0; i < questions.length; i++){
    contains = true;
    for (j = 0; j < tags.length; j++){
      if(questions[i].tags.indexOf(tags[j]) === -1){
        contains = false;
        //break;
      }
    }

    if(contains){
      arr.push(questions[i]);
    }

  }

  return arr;
}

function handleNumberOfQuestionsRequest(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        numQuestions;

    // User specified type and company
    if(intent.slots && intent.slots.QuestionType && intent.slots.QuestionType.value
          && intent.slots.CompanyName && intent.slots.CompanyName.value){
      numQuestions = getQuestionsByTags([intent.slots.QuestionType.value.toLowerCase(), intent.slots.CompanyName.value.toLowerCase()]).length;
    }else if(intent.slots && intent.slots.QuestionType && intent.slots.QuestionType.value){ // User specified type
      numQuestions = getQuestionsByTags([intent.slots.QuestionType.value.toLowerCase()]).length;
    }else if(intent.slots && intent.slots.CompanyName && intent.slots.CompanyName.value){ // User specified company
      numQuestions = getQuestionsByTags([intent.slots.CompanyName.value.toLowerCase()]).length;
    }else{ // if user asked a simple question
      numQuestions = questions.length;
    }

    if (numQuestions === 1){
      speechOutput = "I have " + numQuestions + " question like that.";
    } else if(numQuestions > 1){
      speechOutput = "I have " + numQuestions + " questions like that.";
    }else{
      speechOutput = RESPONSE_NO_QUESTIONS;
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
      question = getQuestion([intent.slots.QuestionType.value.toLowerCase(), intent.slots.CompanyName.value.toLowerCase()]);
    }else if(intent.slots && intent.slots.QuestionType && intent.slots.QuestionType.value){ // User specified type
      question = getQuestion([intent.slots.QuestionType.value.toLowerCase()]);
    }else if(intent.slots && intent.slots.CompanyName && intent.slots.CompanyName.value){ // User specified company
      question = getQuestion([intent.slots.CompanyName.value.toLowerCase()]);
    }else{ // if user asked a simple question
      question = getQuestion();
    }

    if(question){
      speechOutput = question;
    }else{
      speechOutput = RESPONSE_NO_QUESTIONS;
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, true));
}

function handleQuestionTypeRequest(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput = "You can ask for 'general', 'technical', 'salary', 'behavioral', "
            + "'career', and 'personal' questions. If you don't specify a type, I will pick one at random.",
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
        speechOutput = "You can ask for questions from 'Amazon', 'Microsoft', or 'Google'. "
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
