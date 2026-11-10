# javaScriptCartographer
| FIELD          | VALUE                |
|:----------------:|:------------------:|
|SOFTWARE NAME  |  javaScriptCartographer                     |
|VERSION        |    Alpha                   |
|ENGINEER(S)    | Zachary Roberts                      |
|DATE INITIATED |    06 JAN 2026                  |
|DATE ACCEPTED  | DD MON YYYY           |
|LANGUAGE(S)    |    HTML/CSS/JavaScript                   |
|TARGET ENVIRONMENT|         Website          |
|DEVELOPMENT STATUS| REQUIREMENTS DESIGN (IMPLEMENTATION) TESTING MAINTENANCE|

## 1. USER DOCUMENTATION

### 1A FUNCTION DESCRIPTION MANUAL

javaScriptCartographer is a website that teaches how to use JavaScript by simple examples. The user simply navigates to pages that contain examples of JavaScript they would like to review.

### 1B INSTALLATION MANUAL
- N/A

### 1C INTRODUCTORY MANUAL

javaScriptCartographer is a website that teaches how to use JavaScript by simple examples. The user simply navigates to pages that contain examples of JavaScript they would like to review.

### 1D REFERENCE MANUAL

javaScriptCartographer is a series of webpages as follows:
- basics
- file management
- T-Literal
- Output
- Input
- Home

### 1E SYSTEM ADMINISTRATORS MANUAL

NOT APPLICABLE. SYSTEM GOVERNANCE IS DEFINED BY ADMINISTRATOR'S ORGANIZATION BUSINESS RULES.

## 2 SYSTEM DOCUMENTATION

### 2A SYSTEM DEPENDENCIES MANUAL
 - A computer with internet access

### 2B SYSTEM ARCHITECTURE MANUAL

#### DESCRIPTION
javaScriptCartographer is a website with hub and spoke architecture. Each lesson is a separate html page named index.html, each page lives in a uniquely named directory. This design was chosen because javaScriptCartographer is intended to be continuously developed as my skills in the language grows. This allows for new directories to be added over time as the project matures. Each directory is intended to contain all JavaScript programs that are featured on the html page inside. This allows the user to inspect the individual programs that can be executed on the page.

#### DIRECTORY ARCHITECTURE

```text
javaScriptCartographer/
├── README.md
├── index.html
├── terminalTwo.css
├── welcomeJSC.js
├── gitattributes
├── basics/
│   └── index.html
├── file-managment/
|   └── index.html
├── images/
│   └── # all media stored here
├── input/
|   ├── basicinput.js
|   └── index.html
├── output/
|   ├──insideBall.js
|   ├── alert.js
|   └── index.html
├──template-literal/
|  ├── tLiteral.js
|  └── index.html
```

### 2C SYSTEM DECOMPOSITION MANUAL

| PROGRAM       | PURPOSE              | FUNCTIONS                | CLASSES      | LIBRARIES             |
|:-------------|:---------------------|:--------------------------|:------------|:----------------------|
|basicinput.js|teaches basic JavaScript input methods| | | |
|insideBall.js|example of innerHTML output||||
|alert.js|example of popup||||
|tLiteral.js|example of how to use t-literal||||

#### UNIT DESCRIPTION MANUAL

|UNIT|FUNCTIONAL DESCRIPTION                                                                                                  |
|:-------------|:-------------------------------------------------------------------------------------------------------------|
|example(num)|example(num) takes and integer argument and returns an example.|

### 2D REQUIREMENTS SPECIFICATION & TEST MANUAL

|REQUIREMENT SPECIFICATION|TEST NAME|TEST SPECIFICATION                         |FUNCTIONS AS DESIGNED DATE|
|:------------------------|:--------|:------------------------------------------|:-------------------------|
|| | | 26 APR 1979|