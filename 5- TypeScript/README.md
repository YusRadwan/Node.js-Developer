## Course TypeScript
    
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
