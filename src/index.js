/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
 var questions = [
   /* General Questions */
   { question : "Tell me about yourself.", type : "general", company : null },
   { question : "What are your strengths?", type : "general", company : null },
   { question : "What are your weaknesses?", type : "general", company : null },
   { question : "Why do you want this job?", type : "general", company : null },
   { question : "Where would you like to be in your career five years from now?", type : "general", company : null },
   { question : "What's your ideal company?", type : "general", company : null },
   { question : "What attracted you to this company?", type : "general", company : null },
   { question : "Why should we hire you?", type : "general", company : null },
   { question : "What did you like least about your last job?", type : "general", company : null },
   { question : "When were you most satisfied in your job?", type : "general", company : null },
   { question : "What can you do for us that other candidates can't? ", type : "general", company : null },
   { question : "What were the responsibilities of your last position?  ", type : "general", company : null },
   { question : "Why are you leaving your present job?", type : "general", company : null },
   { question : "What do you know about this industry?  ", type : "general", company : null },
   { question : "What do you know about our company? ", type : "general", company : null },
   { question : "Are you willing to relocate?  ", type : "general", company : null },
   { question : "How would you go about establishing your credibility quickly with the team?", type : "general", company : null },
   { question : "How long will it take for you to make a significant contribution?", type : "general", company : null },
   { question : "What do you see yourself doing within the first 30 days of this job?", type : "general", company : null },
   { question : "If selected for this position, can you describe your strategy for the first 90 days?", type : "general", company : null },

   /* General Questions */
   { question : "Do you have any questions for me?", type : "behavioral", company : null },
   { question : "What was the last project you led, and what was its outcome? ", type : "behavioral", company : null },
   { question : "Give me an example of a time that you felt you went above and beyond the call of duty at work. ", type : "behavioral", company : null },
   { question : "Can you describe a time when your work was criticized? ", type : "behavioral", company : null },
   { question : "Have you ever been on a team where someone was not pulling their own weight? How did you handle it? ", type : "behavioral", company : null },
   { question : "Tell me about a time when you had to give someone difficult feedback. How did you handle it? ", type : "behavioral", company : null },
   { question : "What is your greatest failure, and what did you learn from it? ", type : "behavioral", company : null },
   { question : "How do you handle working with people who annoy you? ", type : "behavioral", company : null },
   { question : "If I were your supervisor and asked you to do something that you disagreed with, what would you do?", type : "behavioral", company : null },
   { question : "What was the most difficult period in your life, and how did you deal with it? ", type : "behavioral", company : null },
   { question : "Give me an example of a time you did something wrong. How did you handle it? ", type : "behavioral", company : null },
   { question : "Tell me about a time where you had to deal with conflict on the job. ", type : "behavioral", company : null },
   { question : "If you were at a business lunch and you ordered a rare steak and they brought it to you well done, what would you do? ", type : "behavioral", company : null },
   { question : "If you found out your company was doing something against the law, like fraud, what would you do? ", type : "behavioral", company : null },
   { question : "What assignment was too difficult for you, and how did you resolve the issue? ", type : "behavioral", company : null },
   { question : "What's the most difficult decision you've made in the last two years and how did you come to that decision?", type : "behavioral", company : null },
   { question : "Describe how you would handle a situation if you were required to finish multiple tasks by the end of the day, and there was no conceivable way that you could finish them. ", type : "behavioral", company : null },
   { question : "What salary are you seeking?", type : "salary", company : null },
   { question : "What's your salary history?", type : "salary", company : null },
   { question : "If I were to give you this salary you requested but let you write your job description for the next year, what would it say?", type : "salary", company : null },
   { question : "What are you looking for in terms of career development? ", type : "career", company : null },
   { question : "How do you want to improve yourself in the next year?", type : "career", company : null },
   { question : "What kind of goals would you have in mind if you got this job? ", type : "career", company : null },
   { question : "If I were to ask your last supervisor to provide you additional training or exposure, what would she suggest?", type : "career", company : null },
   { question : "How would you describe your work style? ", type : "personal", company : null },
   { question : "What would be your ideal working environment? ", type : "personal", company : null },
   { question : "What do you look for in terms of culture -- structured or entrepreneurial? ", type : "personal", company : null },
   { question : "Give examples of ideas you've had or implemented.", type : "personal", company : null },
   { question : "What techniques and tools do you use to keep yourself organized?   ", type : "personal", company : null },
   { question : "If you had to choose one, would you consider yourself a big-picture person or a detail-oriented person?  ", type : "personal", company : null },
   { question : "Tell me about your proudest achievement.  ", type : "personal", company : null },
   { question : "Who was your favorite manager and why?  ", type : "personal", company : null },
   { question : "What do you think of your previous boss? ", type : "personal", company : null },
   { question : "Was there a person in your career who really made a difference? ", type : "personal", company : null },
   { question : "What kind of personality do you work best with and why?  ", type : "personal", company : null },
   { question : "What are you most proud of? ", type : "personal", company : null },
   { question : "What do you like to do?  ", type : "personal", company : null },
   { question : "What are your lifelong dreams?  ", type : "personal", company : null },
   { question : "What do you ultimately want to become? ", type : "personal", company : null },
   { question : "What is your personal mission statement?   ", type : "personal", company : null },
   { question : "What are three positive things your last boss would say about you?  ", type : "personal", company : null },
   { question : "What negative thing would your last boss say about you? ", type : "personal", company : null },
   { question : "What three character traits would your friends use to describe you? ", type : "personal", company : null },
   { question : "What are three positive character traits you don't have?  ", type : "personal", company : null },
   { question : "If you were interviewing someone for this position, what traits would you look for?  ", type : "personal", company : null },
   { question : "List five words that describe your character.   ", type : "personal", company : null },
   { question : "Who has impacted you most in your career and how? ", type : "personal", company : null },
   { question : "What is your greatest fear? ", type : "personal", company : null },
   { question : "What is your biggest regret and why?   ", type : "personal", company : null },
   { question : "What's the most important thing you learned in school? ", type : "personal", company : null },
   { question : "Why did you choose your major?  ", type : "personal", company : null },
   { question : "What will you miss about your present/last job?  ", type : "personal", company : null },
   { question : "What is your greatest achievement outside of work?  ", type : "personal", company : null },
   { question : "What are the qualities of a good leader? A bad leader?  ", type : "personal", company : null },
   { question : "Do you think a leader should be feared or liked?     ", type : "personal", company : null },
   { question : "How do you feel about taking no for an answer?  ", type : "personal", company : null },
   { question : "How would you feel about working for someone who knows less than you? ", type : "personal", company : null },
   { question : "How do you think I rate as an interviewer? ", type : "personal", company : null },
   { question : "Tell me one thing about yourself you wouldn't want me to know.  ", type : "personal", company : null },
   { question : "Tell me the difference between good and exceptional.  ", type : "personal", company : null },
   { question : "What kind of car do you drive? ", type : "personal", company : null },
   { question : "There's no right or wrong answer, but if you could be anywhere in the world right now, where would you be? ", type : "personal", company : null },
   { question : "What's the last book you read?  ", type : "personal", company : null },
   { question : "What magazines do you subscribe to? ", type : "personal", company : null },
   { question : "What's the best movie you've seen in the last year?  ", type : "personal", company : null },
   { question : "What would you do if you won the lottery? ", type : "personal", company : null },
   { question : "Who are your heroes?", type : "personal", company : null },
   { question : "What do you like to do for fun? ", type : "personal", company : null },
   { question : "What do you do in your spare time? ", type : "personal", company : null },
   { question : "What is your favorite memory from childhood? ", type : "personal", company : null },
   { question : "How would you introduce AWS in an elevator pitch?", type : "general", company : "amazon" },
   { question : "What is the worst mistake you ever made?", type : "general", company : "amazon" },
   { question : "If your direct manager was instructing you to do something you disagreed with, how would you handle it?", type : "general", company : "amazon" },
   { question : "Describe what Human Resource means to you.", type : "general", company : "amazon" },
   { question : "What is the angle between the hour hand and minute hand in an analog clock?", type : "technical", company : "amazon" },
   { question : "How do you detect whether or not a word is a palindrome?", type : "technical", company : "amazon" },
   { question : "Do you know our CEO? How do you pronounce his name?", type : "general", company : "amazon" },
   { question : "Here's a string with numbers from 1-250 in random order, but it's missing one number. How will you find the missed number?", type : "technical", company : "amazon" },
   { question : "Are you willing to work on your feet for ten hours, four days a week?", type : "general", company : "amazon" }

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

        

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
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
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("SimpleQuestionIntent" === intentName) {
        handleQuestionRequest(intent, session, callback);
    } else if ("QuestionIntent" === intentName) {
        handleQuestionRequest(intent, session, callback);
    } else if ("CompanyQuestionIntent" === intentName) {
        handleQuestionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var CARD_TITLE = "Interview Prep"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "I will ask you an interview question. Take some time to think about it "
          + "and then answer, preferably in front of a mirror.",
        repromptText = speechOutput,
        shouldEndSession = false;

    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function getGeneralQuestion(){
  var randIndex = Math.floor(Math.random() * questions.length);
  return questions[randIndex].question;
}

function getTypeQuestion(type){
  var filteredQuestions = getQuestionsByType(type);
  if(filteredQuestions.length > 0){
    var randIndex = Math.floor(Math.random() * filteredQuestions.length);
    return filteredQuestions[randIndex].question;
  }else{
    return null;
  }
}

function getCompanyQuestion(company){
  var filteredQuestions = getQuestionsByCompany(company);
  if(filteredQuestions.length > 0){
    var randIndex = Math.floor(Math.random() * filteredQuestions.length);
    return filteredQuestions[randIndex].question;
  }else{
    return null;
  }
}

/* Filter questions by specified type*/
function getQuestionsByType(type){
   var i;
   var arr = new Array();
   for (i = 0; i < questions.length; i++){
     if(questions[i].type === type){
       arr.push(questions[i]);
     }
   }

   return arr;
 }

 /* Filter questions by specified type*/
function getQuestionsByCompany(company){
  var i;
  var arr = new Array();
  for (i = 0; i < questions.length; i++){
    if(questions[i].company === company){
      arr.push(questions[i]);
    }
  }

  return arr;
}

function handleQuestionRequest(intent, session, callback) {
    var sessionAttributes = {},
    speechOutput,
    repromptText,
    question;

    // User specified question type
    if(intent.slots && intent.slots.QuestionType && intent.slots.QuestionType.value){
      question = getTypeQuestion(intent.slots.QuestionType.value);
      if(question){
        speechOutput = question;
        repromptText = speechOutput;
      }else{
        speechOutput = "I don't have any questions like that."
      }
    }else if(intent.slots && intent.slots.CompanyName && intent.slots.CompanyName.value){
      question = getCompanyQuestion(intent.slots.CompanyName.value);
      if(question){
        speechOutput = question;
        repromptText = speechOutput;
      }else{
        speechOutput = "I don't have any questions like that."
      }
      // if user asked a simple question
    }else{
      question = getGeneralQuestion();
      speechOutput = question;
      repromptText = speechOutput;
    }

    callback(sessionAttributes,
                 buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
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

    var speechOutput = "Ask Interview Prep for a question. You can say, 'Ask Interview Prep for an interview question.' ",
        repromptText = speechOutput,
        shouldEndSession = false;

    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
