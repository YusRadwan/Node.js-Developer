MVC Desgin Pattern

/Create Restful App
  ├── /controllers        # المنطق الأساسي للمسارات
  │   └── StudentsControllerDB.js
  ├── /data               # إعدادات (زي الاتصال بقاعدة البيانات)
  │   └── Students.js
  ├── /middleware         # الميدل وير المخصص
  │   └── AuthMWValidator.js
  │   └── Logging.js
  │   └── StudentValidMiddelware.js
  │   └── UserMWValidator.js
  │   └── valid-Number.js
  ├── /models             # نماذج قاعدة البيانات (زي MongoDB schemas)
  │   └── StudentsModel.js
  │   └── UserModelDB.js
  ├── /node_modules       # المكتبات المثبتة بـ npm
  │   └── ....
  ├── /public             # الملفات الثابتة (صور، CSS، JS)
  │   └── /image
  │       └── img1.jpg
  │   └── /js
  │       └── script.js
  │   └── /style
  │       └── style.css
  │   └── home.html
  ├── /routes              # تعريف المسارات (جزء من الـ Controller)
  │   └── auth.js
  │   └── Students.js
  │   └── Users.js
  ├── /templates           # الـ View=templates (اختياري لو بتستخدم Templating Engine)
  │   └── footer.ejs
  │   └── header.ejs
  │   └── students.ejs
  ├── /util               # التحقق
  │   └── AuthValid.js
  │   └── StudentsValid.js
  │   └── UsersValid.js
  ├── app.js              # نقطة البداية
  ├── main.html           # الصفحه الرئيسيه
  ├── package.json        # إعدادات المشروع وتبعياته
  ├── ReadMe.text         # خريطه توضيحيه للمشروع
  ├── welcome.html        # صفحة ترحيب