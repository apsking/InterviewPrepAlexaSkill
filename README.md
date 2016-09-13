# Interview Prep Alexa Skill
This Amazon Echo Alexa skill is your best way to prepare yourself for interviewing for all kinds of roles. Interview Prep has hundreds of questions for a variety of different job types and areas of work. For best results, ask Interview Prep a few questions every day to prepare your answers. Consider answering directly into a mirror and focusing not only on your answer, but also your body language!

##Setup (*not yet available in the Alexa Skills*)
You can add this skill to your Amazon Echo device in two ways:
* Ask Alexa to install the skill for you: "Alexa, add the Interview Prep skill."
* Navigate to the Alexa Skills page in your Alexa App and add the Interview Prep skill

##Examples
### Basic Question
```
User: "Alexa, Ask Interview Prep for a question"
Alexa: "How would you go about establishing your credibility quickly with the team?"
```
```
User: "Alexa, Tell Interview Prep to give me an interview question"
Alexa: "Tell me about a time when you had to give someone difficult feedback. How did you handle it?"
```
### Type-of-Interview Question
```
User: "Alexa, Ask Interview Prep for a technical question"
Alexa: "How would you implement bubble sort?"
```
```
User: "Alexa, Tell Interview Prep to give me a salary question"
Alexa: "What salary range would you require to take this job?"
```
### Company-specific Question
```
User: "Alexa, Ask Interview Prep for a question from Amazon"
Alexa: "How would you introduce AWS in an elevator pitch?"
```
### Type- and Company-specific Question
```
User: "Alexa, Ask Interview Prep for a technical question from Microsoft"
Alexa: "How would you find if there is a cycle in a directed graph?"
```
### Help
```
User: "Alexa, Ask Interview Prep for help."
Alexa: "You can say, 'Ask Interview Prep for a question.' You can also specify a type of question,
        or a question for a specific company, like this, 'Ask Interview Prep for a technical
        question from Amazon.'"
```
```
User: "Alexa, Ask Interview Prep how many technical questions you have."
Alexa: "I have 18 questions like that."
```
```
User: "Alexa, Ask Interview Prep what types of questions you have."
Alexa: "You can ask for 'general', 'technical', 'salary', 'behavioral', 'career', and 'personal'
        questions. If you don't specify a type, I will pick one at random."
```
```
User: "Alexa, Ask Interview Prep what companies you have questions for."
Alexa: "You can ask for questions from 'Amazon', 'Microsoft', or 'Google'. If you don't specify a
        company, I will pick one at random."
```
## Submit Interview Questions
Have any interview questions that you want included in the Alexa Skill? To submit more interview questions for the skill, submit a pull request, modifying the [`questions`](../master/src/index.js) array to include your new question. Be sure to include the following:
* Interview question
* Type of question (see [`slotQuestionType.txt`](../master/speechAssets/slotQuestionType.txt) for all types)
* Company which the question relates to (optional)
* Source of the question

If your question is approved, your name will be added to the Contributions section, below (Unless, of course, you would rather be anonymous!).

## Future Ideas
* Improve cards to contain links to question source
* Add questions and improve question tagging
* Include Brain teasers
* Include interview tips
* Offer suggested responses to questions
* Repeat question when users asks

## Contributions
*Currently, no external contributions have been made.*
