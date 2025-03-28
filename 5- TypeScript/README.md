## Course TypeScript
    --> https://www.typescriptlang.org/docs/
    
    # Data Types 
        - Type Alias -> تعرّف نوع جديد باسم معين 
            type ID = String | number;
            name: ID = "BlaBla";
            age: ID = 45;

            type manyType = {
                name: string,
                age: number,
                isActive: Boolean
            } 
            function pri (writeHere: manyType) {
                console.log(`I ${writeHere.name} my age is ${writeHere: age}, my acount is ${writeHere.isActive});
                }

=================================================
        - literal types -> هي أنواع بتحدد قيمة محددة بالظبط
            types: String Literal Types, Number Literal Types, Boolean Literal Types
            ازاي تستخدم Literal Types: مع Union Types, Type Alias, في الدوال, مع الكائنات

            type nums = 0 | 1 | -1;
            function hello (n1: number, n2: number ): nums {
                if (num1 == num2)
                    return 1;
                else if (comtrolae)
                    return 0;
                else 
                    return -1;
            } 
            hello(4, 8)

=================================================
        - Tuple -> نوع خاص من المصفوفات بطول ثابت وأنواع محددة لكل عنصر
            let article: readonly [string, number, boolean];
                article = ["bla bla", 45, true];

=================================================
        - void ->  هو نوع بيانات بيُستخدم عشان يشير إلى إن دالة مش بترجع أي قيمة
               -> الاستخدام الأساسي: في تعريف الدوال اللي شغلتها تنفيذ أمر بدون إرجاع نتيجة.
            void -> الدالة بتخلّص عادي بس مابترجعش حاجة
            never -> الدالة مش بتخلّص أبدًا (مثل رمي خطأ أو حلقة لا نهائية)

=================================================
        - enum -> هو زي قايمة محددة من الخيارات اللي ممكن تختار منها، وكل خيار ليه اسم ورقم (أو قيمة) مرتبطين بيه
            types -> Numeric Enums, String Enums, Heterogeneous Enums
            uses -> المتغيرات, الدوال, الكائنات
            compare: enum & Literal types
                enum: بيعمل كائن في JavaScript ويربط الأسماء بقيم (غالبًا أرقام)
                literal: مجرد تحديد قيم بدون كائن في JavaScript
            enum color { TypeScript بيحط أرقام تلقائيًا (تبدأ من 0) لو ما حددتش قيم
                red,
                green,
                blue
            }

=================================================
        - type Assertion -> بيُستخدم لما تكون متأكد من النوع بناءً على السياق، بس TypeScript مش شايفه.
            ازاي تعمل:  as, <نوع>
                const image = getElementById("my-img") as HTMLImageElement;
                const image = <HTMLImageElement> getElementById("my-img");

=================================================
        - union type -> هو نوع بيسمح لمتغير أو قيمة إنه يكون واحد من أكتر من نوع محدد
            use: | بتكتب الأنواع اللي عايزها مفصولة بـ

=================================================
        - intersection -> & هو نوع بيسمح لك "تدمج" أكتر من نوع في نوع واحد باستخدام علامة

=================================================
    # Interface Declaration -> بتساعدك تضمن إن البيانات اللي جاية من تتطابق مع الشكل المتوقع
        - Method, Paramater, Reopen, Extend, 
        - interface User {
            id: number,
            name: user
        }

=================================================
    # Class
        - Class type Annotitions -> هو عبارة عن إضافة تعليمات للأنواع داخل الكلاس
        - Class Access Modifiers -> هي كلمات مفتاحية بتستخدمها عشان تتحكم مين اللي يقدر يوصل للخصائص أو الدوال جوا الكلاس
            - Types Access Modifiers in Typescript: 
                - public -> يقدر أي حد يوصلها (من برا الكلاس أو جواه)
                - private -> محدش يقدر يوصلها إلا من جوا الكلاس بس
                - protected -> يقدر يوصلها الكلاس نفسه والكلاسات اللي بتورث منه
        - Class Getters and Setters Accessors -> هما خاصيتين في الكلاسات بتستخدمهم عشان تتحكم في ازاي تقرأ أو تعدل قيم الخصائص جوا الكلاس
            - Get -> دالة بترجع قيمة الخاصية، وبتظهر كأنها خاصية عادية (مش دالة) لما تستخدمها
            - Set -> دالة بتحدد ازاي تعدل قيمة الخاصية، وبتنفذ لما تحاول تساوي الخاصية بقيمة جديدة
        - Class Static Members -> بتكون مشتركة بين كل الكائنات ومرتبطة بالكلاس نفسه
        - Class Implements Interface ->  بتعرف الشكل أو الهيكل اللي لازم الكلاس يتبعه، والكلاس هو اللي بينفذ التفاصيل Interface

=================================================
    # Abstract 
        - Class -> هو نوع خاص من الكلاسات ما تقدرش تعمل منه كائنات الهدف منه إنه يكون زي "قالب" أو "مخطط" لكلاسات تانية تورث منه
            - use: write abstract before name class 
        - Member -> هما الدوال أو الخصائص اللي بتعرفها في الـ Abstract Class من غير ما تعطيها تنفيذ (Implementation).

=================================================
    # Polymorphism -> اللي بتتعامل معاه Object معناه إنك تقدر تستخدم نفس الاسم أو الدالة لعمل حاجات مختلفة بناءً على الكائن OOP هو مفهوم في البرمجة الكائنية

=================================================
    # Method Override -> هو جزء من التعددية، ومعناه إنك تعيد تعريف دالة موجودة في الكلاس الأب في الكلاس الابن عشان تعمل حاجة مختلفة
        - يعني بتاخد نفس اسم الدالة وبتغير التنفيذ بتاعها

=================================================
    # Generics -> هو ميزة بتخليك تكتب كود مرن ويعيد استخدامه مع أنواع بيانات مختلفة، من غير ما تفقد الأمان اللي بيجي مع تحديد الأنواع
        - use: كرمز للنوع <T> بتستخدم عادةً حرف زي
           لو عندك نوعين <T, U> مثل Generic تقدر تستخدم أكتر من
        
=================================================
