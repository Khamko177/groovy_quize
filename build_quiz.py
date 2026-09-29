# -*- coding: utf-8 -*-
"""
Script to define 50 Groovy quiz questions, balance answer options across A, B, C, D,
and generate professional .docx files for both the Question paper and Answer Key.
"""

questions_data = [
    # EASY (1-15)
    {
        "id": 1,
        "difficulty": "Easy",
        "topic": "Groovy syntax and basic concepts",
        "question": "In Groovy, how are semicolons treated at the end of statements?",
        "correct": "Semicolons are optional at the end of a line, but required to separate multiple statements placed on the same line.",
        "distractors": [
            "Semicolons are strictly mandatory at the end of every statement, identical to Java.",
            "Semicolons are deprecated and will produce a compiler error if present.",
            "Semicolons are only permitted inside class definitions and loops."
        ],
        "explanation": "Groovy makes statement-terminating semicolons optional when each statement is placed on its own line. Semicolons are only required when writing multiple statements on a single line."
    },
    {
        "id": 2,
        "difficulty": "Easy",
        "topic": "Variables and data types",
        "question": "In Groovy, what is the default type assigned to an untyped floating-point literal such as `def val = 19.99`?",
        "correct": "java.math.BigDecimal",
        "distractors": [
            "java.lang.Double",
            "java.lang.Float",
            "groovy.lang.GNumber"
        ],
        "explanation": "To prevent floating-point precision loss common in financial calculations, Groovy defaults floating-point literals with decimal points to java.math.BigDecimal instead of double."
    },
    {
        "id": 3,
        "difficulty": "Easy",
        "topic": "Strings and GStrings",
        "question": "Which string delimiter in Groovy creates an interpolatable GString allowing expressions like `${name}`?",
        "correct": "Double quotes (\"...\") or triple double quotes (\"\"\"...\"\"\")",
        "distractors": [
            "Single quotes ('...') or triple single quotes ('''...''')",
            "Square brackets ([...]) or curly braces ({...})",
            "Backticks (`...`) or tilde quotes (~...~)"
        ],
        "explanation": "Only double-quoted strings (\"...\") and triple double-quoted strings (\"\"\"...\"\"\") support string interpolation (GStrings). Single-quoted strings produce plain, uninterpolated java.lang.String instances."
    },
    {
        "id": 4,
        "difficulty": "Easy",
        "topic": "== versus is()",
        "question": "What does the `==` operator compare in Groovy when neither operand is null?",
        "correct": "Object equality via equals(), or compareTo() == 0 if the object implements Comparable",
        "distractors": [
            "Object reference identity, identical to Java's == operator",
            "Memory addresses using identity hash codes",
            "Type compatibility and classloader hierarchy"
        ],
        "explanation": "In Groovy, `==` safely checks object equality by invoking Comparable.compareTo() if available or Object.equals(). It also handles null values safely without throwing NullPointerException. To check reference identity, Groovy provides the is() method."
    },
    {
        "id": 5,
        "difficulty": "Easy",
        "topic": "Lists, Sets, and Maps",
        "question": "What standard Java collection class is instantiated by default when using the list literal `def items = [1, 2, 3]`?",
        "correct": "java.util.ArrayList",
        "distractors": [
            "java.util.LinkedList",
            "java.util.Vector",
            "java.util.ArrayDeque"
        ],
        "explanation": "In Groovy, square brackets `[...]` without key-value pairs instantiate a java.util.ArrayList by default."
    },
    {
        "id": 6,
        "difficulty": "Easy",
        "topic": "Lists, Sets, and Maps",
        "question": "How do you declare an empty `java.util.Map` using Groovy's literal syntax?",
        "correct": "def map = [:]",
        "distractors": [
            "def map = []",
            "def map = {}",
            "def map = ()"
        ],
        "explanation": "In Groovy, `[:]` defines an empty Map (instantiating java.util.LinkedHashMap). `[]` creates an empty List, and `{}` creates a Closure."
    },
    {
        "id": 7,
        "difficulty": "Easy",
        "topic": "Null handling and the safe navigation operator",
        "question": "What is the result of evaluating `person?.address?.city` when `person` is null?",
        "correct": "It returns null without throwing a NullPointerException",
        "distractors": [
            "It throws a NullPointerException immediately",
            "It throws a MissingPropertyException",
            "It returns an empty string \"\""
        ],
        "explanation": "The safe navigation operator (`?.`) checks whether the target object on the left is null. If it is null, evaluation short-circuits and safely returns null instead of throwing NullPointerException."
    },
    {
        "id": 8,
        "difficulty": "Easy",
        "topic": "Operators",
        "question": "What will the following Groovy snippet output?\n\ndef username = \"\"\ndef display = username ?: \"Anonymous\"\nprintln display",
        "correct": "Anonymous",
        "distractors": [
            "\"\" (an empty string)",
            "null",
            "A compilation error"
        ],
        "explanation": "The Elvis operator (`?:`) checks the Groovy Truth of the left-hand expression. An empty string evaluates to false under Groovy Truth, so the operator falls back to the default value \"Anonymous\"."
    },
    {
        "id": 9,
        "difficulty": "Easy",
        "topic": "Ranges",
        "question": "What are the exact elements generated by the range expression `1..<5` in Groovy?",
        "correct": "[1, 2, 3, 4]",
        "distractors": [
            "[1, 2, 3, 4, 5]",
            "[2, 3, 4, 5]",
            "[2, 3, 4]"
        ],
        "explanation": "The `..<` operator creates a half-open range that includes the lower bound but excludes the upper bound. Therefore, `1..<5` produces [1, 2, 3, 4]."
    },
    {
        "id": 10,
        "difficulty": "Easy",
        "topic": "Closures",
        "question": "When a Groovy closure does not declare any explicit parameters, what is the default name of the single argument passed to it?",
        "correct": "it",
        "distractors": [
            "self",
            "this",
            "arg"
        ],
        "explanation": "Groovy automatically provides an implicit parameter named `it` for any closure that does not define an explicit parameter list using the `->` syntax."
    },
    {
        "id": 11,
        "difficulty": "Easy",
        "topic": "Methods and parameters",
        "question": "What does the following Groovy method return when invoked as `calculate(3, 7)`?\n\ndef calculate(int a, int b) {\n    int sum = a + b\n    sum\n}",
        "correct": "10",
        "distractors": [
            "null",
            "0",
            "A compilation error because the return keyword is missing"
        ],
        "explanation": "In Groovy, the `return` keyword is optional. If omitted, the method automatically returns the value of the last evaluated expression in the method body."
    },
    {
        "id": 12,
        "difficulty": "Easy",
        "topic": "Exception handling",
        "question": "How does the Groovy compiler handle Java checked exceptions such as `java.io.IOException`?",
        "correct": "Groovy does not force developers to catch checked exceptions or declare them with a throws clause",
        "distractors": [
            "Groovy requires checked exceptions to be caught or declared, exactly like Java",
            "Groovy converts all checked exceptions into java.lang.Error at compile time",
            "Groovy silently swallows all checked exceptions so they never propagate"
        ],
        "explanation": "Groovy eliminates the distinction between checked and unchecked exceptions at the compiler level. You are free to catch checked exceptions if needed, but the compiler never forces a try-catch block or a throws clause."
    },
    {
        "id": 13,
        "difficulty": "Easy",
        "topic": "File handling",
        "question": "Which Groovy convenience property can be called on a `java.io.File` object to read the entire file content as a `String`?",
        "correct": "file.text",
        "distractors": [
            "file.content",
            "file.lines",
            "file.readAll()"
        ],
        "explanation": "Groovy decorates `java.io.File` with the `getText()` extension method (via GDK), allowing developers to access the entire file content using the property syntax `file.text`."
    },
    {
        "id": 14,
        "difficulty": "Easy",
        "topic": "Dynamic typing and def",
        "question": "What does the `def` keyword indicate when declaring a variable in Groovy?",
        "correct": "It declares a dynamically typed variable whose type is treated as java.lang.Object at compile time",
        "distractors": [
            "It defines an immutable constant value that cannot be modified",
            "It restricts the variable to primitive types only",
            "It defines a private class field accessible only through reflection"
        ],
        "explanation": "In Groovy, `def` acts as a placeholder for untyped declarations. For variables, it indicates dynamic typing (declared as Object under the hood), allowing reassignment to any type at runtime."
    },
    {
        "id": 15,
        "difficulty": "Easy",
        "topic": "Classes and objects",
        "question": "In a Groovy class, what is generated automatically when you declare a field without any access modifier, such as `String title`?",
        "correct": "A private field with auto-generated public getter and setter methods (a Groovy property)",
        "distractors": [
            "A package-private field without any getter or setter methods",
            "A public field directly exposed to external callers without encapsulation",
            "A read-only final property with only a getter method"
        ],
        "explanation": "In Groovy, declaring a field without an access modifier creates a property. Groovy automatically generates a private field and public `getTitle()` / `setTitle()` methods behind the scenes."
    },

    # INTERMEDIATE (16-35)
    {
        "id": 16,
        "difficulty": "Intermediate",
        "topic": "Operators",
        "question": "What is the return value of the spaceship operator expression `12 <=> 20`?",
        "correct": "-1",
        "distractors": [
            "1",
            "0",
            "false"
        ],
        "explanation": "The spaceship operator (`<=>`) calls `compareTo()`. Since 12 is less than 20, `12.compareTo(20)` returns -1."
    },
    {
        "id": 17,
        "difficulty": "Intermediate",
        "topic": "Groovy-specific features and idioms",
        "question": "Which of the following evaluates to `false` in a Groovy boolean test (Groovy Truth)?",
        "correct": "[:] (an empty Map)",
        "distractors": [
            "[0] (a List containing the integer 0)",
            "\" \" (a String consisting of a single space)",
            "new Object()"
        ],
        "explanation": "Under Groovy Truth: empty collections and maps evaluate to false, empty strings evaluate to false, and the number 0 evaluates to false. However, `[0]` is a non-empty list (true), `\" \"` is a non-empty string with length 1 (true), and non-null objects evaluate to true."
    },
    {
        "id": 18,
        "difficulty": "Intermediate",
        "topic": "Groovy collections and common methods",
        "question": "What does the `collect` method return when executed on a list in Groovy?\n\ndef words = ['grape', 'fig']\ndef result = words.collect { it.toUpperCase() }",
        "correct": "A new List containing ['GRAPE', 'FIG']",
        "distractors": [
            "A single concatenated String 'GRAPEFIG'",
            "The original list mutated in place to ['GRAPE', 'FIG']",
            "A Set containing ['GRAPE', 'FIG']"
        ],
        "explanation": "The `collect` method iterates over a collection, applies the given closure transformation to each element, and returns a new List containing the transformed results without modifying the original collection."
    },
    {
        "id": 19,
        "difficulty": "Intermediate",
        "topic": "Groovy collections and common methods",
        "question": "What is the output of the following Groovy code?\n\ndef numbers = [10, 15, 20, 25, 30]\nprintln numbers.find { it > 18 }",
        "correct": "20",
        "distractors": [
            "[20, 25, 30]",
            "true",
            "30"
        ],
        "explanation": "The `find` method returns the first element that satisfies the closure predicate. Here, 20 is the first element greater than 18. (To get all matching elements, `findAll` is used)."
    },
    {
        "id": 20,
        "difficulty": "Intermediate",
        "topic": "Groovy collections and common methods",
        "question": "What is the result of evaluating the following expression?\n\n[1, 2, 3, 4].inject(10) { acc, val -> acc + val }",
        "correct": "20",
        "distractors": [
            "10",
            "24",
            "[10, 11, 13, 16, 20]"
        ],
        "explanation": "The `inject` method performs a reduction/fold with an initial accumulator value (10): 10 + 1 = 11; 11 + 2 = 13; 13 + 3 = 16; 16 + 4 = 20."
    },
    {
        "id": 21,
        "difficulty": "Intermediate",
        "topic": "Operators",
        "question": "What is the output of the spread-dot operator expression in the following code?\n\ndef names = ['Groovy', 'Java', 'Kotlin']\nprintln names*.length()",
        "correct": "[6, 4, 6]",
        "distractors": [
            "16",
            "6",
            "A MissingMethodException"
        ],
        "explanation": "The spread-dot operator (`*.`) invokes the specified method on each element of the collection and returns the aggregated results as a new List: [6, 4, 6]."
    },
    {
        "id": 22,
        "difficulty": "Intermediate",
        "topic": "Regular expressions",
        "question": "In Groovy regular expressions, what is the key difference between the `=~` operator and the `==~` operator?",
        "correct": "=~ returns a java.util.regex.Matcher (find operator), while ==~ returns a boolean indicating an exact whole-string match",
        "distractors": [
            "=~ compiles a Pattern object, while ==~ executes a replacement",
            "=~ performs case-sensitive matching, while ==~ performs case-insensitive matching",
            "=~ returns a boolean, while ==~ returns a Matcher"
        ],
        "explanation": "`=~` is the regex find operator that creates and returns a `java.util.regex.Matcher`. `==~` is the exact match operator that verifies if the entire string matches the pattern and returns a `boolean`."
    },
    {
        "id": 23,
        "difficulty": "Intermediate",
        "topic": "Strings and GStrings",
        "question": "What is the output of the following Groovy code?\n\ndef version = '3.0'\ndef text = \"Current version: ${-> version}\"\nversion = '4.0'\nprintln text",
        "correct": "Current version: 4.0",
        "distractors": [
            "Current version: 3.0",
            "Current version: null",
            "A NullPointerException"
        ],
        "explanation": "Passing a parameterless closure `${-> expression}` inside a GString defers evaluation lazily. The closure is evaluated each time the GString is transformed into a String, picking up the updated value '4.0'."
    },
    {
        "id": 24,
        "difficulty": "Intermediate",
        "topic": "Lists, Sets, and Maps",
        "question": "Given the list `def list = ['alpha', 'beta', 'gamma', 'delta']`, what does `list[-1]` evaluate to?",
        "correct": "'delta'",
        "distractors": [
            "'alpha'",
            "null",
            "An IndexOutOfBoundsException"
        ],
        "explanation": "Groovy supports negative index subscripts on lists, where negative indices count backwards from the end of the collection. Index -1 refers to the last element ('delta')."
    },
    {
        "id": 25,
        "difficulty": "Intermediate",
        "topic": "Methods and parameters",
        "question": "When defining a Groovy method that accepts named arguments such as `connect(host: 'localhost', port: 8080)`, how must the method be declared?",
        "correct": "The method's first parameter must be of type java.util.Map",
        "distractors": [
            "The method must be annotated with @NamedArguments",
            "The method parameters must use varargs syntax (Object... args)",
            "The method must accept an array of String key-value pairs"
        ],
        "explanation": "Groovy automatically bundles all named arguments into a `Map` and passes it as the first argument to the method. Therefore, the method signature must declare a `Map` as its first parameter."
    },
    {
        "id": 26,
        "difficulty": "Intermediate",
        "topic": "Classes and objects",
        "question": "Consider the following code:\n\nclass User {\n    String name\n    int age\n}\ndef u = new User(name: 'Charlie', age: 28)\n\nHow does Groovy initialize the `User` object?",
        "correct": "It invokes the default no-arg constructor and then calls setName('Charlie') and setAge(28)",
        "distractors": [
            "It requires an explicitly defined constructor accepting a java.util.Map",
            "It accesses and assigns the private fields directly, bypassing all setters",
            "It dynamically converts the User class into an Expando instance"
        ],
        "explanation": "Unless an explicit constructor is defined, Groovy provides a map-based constructor that creates an instance via the no-arg constructor and then calls each matching property setter."
    },
    {
        "id": 27,
        "difficulty": "Intermediate",
        "topic": "Traits",
        "question": "Which keyword is used in Groovy by a class to implement and compose behavior from one or more traits?",
        "correct": "implements",
        "distractors": [
            "extends",
            "traits",
            "mixin"
        ],
        "explanation": "In Groovy, traits are declared with the `trait` keyword and implemented by classes using the standard `implements` keyword (e.g. `class Robot implements Flying, Speaking`)."
    },
    {
        "id": 28,
        "difficulty": "Intermediate",
        "topic": "Traits",
        "question": "What is printed by the following code when two implemented traits define the same default method?\n\ntrait TraitA { String greet() { \"Hello from A\" } }\ntrait TraitB { String greet() { \"Hello from B\" } }\nclass Greeting implements TraitA, TraitB {}\nprintln new Greeting().greet()",
        "correct": "Hello from B",
        "distractors": [
            "Hello from A",
            "A compilation error due to duplicate method signatures",
            "An AmbiguousMethodException at runtime"
        ],
        "explanation": "In Groovy trait composition, if a class does not explicitly override a conflicting method, the last trait declared in the `implements` clause takes precedence. Here, TraitB comes after TraitA, so TraitB wins."
    },
    {
        "id": 29,
        "difficulty": "Intermediate",
        "topic": "== versus is()",
        "question": "What is the idiomatic way in Groovy to test whether two object references `obj1` and `obj2` refer to the exact same instance in memory?",
        "correct": "obj1.is(obj2)",
        "distractors": [
            "obj1 === obj2",
            "obj1 == obj2",
            "obj1.identical(obj2)"
        ],
        "explanation": "Since `==` is reserved for equality (calling equals() or compareTo()), Groovy provides the `is()` method on `Object` (via GDK) to verify reference identity (equivalent to Java's `==`)."
    },
    {
        "id": 30,
        "difficulty": "Intermediate",
        "topic": "File handling",
        "question": "Why is `file.eachLine { line -> ... }` preferred over `file.text.split('\\n')` when processing large files in Groovy?",
        "correct": "eachLine reads the file line by line using a buffered reader, preventing high memory consumption",
        "distractors": [
            "eachLine automatically parallelizes processing across all available CPU cores",
            "eachLine skips invalid Unicode characters automatically",
            "file.text is deprecated in modern Groovy versions"
        ],
        "explanation": "`file.text` loads the entire file contents into memory at once, which can easily trigger an OutOfMemoryError on large files. `file.eachLine` streams the file line by line through a BufferedReader and closes the stream automatically."
    },
    {
        "id": 31,
        "difficulty": "Intermediate",
        "topic": "Classes and objects",
        "question": "In Groovy, which AST transformation annotation is a shorthand that bundles `@ToString`, `@EqualsAndHashCode`, and `@TupleConstructor` together?",
        "correct": "@Canonical",
        "distractors": [
            "@Data",
            "@Entity",
            "@ValueObject"
        ],
        "explanation": "The `@Canonical` AST transformation combines `@ToString`, `@EqualsAndHashCode`, and `@TupleConstructor`, generating standard boilerplate methods at compile time."
    },
    {
        "id": 32,
        "difficulty": "Intermediate",
        "topic": "Closures",
        "question": "What does the following Groovy code output?\n\ndef multiply = { a, b -> a * b }\ndef doubleNum = multiply.curry(2)\nprintln doubleNum(8)",
        "correct": "16",
        "distractors": [
            "10",
            "[2, 8]",
            "A MissingMethodException"
        ],
        "explanation": "The `curry()` method pre-binds one or more parameters from left to right. Pre-binding `a = 2` produces a new single-parameter closure: `2 * 8 = 16`."
    },
    {
        "id": 33,
        "difficulty": "Intermediate",
        "topic": "Regular expressions",
        "question": "What is the primary syntactical benefit of using slashy strings (e.g. `/\\d{3}-\\w+/`) for regular expressions in Groovy?",
        "correct": "Backslashes do not need to be escaped with double backslashes",
        "distractors": [
            "They automatically pre-compile the pattern into bytecode at compile time",
            "They make regex execution case-insensitive by default",
            "They disallow multiline matching"
        ],
        "explanation": "In slashy strings (`/.../`), backslashes do not serve as escape characters for string literals (except for escaping a forward slash `\\/`). This allows writing regex character classes like `\\d` and `\\w` directly without tedious `\\\\d` escaping."
    },
    {
        "id": 34,
        "difficulty": "Intermediate",
        "topic": "Dynamic typing and def",
        "question": "What is the primary effect of annotating a Groovy class or method with `@CompileStatic`?",
        "correct": "The compiler performs static type checking and generates direct JVM bytecode without dynamic runtime call-site dispatch",
        "distractors": [
            "It turns all non-static methods into static methods automatically",
            "It prevents the class from being instantiated more than once",
            "It makes all fields public and final"
        ],
        "explanation": "`@CompileStatic` activates static compilation. The Groovy compiler validates types statically at compile time and emits direct standard JVM bytecode that bypasses the Groovy dynamic call site mechanisms, achieving Java-like execution performance."
    },
    {
        "id": 35,
        "difficulty": "Intermediate",
        "topic": "GROOVY scripts and compilation concepts",
        "question": "When Groovy compiles a script file that contains top-level statements without an explicit class declaration, what does it produce?",
        "correct": "A class extending groovy.lang.Script whose run() method contains the top-level statements",
        "distractors": [
            "A static void main method inside an anonymous Java interface",
            "A YAML metadata configuration read by the Groovy engine at runtime",
            "A raw bytecode sequence executed outside of any Java class definition"
        ],
        "explanation": "Every Groovy script is compiled into a class extending `groovy.lang.Script`. The script statements outside explicit methods are compiled directly into the script's `run()` method."
    },

    # ADVANCED (36-50)
    {
        "id": 36,
        "difficulty": "Advanced",
        "topic": "Closures",
        "question": "What is the output of the following Groovy code?\n\nclass Config {\n    String level = \"DEBUG\"\n}\nclass Runner {\n    String level = \"INFO\"\n    def show() {\n        def cfg = new Config()\n        def cl = { level }\n        cl.delegate = cfg\n        cl.resolveStrategy = Closure.DELEGATE_FIRST\n        return cl()\n    }\n}\nprintln new Runner().show()",
        "correct": "DEBUG",
        "distractors": [
            "INFO",
            "null",
            "A MissingPropertyException"
        ],
        "explanation": "By default, closures use `OWNER_FIRST` resolution strategy. When setting `resolveStrategy = Closure.DELEGATE_FIRST`, Groovy checks the closure's `delegate` object (`cfg`) before checking the enclosing `owner` (`Runner`). Since `cfg` contains `level = \"DEBUG\"`, it returns \"DEBUG\"."
    },
    {
        "id": 37,
        "difficulty": "Advanced",
        "topic": "Closures",
        "question": "In a nested closure hierarchy in Groovy, what is the precise distinction between `thisObject` and `owner`?",
        "correct": "thisObject always refers to the enclosing top-level Class instance, while owner refers to the direct enclosing object or Closure",
        "distractors": [
            "thisObject refers to the delegate, while owner refers to the caller thread",
            "thisObject changes dynamically at runtime, while owner is strictly static",
            "owner is only defined if the closure is executed inside a static method"
        ],
        "explanation": "In Groovy closures, `thisObject` always refers to the enclosing class where the closure was declared. In contrast, `owner` refers to the direct enclosing context—if a closure is nested inside another closure, `owner` is that outer closure."
    },
    {
        "id": 38,
        "difficulty": "Advanced",
        "topic": "Closures",
        "question": "What is the technical purpose of invoking `trampoline()` on a recursive Groovy closure?",
        "correct": "It executes tail-recursive calls iteratively to prevent StackOverflowError",
        "distractors": [
            "It distributes recursive iterations across a ForkJoinPool",
            "It guarantees that recursive steps run inside an isolated database transaction",
            "It logs the execution time of each recursive invocation"
        ],
        "explanation": "Groovy's `trampoline()` wraps a tail-recursive closure so that each recursive call returns an instance of `TrampolineClosure` rather than adding a new stack frame. The trampoline loop executes iterations iteratively, preventing `StackOverflowError` regardless of recursion depth."
    },
    {
        "id": 39,
        "difficulty": "Advanced",
        "topic": "Closures",
        "question": "What is the effect of calling `.memoize()` on a Groovy closure?",
        "correct": "It wraps the closure with an internal cache that returns cached results for previously seen arguments",
        "distractors": [
            "It permanently serializes the closure to disk storage",
            "It enforces thread confinement, allowing only one thread to invoke it",
            "It restricts the closure's execution time using a watchdog timer"
        ],
        "explanation": "The `memoize()` method returns an LRU-cached version of the closure. If the closure is called again with the same arguments, the cached result is returned without re-executing the closure body."
    },
    {
        "id": 40,
        "difficulty": "Advanced",
        "topic": "Traits",
        "question": "If a class `Device` implements traits `Alpha` and `Beta`, both defining a method `reset()`, how can `Device` explicitly invoke `Alpha`'s implementation of `reset()`?",
        "correct": "Alpha.super.reset()",
        "distractors": [
            "super.Alpha.reset()",
            "Alpha::reset(this)",
            "((Alpha) this).reset()"
        ],
        "explanation": "To resolve ambiguities and explicitly invoke a specific trait's super method in Groovy, the syntax `TraitName.super.methodName()` is used."
    },
    {
        "id": 41,
        "difficulty": "Advanced",
        "topic": "Traits",
        "question": "How can an individual object instance `service` be dynamically decorated with a trait `Auditable` at runtime in Groovy?",
        "correct": "def auditableService = service.as(Auditable)",
        "distractors": [
            "service.addTrait(Auditable)",
            "service.mixin(Auditable)",
            "Traits can only be implemented statically in the class header, never at runtime"
        ],
        "explanation": "Groovy allows dynamic trait composition at runtime using the `as` operator (e.g. `service.as(Auditable)`) or `service.withTraits(Auditable)`, which creates an adapter/proxy implementing the trait on the existing instance."
    },
    {
        "id": 42,
        "difficulty": "Advanced",
        "topic": "Groovy-specific features and idioms",
        "question": "In Groovy's Meta-Object Protocol (MOP), which method can be defined on a class to intercept invocations of undefined methods?",
        "correct": "def methodMissing(String name, Object args)",
        "distractors": [
            "def invokeUndefined(String name, Object args)",
            "def onMissingMethod(String name, Object args)",
            "def noMethodFound(String name, Object args)"
        ],
        "explanation": "When an undeclared method is called on a Groovy object, the runtime checks for `methodMissing(String name, Object args)`. If implemented, Groovy routes the call to this method instead of throwing a MissingMethodException."
    },
    {
        "id": 43,
        "difficulty": "Advanced",
        "topic": "Groovy-specific features and idioms",
        "question": "What is the output of the following Groovy code utilizing ExpandoMetaClass?\n\nString.metaClass.swapCase = { ->\n    delegate.collect { ch ->\n        ch == ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()\n    }.join('')\n}\nprintln \"Groovy\".swapCase()",
        "correct": "gROOVY",
        "distractors": [
            "GROOVY",
            "groovy",
            "A MissingMethodException because String is final"
        ],
        "explanation": "Groovy's ExpandoMetaClass allows modifying or adding methods to any class at runtime, including final JDK classes like `java.lang.String`. The added closure swaps each character's casing, resulting in 'gROOVY'."
    },
    {
        "id": 44,
        "difficulty": "Advanced",
        "topic": "Operators",
        "question": "Consider the following Groovy code:\n\nclass Account {\n    private int balance = 100\n    int getBalance() {\n        return this.balance * 2\n    }\n}\ndef acc = new Account()\nprintln acc.@balance\n\nWhat is printed to the console?",
        "correct": "100",
        "distractors": [
            "200",
            "0",
            "An IllegalAccessException because balance is private"
        ],
        "explanation": "Standard property access `acc.balance` invokes the getter `getBalance()` (returning 200). The direct field access operator `.@` (`acc.@balance`) bypasses the getter and accesses the field directly, returning 100."
    },
    {
        "id": 45,
        "difficulty": "Advanced",
        "topic": "Inheritance and interfaces",
        "question": "What happens when the following Groovy code is executed?\n\ninterface TaskHandler {\n    void execute()\n    void cancel()\n}\nTaskHandler th = [execute: { println \"Executing\" }] as TaskHandler\nth.execute()\nth.cancel()",
        "correct": "\"Executing\" is printed, followed by a java.lang.UnsupportedOperationException when calling cancel()",
        "distractors": [
            "Both methods execute without error; cancel() does nothing silently",
            "A compilation error occurs because the map does not implement all interface methods",
            "\"Executing\" is printed, and cancel() returns null without error"
        ],
        "explanation": "In Groovy, a Map can be coerced to an interface using `as`. Implemented methods execute their matching closure. If an unmapped method on the interface is invoked, Groovy throws `java.lang.UnsupportedOperationException`."
    },
    {
        "id": 46,
        "difficulty": "Advanced",
        "topic": "Groovy collections and common methods",
        "question": "What is the return type and structure of executing `groupBy` with multiple criteria closures?\n\ndef words = ['cat', 'car', 'dog', 'dove']\ndef result = words.groupBy({ it[0] }, { it.length() })",
        "correct": "A nested Map: Map<String, Map<Integer, List<String>>>",
        "distractors": [
            "A flat Map with compound keys: Map<String, List<String>>",
            "A List of Map entries",
            "A compilation error because groupBy accepts only a single closure"
        ],
        "explanation": "In Groovy, `groupBy` accepts varargs closures. When multiple closures are passed, it generates a hierarchical nested Map where each level corresponds to each criterion closure."
    },
    {
        "id": 47,
        "difficulty": "Advanced",
        "topic": "Groovy-specific features and idioms",
        "question": "During which compilation phase of the Groovy compiler does semantic type resolution and local AST transformations (such as `@TypeChecked`) typically execute?",
        "correct": "SEMANTIC_ANALYSIS",
        "distractors": [
            "PARSING",
            "INITIALIZATION",
            "CLASS_GENERATION"
        ],
        "explanation": "The Groovy compiler passes through 9 phases: INITIALIZATION, PARSING, CONVERSION, SEMANTIC_ANALYSIS, CANONICALIZATION, INSTRUCTION_SELECTION, CLASS_GENERATION, OUTPUT, and FINALIZATION. Semantic type checking and early AST transformations occur during SEMANTIC_ANALYSIS."
    },
    {
        "id": 48,
        "difficulty": "Advanced",
        "topic": "GROOVY scripts and compilation concepts",
        "question": "What is the output when executing the following Groovy script?\n\ndef localVal = 'apple'\nboundVal = 'orange'\n\nvoid printVariables() {\n    try {\n        println boundVal\n        println localVal\n    } catch (MissingPropertyException e) {\n        println 'Error: Missing property'\n    }\n}\nprintVariables()",
        "correct": "orange followed by Error: Missing property",
        "distractors": [
            "orange followed by apple",
            "Error: Missing property followed by Error: Missing property",
            "apple followed by orange"
        ],
        "explanation": "Variables declared without `def` or a type in a script (like `boundVal`) are stored in the script's `Binding`, making them accessible to standalone script methods. Variables declared with `def` (like `localVal`) are local variables inside the generated `run()` method and are not in the Binding, causing a MissingPropertyException when accessed inside `printVariables()`."
    },
    {
        "id": 49,
        "difficulty": "Advanced",
        "topic": "GROOVY scripts and compilation concepts",
        "question": "How can external parameters be safely injected into a script executed dynamically via `groovy.lang.GroovyShell`?",
        "correct": "By constructing a groovy.lang.Binding with variables and passing it to the GroovyShell constructor or evaluate method",
        "distractors": [
            "By setting JVM system properties via System.setProperty()",
            "By setting environment variables in the host operating system process",
            "GroovyShell does not support parameter injection; scripts must be dynamically concatenated"
        ],
        "explanation": "`GroovyShell` accepts a `groovy.lang.Binding` object holding a Map of variables. Any variable in the Binding is directly accessible by name within the evaluated script."
    },
    {
        "id": 50,
        "difficulty": "Advanced",
        "topic": "Dynamic typing and def",
        "question": "What is the key technical difference between `@TypeChecked` and `@CompileStatic` in Groovy?",
        "correct": "@TypeChecked validates types at compile time while retaining dynamic call-site bytecode, whereas @CompileStatic generates direct, non-dynamic JVM bytecode",
        "distractors": [
            "@TypeChecked checks types at runtime, whereas @CompileStatic checks types at compile time",
            "@CompileStatic permits runtime metaprogramming, while @TypeChecked forbids it",
            "@TypeChecked can only be applied to classes, while @CompileStatic can only be applied to methods"
        ],
        "explanation": "Both `@TypeChecked` and `@CompileStatic` perform compile-time type verification. However, `@TypeChecked` leaves the standard dynamic Groovy runtime dispatch (MOP/Call Sites) intact, whereas `@CompileStatic` generates direct bytecode identical to compiled Java code, bypassing the dynamic runtime for maximum performance."
    }
]

print(f"Total questions loaded: {len(questions_data)}")
