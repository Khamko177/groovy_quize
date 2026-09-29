const quizData = [
  {
    "id": 1,
    "difficulty": "Easy",
    "correct_letter": "B",
    "en": {
      "topic": "Groovy syntax and basic concepts",
      "question": "In Groovy, how are semicolons treated at the end of statements?",
      "options": {
        "A": "Semicolons are strictly mandatory at the end of every statement, identical to Java.",
        "B": "Semicolons are optional at the end of a line, but required to separate multiple statements placed on the same line.",
        "C": "Semicolons are deprecated and will produce a compiler error if present.",
        "D": "Semicolons are only permitted inside class definitions and loops."
      },
      "explanation": "Groovy makes statement-terminating semicolons optional when each statement is placed on its own line. Semicolons are only required when writing multiple statements on a single line."
    },
    "vi": {
      "topic": "Cú pháp và khái niệm cơ bản",
      "question": "Trong Groovy, dấu chấm phẩy (;) ở cuối câu lệnh được xử lý như thế nào?",
      "options": {
        "A": "Dấu chấm phẩy là bắt buộc ở cuối mỗi câu lệnh, giống hệt như Java.",
        "B": "Dấu chấm phẩy là tùy chọn ở cuối dòng, nhưng bắt buộc khi viết nhiều câu lệnh trên cùng một dòng.",
        "C": "Dấu chấm phẩy đã bị loại bỏ hoàn toàn và sẽ gây lỗi biên dịch nếu xuất hiện.",
        "D": "Dấu chấm phẩy chỉ được phép dùng bên trong định nghĩa lớp và vòng lặp."
      },
      "explanation": "Groovy cho phép bỏ qua dấu chấm phẩy kết thúc câu lệnh khi mỗi câu lệnh nằm trên một dòng riêng. Dấu chấm phẩy chỉ cần thiết khi bạn viết nhiều câu lệnh trên cùng một dòng."
    },
    "th": {
      "topic": "ไวยากรณ์และแนวคิดพื้นฐาน",
      "question": "ในภาษา Groovy เครื่องหมายอัฒภาค (;) ที่ท้ายคำสั่งมีข้อกำหนดอย่างไร?",
      "options": {
        "A": "ต้องใส่เครื่องหมายอัฒภาคที่ท้ายทุกคำสั่งเสมอ เหมือนกับภาษา Java ทุกประการ",
        "B": "เครื่องหมายอัฒภาคเป็นตัวเลือกเมื่อขึ้นบรรทัดใหม่ แต่จำเป็นต้องใส่หากเขียนหลายคำสั่งในบรรทัดเดียวกัน",
        "C": "เครื่องหมายอัฒภาคถูกยกเลิกแล้วและจะทำให้เกิดข้อผิดพลาดในการคอมไพล์",
        "D": "อนุญาตให้ใช้เครื่องหมายอัฒภาคได้เฉพาะภายในคลาสและลูปเท่านั้น"
      },
      "explanation": "Groovy ทำให้เครื่องหมายอัฒภาค (semicolon) เป็นตัวเลือกเสริมเมื่อแต่ละคำสั่งอยู่คนละบรรทัด โดยจำเป็นต้องใส่เฉพาะเมื่อต้องการเขียนหลายคำสั่งบนบรรทัดเดียวกันเท่านั้น"
    }
  },
  {
    "id": 2,
    "difficulty": "Easy",
    "correct_letter": "D",
    "en": {
      "topic": "Variables and data types",
      "question": "In Groovy, what is the default type assigned to an untyped floating-point literal such as `def val = 19.99`?",
      "options": {
        "A": "java.lang.Double",
        "B": "java.lang.Float",
        "C": "groovy.lang.GNumber",
        "D": "java.math.BigDecimal"
      },
      "explanation": "To prevent floating-point precision loss common in financial calculations, Groovy defaults floating-point literals with decimal points to java.math.BigDecimal instead of double."
    },
    "vi": {
      "topic": "Biến và kiểu dữ liệu",
      "question": "Trong Groovy, kiểu dữ liệu mặc định được gán cho một số thực không chỉ định kiểu như `def val = 19.99` là gì?",
      "options": {
        "A": "java.lang.Double",
        "B": "java.lang.Float",
        "C": "groovy.lang.GNumber",
        "D": "java.math.BigDecimal"
      },
      "explanation": "Để tránh sai số dấu phẩy động phổ biến trong tính toán tài chính, Groovy mặc định các số thực có phần thập phân về kiểu java.math.BigDecimal thay vì double như Java."
    },
    "th": {
      "topic": "ตัวแปรและชนิดข้อมูล",
      "question": "ในภาษา Groovy ชนิดข้อมูลเริ่มต้นที่กำหนดให้กับทศนิยมที่ไม่ได้ระบุชนิด เช่น `def val = 19.99` คืออะไร?",
      "options": {
        "A": "java.lang.Double",
        "B": "java.lang.Float",
        "C": "groovy.lang.GNumber",
        "D": "java.math.BigDecimal"
      },
      "explanation": "เพื่อป้องกันความคลาดเคลื่อนของเลขทศนิยมแบบ floating-point ในการคำนวณ Groovy จึงกำหนดให้ลิเทอรัลทศนิยมมีชนิดเริ่มต้นเป็น java.math.BigDecimal ต่างจาก Java ที่ใช้ double"
    }
  },
  {
    "id": 3,
    "difficulty": "Easy",
    "correct_letter": "D",
    "en": {
      "topic": "Strings and GStrings",
      "question": "Which string delimiter in Groovy creates an interpolatable GString allowing expressions like `${name}`?",
      "options": {
        "A": "Single quotes ('...') or triple single quotes ('''...''')",
        "B": "Square brackets ([...]) or curly braces ({...})",
        "C": "Backticks (`...`) or tilde quotes (~...~)",
        "D": "Double quotes (\"...\") or triple double quotes (\"\"\"...\"\"\")"
      },
      "explanation": "Only double-quoted strings (\"...\") and triple double-quoted strings (\"\"\"...\"\"\") support string interpolation (GStrings). Single-quoted strings produce plain, uninterpolated java.lang.String instances."
    },
    "vi": {
      "topic": "Chuỗi ký tự và GString",
      "question": "Dấu phân cách chuỗi nào trong Groovy tạo ra một GString có hỗ trợ nội suy biểu thức (interpolation) như `${name}`?",
      "options": {
        "A": "Dấu nháy đơn ('...') hoặc ba dấu nháy đơn ('''...''')",
        "B": "Dấu ngoặc vuông ([...]) hoặc dấu ngoặc nhọn ({...})",
        "C": "Dấu backticks (`...`) hoặc dấu ngã (~...~)",
        "D": "Dấu nháy kép (\"...\") hoặc ba dấu nháy kép (\"\"\"...\"\"\")"
      },
      "explanation": "Chỉ chuỗi trong dấu nháy kép (\"...\") và ba dấu nháy kép (\"\"\"...\"\"\") mới hỗ trợ nội suy chuỗi (GString). Chuỗi nháy đơn tạo ra java.lang.String thông thường không nội suy."
    },
    "th": {
      "topic": "สตริงและ GString",
      "question": "เครื่องหมายกำหนดขอบเขตสตริงแบบใดใน Groovy ที่สร้าง GString ซึ่งรองรับการแทรกค่าตัวแปร/นิพจน์ (String Interpolation) เช่น `${name}`?",
      "options": {
        "A": "เครื่องหมายคำพูดเดี่ยว ('...') หรือสามคำพูดเดี่ยว ('''...''')",
        "B": "วงเล็บก้ามปู ([...]) หรือวงเล็บปีกกา ({...})",
        "C": "Backticks (`...`) หรือเครื่องหมายตัวหนอน (~...~)",
        "D": "เครื่องหมายคำพูดคู่ (\"...\") หรือสามคำพูดคู่ (\"\"\"...\"\"\")"
      },
      "explanation": "เฉพาะสตริงที่อยู่ในเครื่องหมายคำพูดคู่ (\"...\") หรือสามคำพูดคู่ (\"\"\"...\"\"\") เท่านั้นที่จะถูกประมวลผลเป็น GString ที่รองรับ interpolation ส่วนคำพูดเดี่ยวจะเป็น java.lang.String ปกติ"
    }
  },
  {
    "id": 4,
    "difficulty": "Easy",
    "correct_letter": "A",
    "en": {
      "topic": "== versus is()",
      "question": "What does the `==` operator compare in Groovy when neither operand is null?",
      "options": {
        "A": "Object equality via equals(), or compareTo() == 0 if the object implements Comparable",
        "B": "Object reference identity, identical to Java's == operator",
        "C": "Memory addresses using identity hash codes",
        "D": "Type compatibility and classloader hierarchy"
      },
      "explanation": "In Groovy, `==` safely checks object equality by invoking Comparable.compareTo() if available or Object.equals(). It also handles null values safely without throwing NullPointerException. To check reference identity, Groovy provides the is() method."
    },
    "vi": {
      "topic": "Toán tử == và is()",
      "question": "Toán tử `==` trong Groovy so sánh điều gì khi cả hai toán hạng đều không null?",
      "options": {
        "A": "So sánh bằng đối tượng qua equals(), hoặc compareTo() == 0 nếu đối tượng hiện thực Comparable",
        "B": "So sánh danh tính tham chiếu bộ nhớ, giống hệt toán tử == của Java",
        "C": "So sánh địa chỉ bộ nhớ bằng mã băm danh tính (identity hash codes)",
        "D": "So sánh tính tương thích kiểu và thứ bậc classloader"
      },
      "explanation": "Trong Groovy, `==` an toàn gọi Comparable.compareTo() nếu có, hoặc Object.equals(). Nó cũng xử lý an toàn giá trị null mà không ném NullPointerException. Để kiểm tra tham chiếu cùng địa chỉ nhớ, Groovy dùng phương thức is()."
    },
    "th": {
      "topic": "ตัวดำเนินการ == เปรียบเทียบกับ is()",
      "question": "ตัวดำเนินการ `==` ใน Groovy เปรียบเทียบอะไรเมื่อทั้งสองตัวถูกดำเนินการไม่เป็น null?",
      "options": {
        "A": "ความเท่ากันของออบเจกต์ผ่าน equals() หรือ compareTo() == 0 หากคลาสอิมพลีเมนต์ Comparable",
        "B": "การอ้างอิงตำแหน่งหน่วยความจำเดียวกัน เหมือนกับตัวดำเนินการ == ใน Java",
        "C": "ที่อยู่หน่วยความจำโดยใช้รหัสแฮชประจำตัว (identity hash codes)",
        "D": "ความเข้ากันได้ของชนิดข้อมูลและโครงสร้าง classloader"
      },
      "explanation": "ใน Groovy `==` ใช้ตรวจสอบความเท่ากันของข้อมูลโดยเรียกใช้ Comparable.compareTo() หรือ Object.equals() และจัดการค่า null ได้อย่างปลอดภัย หากต้องการเทียบตำแหน่งหน่วยความจำจะใช้เมธอด is()"
    }
  },
  {
    "id": 5,
    "difficulty": "Easy",
    "correct_letter": "D",
    "en": {
      "topic": "Lists, Sets, and Maps",
      "question": "What standard Java collection class is instantiated by default when using the list literal `def items = [1, 2, 3]`?",
      "options": {
        "A": "java.util.LinkedList",
        "B": "java.util.Vector",
        "C": "java.util.ArrayDeque",
        "D": "java.util.ArrayList"
      },
      "explanation": "In Groovy, square brackets `[...]` without key-value pairs instantiate a java.util.ArrayList by default."
    },
    "vi": {
      "topic": "Danh sách, Tập hợp và Bản đồ",
      "question": "Lớp collection chuẩn nào của Java được khởi tạo mặc định khi dùng cú pháp danh sách `def items = [1, 2, 3]`?",
      "options": {
        "A": "java.util.LinkedList",
        "B": "java.util.Vector",
        "C": "java.util.ArrayDeque",
        "D": "java.util.ArrayList"
      },
      "explanation": "Trong Groovy, dấu ngoặc vuông `[...]` không có cặp key-value sẽ mặc định khởi tạo một đối tượng java.util.ArrayList."
    },
    "th": {
      "topic": "ลิสต์, เซต และแมป",
      "question": "คอลเลกชันมาตรฐานของ Java คลาสใดที่ถูกสร้างขึ้นเป็นค่าเริ่มต้นเมื่อใช้ลิเทอรัล `def items = [1, 2, 3]`?",
      "options": {
        "A": "java.util.LinkedList",
        "B": "java.util.Vector",
        "C": "java.util.ArrayDeque",
        "D": "java.util.ArrayList"
      },
      "explanation": "ใน Groovy วงเล็บก้ามปู `[...]` ที่ไม่มีคู่ key-value จะสร้างอินสแตนซ์ของ java.util.ArrayList เป็นค่าเริ่มต้นเสมอ"
    }
  },
  {
    "id": 6,
    "difficulty": "Easy",
    "correct_letter": "B",
    "en": {
      "topic": "Lists, Sets, and Maps",
      "question": "How do you declare an empty `java.util.Map` using Groovy's literal syntax?",
      "options": {
        "A": "def map = []",
        "B": "def map = [:]",
        "C": "def map = {}",
        "D": "def map = ()"
      },
      "explanation": "In Groovy, `[:]` defines an empty Map (instantiating java.util.LinkedHashMap). `[]` creates an empty List, and `{}` creates a Closure."
    },
    "vi": {
      "topic": "Danh sách, Tập hợp và Bản đồ",
      "question": "Làm thế nào để khai báo một `java.util.Map` rỗng bằng cú pháp literal của Groovy?",
      "options": {
        "A": "def map = []",
        "B": "def map = [:]",
        "C": "def map = {}",
        "D": "def map = ()"
      },
      "explanation": "Trong Groovy, `[:]` là cú pháp literal biểu diễn một Map rỗng (khởi tạo java.util.LinkedHashMap). `[]` là List rỗng, còn `{}` là Closure."
    },
    "th": {
      "topic": "ลิสต์, เซต และแมป",
      "question": "การประกาศ `java.util.Map` ว่างเปล่าโดยใช้ไวยากรณ์ลิเทอรัลของ Groovy ทำได้อย่างไร?",
      "options": {
        "A": "def map = []",
        "B": "def map = [:]",
        "C": "def map = {}",
        "D": "def map = ()"
      },
      "explanation": "ใน Groovy `[:]` ใช้กำหนด Map ว่าง (อินสแตนซ์ของ java.util.LinkedHashMap) ส่วน `[]` คือ List ว่าง และ `{}` คือ Closure"
    }
  },
  {
    "id": 7,
    "difficulty": "Easy",
    "correct_letter": "C",
    "en": {
      "topic": "Null handling and the safe navigation operator",
      "question": "What is the result of evaluating `person?.address?.city` when `person` is null?",
      "options": {
        "A": "It throws a NullPointerException immediately",
        "B": "It throws a MissingPropertyException",
        "C": "It returns null without throwing a NullPointerException",
        "D": "It returns an empty string \"\""
      },
      "explanation": "The safe navigation operator (`?.`) checks whether the target object on the left is null. If it is null, evaluation short-circuits and safely returns null instead of throwing NullPointerException."
    },
    "vi": {
      "topic": "Toán tử điều hướng an toàn (Safe Navigation)",
      "question": "Kết quả khi đánh giá biểu thức `person?.address?.city` khi `person` là null là gì?",
      "options": {
        "A": "Ném ra ngoại lệ NullPointerException ngay lập tức",
        "B": "Ném ra ngoại lệ MissingPropertyException",
        "C": "Trả về null mà không ném ra NullPointerException",
        "D": "Trả về một chuỗi rỗng \"\""
      },
      "explanation": "Toán tử điều hướng an toàn (`?.`) kiểm tra xem đối tượng bên trái có phải là null hay không. Nếu là null, biểu thức sẽ ngắt sớm và trả về null an toàn thay vì ném NullPointerException."
    },
    "th": {
      "topic": "การจัดการ Null และ Safe Navigation Operator",
      "question": "ผลลัพธ์ของการประเมิน `person?.address?.city` เมื่อ `person` เป็น null คืออะไร?",
      "options": {
        "A": "เกิดข้อผิดพลาด NullPointerException ทันที",
        "B": "เกิดข้อผิดพลาด MissingPropertyException",
        "C": "คืนค่า null โดยไม่เกิด NullPointerException",
        "D": "คืนค่าสตริงว่าง \"\""
      },
      "explanation": "ตัวดำเนินการ safe navigation (`?.`) จะตรวจสอบว่าตัวแปรฝั่งซ้ายเป็น null หรือไม่ หากเป็น null จะคืนค่า null ทันทีอย่างปลอดภัยโดยไม่เกิด NullPointerException"
    }
  },
  {
    "id": 8,
    "difficulty": "Easy",
    "correct_letter": "B",
    "en": {
      "topic": "Operators",
      "question": "What will the following Groovy snippet output?\n\ndef username = \"\"\ndef display = username ?: \"Anonymous\"\nprintln display",
      "options": {
        "A": "\"\" (an empty string)",
        "B": "Anonymous",
        "C": "null",
        "D": "A compilation error"
      },
      "explanation": "The Elvis operator (`?:`) checks the Groovy Truth of the left-hand expression. An empty string evaluates to false under Groovy Truth, so the operator falls back to the default value \"Anonymous\"."
    },
    "vi": {
      "topic": "Toán tử",
      "question": "Đoạn mã Groovy sau đây sẽ in ra kết quả gì?\n\ndef username = \"\"\ndef display = username ?: \"Anonymous\"\nprintln display",
      "options": {
        "A": "\"\" (chuỗi rỗng)",
        "B": "Anonymous",
        "C": "null",
        "D": "Lỗi biên dịch"
      },
      "explanation": "Toán tử Elvis (`?:`) kiểm tra tính chân lý (Groovy Truth) của biểu thức bên trái. Một chuỗi rỗng được đánh giá là false, do đó toán tử sẽ lấy giá trị mặc định bên phải là \"Anonymous\"."
    },
    "th": {
      "topic": "ตัวดำเนินการ",
      "question": "โค้ด Groovy ต่อไปนี้จะแสดงผลลัพธ์เป็นอะไร?\n\ndef username = \"\"\ndef display = username ?: \"Anonymous\"\nprintln display",
      "options": {
        "A": "\"\" (สตริงว่าง)",
        "B": "Anonymous",
        "C": "null",
        "D": "เกิดข้อผิดพลาดในการคอมไพล์"
      },
      "explanation": "Elvis operator (`?:`) จะตรวจสอบ Groovy Truth ของฝั่งซ้าย เนื่องจากสตริงว่างมีค่าเป็น false จึงคืนค่าเริ่มต้นฝั่งขวาคือ \"Anonymous\""
    }
  },
  {
    "id": 9,
    "difficulty": "Easy",
    "correct_letter": "B",
    "en": {
      "topic": "Ranges",
      "question": "What are the exact elements generated by the range expression `1..<5` in Groovy?",
      "options": {
        "A": "[1, 2, 3, 4, 5]",
        "B": "[1, 2, 3, 4]",
        "C": "[2, 3, 4, 5]",
        "D": "[2, 3, 4]"
      },
      "explanation": "The `..<` operator creates a half-open range that includes the lower bound but excludes the upper bound. Therefore, `1..<5` produces [1, 2, 3, 4]."
    },
    "vi": {
      "topic": "Khoảng giá trị (Ranges)",
      "question": "Các phần tử chính xác được tạo ra bởi biểu thức range `1..<5` trong Groovy là gì?",
      "options": {
        "A": "[1, 2, 3, 4, 5]",
        "B": "[1, 2, 3, 4]",
        "C": "[2, 3, 4, 5]",
        "D": "[2, 3, 4]"
      },
      "explanation": "Toán tử `..<` tạo ra một khoảng nửa mở (half-open range), bao gồm cận dưới nhưng loại trừ cận trên. Vì vậy `1..<5` tạo ra danh sách [1, 2, 3, 4]."
    },
    "th": {
      "topic": "ช่วงข้อมูล (Ranges)",
      "question": "สมาชิกที่แท้จริงที่สร้างขึ้นจากนิพจน์ช่วง `1..<5` ใน Groovy คืออะไร?",
      "options": {
        "A": "[1, 2, 3, 4, 5]",
        "B": "[1, 2, 3, 4]",
        "C": "[2, 3, 4, 5]",
        "D": "[2, 3, 4]"
      },
      "explanation": "ตัวดำเนินการ `..<` สร้างช่วงแบบกึ่งเปิด (half-open range) ที่รวมค่าเริ่มต้นแต่ไม่รวมค่าปลายทาง ดังนั้น `1..<5` จึงได้ [1, 2, 3, 4]"
    }
  },
  {
    "id": 10,
    "difficulty": "Easy",
    "correct_letter": "A",
    "en": {
      "topic": "Closures",
      "question": "When a Groovy closure does not declare any explicit parameters, what is the default name of the single argument passed to it?",
      "options": {
        "A": "it",
        "B": "self",
        "C": "this",
        "D": "arg"
      },
      "explanation": "Groovy automatically provides an implicit parameter named `it` for any closure that does not define an explicit parameter list using the `->` syntax."
    },
    "vi": {
      "topic": "Closures",
      "question": "Khi một closure trong Groovy không khai báo tham số tường minh, tên mặc định của tham số duy nhất được truyền vào nó là gì?",
      "options": {
        "A": "it",
        "B": "self",
        "C": "this",
        "D": "arg"
      },
      "explanation": "Groovy tự động cung cấp một tham số ngầm định có tên là `it` cho bất kỳ closure nào không định nghĩa danh sách tham số rõ ràng bằng ký hiệu `->`."
    },
    "th": {
      "topic": "โคลเชอร์ (Closures)",
      "question": "เมื่อ closure ใน Groovy ไม่ได้ประกาศพารามิเตอร์อย่างชัดเจน พารามิเตอร์เริ่มต้นตัวเดียวที่ส่งเข้ามาจะมีชื่อว่าอะไร?",
      "options": {
        "A": "it",
        "B": "self",
        "C": "this",
        "D": "arg"
      },
      "explanation": "Groovy จะสร้างพารามิเตอร์โดยปริยายชื่อ `it` ให้โดยอัตโนมัติสำหรับ closure ที่ไม่ได้ประกาศตัวแปรด้วยสัญลักษณ์ `->`"
    }
  },
  {
    "id": 11,
    "difficulty": "Easy",
    "correct_letter": "D",
    "en": {
      "topic": "Methods and parameters",
      "question": "What does the following Groovy method return when invoked as `calculate(3, 7)`?\n\ndef calculate(int a, int b) {\n    int sum = a + b\n    sum\n}",
      "options": {
        "A": "null",
        "B": "0",
        "C": "A compilation error because the return keyword is missing",
        "D": "10"
      },
      "explanation": "In Groovy, the `return` keyword is optional. If omitted, the method automatically returns the value of the last evaluated expression in the method body."
    },
    "vi": {
      "topic": "Phương thức và tham số",
      "question": "Phương thức Groovy sau đây sẽ trả về giá trị gì khi được gọi với `calculate(3, 7)`?\n\ndef calculate(int a, int b) {\n    int sum = a + b\n    sum\n}",
      "options": {
        "A": "null",
        "B": "0",
        "C": "Lỗi biên dịch vì thiếu từ khóa return",
        "D": "10"
      },
      "explanation": "Trong Groovy, từ khóa `return` là tùy chọn. Nếu không có return, phương thức sẽ tự động trả về giá trị của biểu thức cuối cùng được tính toán trong thân hàm."
    },
    "th": {
      "topic": "เมธอดและพารามิเตอร์",
      "question": "เมธอด Groovy ต่อไปนี้จะส่งค่าใดกลับมาเมื่อเรียกใช้ `calculate(3, 7)`?\n\ndef calculate(int a, int b) {\n    int sum = a + b\n    sum\n}",
      "options": {
        "A": "null",
        "B": "0",
        "C": "เกิดข้อผิดพลาดในการคอมไพล์เนื่องจากไม่มีคีย์เวิร์ด return",
        "D": "10"
      },
      "explanation": "ในภาษา Groovy คีย์เวิร์ด `return` ไม่จำเป็นต้องใส่ หากละเว้นไว้ เมธอดจะคืนค่าผลลัพธ์ของนิพจน์สุดท้ายที่ถูกประเมินโดยอัตโนมัติ"
    }
  },
  {
    "id": 12,
    "difficulty": "Easy",
    "correct_letter": "B",
    "en": {
      "topic": "Exception handling",
      "question": "How does the Groovy compiler handle Java checked exceptions such as `java.io.IOException`?",
      "options": {
        "A": "Groovy requires checked exceptions to be caught or declared, exactly like Java",
        "B": "Groovy does not force developers to catch checked exceptions or declare them with a throws clause",
        "C": "Groovy converts all checked exceptions into java.lang.Error at compile time",
        "D": "Groovy silently swallows all checked exceptions so they never propagate"
      },
      "explanation": "Groovy eliminates the distinction between checked and unchecked exceptions at the compiler level. You are free to catch checked exceptions if needed, but the compiler never forces a try-catch block or a throws clause."
    },
    "vi": {
      "topic": "Xử lý ngoại lệ (Exception handling)",
      "question": "Trình biên dịch Groovy xử lý các checked exception của Java (ví dụ `java.io.IOException`) như thế nào?",
      "options": {
        "A": "Groovy bắt buộc phải bắt hoặc khai báo checked exception bằng throws, giống hệt Java.",
        "B": "Groovy không bắt buộc lập trình viên phải bắt checked exception hay khai báo chúng trong mệnh đề throws.",
        "C": "Groovy chuyển toàn bộ checked exception thành java.lang.Error lúc biên dịch.",
        "D": "Groovy âm thầm nuốt (swallow) mọi checked exception để chúng không bao giờ lan truyền."
      },
      "explanation": "Groovy loại bỏ sự phân biệt bắt buộc giữa checked và unchecked exception ở mức biên dịch. Bạn có thể bắt checked exception nếu muốn, nhưng compiler không bao giờ ép buộc khối try-catch hay mệnh đề throws."
    },
    "th": {
      "topic": "การจัดการข้อยกเว้น (Exception handling)",
      "question": "คอมไพเลอร์ Groovy จัดการกับ Checked Exceptions ของ Java (เช่น `java.io.IOException`) อย่างไร?",
      "options": {
        "A": "Groovy บังคับให้ต้องดักจับหรือประกาศด้วย throws เหมือนกับ Java ทุกประการ",
        "B": "Groovy ไม่บังคับให้นักพัฒนาต้องครอบ try-catch หรือประกาศ throws สำหรับ checked exceptions",
        "C": "Groovy แปลง checked exceptions ทั้งหมดเป็น java.lang.Error ในขั้นตอนคอมไพล์",
        "D": "Groovy ระงับข้อผิดพลาดทั้งหมดเงียบๆ ทำให้ข้อยกเว้นไม่ส่งต่อไปที่อื่น"
      },
      "explanation": "Groovy ยกเลิกข้อบังคับเกี่ยวกับ Checked Exceptions ในระดับคอมไพเลอร์ คุณไม่จำเป็นต้องเขียน try-catch หรือระบุ throws แต่ยังสามารถดักจับข้อผิดพลาดได้ตามปกติ"
    }
  },
  {
    "id": 13,
    "difficulty": "Easy",
    "correct_letter": "A",
    "en": {
      "topic": "File handling",
      "question": "Which Groovy convenience property can be called on a `java.io.File` object to read the entire file content as a `String`?",
      "options": {
        "A": "file.text",
        "B": "file.content",
        "C": "file.lines",
        "D": "file.readAll()"
      },
      "explanation": "Groovy decorates `java.io.File` with the `getText()` extension method (via GDK), allowing developers to access the entire file content using the property syntax `file.text`."
    },
    "vi": {
      "topic": "Xử lý tệp tin (File handling)",
      "question": "Thuộc tính tiện ích nào trong Groovy có thể được gọi trên đối tượng `java.io.File` để đọc toàn bộ nội dung tệp dưới dạng một `String`?",
      "options": {
        "A": "file.text",
        "B": "file.content",
        "C": "file.lines",
        "D": "file.readAll()"
      },
      "explanation": "Groovy mở rộng lớp `java.io.File` với phương thức `getText()` (thông qua GDK), cho phép truy cập toàn bộ nội dung tệp dưới dạng thuộc tính `file.text`."
    },
    "th": {
      "topic": "การจัดการไฟล์ (File handling)",
      "question": "พร็อพเพอร์ตี้อำนวยความสะดวกใดใน Groovy ที่สามารถเรียกใช้บนออบเจกต์ `java.io.File` เพื่ออ่านเนื้อหาทั้งหมดออกมาเป็น `String`?",
      "options": {
        "A": "file.text",
        "B": "file.content",
        "C": "file.lines",
        "D": "file.readAll()"
      },
      "explanation": "Groovy เพิ่มเมธอด `getText()` ให้กับ `java.io.File` ผ่าน GDK ทำให้สามารถเข้าถึงเนื้อหาไฟล์ทั้งหมดได้ง่ายๆ ด้วยไวยากรณ์ `file.text`"
    }
  },
  {
    "id": 14,
    "difficulty": "Easy",
    "correct_letter": "D",
    "en": {
      "topic": "Dynamic typing and def",
      "question": "What does the `def` keyword indicate when declaring a variable in Groovy?",
      "options": {
        "A": "It defines an immutable constant value that cannot be modified",
        "B": "It restricts the variable to primitive types only",
        "C": "It defines a private class field accessible only through reflection",
        "D": "It declares a dynamically typed variable whose type is treated as java.lang.Object at compile time"
      },
      "explanation": "In Groovy, `def` acts as a placeholder for untyped declarations. For variables, it indicates dynamic typing (declared as Object under the hood), allowing reassignment to any type at runtime."
    },
    "vi": {
      "topic": "Định kiểu động và từ khóa def",
      "question": "Từ khóa `def` biểu thị điều gì khi khai báo một biến trong Groovy?",
      "options": {
        "A": "Nó định nghĩa một hằng số bất biến không thể gán lại giá trị.",
        "B": "Nó giới hạn biến chỉ được phép nhận các kiểu dữ liệu nguyên thủy.",
        "C": "Nó định nghĩa một trường private chỉ có thể truy cập qua reflection.",
        "D": "Nó khai báo một biến có kiểu động và được coi là java.lang.Object ở thời điểm biên dịch."
      },
      "explanation": "Trong Groovy, `def` là từ khóa thay thế cho các khai báo không định rõ kiểu. Đối với biến, nó chỉ định kiểu động (bên dưới là Object), cho phép gán lại bất kỳ kiểu dữ liệu nào trong lúc chạy."
    },
    "th": {
      "topic": "การกำหนดชนิดข้อมูลแบบไดนามิกและคีย์เวิร์ด def",
      "question": "คีย์เวิร์ด `def` บ่งบอกถึงสิ่งใดเมื่อใช้ประกาศตัวแปรใน Groovy?",
      "options": {
        "A": "กำหนดให้ตัวแปรเป็นค่าคงที่ (immutable) ที่ไม่สามารถเปลี่ยนค่าได้",
        "B": "จำกัดให้ตัวแปรเก็บได้เฉพาะข้อมูลชนิดดั้งเดิม (primitive types) เท่านั้น",
        "C": "กำหนดฟิลด์แบบ private ที่เข้าถึงได้เฉพาะผ่าน reflection",
        "D": "ประกาศตัวแปรแบบไดนามิกที่มีชนิดข้อมูลเป็น java.lang.Object ในช่วงคอมไพล์"
      },
      "explanation": "ใน Groovy `def` ใช้สำหรับการประกาศแบบไม่ระบุชนิด สำหรับตัวแปรจะหมายถึงการระบุชนิดข้อมูลแบบไดนามิก (เป็น Object ในเบื้องหลัง) ทำให้เปลี่ยนชนิดข้อมูลขณะรันไทม์ได้"
    }
  },
  {
    "id": 15,
    "difficulty": "Easy",
    "correct_letter": "D",
    "en": {
      "topic": "Classes and objects",
      "question": "In a Groovy class, what is generated automatically when you declare a field without any access modifier, such as `String title`?",
      "options": {
        "A": "A package-private field without any getter or setter methods",
        "B": "A public field directly exposed to external callers without encapsulation",
        "C": "A read-only final property with only a getter method",
        "D": "A private field with auto-generated public getter and setter methods (a Groovy property)"
      },
      "explanation": "In Groovy, declaring a field without an access modifier creates a property. Groovy automatically generates a private field and public `getTitle()` / `setTitle()` methods behind the scenes."
    },
    "vi": {
      "topic": "Lớp và đối tượng (Classes and objects)",
      "question": "Trong một class Groovy, điều gì được tự động sinh ra khi bạn khai báo một trường không có access modifier, ví dụ `String title`?",
      "options": {
        "A": "Một trường package-private không có phương thức getter hay setter nào.",
        "B": "Một trường public lộ trực tiếp ra ngoài mà không có tính đóng gói.",
        "C": "Một thuộc tính chỉ đọc (read-only) chỉ có phương thức getter.",
        "D": "Một trường private cùng các phương thức getter và setter public được tự động sinh (Groovy property)."
      },
      "explanation": "Trong Groovy, khai báo trường mà không có modifier sẽ tạo ra một property. Groovy tự động tạo ra một trường private ngầm và cặp phương thức public `getTitle()` / `setTitle()`."
    },
    "th": {
      "topic": "คลาสและออบเจกต์ (Classes and objects)",
      "question": "ในคลาส Groovy สิ่งใดจะถูกสร้างขึ้นโดยอัตโนมัติเมื่อประกาศฟิลด์โดยไม่มี access modifier เช่น `String title`?",
      "options": {
        "A": "ฟิลด์แบบ package-private โดยไม่มีเมธอด getter หรือ setter",
        "B": "ฟิลด์แบบ public ที่เปิดให้เข้าถึงได้โดยตรงโดยไม่มีการห่อหุ้มข้อมูล",
        "C": "พร็อพเพอร์ตี้แบบอ่านอย่างเดียวที่มีเฉพาะเมธอด getter",
        "D": "ฟิลด์แบบ private พร้อมสร้างเมธอด getter และ setter แบบ public ให้โดยอัตโนมัติ (Groovy property)"
      },
      "explanation": "การละเว้น access modifier ในคลาส Groovy จะเป็นการสร้าง Groovy Property ซึ่งคอมไพเลอร์จะสร้างฟิลด์ private และสร้างเมธอด getTitle() / setTitle() แบบ public ให้เบื้องหลัง"
    }
  },
  {
    "id": 16,
    "difficulty": "Intermediate",
    "correct_letter": "C",
    "en": {
      "topic": "Operators",
      "question": "What is the return value of the spaceship operator expression `12 <=> 20`?",
      "options": {
        "A": "1",
        "B": "0",
        "C": "-1",
        "D": "false"
      },
      "explanation": "The spaceship operator (`<=>`) calls `compareTo()`. Since 12 is less than 20, `12.compareTo(20)` returns -1."
    },
    "vi": {
      "topic": "Toán tử",
      "question": "Giá trị trả về của biểu thức toán tử spaceship `12 <=> 20` là gì?",
      "options": {
        "A": "1",
        "B": "0",
        "C": "-1",
        "D": "false"
      },
      "explanation": "Toán tử tàu vũ trụ (`<=>`) gọi phương thức `compareTo()`. Vì 12 nhỏ hơn 20, biểu thức `12.compareTo(20)` trả về -1."
    },
    "th": {
      "topic": "ตัวดำเนินการ",
      "question": "ค่าที่ได้จากนิพจน์ Spaceship Operator `12 <=> 20` คืออะไร?",
      "options": {
        "A": "1",
        "B": "0",
        "C": "-1",
        "D": "false"
      },
      "explanation": "ตัวดำเนินการยานอวกาศ (`<=>`) จะเรียกใช้ `compareTo()` เนื่องจาก 12 น้อยกว่า 20 การเรียก `12.compareTo(20)` จึงคืนค่าเป็น -1"
    }
  },
  {
    "id": 17,
    "difficulty": "Intermediate",
    "correct_letter": "C",
    "en": {
      "topic": "Groovy-specific features and idioms",
      "question": "Which of the following evaluates to `false` in a Groovy boolean test (Groovy Truth)?",
      "options": {
        "A": "[0] (a List containing the integer 0)",
        "B": "\" \" (a String consisting of a single space)",
        "C": "[:] (an empty Map)",
        "D": "new Object()"
      },
      "explanation": "Under Groovy Truth: empty collections and maps evaluate to false, empty strings evaluate to false, and the number 0 evaluates to false. However, `[0]` is a non-empty list (true), `\" \"` is a non-empty string with length 1 (true), and non-null objects evaluate to true."
    },
    "vi": {
      "topic": "Tính năng và thành ngữ Groovy (Groovy Truth)",
      "question": "Giá trị nào sau đây được đánh giá là `false` trong ngữ cảnh boolean của Groovy (Groovy Truth)?",
      "options": {
        "A": "[0] (một List chứa số nguyên 0)",
        "B": "\" \" (một chuỗi chứa một ký tự khoảng trắng)",
        "C": "[:] (một Map rỗng)",
        "D": "new Object()"
      },
      "explanation": "Theo Groovy Truth: các collection và map rỗng được đánh giá là false, chuỗi rỗng là false, số 0 là false. Tuy nhiên, `[0]` là list không rỗng (true), `\" \"` là chuỗi có độ dài 1 (true), và đối tượng non-null luôn là true."
    },
    "th": {
      "topic": "สำนวนและคุณสมบัติเฉพาะของ Groovy (Groovy Truth)",
      "question": "ค่าใดต่อไปนี้ถูกประเมินเป็น `false` ตามหลัก Groovy Truth?",
      "options": {
        "A": "[0] (List ที่มีเลข 0 อยู่ข้างใน)",
        "B": "\" \" (สตริงที่มีการเว้นวรรค 1 ช่อง)",
        "C": "[:] (Map ว่างเปล่า)",
        "D": "new Object()"
      },
      "explanation": "ตามหลัก Groovy Truth: คอลเลกชันและ Map ที่ว่างเปล่าจะให้ค่าเป็น false ส่วน `[0]` เป็นลิสต์ที่ไม่ว่าง (true), `\" \"` มีความยาว 1 (true) และออบเจกต์ที่ไม่เป็น null จะเป็น true เสมอ"
    }
  },
  {
    "id": 18,
    "difficulty": "Intermediate",
    "correct_letter": "A",
    "en": {
      "topic": "Groovy collections and common methods",
      "question": "What does the `collect` method return when executed on a list in Groovy?\n\ndef words = ['grape', 'fig']\ndef result = words.collect { it.toUpperCase() }",
      "options": {
        "A": "A new List containing ['GRAPE', 'FIG']",
        "B": "A single concatenated String 'GRAPEFIG'",
        "C": "The original list mutated in place to ['GRAPE', 'FIG']",
        "D": "A Set containing ['GRAPE', 'FIG']"
      },
      "explanation": "The `collect` method iterates over a collection, applies the given closure transformation to each element, and returns a new List containing the transformed results without modifying the original collection."
    },
    "vi": {
      "topic": "Groovy collections và các phương thức phổ biến",
      "question": "Phương thức `collect` trả về kết quả gì khi thực thi trên một list trong Groovy?\n\ndef words = ['grape', 'fig']\ndef result = words.collect { it.toUpperCase() }",
      "options": {
        "A": "Một List mới chứa ['GRAPE', 'FIG']",
        "B": "Một chuỗi đơn nối liền 'GRAPEFIG'",
        "C": "Chính danh sách gốc bị biến đổi tại chỗ thành ['GRAPE', 'FIG']",
        "D": "Một Set chứa ['GRAPE', 'FIG']"
      },
      "explanation": "Phương thức `collect` lặp qua collection, áp dụng closure biến đổi lên từng phần tử và trả về một List mới chứa các kết quả đã chuyển đổi mà không làm thay đổi list ban đầu."
    },
    "th": {
      "topic": "คอลเลกชันใน Groovy และเมธอดที่ใช้บ่อย",
      "question": "เมธอด `collect` คืนค่าสิ่งใดเมื่อทำงานกับ List ใน Groovy?\n\ndef words = ['grape', 'fig']\ndef result = words.collect { it.toUpperCase() }",
      "options": {
        "A": "List ใหม่ที่มีข้อมูล ['GRAPE', 'FIG']",
        "B": "สตริงเดี่ยวที่ต่อกันเป็น 'GRAPEFIG'",
        "C": "ลิสต์เดิมที่ถูกแก้ไขข้อมูลภายในเป็น ['GRAPE', 'FIG']",
        "D": "Set ที่มีข้อมูล ['GRAPE', 'FIG']"
      },
      "explanation": "เมธอด `collect` จะวนซ้ำผ่านคอลเลกชัน แปลงค่าข้อมูลแต่ละตัวตามที่กำหนดใน closure แล้วส่งคืนเป็น List ก้อนใหม่โดยไม่แก้ไขลิสต์เดิม"
    }
  },
  {
    "id": 19,
    "difficulty": "Intermediate",
    "correct_letter": "D",
    "en": {
      "topic": "Groovy collections and common methods",
      "question": "What is the output of the following Groovy code?\n\ndef numbers = [10, 15, 20, 25, 30]\nprintln numbers.find { it > 18 }",
      "options": {
        "A": "[20, 25, 30]",
        "B": "true",
        "C": "30",
        "D": "20"
      },
      "explanation": "The `find` method returns the first element that satisfies the closure predicate. Here, 20 is the first element greater than 18. (To get all matching elements, `findAll` is used)."
    },
    "vi": {
      "topic": "Groovy collections và các phương thức phổ biến",
      "question": "Đoạn mã Groovy sau đây sẽ cho kết quả là gì?\n\ndef numbers = [10, 15, 20, 25, 30]\nprintln numbers.find { it > 18 }",
      "options": {
        "A": "[20, 25, 30]",
        "B": "true",
        "C": "30",
        "D": "20"
      },
      "explanation": "Phương thức `find` trả về phần tử đầu tiên thỏa mãn điều kiện của closure (ở đây 20 là phần tử đầu tiên > 18). Để lấy tất cả các phần tử thỏa mãn, người ta dùng `findAll`."
    },
    "th": {
      "topic": "คอลเลกชันใน Groovy และเมธอดที่ใช้บ่อย",
      "question": "ผลลัพธ์ของโค้ด Groovy ต่อไปนี้คืออะไร?\n\ndef numbers = [10, 15, 20, 25, 30]\nprintln numbers.find { it > 18 }",
      "options": {
        "A": "[20, 25, 30]",
        "B": "true",
        "C": "30",
        "D": "20"
      },
      "explanation": "เมธอด `find` จะส่งคืนสมาชิกตัวแรกที่ตรงตามเงื่อนไขใน closure ซึ่งก็คือ 20 (หากต้องการสมาชิกทั้งหมดที่ตรงเงื่อนไขจะใช้ `findAll`)"
    }
  },
  {
    "id": 20,
    "difficulty": "Intermediate",
    "correct_letter": "A",
    "en": {
      "topic": "Groovy collections and common methods",
      "question": "What is the result of evaluating the following expression?\n\n[1, 2, 3, 4].inject(10) { acc, val -> acc + val }",
      "options": {
        "A": "20",
        "B": "10",
        "C": "24",
        "D": "[10, 11, 13, 16, 20]"
      },
      "explanation": "The `inject` method performs a reduction/fold with an initial accumulator value (10): 10 + 1 = 11; 11 + 2 = 13; 13 + 3 = 16; 16 + 4 = 20."
    },
    "vi": {
      "topic": "Groovy collections và các phương thức phổ biến",
      "question": "Kết quả khi đánh giá biểu thức sau đây là bao nhiêu?\n\n[1, 2, 3, 4].inject(10) { acc, val -> acc + val }",
      "options": {
        "A": "20",
        "B": "10",
        "C": "24",
        "D": "[10, 11, 13, 16, 20]"
      },
      "explanation": "Phương thức `inject` thực hiện tính lũy kế (fold/reduce) với giá trị khởi tạo là 10: 10 + 1 = 11; 11 + 2 = 13; 13 + 3 = 16; 16 + 4 = 20."
    },
    "th": {
      "topic": "คอลเลกชันใน Groovy และเมธอดที่ใช้บ่อย",
      "question": "ผลลัพธ์ของการประเมินนิพจน์ต่อไปนี้มีค่าเท่าใด?\n\n[1, 2, 3, 4].inject(10) { acc, val -> acc + val }",
      "options": {
        "A": "20",
        "B": "10",
        "C": "24",
        "D": "[10, 11, 13, 16, 20]"
      },
      "explanation": "เมธอด `inject` ทำหน้าที่สะสมค่า (reduce/fold) โดยมีค่าเริ่มต้นเป็น 10: 10 + 1 = 11; 11 + 2 = 13; 13 + 3 = 16; 16 + 4 = 20"
    }
  },
  {
    "id": 21,
    "difficulty": "Intermediate",
    "correct_letter": "D",
    "en": {
      "topic": "Operators",
      "question": "What is the output of the spread-dot operator expression in the following code?\n\ndef names = ['Groovy', 'Java', 'Kotlin']\nprintln names*.length()",
      "options": {
        "A": "16",
        "B": "6",
        "C": "A MissingMethodException",
        "D": "[6, 4, 6]"
      },
      "explanation": "The spread-dot operator (`*.`) invokes the specified method on each element of the collection and returns the aggregated results as a new List: [6, 4, 6]."
    },
    "vi": {
      "topic": "Toán tử",
      "question": "Đoạn mã sau sử dụng toán tử spread-dot (*.) sẽ in ra kết quả gì?\n\ndef names = ['Groovy', 'Java', 'Kotlin']\nprintln names*.length()",
      "options": {
        "A": "16",
        "B": "6",
        "C": "Ngoại lệ MissingMethodException",
        "D": "[6, 4, 6]"
      },
      "explanation": "Toán tử spread-dot (`*.`) gọi phương thức được chỉ định trên từng phần tử của collection và gom các kết quả trả về thành một List mới: [6, 4, 6]."
    },
    "th": {
      "topic": "ตัวดำเนินการ",
      "question": "ผลลัพธ์ของนิพจน์ตัวดำเนินการ spread-dot (*.) ในโค้ดต่อไปนี้คืออะไร?\n\ndef names = ['Groovy', 'Java', 'Kotlin']\nprintln names*.length()",
      "options": {
        "A": "16",
        "B": "6",
        "C": "เกิด MissingMethodException",
        "D": "[6, 4, 6]"
      },
      "explanation": "ตัวดำเนินการ spread-dot (`*.`) จะเรียกใช้เมธอดที่ระบุบนสมาชิกทุกตัวในคอลเลกชัน แล้วรวบรวมผลลัพธ์ส่งคืนเป็น List ใหม่: [6, 4, 6]"
    }
  },
  {
    "id": 22,
    "difficulty": "Intermediate",
    "correct_letter": "C",
    "en": {
      "topic": "Regular expressions",
      "question": "In Groovy regular expressions, what is the key difference between the `=~` operator and the `==~` operator?",
      "options": {
        "A": "=~ compiles a Pattern object, while ==~ executes a replacement",
        "B": "=~ performs case-sensitive matching, while ==~ performs case-insensitive matching",
        "C": "=~ returns a java.util.regex.Matcher (find operator), while ==~ returns a boolean indicating an exact whole-string match",
        "D": "=~ returns a boolean, while ==~ returns a Matcher"
      },
      "explanation": "`=~` is the regex find operator that creates and returns a `java.util.regex.Matcher`. `==~` is the exact match operator that verifies if the entire string matches the pattern and returns a `boolean`."
    },
    "vi": {
      "topic": "Biểu thức chính quy (Regular expressions)",
      "question": "Trong biểu thức chính quy của Groovy, sự khác biệt mấu chốt giữa toán tử `=~` và `==~` là gì?",
      "options": {
        "A": "=~ dùng để biên dịch đối tượng Pattern, còn ==~ dùng để thực hiện thay thế chuỗi.",
        "B": "=~ phân biệt chữ hoa chữ thường, còn ==~ không phân biệt chữ hoa chữ thường.",
        "C": "=~ trả về một java.util.regex.Matcher (toán tử tìm kiếm), còn ==~ trả về boolean biểu thị sự khớp chính xác toàn bộ chuỗi.",
        "D": "=~ trả về boolean, còn ==~ trả về Matcher."
      },
      "explanation": "`=~` là toán tử tìm kiếm regex trả về đối tượng `java.util.regex.Matcher`. Trong khi đó `==~` là toán tử so khớp chính xác toàn bộ chuỗi theo pattern và trả về kiểu `boolean`."
    },
    "th": {
      "topic": "เรกิวลาร์เอ็กซ์เพรสชัน (Regular expressions)",
      "question": "ในเรกิวลาร์เอ็กซ์เพรสชันของ Groovy ข้อแตกต่างสำคัญระหว่างตัวดำเนินการ `=~` และ `==~` คืออะไร?",
      "options": {
        "A": "=~ คอมไพล์ออบเจกต์ Pattern ส่วน ==~ ใช้แทนที่ข้อความ",
        "B": "=~ คำนึงถึงตัวพิมพ์เล็ก-ใหญ่ ส่วน ==~ ไม่คำนึงถึงตัวพิมพ์",
        "C": "=~ ส่งคืน java.util.regex.Matcher (find operator) ส่วน ==~ ส่งคืน boolean ยืนยันการตรงกันทั้งสตริงอย่างสมบูรณ์",
        "D": "=~ ส่งคืน boolean ส่วน ==~ ส่งคืน Matcher"
      },
      "explanation": "`=~` คือตัวดำเนินการค้นหา (find) ที่จะส่งคืนออบเจกต์ `java.util.regex.Matcher` ส่วน `==~` คือตัวดำเนินการเปรียบเทียบแบบตรงกันทั้งหมด (exact match) ที่จะส่งคืนค่าเป็น `boolean`"
    }
  },
  {
    "id": 23,
    "difficulty": "Intermediate",
    "correct_letter": "B",
    "en": {
      "topic": "Strings and GStrings",
      "question": "What is the output of the following Groovy code?\n\ndef version = '3.0'\ndef text = \"Current version: ${-> version}\"\nversion = '4.0'\nprintln text",
      "options": {
        "A": "Current version: 3.0",
        "B": "Current version: 4.0",
        "C": "Current version: null",
        "D": "A NullPointerException"
      },
      "explanation": "Passing a parameterless closure `${-> expression}` inside a GString defers evaluation lazily. The closure is evaluated each time the GString is transformed into a String, picking up the updated value '4.0'."
    },
    "vi": {
      "topic": "Chuỗi ký tự và GString",
      "question": "Đoạn mã Groovy sau đây sẽ in ra kết quả gì?\n\ndef version = '3.0'\ndef text = \"Current version: ${-> version}\"\nversion = '4.0'\nprintln text",
      "options": {
        "A": "Current version: 3.0",
        "B": "Current version: 4.0",
        "C": "Current version: null",
        "D": "Ngoại lệ NullPointerException"
      },
      "explanation": "Việc đặt một closure không tham số `${-> expression}` bên trong GString sẽ trì hoãn việc đánh giá (lazy evaluation). Mỗi khi GString được chuyển đổi thành String, closure mới được thực thi và lấy giá trị mới nhất là '4.0'."
    },
    "th": {
      "topic": "สตริงและ GString",
      "question": "โค้ด Groovy ต่อไปนี้จะแสดงผลลัพธ์เป็นอะไร?\n\ndef version = '3.0'\ndef text = \"Current version: ${-> version}\"\nversion = '4.0'\nprintln text",
      "options": {
        "A": "Current version: 3.0",
        "B": "Current version: 4.0",
        "C": "Current version: null",
        "D": "เกิด NullPointerException"
      },
      "explanation": "การใส่ closure แบบไม่มีพารามิเตอร์ `${-> expression}` ใน GString จะเป็นการประเมินค่าแบบ lazy โดยจะทำงานใหม่ทุกครั้งที่แปลง GString เป็น String ทำให้ได้ค่า '4.0' ล่าสุด"
    }
  },
  {
    "id": 24,
    "difficulty": "Intermediate",
    "correct_letter": "A",
    "en": {
      "topic": "Lists, Sets, and Maps",
      "question": "Given the list `def list = ['alpha', 'beta', 'gamma', 'delta']`, what does `list[-1]` evaluate to?",
      "options": {
        "A": "'delta'",
        "B": "'alpha'",
        "C": "null",
        "D": "An IndexOutOfBoundsException"
      },
      "explanation": "Groovy supports negative index subscripts on lists, where negative indices count backwards from the end of the collection. Index -1 refers to the last element ('delta')."
    },
    "vi": {
      "topic": "Danh sách, Tập hợp và Bản đồ",
      "question": "Cho danh sách `def list = ['alpha', 'beta', 'gamma', 'delta']`, biểu thức `list[-1]` trả về giá trị nào?",
      "options": {
        "A": "'delta'",
        "B": "'alpha'",
        "C": "null",
        "D": "Ngoại lệ IndexOutOfBoundsException"
      },
      "explanation": "Groovy hỗ trợ chỉ mục âm trên List để đếm ngược từ cuối danh sách. Chỉ mục `-1` biểu thị phần tử cuối cùng ('delta')."
    },
    "th": {
      "topic": "ลิสต์, เซต และแมป",
      "question": "กำหนดให้ `def list = ['alpha', 'beta', 'gamma', 'delta']` นิพจน์ `list[-1]` จะได้ผลลัพธ์เป็นค่าใด?",
      "options": {
        "A": "'delta'",
        "B": "'alpha'",
        "C": "null",
        "D": "เกิด IndexOutOfBoundsException"
      },
      "explanation": "Groovy รองรับการระบุ index เป็นค่าติดลบเพื่อเริ่มนับย้อนกลับจากท้ายสุดของ List โดย index `-1` คือสมาชิกตัวสุดท้าย ('delta')"
    }
  },
  {
    "id": 25,
    "difficulty": "Intermediate",
    "correct_letter": "B",
    "en": {
      "topic": "Methods and parameters",
      "question": "When defining a Groovy method that accepts named arguments such as `connect(host: 'localhost', port: 8080)`, how must the method be declared?",
      "options": {
        "A": "The method must be annotated with @NamedArguments",
        "B": "The method's first parameter must be of type java.util.Map",
        "C": "The method parameters must use varargs syntax (Object... args)",
        "D": "The method must accept an array of String key-value pairs"
      },
      "explanation": "Groovy automatically bundles all named arguments into a `Map` and passes it as the first argument to the method. Therefore, the method signature must declare a `Map` as its first parameter."
    },
    "vi": {
      "topic": "Phương thức và tham số",
      "question": "Khi định nghĩa một phương thức Groovy chấp nhận các tham số có tên (named arguments) như `connect(host: 'localhost', port: 8080)`, phương thức phải được khai báo như thế nào?",
      "options": {
        "A": "Phương thức phải được chú thích với @NamedArguments.",
        "B": "Tham số đầu tiên của phương thức phải có kiểu java.util.Map.",
        "C": "Các tham số của phương thức phải sử dụng cú pháp varargs (Object... args).",
        "D": "Phương thức phải nhận một mảng chứa các cặp chuỗi key-value."
      },
      "explanation": "Groovy tự động gom các named argument thành một `Map` và truyền vào vị trí tham số đầu tiên của phương thức. Do đó, tham số đầu tiên phải có kiểu `Map`."
    },
    "th": {
      "topic": "เมธอดและพารามิเตอร์",
      "question": "เมื่อนิยามเมธอดใน Groovy ที่รองรับ named arguments เช่น `connect(host: 'localhost', port: 8080)` ต้องประกาศเมธอดอย่างไร?",
      "options": {
        "A": "ต้องใส่แอนโนเทชัน @NamedArguments ที่เมธอด",
        "B": "พารามิเตอร์ตัวแรกของเมธอดต้องเป็นชนิด java.util.Map",
        "C": "พารามิเตอร์ต้องใช้ไวยากรณ์ varargs (Object... args)",
        "D": "เมธอดต้องรับอาร์เรย์ของคู่สตริง key-value"
      },
      "explanation": "Groovy จะรวบรวม named arguments ทั้งหมดใส่ไว้ใน `Map` และส่งเป็นอาร์กิวเมนต์ตัวแรกเสมอ เมธอดจึงต้องประกาศพารามิเตอร์ตัวแรกเป็นชนิด `Map`"
    }
  },
  {
    "id": 26,
    "difficulty": "Intermediate",
    "correct_letter": "C",
    "en": {
      "topic": "Classes and objects",
      "question": "Consider the following code:\n\nclass User {\n    String name\n    int age\n}\ndef u = new User(name: 'Charlie', age: 28)\n\nHow does Groovy initialize the `User` object?",
      "options": {
        "A": "It requires an explicitly defined constructor accepting a java.util.Map",
        "B": "It accesses and assigns the private fields directly, bypassing all setters",
        "C": "It invokes the default no-arg constructor and then calls setName('Charlie') and setAge(28)",
        "D": "It dynamically converts the User class into an Expando instance"
      },
      "explanation": "Unless an explicit constructor is defined, Groovy provides a map-based constructor that creates an instance via the no-arg constructor and then calls each matching property setter."
    },
    "vi": {
      "topic": "Lớp và đối tượng",
      "question": "Xem xét đoạn mã sau:\n\nclass User {\n    String name\n    int age\n}\ndef u = new User(name: 'Charlie', age: 28)\n\nGroovy khởi tạo đối tượng `User` như thế nào?",
      "options": {
        "A": "Bắt buộc phải có một constructor nhận java.util.Map được định nghĩa rõ ràng.",
        "B": "Nó truy cập và gán trực tiếp vào các private field, bỏ qua toàn bộ setter.",
        "C": "Nó gọi constructor không tham số mặc định rồi lần lượt gọi setName('Charlie') và setAge(28).",
        "D": "Nó chuyển đổi class User thành một đối tượng Expando một cách linh hoạt."
      },
      "explanation": "Nếu không có constructor tường minh, Groovy cung cấp một map constructor tự động gọi constructor mặc định và sau đó gọi các setter tương ứng của từng thuộc tính."
    },
    "th": {
      "topic": "คลาสและออบเจกต์",
      "question": "พิจารณาโค้ดต่อไปนี้:\n\nclass User {\n    String name\n    int age\n}\ndef u = new User(name: 'Charlie', age: 28)\n\nGroovy ทำการสร้างและกำหนดค่าให้ออบเจกต์ `User` อย่างไร?",
      "options": {
        "A": "ต้องมีการประกาศ constructor ที่รับ java.util.Map ไว้อย่างชัดเจน",
        "B": "เข้าถึงและกำหนดค่าให้ฟิลด์ private โดยตรงโดยไม่ผ่าน setter",
        "C": "เรียก constructor เริ่มต้นแบบไม่มีพารามิเตอร์ จากนั้นเรียก setName('Charlie') และ setAge(28)",
        "D": "แปลงคลาส User เป็นอินสแตนซ์ของ Expando แบบไดนามิก"
      },
      "explanation": "หากไม่มีการประกาศ constructor ไว้ Groovy จะเตรียม map constructor ให้โดยอัตโนมัติ ซึ่งจะสร้างออบเจกต์ผ่าน no-arg constructor แล้วเรียกใช้ setter ของแต่ละ property"
    }
  },
  {
    "id": 27,
    "difficulty": "Intermediate",
    "correct_letter": "A",
    "en": {
      "topic": "Traits",
      "question": "Which keyword is used in Groovy by a class to implement and compose behavior from one or more traits?",
      "options": {
        "A": "implements",
        "B": "extends",
        "C": "traits",
        "D": "mixin"
      },
      "explanation": "In Groovy, traits are declared with the `trait` keyword and implemented by classes using the standard `implements` keyword (e.g. `class Robot implements Flying, Speaking`)."
    },
    "vi": {
      "topic": "Traits",
      "question": "Từ khóa nào được sử dụng trong Groovy để một class có thể kế thừa và kết hợp hành vi từ một hoặc nhiều trait?",
      "options": {
        "A": "implements",
        "B": "extends",
        "C": "traits",
        "D": "mixin"
      },
      "explanation": "Trong Groovy, trait được khai báo bằng từ khóa `trait` và được một class tích hợp thông qua từ khóa quen thuộc `implements` (ví dụ: `class Robot implements Flying, Speaking`)."
    },
    "th": {
      "topic": "เทรต (Traits)",
      "question": "คีย์เวิร์ดใดที่ใช้ใน Groovy เพื่อให้คลาสสามารถนำพฤติกรรมจากหนึ่งหรือหลาย traits มาใช้งาน?",
      "options": {
        "A": "implements",
        "B": "extends",
        "C": "traits",
        "D": "mixin"
      },
      "explanation": "ใน Groovy จะประกาศ trait ด้วยคีย์เวิร์ด `trait` และให้คลาสนำไปใช้งานผ่านคีย์เวิร์ดมาตรฐาน `implements` (เช่น `class Robot implements Flying, Speaking`)"
    }
  },
  {
    "id": 28,
    "difficulty": "Intermediate",
    "correct_letter": "A",
    "en": {
      "topic": "Traits",
      "question": "What is printed by the following code when two implemented traits define the same default method?\n\ntrait TraitA { String greet() { \"Hello from A\" } }\ntrait TraitB { String greet() { \"Hello from B\" } }\nclass Greeting implements TraitA, TraitB {}\nprintln new Greeting().greet()",
      "options": {
        "A": "Hello from B",
        "B": "Hello from A",
        "C": "A compilation error due to duplicate method signatures",
        "D": "An AmbiguousMethodException at runtime"
      },
      "explanation": "In Groovy trait composition, if a class does not explicitly override a conflicting method, the last trait declared in the `implements` clause takes precedence. Here, TraitB comes after TraitA, so TraitB wins."
    },
    "vi": {
      "topic": "Traits",
      "question": "Đoạn mã sau sẽ in ra gì khi hai trait được implement có cùng định nghĩa một phương thức mặc định?\n\ntrait TraitA { String greet() { \"Hello from A\" } }\ntrait TraitB { String greet() { \"Hello from B\" } }\nclass Greeting implements TraitA, TraitB {}\nprintln new Greeting().greet()",
      "options": {
        "A": "Hello from B",
        "B": "Hello from A",
        "C": "Lỗi biên dịch do trùng lặp chữ ký phương thức",
        "D": "Ngoại lệ AmbiguousMethodException lúc chạy"
      },
      "explanation": "Trong quy tắc giải quyết xung đột trait của Groovy, nếu class không override phương thức bị trùng, trait được khai báo sau cùng trong mệnh đề `implements` sẽ được ưu tiên. Ở đây TraitB đứng sau TraitA nên TraitB thắng."
    },
    "th": {
      "topic": "เทรต (Traits)",
      "question": "โค้ดต่อไปนี้จะแสดงผลลัพธ์เป็นอะไรเมื่อสอง traits มีเมธอดเริ่มต้นที่ชื่อซ้ำกัน?\n\ntrait TraitA { String greet() { \"Hello from A\" } }\ntrait TraitB { String greet() { \"Hello from B\" } }\nclass Greeting implements TraitA, TraitB {}\nprintln new Greeting().greet()",
      "options": {
        "A": "Hello from B",
        "B": "Hello from A",
        "C": "เกิดข้อผิดพลาดในการคอมไพล์เนื่องจากชื่อเมธอดซ้ำกัน",
        "D": "เกิด AmbiguousMethodException ขณะรันไทม์"
      },
      "explanation": "การแก้ปัญหาข้อขัดแย้งของ trait ใน Groovy หากคลาสไม่ได้เขียนโอเวอร์ไรด์เอง trait ลำดับสุดท้ายในคำสั่ง `implements` จะได้รับความสำคัญสูงสุด TraitB จึงเป็นฝ่ายชนะ"
    }
  },
  {
    "id": 29,
    "difficulty": "Intermediate",
    "correct_letter": "C",
    "en": {
      "topic": "== versus is()",
      "question": "What is the idiomatic way in Groovy to test whether two object references `obj1` and `obj2` refer to the exact same instance in memory?",
      "options": {
        "A": "obj1 === obj2",
        "B": "obj1 == obj2",
        "C": "obj1.is(obj2)",
        "D": "obj1.identical(obj2)"
      },
      "explanation": "Since `==` is reserved for equality (calling equals() or compareTo()), Groovy provides the `is()` method on `Object` (via GDK) to verify reference identity (equivalent to Java's `==`)."
    },
    "vi": {
      "topic": "Toán tử == và is()",
      "question": "Cách chuẩn mực trong Groovy để kiểm tra xem hai biến tham chiếu `obj1` và `obj2` có cùng trỏ tới một vùng nhớ duy nhất hay không là gì?",
      "options": {
        "A": "obj1 === obj2",
        "B": "obj1 == obj2",
        "C": "obj1.is(obj2)",
        "D": "obj1.identical(obj2)"
      },
      "explanation": "Vì `==` trong Groovy dành cho việc so sánh giá trị equals()/compareTo(), Groovy cung cấp phương thức `is()` trên Object (qua GDK) để kiểm tra tính đồng nhất tham chiếu bộ nhớ (tương đương `==` của Java)."
    },
    "th": {
      "topic": "ตัวดำเนินการ == เปรียบเทียบกับ is()",
      "question": "วิธีที่เป็นสำนวนมาตรฐานใน Groovy ในการตรวจสอบว่าตัวแปรอ้างอิง `obj1` และ `obj2` ชี้ไปยังตำแหน่งหน่วยความจำเดียวกันหรือไม่คืออะไร?",
      "options": {
        "A": "obj1 === obj2",
        "B": "obj1 == obj2",
        "C": "obj1.is(obj2)",
        "D": "obj1.identical(obj2)"
      },
      "explanation": "เนื่องจาก `==` ใน Groovy ใช้สำหรับการเปรียบเทียบค่าความเท่ากัน (equals) Groovy จึงเตรียมเมธอด `is()` ไว้สำหรับตรวจสอบตำแหน่งอ้างอิงหน่วยความจำเดียวกัน (เหมือน `==` ใน Java)"
    }
  },
  {
    "id": 30,
    "difficulty": "Intermediate",
    "correct_letter": "C",
    "en": {
      "topic": "File handling",
      "question": "Why is `file.eachLine { line -> ... }` preferred over `file.text.split('\\n')` when processing large files in Groovy?",
      "options": {
        "A": "eachLine automatically parallelizes processing across all available CPU cores",
        "B": "eachLine skips invalid Unicode characters automatically",
        "C": "eachLine reads the file line by line using a buffered reader, preventing high memory consumption",
        "D": "file.text is deprecated in modern Groovy versions"
      },
      "explanation": "`file.text` loads the entire file contents into memory at once, which can easily trigger an OutOfMemoryError on large files. `file.eachLine` streams the file line by line through a BufferedReader and closes the stream automatically."
    },
    "vi": {
      "topic": "Xử lý tệp tin",
      "question": "Tại sao `file.eachLine { line -> ... }` được ưu tiên hơn `file.text.split('\\n')` khi xử lý các tệp tin có dung lượng lớn trong Groovy?",
      "options": {
        "A": "eachLine tự động phân luồng xử lý song song trên tất cả các nhân CPU.",
        "B": "eachLine tự động bỏ qua các ký tự Unicode không hợp lệ.",
        "C": "eachLine đọc tệp từng dòng một thông qua bộ đệm buffered reader, tránh gây tiêu tốn quá nhiều bộ nhớ.",
        "D": "file.text đã bị deprecated trong các phiên bản Groovy hiện đại."
      },
      "explanation": "`file.text` nạp toàn bộ nội dung tệp vào RAM cùng lúc, dễ dẫn đến lỗi OutOfMemoryError với tệp lớn. `file.eachLine` truyền phát dữ liệu từng dòng qua BufferedReader và tự động đóng luồng an toàn."
    },
    "th": {
      "topic": "การจัดการไฟล์",
      "question": "เหตุใด `file.eachLine { line -> ... }` จึงเหมาะสมกว่า `file.text.split('\\n')` เมื่อต้องประมวลผลไฟล์ขนาดใหญ่ใน Groovy?",
      "options": {
        "A": "eachLine ทำงานแบบขนานบนทุก CPU core ให้โดยอัตโนมัติ",
        "B": "eachLine ข้ามอักขระ Unicode ที่ไม่ถูกต้องโดยอัตโนมัติ",
        "C": "eachLine อ่านไฟล์ทีละบรรทัดผ่าน buffered reader ทำให้ไม่สิ้นเปลืองหน่วยความจำ",
        "D": "file.text ถูกยกเลิกการใช้งานแล้วใน Groovy ยุคปัจจุบัน"
      },
      "explanation": "`file.text` จะโหลดข้อมูลทั้งไฟล์ขึ้นหน่วยความจำในคราวเดียว ซึ่งเสี่ยงต่อการเกิด OutOfMemoryError ขณะที่ `file.eachLine` ใช้วิธีสตรีมข้อมูลทีละบรรทัดผ่าน BufferedReader"
    }
  },
  {
    "id": 31,
    "difficulty": "Intermediate",
    "correct_letter": "A",
    "en": {
      "topic": "Classes and objects",
      "question": "In Groovy, which AST transformation annotation is a shorthand that bundles `@ToString`, `@EqualsAndHashCode`, and `@TupleConstructor` together?",
      "options": {
        "A": "@Canonical",
        "B": "@Data",
        "C": "@Entity",
        "D": "@ValueObject"
      },
      "explanation": "The `@Canonical` AST transformation combines `@ToString`, `@EqualsAndHashCode`, and `@TupleConstructor`, generating standard boilerplate methods at compile time."
    },
    "vi": {
      "topic": "Lớp và đối tượng / AST",
      "question": "Trong Groovy, annotation biến đổi AST nào đóng vai trò viết tắt, kết hợp cả ba annotation `@ToString`, `@EqualsAndHashCode`, và `@TupleConstructor`?",
      "options": {
        "A": "@Canonical",
        "B": "@Data",
        "C": "@Entity",
        "D": "@ValueObject"
      },
      "explanation": "Annotation `@Canonical` kết hợp `@ToString`, `@EqualsAndHashCode`, và `@TupleConstructor`, giúp tự động sinh các phương thức cơ bản chuẩn mực lúc biên dịch."
    },
    "th": {
      "topic": "คลาสและออบเจกต์ / การแปลง AST",
      "question": "ใน Groovy แอนโนเทชัน AST Transformation ตัวใดที่เป็นการรวม `@ToString`, `@EqualsAndHashCode` และ `@TupleConstructor` เข้าไว้ด้วยกัน?",
      "options": {
        "A": "@Canonical",
        "B": "@Data",
        "C": "@Entity",
        "D": "@ValueObject"
      },
      "explanation": "`@Canonical` เป็นการแปลง AST ที่รวบรวม `@ToString`, `@EqualsAndHashCode` และ `@TupleConstructor` ช่วยสร้างเมธอดพื้นฐานที่จำเป็นในช่วงคอมไพล์อย่างครบถ้วน"
    }
  },
  {
    "id": 32,
    "difficulty": "Intermediate",
    "correct_letter": "C",
    "en": {
      "topic": "Closures",
      "question": "What does the following Groovy code output?\n\ndef multiply = { a, b -> a * b }\ndef doubleNum = multiply.curry(2)\nprintln doubleNum(8)",
      "options": {
        "A": "10",
        "B": "[2, 8]",
        "C": "16",
        "D": "A MissingMethodException"
      },
      "explanation": "The `curry()` method pre-binds one or more parameters from left to right. Pre-binding `a = 2` produces a new single-parameter closure: `2 * 8 = 16`."
    },
    "vi": {
      "topic": "Closures",
      "question": "Đoạn mã Groovy sau đây sẽ in ra kết quả gì?\n\ndef multiply = { a, b -> a * b }\ndef doubleNum = multiply.curry(2)\nprintln doubleNum(8)",
      "options": {
        "A": "10",
        "B": "[2, 8]",
        "C": "16",
        "D": "Ngoại lệ MissingMethodException"
      },
      "explanation": "Phương thức `curry()` gán cố định tham số đầu tiên `a = 2`, tạo ra một closure mới nhận tham số còn lại `b`. Do đó `2 * 8 = 16`."
    },
    "th": {
      "topic": "โคลเชอร์ (Closures)",
      "question": "โค้ด Groovy ต่อไปนี้จะให้ผลลัพธ์เป็นอะไร?\n\ndef multiply = { a, b -> a * b }\ndef doubleNum = multiply.curry(2)\nprintln doubleNum(8)",
      "options": {
        "A": "10",
        "B": "[2, 8]",
        "C": "16",
        "D": "เกิด MissingMethodException"
      },
      "explanation": "เมธอด `curry()` ทำการผูกค่าล่วงหน้าให้พารามิเตอร์ตัวแรก (`a = 2`) ส่งผลให้ได้ closure ใหม่ที่รอรับเฉพาะพารามิเตอร์ที่เหลือ: `2 * 8 = 16`"
    }
  },
  {
    "id": 33,
    "difficulty": "Intermediate",
    "correct_letter": "A",
    "en": {
      "topic": "Regular expressions",
      "question": "What is the primary syntactical benefit of using slashy strings (e.g. `/\\d{3}-\\w+/`) for regular expressions in Groovy?",
      "options": {
        "A": "Backslashes do not need to be escaped with double backslashes",
        "B": "They automatically pre-compile the pattern into bytecode at compile time",
        "C": "They make regex execution case-insensitive by default",
        "D": "They disallow multiline matching"
      },
      "explanation": "In slashy strings (`/.../`), backslashes do not serve as escape characters for string literals (except for escaping a forward slash `\\/`). This allows writing regex character classes like `\\d` and `\\w` directly without tedious `\\\\d` escaping."
    },
    "vi": {
      "topic": "Biểu thức chính quy",
      "question": "Lợi ích cú pháp lớn nhất của việc sử dụng chuỗi slashy (ví dụ `/\\d{3}-\\w+/`) cho regular expression trong Groovy là gì?",
      "options": {
        "A": "Dấu gạch chéo ngược không cần phải thoát bằng hai dấu (\\\\).",
        "B": "Chúng tự động được biên dịch trước thành bytecode lúc bắt đầu chương trình.",
        "C": "Chúng mặc định không phân biệt chữ hoa chữ thường.",
        "D": "Chúng không cho phép có khoảng trắng bên trong."
      },
      "explanation": "Trong chuỗi slashy (`/.../`), dấu gạch chéo ngược `\\` không đóng vai trò là ký tự thoát chuỗi, cho phép viết các lớp ký tự regex như `\\d` hay `\\w` trực tiếp mà không cần `\\\\d`."
    },
    "th": {
      "topic": "เรกิวลาร์เอ็กซ์เพรสชัน",
      "question": "ข้อดีทางไวยากรณ์ที่สำคัญที่สุดของการใช้ Slashy Strings (เช่น `/\\d{3}-\\w+/`) สำหรับ Regex ใน Groovy คืออะไร?",
      "options": {
        "A": "ไม่ต้อง escape เครื่องหมาย backslash ซ้ำซ้อนด้วยดับเบิลแบ็กสแลช (\\\\)",
        "B": "คอมไพล์แพทเทิร์นเป็นไบต์โค้ดล่วงหน้าอัตโนมัติตอนเริ่มโปรแกรม",
        "C": "ทำให้การค้นหาไม่สนใจตัวพิมพ์เล็ก-ใหญ่โดยอัตโนมัติ",
        "D": "ไม่อนุญาตให้มีช่องว่างในนิพจน์"
      },
      "explanation": "ใน Slashy String (`/.../`) เครื่องหมาย `\\` จะไม่ทำหน้าที่เป็น escape character สำหรับสตริง ทำให้เขียนคลาสอักขระ เช่น `\\d` และ `\\w` ได้โดยตรงโดยไม่ต้องใส่ `\\\\d`"
    }
  },
  {
    "id": 34,
    "difficulty": "Intermediate",
    "correct_letter": "A",
    "en": {
      "topic": "Dynamic typing and def",
      "question": "What is the primary effect of annotating a Groovy class or method with `@CompileStatic`?",
      "options": {
        "A": "The compiler performs static type checking and generates direct JVM bytecode without dynamic runtime call-site dispatch",
        "B": "It turns all non-static methods into static methods automatically",
        "C": "It prevents the class from being instantiated more than once",
        "D": "It makes all fields public and final"
      },
      "explanation": "`@CompileStatic` activates static compilation. The Groovy compiler validates types statically at compile time and emits direct standard JVM bytecode that bypasses the Groovy dynamic call site mechanisms, achieving Java-like execution performance."
    },
    "vi": {
      "topic": "Định kiểu động và biên dịch",
      "question": "Hiệu quả chính khi gắn chú thích `@CompileStatic` lên một class hoặc method trong Groovy là gì?",
      "options": {
        "A": "Trình biên dịch kiểm tra kiểu tĩnh lúc biên dịch và sinh ra bytecode JVM trực tiếp không qua cơ chế dynamic call-site.",
        "B": "Nó tự động biến tất cả các phương thức non-static thành static.",
        "C": "Nó ngăn không cho lớp này được khởi tạo quá một lần.",
        "D": "Nó biến tất cả các trường thành public và final."
      },
      "explanation": "`@CompileStatic` kích hoạt chế độ biên dịch tĩnh. Compiler xác thực kiểu dữ liệu lúc biên dịch và sinh ra mã bytecode JVM tiêu chuẩn tương tự Java, bỏ qua hạ tầng động (Call Sites) để đạt hiệu năng tối đa."
    },
    "th": {
      "topic": "การกำหนดชนิดข้อมูลแบบไดนามิกและการคอมไพล์",
      "question": "ผลลัพธ์หลักของการใส่แอนโนเทชัน `@CompileStatic` ให้กับคลาสหรือเมธอดใน Groovy คืออะไร?",
      "options": {
        "A": "คอมไพเลอร์จะตรวจสอบชนิดข้อมูลแบบคงที่และสร้างไบต์โค้ด JVM โดยตรงโดยไม่ผ่าน dynamic call-site",
        "B": "แปลงเมธอดทั้งหมดที่ไม่ใช่ static ให้เป็น static โดยอัตโนมัติ",
        "C": "ป้องกันไม่ให้คลาสถูกสร้างอินสแตนซ์มากกว่าหนึ่งครั้ง",
        "D": "กำหนดให้ทุกฟิลด์เป็น public และ final"
      },
      "explanation": "`@CompileStatic` จะเปิดใช้การคอมไพล์แบบ Static Type Checking และสร้างไบต์โค้ดมาตรฐานของ JVM โดยข้ามกลไก Dynamic Call Site ของ Groovy ส่งผลให้มีความเร็วเทียบเท่ากับ Java"
    }
  },
  {
    "id": 35,
    "difficulty": "Intermediate",
    "correct_letter": "B",
    "en": {
      "topic": "GROOVY scripts and compilation concepts",
      "question": "When Groovy compiles a script file that contains top-level statements without an explicit class declaration, what does it produce?",
      "options": {
        "A": "A static void main method inside an anonymous Java interface",
        "B": "A class extending groovy.lang.Script whose run() method contains the top-level statements",
        "C": "A YAML metadata configuration read by the Groovy engine at runtime",
        "D": "A raw bytecode sequence executed outside of any Java class definition"
      },
      "explanation": "Every Groovy script is compiled into a class extending `groovy.lang.Script`. The script statements outside explicit methods are compiled directly into the script's `run()` method."
    },
    "vi": {
      "topic": "Kịch bản GROOVY và khái niệm biên dịch",
      "question": "Khi Groovy biên dịch một file script chứa các câu lệnh độc lập mà không khai báo class tường minh, nó sẽ sinh ra cái gì?",
      "options": {
        "A": "Một phương thức static void main bên trong một interface Java ẩn danh.",
        "B": "Một class kế thừa từ groovy.lang.Script có phương thức run() chứa toàn bộ các câu lệnh của script.",
        "C": "Một cấu hình metadata YAML được đọc bởi engine Groovy khi chạy.",
        "D": "Một chuỗi bytecode thô thực thi bên ngoài bất kỳ định nghĩa lớp Java nào."
      },
      "explanation": "Mọi script Groovy đều được biên dịch thành một class kế thừa từ `groovy.lang.Script`. Các câu lệnh độc lập bên ngoài phương thức sẽ được đưa vào bên trong phương thức `run()` của class đó."
    },
    "th": {
      "topic": "สคริปต์ GROOVY และแนวคิดการคอมไพล์",
      "question": "เมื่อ Groovy คอมไพล์ไฟล์สคริปต์ที่มีคำสั่งระดับบนสุดโดยไม่มีการประกาศคลาส สิ่งใดจะถูกสร้างขึ้น?",
      "options": {
        "A": "เมธอด static void main ภายใน Java interface แบบไม่ระบุชื่อ",
        "B": "คลาสที่สืบทอดจาก groovy.lang.Script ซึ่งมีเมธอด run() บรรจุคำสั่งระดับบนสุดเหล่านั้นไว้",
        "C": "ไฟล์การกำหนดค่าแบบ YAML ที่อ่านโดย Groovy engine ขณะทำงาน",
        "D": "ชุดไบต์โค้ดดิบที่ทำงานนอกโครงสร้างคลาสของ Java"
      },
      "explanation": "ทุกสคริปต์ใน Groovy จะถูกแปลงเป็นคลาสที่สืบทอดมาจาก `groovy.lang.Script` โดยคำสั่งทั้งหมดที่อยู่นอกเมธอดจะถูกนำไปบรรจุไว้ในเมธอด `run()`"
    }
  },
  {
    "id": 36,
    "difficulty": "Advanced",
    "correct_letter": "B",
    "en": {
      "topic": "Closures",
      "question": "What is the output of the following Groovy code?\n\nclass Config {\n    String level = \"DEBUG\"\n}\nclass Runner {\n    String level = \"INFO\"\n    def show() {\n        def cfg = new Config()\n        def cl = { level }\n        cl.delegate = cfg\n        cl.resolveStrategy = Closure.DELEGATE_FIRST\n        return cl()\n    }\n}\nprintln new Runner().show()",
      "options": {
        "A": "INFO",
        "B": "DEBUG",
        "C": "null",
        "D": "A MissingPropertyException"
      },
      "explanation": "By default, closures use `OWNER_FIRST` resolution strategy. When setting `resolveStrategy = Closure.DELEGATE_FIRST`, Groovy checks the closure's `delegate` object (`cfg`) before checking the enclosing `owner` (`Runner`). Since `cfg` contains `level = \"DEBUG\"`, it returns \"DEBUG\"."
    },
    "vi": {
      "topic": "Closures",
      "question": "Đoạn mã Groovy sau đây sẽ in ra kết quả gì?\n\nclass Config {\n    String level = \"DEBUG\"\n}\nclass Runner {\n    String level = \"INFO\"\n    def show() {\n        def cfg = new Config()\n        def cl = { level }\n        cl.delegate = cfg\n        cl.resolveStrategy = Closure.DELEGATE_FIRST\n        return cl()\n    }\n}\nprintln new Runner().show()",
      "options": {
        "A": "INFO",
        "B": "DEBUG",
        "C": "null",
        "D": "Ngoại lệ MissingPropertyException"
      },
      "explanation": "Mặc định closure giải quyết thuộc tính theo chiến lược `OWNER_FIRST`. Khi đặt `resolveStrategy = Closure.DELEGATE_FIRST`, Groovy sẽ tìm thuộc tính `level` trên đối tượng `delegate` (`cfg`) trước, do đó trả về \"DEBUG\"."
    },
    "th": {
      "topic": "โคลเชอร์ (Closures)",
      "question": "โค้ด Groovy ต่อไปนี้จะให้ผลลัพธ์เป็นอะไร?\n\nclass Config {\n    String level = \"DEBUG\"\n}\nclass Runner {\n    String level = \"INFO\"\n    def show() {\n        def cfg = new Config()\n        def cl = { level }\n        cl.delegate = cfg\n        cl.resolveStrategy = Closure.DELEGATE_FIRST\n        return cl()\n    }\n}\nprintln new Runner().show()",
      "options": {
        "A": "INFO",
        "B": "DEBUG",
        "C": "null",
        "D": "เกิด MissingPropertyException"
      },
      "explanation": "โดยปกติ closure จะใช้กลยุทธ์ `OWNER_FIRST` แต่เมื่อกำหนดเป็น `Closure.DELEGATE_FIRST` Groovy จะค้นหาพร็อพเพอร์ตี้ใน `delegate` (`cfg`) ก่อน จึงได้ค่า \"DEBUG\""
    }
  },
  {
    "id": 37,
    "difficulty": "Advanced",
    "correct_letter": "D",
    "en": {
      "topic": "Closures",
      "question": "In a nested closure hierarchy in Groovy, what is the precise distinction between `thisObject` and `owner`?",
      "options": {
        "A": "thisObject refers to the delegate, while owner refers to the caller thread",
        "B": "thisObject changes dynamically at runtime, while owner is strictly static",
        "C": "owner is only defined if the closure is executed inside a static method",
        "D": "thisObject always refers to the enclosing top-level Class instance, while owner refers to the direct enclosing object or Closure"
      },
      "explanation": "In Groovy closures, `thisObject` always refers to the enclosing class where the closure was declared. In contrast, `owner` refers to the direct enclosing context—if a closure is nested inside another closure, `owner` is that outer closure."
    },
    "vi": {
      "topic": "Closures",
      "question": "Trong hệ thống closure lồng nhau trong Groovy, sự khác biệt chính xác giữa `thisObject` và `owner` là gì?",
      "options": {
        "A": "thisObject trỏ tới delegate, còn owner trỏ tới thread gọi hàm.",
        "B": "thisObject thay đổi động trong lúc chạy, còn owner luôn cố định.",
        "C": "owner chỉ được định nghĩa nếu closure nằm trong một static method.",
        "D": "thisObject luôn trỏ tới đối tượng Class bọc ngoài cùng, trong khi owner trỏ tới đối tượng hoặc Closure bọc trực tiếp."
      },
      "explanation": "Trong Groovy: `thisObject` luôn là thể hiện của lớp nơi closure được định nghĩa. Còn `owner` là ngữ cảnh bao quanh trực tiếp—nếu một closure nằm trong một closure khác, `owner` chính là closure bao ngoài đó."
    },
    "th": {
      "topic": "โคลเชอร์ (Closures)",
      "question": "ในโครงสร้าง Closure แบบซ้อนกันใน Groovy ข้อแตกต่างที่ชัดเจนระหว่าง `thisObject` และ `owner` คืออะไร?",
      "options": {
        "A": "thisObject ชี้ไปยัง delegate ขณะที่ owner ชี้ไปยัง thread ผู้เรียก",
        "B": "thisObject เปลี่ยนแปลงแบบไดนามิกขณะทำงาน ขณะที่ owner มีค่าคงที่",
        "C": "owner จะถูกกำหนดค่าก็ต่อเมื่อ closure อยู่ในสแตติกเมธอดเท่านั้น",
        "D": "thisObject จะชี้ไปยังอินสแตนซ์ของคลาสนอกสุดเสมอ ส่วน owner จะชี้ไปยังออบเจกต์หรือ Closure ที่ห่อหุ้มอยู่โดยตรง"
      },
      "explanation": "`thisObject` จะอ้างอิงถึงคลาสที่นิยาม closure เสมอ ส่วน `owner` จะหมายถึงบริบทที่ครอบอยู่โดยตรง ซึ่งหากเป็น closure ซ้อนกัน `owner` จะเป็น closure ชั้นนอก"
    }
  },
  {
    "id": 38,
    "difficulty": "Advanced",
    "correct_letter": "C",
    "en": {
      "topic": "Closures",
      "question": "What is the technical purpose of invoking `trampoline()` on a recursive Groovy closure?",
      "options": {
        "A": "It distributes recursive iterations across a ForkJoinPool",
        "B": "It guarantees that recursive steps run inside an isolated database transaction",
        "C": "It executes tail-recursive calls iteratively to prevent StackOverflowError",
        "D": "It logs the execution time of each recursive invocation"
      },
      "explanation": "Groovy's `trampoline()` wraps a tail-recursive closure so that each recursive call returns an instance of `TrampolineClosure` rather than adding a new stack frame. The trampoline loop executes iterations iteratively, preventing `StackOverflowError` regardless of recursion depth."
    },
    "vi": {
      "topic": "Closures",
      "question": "Mục đích kỹ thuật của việc gọi phương thức `trampoline()` trên một closure đệ quy trong Groovy là gì?",
      "options": {
        "A": "Nó phân bổ các bước đệ quy chạy trên một ForkJoinPool.",
        "B": "Nó đảm bảo các bước đệ quy diễn ra trong một transaction cơ sở dữ liệu riêng biệt.",
        "C": "Nó thực thi các lời gọi đệ quy đuôi (tail-recursive) dưới dạng vòng lặp lặp đi lặp lại để ngăn chặn lỗi StackOverflowError.",
        "D": "Nó ghi nhật ký thời gian chạy của từng lần gọi đệ quy."
      },
      "explanation": "Phương thức `trampoline()` bọc closure đệ quy đuôi để mỗi bước trả về một `TrampolineClosure` thay vì tạo thêm stack frame mới, biến đệ quy thành vòng lặp và loại trừ triệt để StackOverflowError."
    },
    "th": {
      "topic": "โคลเชอร์ (Closures)",
      "question": "จุดประสงค์ทางเทคนิคของการเรียกใช้ `trampoline()` บน Recursive Closure ใน Groovy คืออะไร?",
      "options": {
        "A": "กระจายการคำนวณแบบ recursive ไปยัง ForkJoinPool",
        "B": "รับประกันว่าการเรียกซ้ำจะทำงานใน database transaction เดียวกัน",
        "C": "แปลงการเรียกซ้ำแบบ tail-recursive ให้ทำงานเป็นลูปเพื่อป้องกัน StackOverflowError",
        "D": "บันทึกเวลาการทำงานของการเรียกซ้ำแต่ละรอบ"
      },
      "explanation": "`trampoline()` จะแปลง tail-recursive closure ให้ประมวลผลแบบวนลูปในเบื้องหลัง โดยส่งคืนอินสแตนซ์ TrampolineClosure แทนการสร้าง stack frame ใหม่ จึงป้องกัน StackOverflowError ได้อย่างสมบูรณ์"
    }
  },
  {
    "id": 39,
    "difficulty": "Advanced",
    "correct_letter": "D",
    "en": {
      "topic": "Closures",
      "question": "What is the effect of calling `.memoize()` on a Groovy closure?",
      "options": {
        "A": "It permanently serializes the closure to disk storage",
        "B": "It enforces thread confinement, allowing only one thread to invoke it",
        "C": "It restricts the closure's execution time using a watchdog timer",
        "D": "It wraps the closure with an internal cache that returns cached results for previously seen arguments"
      },
      "explanation": "The `memoize()` method returns an LRU-cached version of the closure. If the closure is called again with the same arguments, the cached result is returned without re-executing the closure body."
    },
    "vi": {
      "topic": "Closures",
      "question": "Tác dụng của việc gọi `.memoize()` trên một closure trong Groovy là gì?",
      "options": {
        "A": "Nó tuần tự hóa closure vĩnh viễn vào bộ nhớ ổ đĩa.",
        "B": "Nó giới hạn closure chỉ được phép chạy trên một luồng duy nhất.",
        "C": "Nó giới hạn thời gian thực thi của closure bằng một watchdog timer.",
        "D": "Nó bọc closure bằng một bộ đệm nội bộ để trả về ngay kết quả đã lưu bộ nhớ đệm cho các tham số đã từng gọi trước đó."
      },
      "explanation": "Phương thức `memoize()` tạo ra một bộ nhớ đệm (cache) cho closure. Nếu closure được gọi lại với cùng tham số, kết quả đã lưu trong cache sẽ được trả về ngay mà không cần tính toán lại."
    },
    "th": {
      "topic": "โคลเชอร์ (Closures)",
      "question": "ผลของการเรียกใช้ `.memoize()` บน Groovy Closure คืออะไร?",
      "options": {
        "A": "ทำการ Serialize closure เก็บลงดิสก์อย่างถาวร",
        "B": "จำกัดให้ closure ทำงานได้บน Thread เดียวเท่านั้น",
        "C": "จำกัดเวลาการทำงานของ closure ด้วย watchdog timer",
        "D": "ครอบ closure ด้วยหน่วยความจำแคชเพื่อส่งคืนผลลัพธ์เดิมสำหรับอาร์กิวเมนต์ที่เคยประมวลผลแล้วทันที"
      },
      "explanation": "`memoize()` จะสร้างแคชเก็บผลลัพธ์ตามค่าอาร์กิวเมนต์ หากมีการเรียกใช้ด้วยอาร์กิวเมนต์เดิมอีก จะดึงผลลัพธ์จากแคชมาตอบทันทีโดยไม่ต้องคำนวณซ้ำ"
    }
  },
  {
    "id": 40,
    "difficulty": "Advanced",
    "correct_letter": "B",
    "en": {
      "topic": "Traits",
      "question": "If a class `Device` implements traits `Alpha` and `Beta`, both defining a method `reset()`, how can `Device` explicitly invoke `Alpha`'s implementation of `reset()`?",
      "options": {
        "A": "super.Alpha.reset()",
        "B": "Alpha.super.reset()",
        "C": "Alpha::reset(this)",
        "D": "((Alpha) this).reset()"
      },
      "explanation": "To resolve ambiguities and explicitly invoke a specific trait's super method in Groovy, the syntax `TraitName.super.methodName()` is used."
    },
    "vi": {
      "topic": "Traits",
      "question": "Nếu một class `Device` triển khai hai trait `Alpha` và `Beta`, cả hai cùng định nghĩa phương thức `reset()`, làm thế nào để `Device` gọi đích danh cài đặt `reset()` của `Alpha`?",
      "options": {
        "A": "super.Alpha.reset()",
        "B": "Alpha.super.reset()",
        "C": "Alpha::reset(this)",
        "D": "((Alpha) this).reset()"
      },
      "explanation": "Để giải quyết xung đột và gọi đích danh phương thức từ một trait cụ thể, Groovy quy định cú pháp `TraitName.super.methodName()`."
    },
    "th": {
      "topic": "เทรต (Traits)",
      "question": "หากคลาส `Device` อิมพลีเมนต์ traits `Alpha` และ `Beta` ซึ่งทั้งคู่มีเมธอด `reset()` คลาส `Device` จะเรียกใช้เมธอด `reset()` ของ `Alpha` โดยเฉพาะได้อย่างไร?",
      "options": {
        "A": "super.Alpha.reset()",
        "B": "Alpha.super.reset()",
        "C": "Alpha::reset(this)",
        "D": "((Alpha) this).reset()"
      },
      "explanation": "เพื่อระบุเจาะจงเมธอดของ trait ที่ต้องการเรียกใช้และแก้ปัญหาความกำกวม Groovy กำหนดให้ใช้ไวยากรณ์ `TraitName.super.methodName()`"
    }
  },
  {
    "id": 41,
    "difficulty": "Advanced",
    "correct_letter": "B",
    "en": {
      "topic": "Traits",
      "question": "How can an individual object instance `service` be dynamically decorated with a trait `Auditable` at runtime in Groovy?",
      "options": {
        "A": "service.addTrait(Auditable)",
        "B": "def auditableService = service.as(Auditable)",
        "C": "service.mixin(Auditable)",
        "D": "Traits can only be implemented statically in the class header, never at runtime"
      },
      "explanation": "Groovy allows dynamic trait composition at runtime using the `as` operator (e.g. `service.as(Auditable)`) or `service.withTraits(Auditable)`, which creates an adapter/proxy implementing the trait on the existing instance."
    },
    "vi": {
      "topic": "Traits",
      "question": "Làm thế nào để một thể hiện đối tượng `service` hiện có được bổ sung động các hành vi của trait `Auditable` ngay lúc chạy (runtime) trong Groovy?",
      "options": {
        "A": "service.addTrait(Auditable)",
        "B": "def auditableService = service.as(Auditable)",
        "C": "service.mixin(Auditable)",
        "D": "Traits chỉ có thể được triển khai tĩnh ở phần khai báo class, không thể áp dụng động lúc chạy."
      },
      "explanation": "Groovy hỗ trợ kết hợp trait động lúc chạy bằng toán tử ép kiểu `as` (ví dụ `service.as(Auditable)`) hoặc phương thức `service.withTraits(Auditable)`."
    },
    "th": {
      "topic": "เทรต (Traits)",
      "question": "ออบเจกต์ `service` ที่มีอยู่แล้วจะถูกเพิ่มพฤติกรรมจาก trait `Auditable` แบบไดนามิกขณะรันไทม์ใน Groovy ได้อย่างไร?",
      "options": {
        "A": "service.addTrait(Auditable)",
        "B": "def auditableService = service.as(Auditable)",
        "C": "service.mixin(Auditable)",
        "D": "Traits สามารถประกาศแบบ static บนหัวคลาสได้เท่านั้น ไม่สามารถเพิ่มขณะรันไทม์ได้"
      },
      "explanation": "Groovy สนับสนุนการประกอบ trait แบบไดนามิกขณะรันไทม์โดยใช้ตัวดำเนินการ `as` (เช่น `service.as(Auditable)`) หรือใช้ `service.withTraits(Auditable)`"
    }
  },
  {
    "id": 42,
    "difficulty": "Advanced",
    "correct_letter": "C",
    "en": {
      "topic": "Groovy-specific features and idioms",
      "question": "In Groovy's Meta-Object Protocol (MOP), which method can be defined on a class to intercept invocations of undefined methods?",
      "options": {
        "A": "def invokeUndefined(String name, Object args)",
        "B": "def onMissingMethod(String name, Object args)",
        "C": "def methodMissing(String name, Object args)",
        "D": "def noMethodFound(String name, Object args)"
      },
      "explanation": "When an undeclared method is called on a Groovy object, the runtime checks for `methodMissing(String name, Object args)`. If implemented, Groovy routes the call to this method instead of throwing a MissingMethodException."
    },
    "vi": {
      "topic": "Tính năng và thành ngữ Groovy (MOP)",
      "question": "Trong giao thức Meta-Object Protocol (MOP) của Groovy, phương thức móc nối (hook) nào có thể được định nghĩa trên một class để đánh chặn các lời gọi phương thức chưa từng được khai báo?",
      "options": {
        "A": "def invokeUndefined(String name, Object args)",
        "B": "def onMissingMethod(String name, Object args)",
        "C": "def methodMissing(String name, Object args)",
        "D": "def noMethodFound(String name, Object args)"
      },
      "explanation": "Khi một phương thức không tồn tại được gọi trên một đối tượng Groovy, runtime sẽ kiểm tra xem class có định nghĩa `methodMissing(String name, Object args)` hay không trước khi ném MissingMethodException."
    },
    "th": {
      "topic": "สำนวนและคุณสมบัติเฉพาะของ Groovy (MOP)",
      "question": "ในระบบ Meta-Object Protocol (MOP) ของ Groovy เมธอด hook ใดที่สามารถประกาศไว้ในคลาสเพื่อดักจับการเรียกใช้เมธอดที่ไม่ได้ถูกนิยามไว้?",
      "options": {
        "A": "def invokeUndefined(String name, Object args)",
        "B": "def onMissingMethod(String name, Object args)",
        "C": "def methodMissing(String name, Object args)",
        "D": "def noMethodFound(String name, Object args)"
      },
      "explanation": "เมื่อมีการเรียกเมธอดที่ไม่ได้ประกาศไว้ Groovy runtime จะเรียกใช้งาน `methodMissing(String name, Object args)` หากคลาสนั้นมีเมธอดนี้อยู่ แทนที่จะเกิดข้อผิดพลาด MissingMethodException"
    }
  },
  {
    "id": 43,
    "difficulty": "Advanced",
    "correct_letter": "C",
    "en": {
      "topic": "Groovy-specific features and idioms",
      "question": "What is the output of the following Groovy code utilizing ExpandoMetaClass?\n\nString.metaClass.swapCase = { ->\n    delegate.collect { ch ->\n        ch == ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()\n    }.join('')\n}\nprintln \"Groovy\".swapCase()",
      "options": {
        "A": "GROOVY",
        "B": "groovy",
        "C": "gROOVY",
        "D": "A MissingMethodException because String is final"
      },
      "explanation": "Groovy's ExpandoMetaClass allows modifying or adding methods to any class at runtime, including final JDK classes like `java.lang.String`. The added closure swaps each character's casing, resulting in 'gROOVY'."
    },
    "vi": {
      "topic": "Tính năng và thành ngữ Groovy (MOP)",
      "question": "Kết quả của đoạn mã Groovy sau sử dụng ExpandoMetaClass là gì?\n\nString.metaClass.swapCase = { ->\n    delegate.collect { ch ->\n        ch == ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()\n    }.join('')\n}\nprintln \"Groovy\".swapCase()",
      "options": {
        "A": "GROOVY",
        "B": "groovy",
        "C": "gROOVY",
        "D": "Ngoại lệ MissingMethodException vì String là lớp final"
      },
      "explanation": "ExpandoMetaClass của Groovy cho phép thêm hoặc sửa đổi phương thức của bất kỳ lớp nào lúc chạy, kể cả các lớp final của JDK như `java.lang.String`. Đoạn mã đảo ngược chữ hoa/thường thành 'gROOVY'."
    },
    "th": {
      "topic": "สำนวนและคุณสมบัติเฉพาะของ Groovy (MOP)",
      "question": "ผลลัพธ์ของโค้ด Groovy ต่อไปนี้ที่ใช้งาน ExpandoMetaClass คืออะไร?\n\nString.metaClass.swapCase = { ->\n    delegate.collect { ch ->\n        ch == ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()\n    }.join('')\n}\nprintln \"Groovy\".swapCase()",
      "options": {
        "A": "GROOVY",
        "B": "groovy",
        "C": "gROOVY",
        "D": "เกิด MissingMethodException เนื่องจาก String เป็นคลาส final"
      },
      "explanation": "ExpandoMetaClass ใน Groovy ช่วยให้สามารถเพิ่มเมธอดใหม่ให้กับคลาสใดก็ได้ขณะรันไทม์ แม้กระทั่งคลาสที่เป็น final ของ JDK อย่าง `java.lang.String` โค้ดนี้จะสลับตัวพิมพ์เล็ก-ใหญ่ได้ 'gROOVY'"
    }
  },
  {
    "id": 44,
    "difficulty": "Advanced",
    "correct_letter": "A",
    "en": {
      "topic": "Operators",
      "question": "Consider the following Groovy code:\n\nclass Account {\n    private int balance = 100\n    int getBalance() {\n        return this.balance * 2\n    }\n}\ndef acc = new Account()\nprintln acc.@balance\n\nWhat is printed to the console?",
      "options": {
        "A": "100",
        "B": "200",
        "C": "0",
        "D": "An IllegalAccessException because balance is private"
      },
      "explanation": "Standard property access `acc.balance` invokes the getter `getBalance()` (returning 200). The direct field access operator `.@` (`acc.@balance`) bypasses the getter and accesses the field directly, returning 100."
    },
    "vi": {
      "topic": "Toán tử",
      "question": "Xem xét đoạn mã Groovy sau:\n\nclass Account {\n    private int balance = 100\n    int getBalance() {\n        return this.balance * 2\n    }\n}\ndef acc = new Account()\nprintln acc.@balance\n\nGiá trị nào sẽ được in ra console?",
      "options": {
        "A": "100",
        "B": "200",
        "C": "0",
        "D": "Ngoại lệ IllegalAccessException vì balance là private"
      },
      "explanation": "Cú pháp `acc.balance` thông thường sẽ gọi getter `getBalance()` (trả về 200). Tuy nhiên, toán tử truy cập trường trực tiếp `.@` (`acc.@balance`) sẽ bỏ qua getter và đọc thẳng giá trị của field, trả về 100."
    },
    "th": {
      "topic": "ตัวดำเนินการ",
      "question": "พิจารณาโค้ด Groovy ต่อไปนี้:\n\nclass Account {\n    private int balance = 100\n    int getBalance() {\n        return this.balance * 2\n    }\n}\ndef acc = new Account()\nprintln acc.@balance\n\nค่าใดจะถูกแสดงผลบนคอนโซล?",
      "options": {
        "A": "100",
        "B": "200",
        "C": "0",
        "D": "เกิด IllegalAccessException เนื่องจาก balance เป็น private"
      },
      "explanation": "การเรียก `acc.balance` จะผ่านเมธอด `getBalance()` (ได้ 200) แต่ตัวดำเนินการเข้าถึงฟิลด์โดยตรง `.@` (`acc.@balance`) จะข้าม getter และอ่านค่าฟิลด์โดยตรง จึงได้ค่า 100"
    }
  },
  {
    "id": 45,
    "difficulty": "Advanced",
    "correct_letter": "C",
    "en": {
      "topic": "Inheritance and interfaces",
      "question": "What happens when the following Groovy code is executed?\n\ninterface TaskHandler {\n    void execute()\n    void cancel()\n}\nTaskHandler th = [execute: { println \"Executing\" }] as TaskHandler\nth.execute()\nth.cancel()",
      "options": {
        "A": "Both methods execute without error; cancel() does nothing silently",
        "B": "A compilation error occurs because the map does not implement all interface methods",
        "C": "\"Executing\" is printed, followed by a java.lang.UnsupportedOperationException when calling cancel()",
        "D": "\"Executing\" is printed, and cancel() returns null without error"
      },
      "explanation": "In Groovy, a Map can be coerced to an interface using `as`. Implemented methods execute their matching closure. If an unmapped method on the interface is invoked, Groovy throws `java.lang.UnsupportedOperationException`."
    },
    "vi": {
      "topic": "Kế thừa và giao diện (Interfaces)",
      "question": "Điều gì sẽ xảy ra khi thực thi đoạn mã Groovy sau đây?\n\ninterface TaskHandler {\n    void execute()\n    void cancel()\n}\nTaskHandler th = [execute: { println \"Executing\" }] as TaskHandler\nth.execute()\nth.cancel()",
      "options": {
        "A": "Cả hai phương thức đều thực thi không lỗi; cancel() không làm gì cả.",
        "B": "Lỗi biên dịch vì Map không hiện thực đầy đủ các phương thức của interface.",
        "C": "\"Executing\" được in ra, tiếp theo là ngoại lệ java.lang.UnsupportedOperationException khi gọi cancel().",
        "D": "\"Executing\" được in ra, và cancel() trả về null mà không có lỗi."
      },
      "explanation": "Trong Groovy, một Map có thể được ép kiểu thành Interface bằng toán tử `as`. Khi gọi một phương thức trong interface mà không được định nghĩa trong Map, Groovy sẽ ném `java.lang.UnsupportedOperationException`."
    },
    "th": {
      "topic": "การสืบทอดและอินเทอร์เฟซ (Interfaces)",
      "question": "จะเกิดอะไรขึ้นเมื่อโค้ด Groovy ต่อไปนี้ทำงาน?\n\ninterface TaskHandler {\n    void execute()\n    void cancel()\n}\nTaskHandler th = [execute: { println \"Executing\" }] as TaskHandler\nth.execute()\nth.cancel()",
      "options": {
        "A": "ทั้งสองเมธอดทำงานได้ปกติโดยไม่มีข้อผิดพลาด เมธอด cancel() จะไม่ทำอะไร",
        "B": "เกิดข้อผิดพลาดในการคอมไพล์เนื่องจาก Map ไม่ได้ระบุเมธอดของอินเทอร์เฟซให้ครบ",
        "C": "แสดงข้อความ \"Executing\" แล้วเกิด java.lang.UnsupportedOperationException เมื่อเรียก cancel()",
        "D": "แสดงข้อความ \"Executing\" และ cancel() คืนค่า null โดยไม่เกิดข้อผิดพลาด"
      },
      "explanation": "ใน Groovy สามารถแปลง Map เป็น Interface ด้วยคำสั่ง `as` ได้ หากมีการเรียกใช้เมธอดที่ไม่มีอยู่ใน Map ตัว Groovy จะโยนข้อผิดพลาด `java.lang.UnsupportedOperationException` ออกมา"
    }
  },
  {
    "id": 46,
    "difficulty": "Advanced",
    "correct_letter": "D",
    "en": {
      "topic": "Groovy collections and common methods",
      "question": "What is the return type and structure of executing `groupBy` with multiple criteria closures?\n\ndef words = ['cat', 'car', 'dog', 'dove']\ndef result = words.groupBy({ it[0] }, { it.length() })",
      "options": {
        "A": "A flat Map with compound keys: Map<String, List<String>>",
        "B": "A List of Map entries",
        "C": "A compilation error because groupBy accepts only a single closure",
        "D": "A nested Map: Map<String, Map<Integer, List<String>>>"
      },
      "explanation": "In Groovy, `groupBy` accepts varargs closures. When multiple closures are passed, it generates a hierarchical nested Map where each level corresponds to each criterion closure."
    },
    "vi": {
      "topic": "Groovy collections và các phương thức phổ biến",
      "question": "Kiểu dữ liệu trả về và cấu trúc khi thực thi `groupBy` với nhiều closure tiêu chí là gì?\n\ndef words = ['cat', 'car', 'dog', 'dove']\ndef result = words.groupBy({ it[0] }, { it.length() })",
      "options": {
        "A": "Một Map phẳng với key kết hợp: Map<String, List<String>>",
        "B": "Một danh sách chứa các entry của Map: List<Map.Entry>",
        "C": "Lỗi biên dịch vì groupBy chỉ nhận duy nhất một closure",
        "D": "Một Map lồng nhau phân cấp: Map<String, Map<Integer, List<String>>>"
      },
      "explanation": "Trong Groovy, `groupBy` chấp nhận nhiều closure. Khi truyền nhiều tiêu chí, nó sẽ tạo ra một cấu trúc Map phân cấp lồng nhau tương ứng với từng cấp phân nhóm."
    },
    "th": {
      "topic": "คอลเลกชันใน Groovy และเมธอดที่ใช้บ่อย",
      "question": "ชนิดข้อมูลและโครงสร้างที่ส่งคืนจากการใช้ `groupBy` พร้อมกันหลายเงื่อนไขคืออะไร?\n\ndef words = ['cat', 'car', 'dog', 'dove']\ndef result = words.groupBy({ it[0] }, { it.length() })",
      "options": {
        "A": "Map แบบชั้นเดียวที่มี key รวมกัน: Map<String, List<String>>",
        "B": "List ที่เก็บข้อมูล Map entries",
        "C": "เกิดข้อผิดพลาดในการคอมไพล์เนื่องจาก groupBy รับได้เพียง closure เดียว",
        "D": "Map ซ้อนกันหลายชั้น: Map<String, Map<Integer, List<String>>>"
      },
      "explanation": "ใน Groovy `groupBy` รองรับพารามิเตอร์แบบ varargs ของ closure หากส่งหลายเงื่อนไขจะสร้างโครงสร้าง Map ซ้อนกันเป็นลำดับขั้นตามเงื่อนไขที่กำหนด"
    }
  },
  {
    "id": 47,
    "difficulty": "Advanced",
    "correct_letter": "B",
    "en": {
      "topic": "Groovy-specific features and idioms",
      "question": "During which compilation phase of the Groovy compiler does semantic type resolution and local AST transformations (such as `@TypeChecked`) typically execute?",
      "options": {
        "A": "PARSING",
        "B": "SEMANTIC_ANALYSIS",
        "C": "INITIALIZATION",
        "D": "CLASS_GENERATION"
      },
      "explanation": "The Groovy compiler passes through 9 phases: INITIALIZATION, PARSING, CONVERSION, SEMANTIC_ANALYSIS, CANONICALIZATION, INSTRUCTION_SELECTION, CLASS_GENERATION, OUTPUT, and FINALIZATION. Semantic type checking and early AST transformations occur during SEMANTIC_ANALYSIS."
    },
    "vi": {
      "topic": "Tính năng và thành ngữ Groovy (AST)",
      "question": "Trong giai đoạn biên dịch nào của trình biên dịch Groovy, việc kiểm tra kiểu ngữ nghĩa và các biến đổi AST cục bộ (như `@TypeChecked`) thường diễn ra?",
      "options": {
        "A": "PARSING",
        "B": "SEMANTIC_ANALYSIS",
        "C": "INITIALIZATION",
        "D": "CLASS_GENERATION"
      },
      "explanation": "Trình biên dịch Groovy trải qua 9 giai đoạn. Giai đoạn phân tích ngữ nghĩa `SEMANTIC_ANALYSIS` là nơi các kiểm tra kiểu và hầu hết các AST transformation cục bộ được áp dụng."
    },
    "th": {
      "topic": "สำนวนและคุณสมบัติเฉพาะของ Groovy (AST)",
      "question": "ในขั้นตอนการคอมไพล์ช่วงใดของ Groovy Compiler ที่การตรวจสอบชนิดข้อมูลและการแปลง AST ท้องถิ่น (เช่น `@TypeChecked`) จะเริ่มทำงาน?",
      "options": {
        "A": "PARSING",
        "B": "SEMANTIC_ANALYSIS",
        "C": "INITIALIZATION",
        "D": "CLASS_GENERATION"
      },
      "explanation": "Groovy Compiler มีขั้นตอนการทำงาน 9 เฟส โดยการตรวจสอบประเภทข้อมูลและความถูกต้องเชิงความหมาย รวมถึง Local AST Transformations จะทำงานในเฟส `SEMANTIC_ANALYSIS`"
    }
  },
  {
    "id": 48,
    "difficulty": "Advanced",
    "correct_letter": "B",
    "en": {
      "topic": "GROOVY scripts and compilation concepts",
      "question": "What is the output when executing the following Groovy script?\n\ndef localVal = 'apple'\nboundVal = 'orange'\n\nvoid printVariables() {\n    try {\n        println boundVal\n        println localVal\n    } catch (MissingPropertyException e) {\n        println 'Error: Missing property'\n    }\n}\nprintVariables()",
      "options": {
        "A": "orange followed by apple",
        "B": "orange followed by Error: Missing property",
        "C": "Error: Missing property followed by Error: Missing property",
        "D": "apple followed by orange"
      },
      "explanation": "Variables declared without `def` or a type in a script (like `boundVal`) are stored in the script's `Binding`, making them accessible to standalone script methods. Variables declared with `def` (like `localVal`) are local variables inside the generated `run()` method and are not in the Binding, causing a MissingPropertyException when accessed inside `printVariables()`."
    },
    "vi": {
      "topic": "Kịch bản GROOVY và khái niệm biên dịch",
      "question": "Đoạn script Groovy sau sẽ in ra gì khi thực thi?\n\ndef localVal = 'apple'\nboundVal = 'orange'\n\nvoid printVariables() {\n    try {\n        println boundVal\n        println localVal\n    } catch (MissingPropertyException e) {\n        println 'Error: Missing property'\n    }\n}\nprintVariables()",
      "options": {
        "A": "orange tiếp theo là apple",
        "B": "orange tiếp theo là Error: Missing property",
        "C": "Error: Missing property tiếp theo là Error: Missing property",
        "D": "apple tiếp theo là orange"
      },
      "explanation": "Các biến khai báo không có `def` hay kiểu cụ thể trong script sẽ được lưu vào `Binding` của script, giúp các method độc lập có thể truy cập được. Biến có `def` là biến cục bộ trong `run()` nên hàm ngoài không thấy được, gây ra MissingPropertyException."
    },
    "th": {
      "topic": "สคริปต์ GROOVY และแนวคิดการคอมไพล์",
      "question": "ผลลัพธ์เมื่อรันสคริปต์ Groovy ต่อไปนี้คืออะไร?\n\ndef localVal = 'apple'\nboundVal = 'orange'\n\nvoid printVariables() {\n    try {\n        println boundVal\n        println localVal\n    } catch (MissingPropertyException e) {\n        println 'Error: Missing property'\n    }\n}\nprintVariables()",
      "options": {
        "A": "orange ตามด้วย apple",
        "B": "orange ตามด้วย Error: Missing property",
        "C": "Error: Missing property ตามด้วย Error: Missing property",
        "D": "apple ตามด้วย orange"
      },
      "explanation": "ตัวแปรที่ประกาศโดยไม่ใส่ `def` หรือชนิดข้อมูลในสคริปต์จะถูกเก็บใน `Binding` ทำให้เมธอดอื่นเข้าถึงได้ ส่วนตัวแปรที่ใช้ `def` จะเป็น local variable ในเมธอด run() เท่านั้น จึงเกิด MissingPropertyException ใน printVariables()"
    }
  },
  {
    "id": 49,
    "difficulty": "Advanced",
    "correct_letter": "D",
    "en": {
      "topic": "GROOVY scripts and compilation concepts",
      "question": "How can external parameters be safely injected into a script executed dynamically via `groovy.lang.GroovyShell`?",
      "options": {
        "A": "By setting JVM system properties via System.setProperty()",
        "B": "By setting environment variables in the host operating system process",
        "C": "GroovyShell does not support parameter injection; scripts must be dynamically concatenated",
        "D": "By constructing a groovy.lang.Binding with variables and passing it to the GroovyShell constructor or evaluate method"
      },
      "explanation": "`GroovyShell` accepts a `groovy.lang.Binding` object holding a Map of variables. Any variable in the Binding is directly accessible by name within the evaluated script."
    },
    "vi": {
      "topic": "Kịch bản GROOVY và khái niệm biên dịch",
      "question": "Làm thế nào để truyền an toàn các tham số/biến vào một script được thực thi động qua `groovy.lang.GroovyShell`?",
      "options": {
        "A": "Thiết lập các thuộc tính hệ thống JVM thông qua System.setProperty()",
        "B": "Thiết lập các biến môi trường trong tiến trình hệ điều hành",
        "C": "GroovyShell không hỗ trợ truyền tham số; code script phải được cộng chuỗi thủ công",
        "D": "Khởi tạo đối tượng groovy.lang.Binding chứa các biến và truyền vào constructor hoặc phương thức evaluate của GroovyShell"
      },
      "explanation": "`GroovyShell` chấp nhận một đối tượng `groovy.lang.Binding` chứa Map các biến. Bất kỳ biến nào trong Binding đều có thể được script truy cập trực tiếp bằng tên biến."
    },
    "th": {
      "topic": "สคริปต์ GROOVY และแนวคิดการคอมไพล์",
      "question": "การส่งพารามิเตอร์ภายนอกเข้าไปในสคริปต์ที่รันผ่าน `groovy.lang.GroovyShell` อย่างปลอดภัยทำได้อย่างไร?",
      "options": {
        "A": "กำหนดค่าผ่าน JVM system properties ด้วย System.setProperty()",
        "B": "กำหนดค่า Environment Variables ในระดับระบบปฏิบัติการ",
        "C": "GroovyShell ไม่รองรับการส่งตัวแปร ต้องใช้วิธีต่อสตริงสคริปต์เอง",
        "D": "สร้างออบเจกต์ groovy.lang.Binding ที่เก็บตัวแปรแล้วส่งให้ constructor หรือเมธอด evaluate ของ GroovyShell"
      },
      "explanation": "`GroovyShell` สามารถรับออบเจกต์ `groovy.lang.Binding` ได้ ซึ่งตัวแปรที่ผูกไว้ใน Binding จะสามารถเรียกใช้ได้โดยตรงในสคริปต์"
    }
  },
  {
    "id": 50,
    "difficulty": "Advanced",
    "correct_letter": "A",
    "en": {
      "topic": "Dynamic typing and def",
      "question": "What is the key technical difference between `@TypeChecked` and `@CompileStatic` in Groovy?",
      "options": {
        "A": "@TypeChecked validates types at compile time while retaining dynamic call-site bytecode, whereas @CompileStatic generates direct, non-dynamic JVM bytecode",
        "B": "@TypeChecked checks types at runtime, whereas @CompileStatic checks types at compile time",
        "C": "@CompileStatic permits runtime metaprogramming, while @TypeChecked forbids it",
        "D": "@TypeChecked can only be applied to classes, while @CompileStatic can only be applied to methods"
      },
      "explanation": "Both `@TypeChecked` and `@CompileStatic` perform compile-time type verification. However, `@TypeChecked` leaves the standard dynamic Groovy runtime dispatch (MOP/Call Sites) intact, whereas `@CompileStatic` generates direct bytecode identical to compiled Java code, bypassing the dynamic runtime for maximum performance."
    },
    "vi": {
      "topic": "Định kiểu động và từ khóa def",
      "question": "Sự khác biệt kỹ thuật then chốt giữa `@TypeChecked` và `@CompileStatic` trong Groovy là gì?",
      "options": {
        "A": "@TypeChecked kiểm tra kiểu lúc biên dịch nhưng vẫn giữ lại cơ chế gọi động (dynamic call-site) lúc chạy, trong khi @CompileStatic sinh ra bytecode JVM trực tiếp hoàn toàn tĩnh.",
        "B": "@TypeChecked kiểm tra kiểu lúc chạy, còn @CompileStatic kiểm tra kiểu lúc biên dịch.",
        "C": "@CompileStatic cho phép lập trình metaprogramming lúc chạy, còn @TypeChecked cấm hoàn toàn.",
        "D": "@TypeChecked chỉ áp dụng cho class, còn @CompileStatic chỉ áp dụng cho method."
      },
      "explanation": "Cả hai đều thực hiện kiểm tra kiểu tĩnh lúc biên dịch. Tuy nhiên, `@TypeChecked` vẫn giữ nguyên cơ chế gọi hàm động (MOP/Call Sites) của Groovy, trong khi `@CompileStatic` sinh ra bytecode trực tiếp tương tự mã Java đã biên dịch, mang lại tốc độ thực thi tối đa."
    },
    "th": {
      "topic": "การกำหนดชนิดข้อมูลแบบไดนามิกและคีย์เวิร์ด def",
      "question": "ความแตกต่างสำคัญทางเทคนิคระหว่าง `@TypeChecked` และ `@CompileStatic` ใน Groovy คืออะไร?",
      "options": {
        "A": "@TypeChecked ตรวจสอบชนิดข้อมูลตอนคอมไพล์แต่ยังคงสร้าง dynamic call-site สำหรับรันไทม์ ขณะที่ @CompileStatic จะสร้างไบต์โค้ด JVM แบบตรงไปตรงมา",
        "B": "@TypeChecked ตรวจสอบตอนรันไทม์ ขณะที่ @CompileStatic ตรวจสอบตอนคอมไพล์",
        "C": "@CompileStatic อนุญาตให้ทำ metaprogramming ขณะรันไทม์ได้ ส่วน @TypeChecked ห้ามเด็ดขาด",
        "D": "@TypeChecked ใช้ได้เฉพาะกับคลาส ส่วน @CompileStatic ใช้ได้เฉพาะกับเมธอด"
      },
      "explanation": "ทั้งสองแอนโนเทชันทำหน้าที่ตรวจสอบ Type ตอนคอมไพล์เหมือนกัน แต่ `@TypeChecked` ยังคงเก็บระบบ Dynamic Runtime (MOP) เอาไว้ ขณะที่ `@CompileStatic` จะตัดส่วน dynamic ออกและสร้างไบต์โค้ดเทียบเท่าภาษา Java 100%"
    }
  }
];
