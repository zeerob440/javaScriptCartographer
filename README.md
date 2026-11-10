# SOFTWARE DOCUMENTATION
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

javaScriptCartographer is a website that teaches how to use JavaScript by simple example

### 1B INSTALLATION MANUAL
- LIST REQUIREMENTS FOR INSTALLATION
- EXPLAIN HOW TO INSTALL
- USE ANNOTATION SCREEN SHOTS

### 1C INTRODUCTORY MANUAL

- EXPLAIN HOW TO USE SYSTEM IN SIMPLE TERMS
- USE ANNOTATED SCREEN SHOTS

### 1D REFERENCE MANUAL
- DESCRIBE ALL SYSTEM FACULTIES TO USER AND HOW TO USE THEM


### 1E SYSTEM ADMINISTRATORS MANUAL

- DESCRIBE SYSTEM HOUSEKEEPING TASKS
- DESCRIBE SYSTEM MAINTENANCE PROCEDURES
- IF ADMIN NOT REQUIRED
NOT APPLICABLE. SYSTEM GOVERNANCE IS DEFINED BY ADMINISTRATOR'S ORGANIZATION BUSINESS RULES.

## 2 SYSTEM DOCUMENTATION

### 2A SYSTEM DEPENDENCIES MANUAL
 - LIST DEPENDENCIES 

### 2B SYSTEM ARCHITECTURE MANUAL

#### DESCRIPTION
Plain text description here.

#### DIRECTORY ARCHITECTURE

```text
example_project_name/
├── README.md
├── docs/
│   ├── installation_manual.md
│   ├── user_manual.md
│   └── system_manual.md
├── src/
│   ├── main.py
│   └── utilities.py
└── tests/
    └── test_main.py
```

### 2C SYSTEM DECOMPOSITION MANUAL

| PROGRAM       | PURPOSE              | FUNCTIONS                | CLASSES      | LIBRARIES             |
|:-------------|:---------------------|:--------------------------|:------------|:----------------------|
|example.py|Provides examples for documentation.| examples(num), lookup()| Examples, Nav| hashlib, math|

#### UNIT DESCRIPTION MANUAL

|UNIT|FUNCTIONAL DESCRIPTION                                                                                                  |
|:-------------|:-------------------------------------------------------------------------------------------------------------|
|example(num)|example(num) takes and integer argument and returns an example.|

### 2D REQUIREMENTS SPECIFICATION & TEST MANUAL

|REQUIREMENT SPECIFICATION|TEST NAME|TEST SPECIFICATION                         |FUNCTIONS AS DESIGNED DATE|
|:------------------------|:--------|:------------------------------------------|:-------------------------|
|The system only accepts military time.| T1 MILTIME| Test all inputs for miltime with invalid entries.| 26 APR 1979|